"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FORMS, NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Highlight the section currently in the middle of the screen (home page only).
  useEffect(() => {
    // "top" (the hero) is observed too, so scrolling back up clears the highlight.
    const sections = ["top", ...NAV_LINKS.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length <= 1) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? null : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `transition hover:text-[#00BFFF] ${active === id ? "text-[#00BFFF]" : "text-gray-300"}`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-[#0B1120]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image src="/logo.png" alt="" width={48} height={40} preload className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#00BFFF]">GenovaaTech Labs</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              className={linkClass(link.id)}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FORMS.training}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#00BFFF] px-4 py-2 font-semibold text-black transition hover:bg-[#33CCFF]"
          >
            Register
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="text-[#00BFFF] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col items-center gap-6 border-t border-gray-800 bg-[#0B1120] py-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              className={linkClass(link.id)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FORMS.training}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#00BFFF] px-6 py-2 font-semibold text-black"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
