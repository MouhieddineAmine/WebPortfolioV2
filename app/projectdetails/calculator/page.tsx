"use client";
import { useState } from "react";
import BtnGoBack from "@/components/BtnGoBack";

export default function CannabisPage() {
  return (
<div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />
        <h1 className="text-4xl font-bold mb-5 mt-10">Cannabis Cultivation & Inventory</h1>
        <p className="text-gray-400 mb-[20px]">Desktop application designed to streamline and centralize the management of cannabis production. It allows growers to monitor individual plant health, track progress through all growth stages, and manage inventory with precision.
            Each plant is assigned a unique QR code, making it easy to identify and update records quickly. The app also supports bulk importing plant data from Excel files, which simplifies onboarding large batches and reduces manual entry.
            With features tailored for cultivation workflows—like batch tracking, status updates, and health notes—the app ensures cultivators stay organized, efficient, and compliant throughout the entire grow cycle.</p>
        
        <hr className="border-t border-gray-400 mb-10"/>





    </div>
    </div>
  );
}
