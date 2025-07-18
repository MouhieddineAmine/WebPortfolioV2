"use client";
import { useState } from "react";
import BtnGoBackProject from "@/components/BtnGoBackProject";
import Image from "next/image";

const images = [
  "/tradetrack/homepage.png",
  "/tradetrack/Screenshot 2025-06-22 112118.png",
  "/tradetrack/Screenshot 2025-06-22 112147.png",
  "/tradetrack/Screenshot 2025-06-22 112207.png",
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
        <h1 className="text-4xl font-bold mb-5 mt-10">Trading Journal & Planner</h1>
        <p className="text-gray-400 mb-[20px]">A desktop application built to help traders plan, log, and reflect on their trades more effectively. 
          Users can record detailed entries for each trade, including strategy notes, outcomes, and performance metrics. 
          The app also features a dashboard that visualizes trading results over time, helping users analyze patterns and make more informed decisions.</p>
        
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
    <li><span className="text-white font-medium">C# (.NET WPF)</span> — for the desktop UI</li>
    <li><span className="text-white font-medium">SQLite</span> — lightweight local database</li>
    <li><span className="text-white font-medium">LiveCharts</span> — for rendering interactive charts and analytics</li>
    <li><span className="text-white font-medium">MVVM Pattern</span> — for maintainable architecture</li>
  </ul>
</section>

{/* Features Section */}
<section className="bg-[#0f1624] rounded-lg p-6 mb-10 shadow-md">
  <h2 className="text-2xl font-semibold mb-4 text-white">Core Features</h2>
  <ul className="text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li>Log trades with strategy, entry/exit points, and personal notes</li>
    <li>Plan future trades and review pending setups</li>
    <li>Dashboard with charts to track performance, win rate, and equity growth</li>
    <li>Filter and search trades by date, strategy, or result</li>
    <li>Clean UI for quick review and easy navigation</li>
  </ul>
</section>







    </div>
    </div>
  );
}
