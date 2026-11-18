import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import ParticlesBG from "@/components/ParticlesBG";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionHeader from "@/components/SectionHeader";
import { badge, card, iconBox, outlineButton, primaryButton, section } from "@/components/ui";
import { PROCESS, SERVICES, STATS, TECH_STACK, TRAINING, WHY_US } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/enquiry";
import { FORMS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const COURSES = TRAINING.filter((program) => program.kind === "course");
const STUDENT_PROJECTS = TRAINING.filter((program) => program.kind === "project");

/** Stagger cards within a row only, so later rows don't wait to appear. */
const stagger = (index: number, perRow: number) => (index % perRow) * 0.08;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: CONTACT_EMAIL,
  description: SITE_DESCRIPTION,
  knowsAbout: ["Embedded Systems", "IoT", "Edge AI", "RTOS", "FPGA", "Embedded Linux"],
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0B1120] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Faint circuit grid behind the whole page */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(90deg,#00BFFF22_1px,transparent_1px),linear-gradient(#00BFFF22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Navbar />

      {/* ───────────── HERO ───────────── */}
      <section id="top" className="relative isolate px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <ParticlesBG className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] max-w-full -translate-x-1/2 rounded-full bg-[#00BFFF]/15 blur-[150px] lg:left-3/4" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="text-center lg:text-left">
            <p className={badge}>Embedded Systems • IoT • Edge AI • RTOS • FPGA</p>

            <Reveal
              as="h1"
              immediate
              y={-30}
              className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              Powering Embedded <span className="text-[#00BFFF]">Intelligence</span>
            </Reveal>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400 lg:mx-0">
              We design and build embedded, IoT and Edge AI products for startups and businesses —
              and train engineers through hands-on, industry-oriented programs.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="#services" className={primaryButton}>
                Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#training" className={outlineButton}>
                Training Programs
              </a>
            </div>

            <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-gray-800 pt-8 lg:mx-0">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="text-xs text-gray-400 md:text-sm">{stat.label}</dt>
                  <dd className="order-first text-2xl font-bold text-[#00BFFF] md:text-3xl">
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto -order-1 lg:order-none">
            <div className="absolute inset-0 rounded-full bg-[#00BFFF]/25 blur-[80px]" />
            <Image
              src="/logo.png"
              alt="GenovaaTech Labs logo"
              width={512}
              height={427}
              preload
              sizes="(min-width: 1024px) 288px, 144px"
              className="relative w-36 drop-shadow-[0_0_25px_#00BFFF] lg:w-72"
            />
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section id="services" className={`relative ${section}`}>
        <SectionHeader eyebrow="Services" title="What We Do">
          From concept to deployment — engineering services and training for students, startups and
          businesses.
        </SectionHeader>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={stagger(i, 4)} className={`${card} flex gap-4 sm:block`}>
              <div className={iconBox}>
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold sm:mt-5">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Technologies we work with
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-gray-800 bg-[#111827] px-4 py-1.5 text-sm text-[#00BFFF]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a href={FORMS.services} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            Get a Customized Project
          </a>
        </div>
      </section>

      {/* ───────────── PROJECTS ───────────── */}
      <section id="projects" className={`relative bg-[#0E1526] ${section}`}>
        <SectionHeader eyebrow="Projects" title="Featured Projects">
          A selection of embedded, IoT and Edge AI systems we have built and mentored.
        </SectionHeader>
        <ProjectsGrid />
      </section>

      {/* ───────────── TRAINING ───────────── */}
      <section id="training" className={`relative ${section}`}>
        <SectionHeader eyebrow="Training" title="Training Programs">
          Industry-oriented, hands-on programs that take you from fundamentals to real projects.
        </SectionHeader>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((program, i) => {
            const details = [program.duration, program.mode, program.fee].filter(Boolean);
            return (
              <Reveal key={program.title} delay={stagger(i, 4)} className={`${card} flex flex-col`}>
                <h3 className="text-lg font-semibold">{program.title}</h3>
                <span className={`${badge} mt-3 self-start`}>{program.level}</span>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex gap-2">
                      <span className="text-[#00BFFF]" aria-hidden="true">
                        ▸
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
                {details.length > 0 && (
                  <p className="mt-auto pt-5 text-xs text-gray-300">{details.join(" • ")}</p>
                )}
              </Reveal>
            );
          })}

          {/* Student projects – highlighted as the last card */}
          <Reveal
            delay={stagger(COURSES.length, 4)}
            className="flex flex-col rounded-xl border border-[#00BFFF]/50 bg-gradient-to-br from-[#00BFFF]/15 to-[#111827] p-6 text-left"
          >
            <h3 className="text-lg font-semibold">Student Projects</h3>
            <span className={`${badge} mt-3 self-start`}>Mentored</span>
            <ul className="mt-4 space-y-3 text-sm">
              {STUDENT_PROJECTS.map((program) => (
                <li key={program.title}>
                  <p className="font-medium text-white">{program.title}</p>
                  <p className="text-gray-400">{program.topics.join(" • ")}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 text-center">
          <a href={FORMS.training} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            Register Now
          </a>
        </div>
      </section>

      {/* ───────────── ABOUT / WHY US / PROCESS ───────────── */}
      <section id="about" className={`relative bg-[#0E1526] ${section}`}>
        <SectionHeader eyebrow="About Us" title="Why GenovaaTech Labs">
          GenovaaTech Labs is a deep-tech engineering company focused on Embedded Systems, IoT, Edge
          AI, and engineering education. We bridge the gap between theory and real-world innovation
          through intelligent solutions, industry-oriented training, and customized project
          development.
        </SectionHeader>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={stagger(i, 4)} className={`${card} flex gap-4 sm:block`}>
              <div className={iconBox}>
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold sm:mt-5">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Engineering process as a compact timeline */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h3 className="text-center text-2xl font-bold">Our Engineering Process</h3>
          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-gradient-to-r from-[#00BFFF]/10 via-[#00BFFF]/60 to-[#00BFFF]/10 md:block"
            />
            <ol className="relative grid gap-8 md:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 md:block md:text-center">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#00BFFF] bg-[#0B1120] text-sm font-bold text-[#00BFFF] md:mx-auto">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-semibold md:mt-4">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400 md:mt-2">{step.desc}</p>
                </div>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT CTA ───────────── */}
      <section id="contact" className={`relative ${section}`}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#00BFFF]/30 bg-gradient-to-br from-[#00BFFF]/15 via-[#111827] to-[#111827] px-6 py-12 text-center md:px-14 md:py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Build Something Together</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Have a product idea, need engineering support, or want to join a training program?
            We&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={FORMS.project} target="_blank" rel="noopener noreferrer" className={primaryButton}>
              Request a Project
            </a>
            <a href={FORMS.training} target="_blank" rel="noopener noreferrer" className={outlineButton}>
              Register for Training
            </a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 break-all text-[#00BFFF] hover:underline"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
