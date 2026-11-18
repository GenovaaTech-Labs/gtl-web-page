"use server";

import nodemailer from "nodemailer";
import {
  CONTACT_EMAIL,
  COURSES,
  ENQUIRY_TYPES,
  isEnquiryType,
  type EnquiryField,
  type EnquiryResult,
} from "@/lib/enquiry";

const MAX = { name: 100, email: 200, phone: 20, organization: 150, message: 3000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,19}$/;

const SEND_FAILED = `Sorry, we couldn't send your message right now. Please email us at ${CONTACT_EMAIL}.`;

/** Read a form value as a trimmed string. */
function read(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/** Collapse newlines/whitespace so single-line values can't break email headers. */
function oneLine(value: string): string {
  return value.replace(/\s+/g, " ");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEnquiry(form: FormData): Promise<EnquiryResult> {
  // Honeypot: real visitors never see or fill this field. Pretend success for bots.
  if (read(form, "website")) return { status: "success" };

  const type = read(form, "type");
  const name = oneLine(read(form, "name"));
  const email = oneLine(read(form, "email"));
  const phone = oneLine(read(form, "phone"));
  const organization = oneLine(read(form, "organization"));
  const course = read(form, "course");
  const message = read(form, "message");

  const errors: Partial<Record<EnquiryField, string>> = {};

  if (!isEnquiryType(type)) errors.type = "Please choose an enquiry type.";
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > MAX.name) errors.name = "Name is too long.";
  if (!EMAIL_RE.test(email) || email.length > MAX.email)
    errors.email = "Please enter a valid email address.";
  if (phone && !PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (organization.length > MAX.organization) errors.organization = "This is too long.";
  if (type === "training" && !(COURSES as readonly string[]).includes(course))
    errors.course = "Please choose a program.";
  if (type !== "training" && message.length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";
  if (message.length > MAX.message)
    errors.message = `Please keep your message under ${MAX.message} characters.`;

  if (Object.keys(errors).length > 0 || !isEnquiryType(type)) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors: errors };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Enquiry email not sent: SMTP_HOST, SMTP_USER and SMTP_PASS must be set.");
    return { status: "error", message: SEND_FAILED };
  }

  const label = ENQUIRY_TYPES[type];
  const rows: [string, string][] = [
    ["Enquiry type", label],
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    [type === "training" ? "College / Institution" : "Company / Organization", organization || "—"],
    ...(type === "training" ? [["Program", course] as [string, string]] : []),
    ["Message", message || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <h2 style="font-family:Arial,sans-serif">New ${escapeHtml(label)} from the website</h2>
    <table cellpadding="8" style="font-family:Arial,sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd;font-weight:bold;vertical-align:top">${escapeHtml(k)}</td>` +
            `<td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>`;

  const port = Number(SMTP_PORT) || 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: { name: "GenovaaTech Labs Website", address: MAIL_FROM || SMTP_USER },
      to: CONTACT_TO || CONTACT_EMAIL,
      replyTo: { name, address: email },
      subject: `[${label}] ${name}${type === "training" ? ` – ${course}` : ""}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Enquiry email failed:", error);
    return { status: "error", message: SEND_FAILED };
  }

  return { status: "success" };
}
