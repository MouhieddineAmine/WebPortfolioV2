"use client";
import { useState } from "react";
import BtnGoBackProject from "@/components/BtnGoBackProject";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/calculator/homepage.png",
];

export default function CannabisPage() {
      const [index] = useState(0);
      const t = useTranslations("calculator");

  return (
<div className="card min-h-screen px-5 sm:px-12 bg-[#010812] text-white pt-[35px] mx-0 sm:mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBackProject />
        <h1 className="typetext text-4xl font-bold mb-5 mt-10">{t("title")}</h1>
        <p className="description text-gray-400 mb-[20px]">{t("description")}</p>
        
        <hr className="light-border border-t border-gray-400 mb-10"/>





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
<section className="detail-bg bg-[#0f1624] rounded-lg p-6 mt-16 mb-10 shadow-md">
  <h2 className="typetext text-2xl font-semibold mb-4 text-white">{t("techBreakdownTitle")}</h2>
  <ul className="description text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li><span className="typetext text-white font-medium">C# (.NET WPF)</span> — {t("tech.csharp")}</li>
    <li><span className="typetext text-white font-medium">MVVM Pattern</span> — {t("tech.mvvm")}</li>
  </ul>
</section>

{/* Features Section */}
<section className="detail-bg bg-[#0f1624] rounded-lg p-6 mb-10 shadow-md">
  <h2 className="typetext text-2xl font-semibold mb-4 text-white">{t("coreFeaturesTitle")}</h2>
  <ul className="description text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li>{t("features.design")}</li>
    <li>{t("features.basicOps")}</li>
    <li>{t("features.extraFuncs")}</li>
    <li>{t("features.focus")}</li>
  </ul>
</section>







    </div>
    </div>
  );
}
