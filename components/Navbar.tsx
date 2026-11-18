"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

const [menuOpen,setMenuOpen] = useState(false);

return (

<nav className="fixed top-0 left-0 w-full bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-800 z-50">

<div className="flex justify-between items-center px-6 md:px-10 py-4">

{/* Logo */}

<Link href="/" className="flex items-center gap-3">

<Image src="/logo.png" alt="" width={48} height={40} preload className="h-10 w-auto"/>

<span className="text-xl font-bold text-[#00BFFF]">
GenovaaTech Labs
</span>

</Link>

{/* Desktop Menu */}

<div className="hidden md:flex gap-8 text-sm">

<Link href="/#about" className="hover:text-[#00BFFF] transition">
  About Us
</Link>

<Link href="/#services" className="hover:text-[#00BFFF] transition">
  Services
</Link>

<Link href="/#projects" className="hover:text-[#00BFFF] transition">
  Projects
</Link>

<Link href="/#training" className="hover:text-[#00BFFF] transition">
  Training
</Link>

<Link href="/#contact" className="hover:text-[#00BFFF] transition">
  Contact
</Link>

</div>

{/* Mobile Button */}

<button
className="md:hidden text-[#00BFFF] text-2xl"
aria-label={menuOpen ? "Close menu" : "Open menu"}
aria-expanded={menuOpen}
aria-controls="mobile-menu"
onClick={()=>setMenuOpen(!menuOpen)}
>

{menuOpen ? "✕" : "☰"}

</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div id="mobile-menu" className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#0B1120] border-t border-gray-800">

<Link href="/#about" onClick={()=>setMenuOpen(false)}>
  About Us
</Link>

<Link href="/#services" onClick={()=>setMenuOpen(false)}>
  Services
</Link>

<Link href="/#projects" onClick={()=>setMenuOpen(false)}>
  Projects
</Link>

<Link href="/#training" onClick={()=>setMenuOpen(false)}>
  Training
</Link>

<Link href="/#contact" onClick={()=>setMenuOpen(false)}>
  Contact
</Link>

</div>

)}

</nav>

);
}