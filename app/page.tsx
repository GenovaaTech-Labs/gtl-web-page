"use client";

import { motion } from "framer-motion";
import ParticlesBG from "@/components/ParticlesBG";
import Navbar from "@/components/Navbar";

export default function Home() {

return (

<main className="relative bg-[#0B1120] text-white overflow-hidden">

<ParticlesBG/>

{/* Circuit Grid */}

<div className="absolute inset-0 opacity-20 pointer-events-none">

<div className="w-full h-full bg-[linear-gradient(90deg,#00BFFF22_1px,transparent_1px),linear-gradient(#00BFFF22_1px,transparent_1px)] bg-[size:60px_60px]"></div>

</div>

{/* Navbar */}

<Navbar/>

{/* HERO */}

<section className="h-screen flex flex-col justify-center items-center text-center px-6">

<div className="absolute w-[600px] h-[600px] bg-[#00BFFF]/20 blur-[160px] rounded-full -z-10"></div>

<motion.h1

initial={{opacity:0,y:-40}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-4xl md:text-6xl lg:text-7xl font-bold"

>

Powering Embedded Intelligence

</motion.h1>

<p className="mt-6 text-xl text-gray-400">

Embedded AI • IoT • RTOS • Edge AI • FPGA

</p>

{/* CHIP */}

<div className="relative mt-16">

<div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] border border-[#00BFFF] rounded-xl flex flex-col items-center justify-center bg-[#0B1120] shadow-[0_0_60px_#00BFFF]">

<p className="text-[#00BFFF] font-bold text-lg">

GenovaaTech Labs

</p>

<p className="text-xs text-gray-400 mt-2">

Engineering the Future 

</p>

</div>

<div className="absolute inset-0 blur-[100px] bg-[#00BFFF]/30 rounded-full"></div>

</div>

<div className="flex gap-6 mt-12">

<a

href="#services"

className="px-8 py-3 bg-[#00BFFF] text-black rounded-xl font-semibold hover:scale-110 transition"

>

Explore Services

</a>

<a

href="#training"

className="px-8 py-3 border border-[#00BFFF] rounded-xl hover:bg-[#00BFFF] hover:text-black transition"

>

Start Learning

</a>

</div>

</section>
{/* ENGINEERING PROCESS */}

<section className="py-28 bg-[#111827] text-center px-6">

<h2 className="text-4xl font-bold mb-20">
Our Engineering Process
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

{[
{
title:"Idea",
desc:"Understanding the problem and defining the embedded system architecture."
},

{
title:"Prototype",
desc:"Developing firmware, hardware interfaces, and initial IoT connectivity."
},

{
title:"Product",
desc:"Optimizing firmware, integrating sensors, and implementing edge intelligence."
},

{
title:"Deployment",
desc:"Testing, validation, and deploying the system into real-world applications."
}

].map((step,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.2}}
className="p-8 bg-[#0B1120] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition"
>

<div className="text-[#00BFFF] text-3xl font-bold mb-4">
0{i+1}
</div>

<h3 className="text-xl font-semibold mb-3">
{step.title}
</h3>

<p className="text-gray-400 text-sm">
{step.desc}
</p>

</motion.div>

))}

</div>

</section>

{/* SERVICES */}

<section id="services" className="py-32 text-center px-8">

<h2 className="text-4xl font-bold mb-16">

What We Do

</h2>

<div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

{[

"Embedded Systems Development",

"IoT Product Design",

"Edge AI Solutions",

"Engineering Training",

"Project Consulting",

"Custom Firmware",

"System Optimization",

"Technical Workshops"


].map((item,i)=>(

<motion.div

key={i}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:i*0.2}}

className="p-8 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition"

>

{item}

</motion.div>

))}

</div>

<div className="mt-12">

<a
href="https://forms.gle/cPjsh5BADUWXDxhL8"
target="_blank"
className="px-8 py-3 bg-[#00BFFF] text-black rounded-xl font-semibold hover:scale-110 transition"
>

Get Customized Project

</a>

</div>

</section>

{/* TECH STACK */}

<section className="py-24 text-center px-6 bg-[#0B1120]">

<h2 className="text-4xl font-bold mb-14">
Technologies We Work With
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">

{[
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
"FPGA"
].map((tech,i)=>(

<div
key={i}
className="p-6 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition"
>

<p className="text-[#00BFFF] font-semibold">{tech}</p>

</div>

))}

</div>

</section>

{/* PROJECTS */}

<section id="projects" className="py-32 bg-[#111827] text-center px-8">

<h2 className="text-4xl font-bold mb-16">

Featured Projects

</h2>

<div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

{[

  "Smart Home Automation",
  "AI-Powered Surveillance Camera", 
  "Wearable Health Monitor",
  "Smart Agriculture System",
  "Industrial IoT Platform",
  "Alchol Detection Device",
  "Smart Energy Meter",
  "Driver Monitoring System",
  "Smart Parking Solution",
  "AI-Powered Personal Assistant",
  "Home Security System",
  "Smart Waste Management",

].map((item,i)=>(

<motion.div

key={i}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:i*0.2}}

className="p-8 bg-[#0B1120] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition"

>

{item}

</motion.div>

))}

</div>
<div className="mt-12">

<a
href="https://forms.gle/T26YRJUGvZbzGdyX8"
target="_blank"
className="px-8 py-3 bg-[#00BFFF] text-black rounded-xl font-semibold hover:scale-110 transition"
>

Get Customized Project

</a>

</div>


</section>

{/* TRAINING */}
{/* TRAINING */}

<section id="training" className="py-20 md:py-32 text-center px-6 md:px-8">

<h2 className="text-4xl font-bold mb-16">
Training Programs
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

{[
"C Programming",
"C++ Programming",
"Embedded Linux",
"RTOS Development",
"Embeeded AI Programming",
"IoT System Design",
"FPGA Development",
"Mini Projects",
"Major Projects"

].map((item,i)=>(

<div
key={i}
className="p-8 bg-[#111827] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:scale-105 transition"
>

<p className="text-lg font-semibold">{item}</p>

</div>

))}

</div>

{/* Register Button */}

<div className="mt-14">

<a
href="https://forms.gle/4CAXfvvgSEZoz46CA"
target="_blank"
className="px-10 py-4 bg-[#00BFFF] text-black font-semibold rounded-xl hover:scale-110 transition"
>

Register Now

</a>

</div>

</section>

{/* CONTACT */}

<section id="contact" className="py-32 bg-[#111827] text-center">

<h2 className="text-4xl font-bold mb-6">

Contact Us

</h2>

<p className="text-gray-400 mb-8">

Let's collaborate on projects or training.

</p>

<a

href="mailto:connect@genovaatechlabs.com"

className="px-8 py-3 bg-[#00BFFF] text-black rounded-xl font-semibold"

>

connect@genovaatechlabs.com

</a>

</section>

{/* FOOTER */}

<footer className="py-10 border-t border-gray-800 text-center text-gray-400">

<p className="text-white font-semibold">

GenovaaTech Labs

</p>

<p className="text-sm mt-2">

Embedded Systems • IoT • Edge AI

</p>

<p className="text-sm mt-3">

© {new Date().getFullYear()} GenovaaTech Labs

</p>

</footer>

</main>

);

}