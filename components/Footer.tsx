import Image from "next/image";
import { Mail } from "lucide-react";
import { TRAINING } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/enquiry";
import { ADDRESS, NAV_LINKS, PHONE, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";

const SOCIAL_LABELS: Record<keyof typeof SOCIAL_LINKS, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
};

const linkClass = "hover:text-[#00BFFF] transition";

export default function Footer() {
  const socials = (Object.keys(SOCIAL_LINKS) as (keyof typeof SOCIAL_LINKS)[]).filter(
    (key) => SOCIAL_LINKS[key],
  );

  return (
    <footer className="border-t border-gray-800 bg-[#0B1120] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={48} height={40} className="h-10 w-auto" />
            <span className="text-lg font-bold text-white">{SITE_NAME}</span>
          </div>
          <p className="mt-4 text-sm leading-6">
            Embedded Systems • IoT • Edge AI. Engineering solutions, industry projects and
            hands-on training.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Programs</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {TRAINING.filter((program) => program.kind === "course").slice(0, 6).map((program) => (
              <li key={program.title}>
                <a href="#training" className={linkClass}>
                  {program.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} inline-flex items-center gap-2 break-all`}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>
            {PHONE && (
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={linkClass}>
                  {PHONE}
                </a>
              </li>
            )}
            {ADDRESS && <li className="leading-6">{ADDRESS}</li>}
          </ul>

          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3 text-sm">
              {socials.map((key) => (
                <li key={key}>
                  <a
                    href={SOCIAL_LINKS[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-gray-700 px-3 py-1 hover:border-[#00BFFF] hover:text-[#00BFFF] transition"
                  >
                    {SOCIAL_LABELS[key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
