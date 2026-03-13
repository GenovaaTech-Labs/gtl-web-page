"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

const [menuOpen,setMenuOpen] = useState(false);

return (

<nav className="fixed top-0 left-0 w-full bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-800 z-50">

<div className="flex justify-between items-center px-6 md:px-10 py-4">

{/* Logo */}

<Link href="/" className="flex items-center gap-3">

<img src="/logo.png" className="h-10"/>

<span className="text-xl font-bold text-[#00BFFF]">
GenovaaTech Labs
</span>

</Link>

{/* Desktop Menu */}

<div className="hidden md:flex gap-8 text-sm">

<a href="#services" className="hover:text-[#00BFFF]">Services</a>

<a href="#projects" className="hover:text-[#00BFFF]">Projects</a>

<a href="#training" className="hover:text-[#00BFFF]">Training</a>

<a href="#contact" className="hover:text-[#00BFFF]">Contact</a>

</div>

{/* Mobile Button */}

<button
className="md:hidden text-[#00BFFF] text-2xl"
onClick={()=>setMenuOpen(!menuOpen)}
>

☰

</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#0B1120] border-t border-gray-800">

<a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>

<a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a>

<a href="#training" onClick={()=>setMenuOpen(false)}>Training</a>

<a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>

</div>

)}

</nav>

);
}