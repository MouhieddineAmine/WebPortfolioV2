"use client";
import { useState } from "react";
import BtnGoBackProject from "@/components/BtnGoBackProject";
import Image from "next/image";

const images = [
  "/calculator/homepage.png",
];

export default function CannabisPage() {
      const [index] = useState(0);

  return (
<div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBackProject />
        <h1 className="text-4xl font-bold mb-5 mt-10">Smart Calculator</h1>
        <p className="text-gray-400 mb-[20px]">Smart Calculator is a desktop replica of the iPhone calculator, enhanced with a few extra functions like square root and factorial. 
          It keeps the same clean, familiar look for easy everyday use.</p>
        
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

  </div>
</div>


{/* Tech Stack Section */}
<section className="bg-[#0f1624] rounded-lg p-6 mt-16 mb-10 shadow-md">
  <h2 className="text-2xl font-semibold mb-4 text-white">Tech Breakdown</h2>
  <ul className="text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li><span className="text-white font-medium">C# (.NET WPF)</span> — for the desktop UI</li>
    <li><span className="text-white font-medium">MVVM Pattern</span> — clean and maintainable architecture</li>
  </ul>
</section>

{/* Features Section */}
<section className="bg-[#0f1624] rounded-lg p-6 mb-10 shadow-md">
  <h2 className="text-2xl font-semibold mb-4 text-white">Core Features</h2>
  <ul className="text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li>Simple and familiar iPhone calculator design</li>
    <li>Basic math operations: addition, subtraction, multiplication, division</li>
    <li>Extra functions: square root, factorial, etc.</li>
    <li>No scientific mode or history — focused on quick calculations</li>
  </ul>
</section>







    </div>
    </div>
  );
}
