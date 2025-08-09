"use client";
import { useState } from "react";
import BtnGoBackProject from "@/components/BtnGoBackProject";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/tradetrack/homepage.png",
  "/tradetrack/Screenshot 2025-06-22 112118.png",
  "/tradetrack/Screenshot 2025-06-22 112147.png",
  "/tradetrack/Screenshot 2025-06-22 112207.png",
];

export default function CannabisPage() {
      const [index, setIndex] = useState(0);
      const t = useTranslations("tradeplanner");

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }
  return (
<div className="card min-h-screen px-5 sm:px-12 bg-[#010812] text-white pt-[35px] mx-0 sm:mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBackProject />
        <h1 className="typetext text-4xl font-bold mb-5 mt-10">{t("title")}</h1>
        <p className="description text-gray-400 mb-[20px]">{t("description")}</p>
        
        <hr className="light-border border-t border-gray-400 mb-10"/>





{/* Image carousel */}
<div className="max-w-[1100px] mx-auto text-center relative">
  <div className="relative w-full h-[260px] sm:h-[300px] md:h-[650px] overflow-hidden rounded-md">
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
  className="absolute top-1/2 left-4 sm:left-8 md:left-15 -translate-y-1/2 bg-[#0a0f1a] bg-opacity-80 hover:bg-[#1a1f2e] text-white text-xl w-10 h-10 flex items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-200 ease-in-out"
  aria-label="Previous image"
>
  &#10094;
</button>

{/* Next Button */}
<button
  onClick={next}
  className="absolute top-1/2 right-4 sm:right-8 md:right-15 -translate-y-1/2 bg-[#0a0f1a] bg-opacity-80 hover:bg-[#1a1f2e] text-white text-xl w-10 h-10 flex items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-200 ease-in-out"
  aria-label="Next image"
>
  &#10095;
</button>

  </div>
</div>


{/* Tech Stack Section */}
<section className="detail-bg bg-[#0f1624] rounded-lg p-6 mt-16 mb-10 shadow-md">
  <h2 className="typetext text-2xl font-semibold mb-4 text-white">{t("techBreakdownTitle")}</h2>
  <ul className="description text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li><span className="typetext text-white font-medium">C# (.NET WPF)</span> — {t("tech.ui")}</li>
    <li><span className="typetext text-white font-medium">SQLite</span> — {t("tech.database")}</li>
    <li><span className="typetext text-white font-medium">LiveCharts</span> — {t("tech.charts")}</li>
    <li><span className="typetext text-white font-medium">MVVM Pattern</span> — {t("tech.mvvm")}</li>
  </ul>
</section>

{/* Features Section */}
<section className="detail-bg bg-[#0f1624] rounded-lg p-6 mb-10 shadow-md">
  <h2 className="typetext text-2xl font-semibold mb-4 text-white">{t("coreFeaturesTitle")}</h2>
  <ul className="description text-gray-300 list-disc list-inside space-y-2 pl-2">
    <li>{t("features.logTrades")}</li>
    <li>{t("features.planTrades")}</li>
    <li>{t("features.dashboard")}</li>
    <li>{t("features.filterSearch")}</li>
    <li>{t("features.cleanUI")}</li>
  </ul>
</section>

    </div>
    </div>
  );
}
