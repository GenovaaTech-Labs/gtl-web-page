import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EnquiryForm from "@/components/EnquiryForm";
import { CONTACT_EMAIL, isEnquiryType } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Contact & Enquiries | GenovaaTech Labs",
  description:
    "Request a custom Embedded / IoT / Edge AI project, register for a training program, or get in touch with GenovaaTech Labs.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const { type } = await searchParams;
  const initialType = isEnquiryType(type) ? type : "general";

  return (
    <main className="relative min-h-screen bg-[#0B1120] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(90deg,#00BFFF22_1px,transparent_1px),linear-gradient(#00BFFF22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Navbar />

      <section className="relative px-6 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Let&apos;s Build Something Together</h1>
            <p className="mt-4 text-lg text-gray-400">
              Tell us about your project or the program you&apos;d like to join, and we&apos;ll get back to
              you shortly.
            </p>
          </div>

          <EnquiryForm initialType={initialType} />

          <p className="mt-10 text-center text-gray-400">
            Prefer email? Write to us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#00BFFF] hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
