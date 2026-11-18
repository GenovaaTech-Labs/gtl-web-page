import Image from "next/image";
import ParticlesBG from "@/components/ParticlesBG";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { COURSES, CONTACT_EMAIL } from "@/lib/enquiry";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// Google Forms are used until the /contact form's email backend is set up.
const PROJECT_FORM_URL = "https://forms.gle/T26YRJUGvZbzGdyX8";
const SERVICES_FORM_URL = "https://forms.gle/cPjsh5BADUWXDxhL8";
const TRAINING_FORM_URL = "https://forms.gle/4CAXfvvgSEZoz46CA";

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Students Trained" },
  { value: "100%", label: "Practical Learning" },
];

const WHY_US = [
  {
    icon: "🛠️",
    title: "Industry Projects",
    desc: "Hands-on experience through real-world embedded and IoT projects.",
  },
  {
    icon: "🎓",
    title: "Expert Mentorship",
    desc: "Learn directly from experienced engineers with industry exposure.",
  },
  {
    icon: "💡",
    title: "Practical Training",
    desc: "Build products and gain skills through implementation-focused learning.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    desc: "From ideation to deployment, we support every stage of development.",
  },
];

const PROCESS = [
  {
    title: "Idea",
    desc: "Understanding the problem and defining the embedded system architecture.",
  },
  {
    title: "Prototype",
    desc: "Developing firmware, hardware interfaces, and initial IoT connectivity.",
  },
  {
    title: "Product",
    desc: "Optimizing firmware, integrating sensors, and implementing edge intelligence.",
  },
  {
    title: "Deployment",
    desc: "Testing, validation, and deploying the system into real-world applications.",
  },
];

const SERVICES = [
  "Embedded Systems Development",
  "IoT Product Design",
  "Edge AI Solutions",
  "Engineering Training",
  "Project Consulting",
  "Custom Firmware",
  "System Optimization",
  "Technical Workshops",
];

const TECH_STACK = [
  "ESP32",
  "STM32",
  "Embedded Linux",
  "FreeRTOS",
  "Edge AI",
  "IoT Systems",
  "C Programming",
  "C++",
  "Python",
  "TensorFlow Lite",
  "Raspberry Pi",
  "FPGA",
];

const PROJECTS = [
  "Smart Home Automation",
  "AI-Powered Surveillance Camera",
  "Wearable Health Monitor",
  "Smart Agriculture System",
  "Industrial IoT Platform",
  "Alcohol Detection Device",
  "Smart Energy Meter",
  "Driver Monitoring System",
  "Smart Parking Solution",
  "AI-Powered Personal Assistant",
  "Home Security System",
  "Smart Waste Management",
];

/** Stagger cards within a row only, so later rows don't wait seconds to appear. */
const stagger = (index: number, perRow: number) => (index % perRow) * 0.1;

const primaryButton =
  "px-8 py-3 bg-[#00BFFF] text-black rounded-xl font-semibold hover:scale-110 transition";
const outlineButton =
  "px-8 py-3 border border-[#00BFFF] rounded-xl hover:bg-[#00BFFF] hover:text-black transition";
const card =
  "p-8 rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition";

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
          <h2 className="text-4xl font-bold mb-8">About GenovaaTech Labs</h2>
          <p className="text-gray-400 text-lg leading-8">
            GenovaaTech Labs is a deep-tech engineering company focused on Embedded Systems, IoT,
            Edge AI, and engineering education. We bridge the gap between theory and real-world
            innovation by delivering intelligent solutions, industry-oriented training, and
            customized project development for students, startups, and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {STATS.map((item) => (
            <div key={item.label} className="p-8 bg-[#0B1120] rounded-xl border border-gray-800">
              <h3 className="text-4xl font-bold text-[#00BFFF]">{item.value}</h3>
              <p className="mt-3 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-8 bg-[#0B1120] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Why Choose GenovaaTech Labs?</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            We combine industry expertise, practical learning, and innovative engineering to
            deliver solutions that create real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item, i) => (
              <Reveal
                key={item.title}
                delay={stagger(i, 4)}
                className="p-8 bg-[#111827] rounded-2xl border border-gray-800 hover:border-[#00BFFF] hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-6" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING PROCESS */}
      <section className="py-28 bg-[#111827] text-center px-6">
        <h2 className="text-4xl font-bold mb-20">Our Engineering Process</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={stagger(i, 4)} className={`${card} bg-[#0B1120]`}>
              <div className="text-[#00BFFF] text-3xl font-bold mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 text-center px-8">
        <h2 className="text-4xl font-bold mb-16">What We Do</h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {SERVICES.map((item, i) => (
            <Reveal key={item} delay={stagger(i, 4)} className={`${card} bg-[#111827]`}>
              {item}
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
      <section className="py-24 text-center px-6 bg-[#0B1120]">
        <h2 className="text-4xl font-bold mb-14">Technologies We Work With</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {TECH_STACK.map((tech) => (
            <div
              key={tech}
              className="p-6 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition"
            >
              <p className="text-[#00BFFF] font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 bg-[#111827] text-center px-8">
        <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {PROJECTS.map((item, i) => (
            <Reveal key={item} delay={stagger(i, 4)} className={`${card} bg-[#0B1120]`}>
              {item}
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <a href={PROJECT_FORM_URL} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            Get Customized Project
          </a>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-20 md:py-32 text-center px-6 md:px-8">
        <h2 className="text-4xl font-bold mb-16">Training Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {COURSES.map((item) => (
            <div key={item} className={`${card} bg-[#111827]`}>
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href={TRAINING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#00BFFF] text-black font-semibold rounded-xl hover:scale-110 transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-[#111827] text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400 mb-8">Let&apos;s collaborate on projects or training.</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className={`${primaryButton} inline-block break-all`}>
          {CONTACT_EMAIL}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-400">
        <p className="text-white font-semibold">GenovaaTech Labs</p>
        <p className="text-sm mt-2">Embedded Systems • IoT • Edge AI</p>
        <p className="text-sm mt-3">© {new Date().getFullYear()} GenovaaTech Labs</p>
      </footer>
    </main>
  );
}
