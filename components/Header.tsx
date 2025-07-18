"use client";
import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";
import { FaGlobe } from 'react-icons/fa';
import { useCallback } from "react";
import { PageTransition } from './PageTransition';
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

 const handleLanguageClick = useCallback(() => {
  const target = document.getElementById("language");
  const btnen = document.getElementById("btnlanguage-en");
  const btnfr = document.getElementById("btnlanguage-fr");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });

    // Delay the flash until scroll likely completes (adjust duration as needed)
    setTimeout(() => {
      target.classList.remove("flash-text-yellow"); // Reset animation
      void target.offsetWidth; // Force reflow so animation can re-run
      target.classList.add("flash-text-yellow");

      // Flash border
      if (btnen) {
        btnen.classList.remove("flash-border-yellow");
        void btnen.offsetWidth;
        btnen.classList.add("flash-border-yellow");
      }

      if (btnfr) {
        btnfr.classList.remove("flash-border-yellow");
        void btnfr.offsetWidth;
        btnfr.classList.add("flash-border-yellow");
      }

      // Remove class after animation ends (optional cleanup)
      setTimeout(() => {
        target.classList.remove("flash-text-yellow");
      }, 5000); // Match animation duration
    }, 1000); // Wait for scroll to complete
  }
}, []);

  return (
    <header className="w-full py-2 bg-[#E6B821] z-50">
  <div className="max-w-[2000px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12">


{/* Hamburger menu button (mobile only) */}
<button
  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
  className="md:hidden text-white p-2"
  aria-label="Toggle Menu"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

{/* Logo or name – always visible */}
<PageTransition href="/" className="font-signature text-[35px]">
  Mouhieddine Amine
</PageTransition>

{/* Navigation menu */}
<nav
  className={`flex-col md:flex-row md:flex ${
    isMobileMenuOpen ? 'flex' : 'hidden'
  } md:items-center text-white text-[16px] sm:text-[17px] md:text-[18px] gap-2 mt-2 md:mt-0`}
>
  <Link
    href="#about"
    className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]"
  >
    About
  </Link>
  <Link
    href="#projects"
    className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]"
  >
    Projects
  </Link>
  <Link
    href="#contact"
    className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]"
  >
    Contact
  </Link>

  <span className="hidden md:inline-block h-[20px] w-[2px] bg-white opacity-50 mx-[30px]"></span>

  <button
    onClick={handleLanguageClick}
    className="flex items-center gap-2 px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]"
  >
    <FaGlobe />
    Language
  </button>

  <div className="px-5 py-2 hidden">
    <ThemeToggle />
  </div>
</nav>

  </div>
</header>

  );
}
