"use client";
import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";
import { FaGlobe } from 'react-icons/fa';
import { useCallback } from "react";

export default function Header() {

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
  <div className="max-w-[2000px] mx-auto flex justify-between items-center px-15">
    <Link href="/" className="font-signature text-[35px]">
      Mouhieddine Amine
    </Link>
    <nav className=" flex items-center space-x-0 text-white text-[18px]">
      <Link href="#about" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">About</Link>
      <Link href="#projects" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Projects</Link>
      <Link href="#contact" className="px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Contact</Link>
      <span className="h-[20px] w-[2px] bg-white opacity-50 mx-[60px] inline-block align-middle"></span>
      <button onClick={handleLanguageClick}
      className="flex items-center gap-2 px-4 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]"
      >
      <FaGlobe />
      Language
      </button>
      <div className="px-5 py-2">
      <ThemeToggle />
      </div>
      
    </nav>
  </div>
</header>

  );
}
