"use client";
import { useState } from "react";
import BtnGoBackProject from "@/components/BtnGoBackProject";
import Image from "next/image";

const images = [
  "/cannabis/Screenshot 2025-06-22 111346.png",
  "/cannabis/homepage.png",
  "/cannabis/Screenshot 2025-06-22 111227.png",
  "/cannabis/Screenshot 2025-06-22 111246.png",
  "/cannabis/Screenshot 2025-06-22 111258.png",
  "/cannabis/Screenshot 2025-06-22 111330.png",
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
        <h1 className="text-4xl font-bold mb-5 mt-10">Cannabis Cultivation & Inventory</h1>
        <p className="text-gray-400 mb-[20px]">Desktop application designed to streamline and centralize the management of cannabis production. It allows growers to monitor individual plant health, track progress through all growth stages, and manage inventory with precision.
            Each plant is assigned a unique QR code, making it easy to identify and update records quickly. The app also supports bulk importing plant data from Excel files, which simplifies onboarding large batches and reduces manual entry.
            With features tailored for cultivation workflows—like batch tracking, status updates, and health notes—the app ensures cultivators stay organized, efficient, and compliant throughout the entire grow cycle.</p>
        
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
    <li><span className="text-white font-medium">SQL</span> — database</li>
    <li><span className="text-white font-medium">ZXing.Net</span> — QR code generation</li>
    <li><span className="text-white font-medium">EPPlus</span> — Excel data import</li>
    <li><span className="text-white font-medium">MVVM Pattern</span> — for maintainable architecture</li>
  </ul>
</section>

{/* Features Section */}
<section className="bg-[#0f1624] rounded-lg p-6 mb-10 shadow-md">
  <h2 className="text-2xl font-semibold mb-4 text-white">Core Features</h2>
  <ul className="text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li>Track plant stages, health, and lifecycle</li>
    <li>QR code assignment & scanning for each plant</li>
    <li>Bulk import plants from Excel</li>
    <li>Manage cultivation batches and inventory flow</li>
    <li>Attach notes and set status updates for each unit</li>
  </ul>
</section>







    </div>
    </div>
  );
}
