import Image from "next/image";
import ParticlesBG from "@/components/ParticlesBG";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import ProjectsGrid from "@/components/ProjectsGrid";
import { PROCESS, SERVICES, STATS, TECH_STACK, TRAINING, WHY_US } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/enquiry";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// Google Forms are used until the /contact form's email backend is set up.
const PROJECT_FORM_URL = "https://forms.gle/T26YRJUGvZbzGdyX8";
const SERVICES_FORM_URL = "https://forms.gle/cPjsh5BADUWXDxhL8";
const TRAINING_FORM_URL = "https://forms.gle/4CAXfvvgSEZoz46CA";

/** Stagger cards within a row only, so later rows don't wait seconds to appear. */
const stagger = (index: number, perRow: number) => (index % perRow) * 0.1;

const primaryButton =
  "inline-block px-8 py-3 bg-[#00BFFF] text-black rounded-xl font-semibold hover:scale-110 transition";
const outlineButton =
  "inline-block px-8 py-3 border border-[#00BFFF] rounded-xl hover:bg-[#00BFFF] hover:text-black transition";
const hoverCard = "rounded-xl border border-gray-800 hover:border-[#00BFFF] transition duration-300";
const sectionTitle = "text-3xl md:text-4xl font-bold";

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
    <main className="relative bg-[#0B1120] text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <ParticlesBG />

      {/* Circuit Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(90deg,#00BFFF22_1px,transparent_1px),linear-gradient(#00BFFF22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative isolate min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-16">
        <div className="absolute w-[600px] max-w-full h-[600px] bg-[#00BFFF]/20 blur-[160px] rounded-full -z-10" />

        <Reveal as="h1" immediate y={-40} className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Powering Embedded Intelligence
        </Reveal>

        <p className="mt-6 text-xl text-gray-400">Embedded AI • IoT • RTOS • Edge AI • FPGA</p>

        {/* CHIP */}
        <div className="relative mt-16">
          <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] border border-[#00BFFF] rounded-xl flex flex-col items-center justify-center bg-[#0B1120] shadow-[0_0_60px_#00BFFF]">
            <Image
              src="/logo.png"
              alt="GenovaaTech Labs logo"
              width={512}
              height={427}
              preload
              sizes="(min-width: 768px) 144px, 112px"
              className="w-28 md:w-36 h-auto object-contain drop-shadow-[0_0_15px_#00BFFF]"
            />
            <p className="text-[#00BFFF] font-bold text-lg">GenovaaTech Labs</p>
            <p className="text-xs text-gray-400 mt-2">Engineering Embedded Intelligence</p>
          </div>
          <div className="absolute inset-0 blur-[100px] bg-[#00BFFF]/30 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          <a href="#services" className={primaryButton}>
            Explore Services
          </a>
          <a href="#training" className={outlineButton}>
            Start Learning
          </a>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-[#111827]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`${sectionTitle} mb-8`}>About GenovaaTech Labs</h2>
          <p className="text-gray-400 text-lg leading-8">
            GenovaaTech Labs is a deep-tech engineering company focused on Embedded Systems, IoT,
            Edge AI, and engineering education. We bridge the gap between theory and real-world
            innovation by delivering intelligent solutions, industry-oriented training, and
            customized project development for students, startups, and businesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 md:gap-8 mt-16 text-center">
          {STATS.map((item) => (
            <div key={item.label} className="p-4 md:p-8 bg-[#0B1120] rounded-xl border border-gray-800">
              <p className="text-2xl md:text-4xl font-bold text-[#00BFFF]">
                <CountUp value={item.value} />
              </p>
              <p className="mt-2 md:mt-3 text-xs md:text-base text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24 px-6 md:px-8 bg-[#0B1120] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${sectionTitle} mb-4`}>Why Choose GenovaaTech Labs?</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            We combine industry expertise, practical learning, and innovative engineering to
            deliver solutions that create real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item, i) => (
              <Reveal
                key={item.title}
                delay={stagger(i, 4)}
                className={`${hoverCard} p-8 bg-[#111827] rounded-2xl hover:-translate-y-2`}
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00BFFF]/10 text-[#00BFFF]">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING PROCESS */}
      <section id="process" className="py-24 md:py-28 bg-[#111827] text-center px-6">
        <h2 className={`${sectionTitle} mb-16 md:mb-20`}>Our Engineering Process</h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={stagger(i, 4)} className={`${hoverCard} p-8 bg-[#0B1120] hover:scale-105`}>
              <div className="text-[#00BFFF] text-3xl font-bold mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 text-center px-6 md:px-8">
        <h2 className={`${sectionTitle} mb-4`}>What We Do</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          From concept to deployment — engineering services and training for students, startups
          and businesses.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={stagger(i, 4)}
              className={`${hoverCard} p-6 bg-[#111827] hover:-translate-y-1`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00BFFF]/10 text-[#00BFFF]">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-6">{service.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <a href={SERVICES_FORM_URL} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            Get Customized Project
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-24 text-center px-6 bg-[#0B1120]">
        <h2 className={`${sectionTitle} mb-14`}>Technologies We Work With</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 max-w-6xl mx-auto">
          {TECH_STACK.map((tech) => (
            <div key={tech} className={`${hoverCard} flex items-center justify-center p-4 md:p-6 bg-[#111827] hover:scale-105`}>
              <p className="text-[#00BFFF] font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 md:py-32 bg-[#111827] text-center px-6 md:px-8">
        <h2 className={`${sectionTitle} mb-4`}>Featured Projects</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          A selection of embedded, IoT and Edge AI systems we have built and mentored.
        </p>

        <ProjectsGrid />

        <div className="mt-12">
          <a href={PROJECT_FORM_URL} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            Get Customized Project
          </a>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-24 md:py-32 text-center px-6 md:px-8">
        <h2 className={`${sectionTitle} mb-4`}>Training Programs</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Industry-oriented, hands-on programs that take you from fundamentals to real projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {TRAINING.map((program, i) => {
            const details = [program.duration, program.mode, program.fee].filter(Boolean);
            return (
              <Reveal
                key={program.title}
                delay={stagger(i, 3)}
                className={`${hoverCard} flex flex-col p-6 bg-[#111827] hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{program.title}</h3>
                  <span className="shrink-0 text-xs font-medium text-[#00BFFF] bg-[#00BFFF]/10 rounded-full px-3 py-1">
                    {program.level}
                  </span>
                </div>
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
        </div>

        <div className="mt-14">
          <a
            href={TRAINING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#00BFFF] text-black font-semibold rounded-xl hover:scale-110 transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#111827] text-center">
        <h2 className={`${sectionTitle} mb-6`}>Contact Us</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Have a product idea, need engineering support, or want to join a training program?
          Let&apos;s talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={PROJECT_FORM_URL} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            Request a Project
          </a>
          <a href={TRAINING_FORM_URL} target="_blank" rel="noopener noreferrer" className={outlineButton}>
            Register for Training
          </a>
        </div>
        <p className="mt-8 text-gray-400">
          Or email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#00BFFF] hover:underline break-all">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}
