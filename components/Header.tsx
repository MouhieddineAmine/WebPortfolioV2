"use client";
import ThemeToggle from "@/components/ThemeToggle";
import { FaGlobe } from 'react-icons/fa';
import { useCallback, useState } from "react";
import { PageTransition } from './PageTransition';
import { motion } from "framer-motion";


export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageClick = useCallback(() => {
    const target = document.getElementById("language");
    const btnen = document.getElementById("btnlanguage-en");
    const btnfr = document.getElementById("btnlanguage-fr");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        target.classList.remove("flash-text-yellow");
        void target.offsetWidth;
        target.classList.add("flash-text-yellow");

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

        setTimeout(() => {
          target.classList.remove("flash-text-yellow");
        }, 5000);
      }, 1000);
    }
  }, []);

  return (
    <header className="w-full py-2 bg-[#E6B821] z-[99] relative">
      <div className="max-w-[2000px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <PageTransition href="/" className="block w-[260px] h-auto">
            <img src="/LogoPortfolio.png"
            alt="Logo" className="w-full h-auto object-contain"/>
        </PageTransition>

        {/* Hamburger Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white p-2 z-[9999] hover:bg-[#B38C1A] rounded-md transition"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center text-white text-[18px] gap-2">
          <PageTransition href="/resume" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Resume</PageTransition>
          <PageTransition href="/projects" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Projects</PageTransition>
          <PageTransition href="/contact" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Contact</PageTransition>
          <span className="h-[20px] w-[2px] bg-white opacity-50 mx-[30px]"></span>
          <button onClick={handleLanguageClick} className="flex items-center gap-2 px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">
            <FaGlobe />
            Language
          </button>
          <div className="px-5 py-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#E6B821] text-white flex flex-col p-6 z-[9999] custom-big-shadow lg:hidden"
      >
        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="self-end text-white text-xl px-4 py-2 hover:bg-[#B38C1A] rounded-md transition"
          aria-label="Close Menu"
        >
          ✕
        </button>

        <div className="flex flex-col gap-4 mt-6 text-lg font-bold">
          <PageTransition href="/resume" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Resume</PageTransition>
          <PageTransition href="/projects" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Projects</PageTransition>
          <PageTransition href="/contact" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Contact</PageTransition>

          <div className="border-t border-white my-2"></div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleLanguageClick();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]"
          >
            <FaGlobe />
            Language
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
