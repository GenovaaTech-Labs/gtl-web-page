"use client";

import { useState, useTransition, type FormEvent } from "react";
import { sendEnquiry } from "@/app/contact/actions";
import {
  COURSES,
  ENQUIRY_TYPES,
  type EnquiryField,
  type EnquiryResult,
  type EnquiryType,
} from "@/lib/enquiry";

const inputClass =
  "w-full rounded-xl border border-gray-700 bg-[#0B1120] px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/30 aria-[invalid=true]:border-red-500";

const labelClass = "mb-2 block text-sm font-medium text-gray-300";

export default function EnquiryForm({ initialType }: { initialType: EnquiryType }) {
  const [type, setType] = useState<EnquiryType>(initialType);
  const [result, setResult] = useState<EnquiryResult | null>(null);
  const [pending, startTransition] = useTransition();

  const errors = result?.status === "error" ? (result.fieldErrors ?? {}) : {};

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Handle submission manually so the form is NOT auto-reset on validation errors.
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    startTransition(async () => {
      try {
        setResult(await sendEnquiry(data));
      } catch {
        setResult({
          status: "error",
          message: "Network error – please check your connection and try again.",
        });
      }
    });
  }

  if (result?.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-[#00BFFF] bg-[#111827] p-10 text-center">
        <p className="text-5xl">✅</p>
        <h2 className="mt-4 text-2xl font-bold">Thank you!</h2>
        <p className="mt-3 text-gray-400">
          We&apos;ve received your {ENQUIRY_TYPES[type].toLowerCase()} and will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-8 rounded-xl border border-[#00BFFF] px-6 py-3 transition hover:bg-[#00BFFF] hover:text-black"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const fieldProps = (name: EnquiryField) => ({
    id: name,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const errorText = (name: EnquiryField) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-2 text-sm text-red-400">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-6 rounded-2xl border border-gray-800 bg-[#111827] p-6 text-left md:p-10"
    >
      {/* Honeypot for spam bots – hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="type" className={labelClass}>
          I&apos;m interested in *
        </label>
        <select
          {...fieldProps("type")}
          value={type}
          onChange={(e) => setType(e.target.value as EnquiryType)}
          className={inputClass}
        >
          {Object.entries(ENQUIRY_TYPES).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errorText("type")}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name *
          </label>
          <input {...fieldProps("name")} required maxLength={100} autoComplete="name" className={inputClass} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={inputClass}
          />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            maxLength={20}
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
          />
          {errorText("phone")}
        </div>
        <div>
          <label htmlFor="organization" className={labelClass}>
            {type === "training" ? "College / Institution" : "Company / Organization"}
          </label>
          <input {...fieldProps("organization")} maxLength={150} autoComplete="organization" className={inputClass} />
          {errorText("organization")}
        </div>
      </div>

      {type === "training" && (
        <div>
          <label htmlFor="course" className={labelClass}>
            Program *
          </label>
          <select {...fieldProps("course")} required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a program
            </option>
            {COURSES.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errorText("course")}
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelClass}>
          {type === "training"
            ? "Anything you'd like us to know? (optional)"
            : type === "project"
              ? "Describe your project *"
              : "Message *"}
        </label>
        <textarea
          {...fieldProps("message")}
          rows={6}
          required={type !== "training"}
          minLength={type !== "training" ? 10 : undefined}
          maxLength={3000}
          placeholder={
            type === "project"
              ? "What should it do? Hardware/platform, timeline, budget…"
              : type === "training"
                ? "Preferred batch timings, experience level…"
                : "How can we help?"
          }
          className={inputClass}
        />
        {errorText("message")}
      </div>

      {result?.status === "error" && (
        <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {result.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-[#00BFFF] px-8 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60 disabled:hover:scale-100"
      >
        {pending ? "Sending…" : type === "training" ? "Register Now" : "Send Enquiry"}
      </button>
    </form>
  );
}
