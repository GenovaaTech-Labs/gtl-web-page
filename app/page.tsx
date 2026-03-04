"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0B1120] text-white scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0B1120]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-4">

        {/* Left - Logo + Name */}
        <div className="flex items-center gap-3">
        <img
            src="/logo.png"
            alt="GenovaTech Logo"
            className="h-10 w-auto hover:scale-110 transition duration-300 drop-shadow-[0_0_8px_#00BFFF]"
        />
        <span className="text-xl font-bold text-[#00BFFF]">
        GenovaTech Labs
        </span>
      </div>

    {/* Right - Nav Links */}
    <div className="flex items-center gap-8 text-sm font-medium pr-4">
      <a href="#about" className="hover:text-[#00BFFF] transition">
        About
      </a>
      <a href="#services" className="hover:text-[#00BFFF] transition">
        Services
      </a>
      <a href="#contact" className="hover:text-[#00BFFF] transition">
        Contact
      </a>
    </div>

  </div>
</nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Animated PCB Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[#0B1120] overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#00BFFF55_1px,transparent_1px),linear-gradient(#00BFFF55_1px,transparent_1px)] bg-[size:50px_50px]"
            style={{ animation: "moveGrid 25s linear infinite" }}
          ></div>
        </div>

        {/* Glow Effect */}
        <div className="absolute w-[600px] h-[600px] bg-[#00BFFF]/20 blur-[150px] rounded-full -z-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold"
        >
          Engineering the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-xl text-gray-400"
        >
          Embedded Systems • IoT • Edge AI • Training
        </motion.p>

        <motion.a
          href="#services"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10 px-8 py-3 bg-[#00BFFF] text-black font-semibold rounded-xl hover:scale-110 transition duration-300"
        >
          Explore Services
        </motion.a>

      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-[#111827] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          About GenovaTech Labs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 max-w-3xl mx-auto text-gray-400"
        >
          We build intelligent embedded solutions and train the next generation of engineers through practical learning and real-world innovation.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Embedded Product Development",
            "IoT Systems Design",
            "Edge AI Solutions"
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-[#111827] rounded-2xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>
            {/* Projects Section */}
      <section className="py-32 px-8 text-center bg-[#0F172A]">
        <h2 className="text-4xl font-bold mb-12">Our Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "IoT Weather Monitoring",
              desc: "ESP32 based cloud-connected weather station with OLED display."
            },
            {
              title: "Keyword Detection System",
              desc: "Edge AI based voice detection using embedded hardware."
            },
            {
              title: "Health Monitoring System",
              desc: "Real-time BPM and sensor analytics with IoT integration."
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-[#111827] rounded-2xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#00BFFF]">
                {project.title}
              </h3>
              <p className="text-gray-400">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-[#111827] text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400 mb-6">
          Ready to build something innovative?
        </p>
        <button className="px-8 py-3 bg-[#00BFFF] text-black font-semibold rounded-xl hover:scale-110 transition duration-300">
          Get In Touch
        </button>
      </section>

    </main>
  );
}