"use client";
import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";


export default function Header() {
  return (
    <header className="w-full py-2 bg-[#E6B821] z-50">
  <div className="max-w-[2000px] mx-auto flex justify-between items-center px-15">
    <Link href="/" className="font-signature text-[35px]">
      Mouhieddine Amine
    </Link>
    <nav className="space-x-0 text-white text-[18px]">
      <Link href="#about" className="px-6 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">About</Link>
      <Link href="#projects" className="px-6 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Projects</Link>
      <Link href="#contact" className="px-6 py-2 rounded-md font-bold transition duration-200 hover:bg-[#B38C1A]">Contact</Link>
      <ThemeToggle />
    </nav>
  </div>
</header>

  );
}
