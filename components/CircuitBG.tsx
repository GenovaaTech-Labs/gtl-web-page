"use client";

import { motion } from "framer-motion";

export default function CircuitBG() {

return (

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

{/* Chip */}

<div className="relative w-[220px] h-[220px] border border-[#00BFFF] rounded-xl flex items-center justify-center bg-[#0B1120] shadow-[0_0_60px_#00BFFF]">

<p className="text-[#00BFFF] font-bold text-lg text-center">
GenovaaTech<br/>Labs
</p>

{/* Glow */}
<div className="absolute inset-0 blur-[80px] bg-[#00BFFF]/30 rounded-xl"></div>

</div>

{/* Circuit Lines */}

<svg
className="absolute w-full h-full"
viewBox="0 0 1000 600"
fill="none"
>

{/* Left Line */}

<motion.path
d="M100 300 H390"
stroke="#00BFFF"
strokeWidth="2"
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 2, repeat: Infinity }}
/>

{/* Right Line */}

<motion.path
d="M610 300 H900"
stroke="#00BFFF"
strokeWidth="2"
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
/>

{/* Top Line */}

<motion.path
d="M500 80 V190"
stroke="#00BFFF"
strokeWidth="2"
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 2, repeat: Infinity, delay: 1 }}
/>

{/* Bottom Line */}

<motion.path
d="M500 410 V520"
stroke="#00BFFF"
strokeWidth="2"
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
/>

</svg>

</div>

);

}