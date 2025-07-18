"use client";
import { useState } from "react";
import BtnGoBackProject from "@/components/BtnGoBackProject";
import Image from "next/image";

const images = [
  "/portfolio/homepage.png",
  "/portfolio/image001.png",
  "/portfolio/image002.png",
];

export default function CannabisPage() {
      const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }
  return (
<div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBackProject />
        <h1 className="text-4xl font-bold mb-5 mt-10">Developer Portfolio</h1>
        <p className="text-gray-400 mb-[20px]">A clean and responsive personal portfolio built with Next.js to showcase my development work, skills, and experience. 
          It includes dedicated pages for projects, a downloadable resume, contact options, and smooth animations for an engaging user experience. 
          Designed to be both fast and accessible, the site reflects my attention to detail and focus on modern web development best practices.</p>
        
        <hr className="border-t border-gray-400 mb-10"/>





{/* Image carousel */}
<div className="max-w-[1100px] mx-auto text-center relative">
  <div className="relative w-full h-[500px] overflow-hidden rounded-md">
    <Image
      src={images[index]}
      alt={`Screenshot ${index + 1}`}
      fill
      style={{ objectFit: "contain" }}
      priority
    />

{/* Previous Button */}
<button
  onClick={prev}
  className="absolute top-1/2 left-5 -translate-y-1/2 bg-[#0a0f1a] bg-opacity-80 hover:bg-[#1a1f2e] text-white text-xl w-10 h-10 flex items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-200 ease-in-out"
  aria-label="Previous image"
>
  &#10094;
</button>

{/* Next Button */}
<button
  onClick={next}
  className="absolute top-1/2 right-5 -translate-y-1/2 bg-[#0a0f1a] bg-opacity-80 hover:bg-[#1a1f2e] text-white text-xl w-10 h-10 flex items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-200 ease-in-out"
  aria-label="Next image"
>
  &#10095;
</button>

  </div>
</div>


{/* Tech Stack Section */}
<section className="bg-[#0f1624] rounded-lg p-6 mt-16 mb-10 shadow-md">
  <h2 className="text-2xl font-semibold mb-4 text-white">Tech Breakdown</h2>
  <ul className="text-gray-300 list-disc list-inside space-y-2 pl-2">
<li><span className="text-white font-medium">Next.js (App Router)</span> — powering the frontend architecture</li>
    <li><span className="text-white font-medium">Tailwind CSS</span> — for modern and responsive UI design</li>
    <li><span className="text-white font-medium">Framer Motion</span> — page transitions and micro animations</li>
    <li><span className="text-white font-medium">SendGrid</span> — handles email delivery from the contact form</li>
    <li><span className="text-white font-medium">Google reCAPTCHA</span> — protects the contact form from spam</li>
    <li><span className="text-white font-medium">Leaflet</span> — interactive map integration</li>
    <li><span className="text-white font-medium">Next.js Serverless Functions</span> — lightweight backend</li>
  </ul>
</section>

{/* Features Section */}
<section className="bg-[#0f1624] rounded-lg p-6 mb-10 shadow-md">
  <h2 className="text-2xl font-semibold mb-4 text-white">Core Features</h2>
  <ul className="text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li>Interactive and minimal landing page with call-to-actions</li>
    <li>Project showcase with image galleries and dedicated detail pages</li>
    <li>Built-in PDF resume viewer and bilingual (EN/FR) support</li>
    <li>Dynamic contact popup with Google reCAPTCHA protection</li>
    <li>Smooth animations and mobile-first responsive design</li>
  </ul>
</section>







    </div>
    </div>
  );
}
