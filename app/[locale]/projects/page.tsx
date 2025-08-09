import BtnGoBack from "@/components/BtnGoBack";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";
import { useLocale } from 'next-intl';
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const locale = useLocale();
  const t = useTranslations("projects");
  return (
<div className="card min-h-screen px-5 sm:px-12 bg-[#010812] text-white pt-[35px] mx-0 sm:mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />
        <h1 className="typetext text-4xl font-bold mb-2 mt-10">{t("title")}</h1>
        <p className="description text-gray-400 mb-[20px]">{t("description")}</p>
        
        <hr className="light-border border-t border-gray-400 mb-10"/>

<div className="flex justify-center items-center gap-3 mb-10 text-gray-400 text-sm">
  <button
    disabled
    className="px-3 py-1 rounded border border-gray-700 bg-[#0a0f1a] text-gray-500 cursor-not-allowed opacity-50"
  >
    {t("paginationPrevious")}
  </button>

  <span className="px-3 py-1 rounded border border-gray-600 bg-[#0a0f1a] text-white font-medium">
    1
  </span>
  <span className="light-pagination px-3 py-1 rounded border border-gray-700 hover:bg-[#1a1f2a] cursor-not-allowed opacity-50">
    2
  </span>
  <span className="light-pagination px-3 py-1 rounded border border-gray-700 hover:bg-[#1a1f2a] cursor-not-allowed opacity-50">
    3
  </span>

  <button
    disabled
    className="px-3 py-1 rounded border border-gray-700 bg-[#0a0f1a] text-gray-500 cursor-not-allowed opacity-50"
  >
    {t("paginationNext")}
  </button>
</div>


<div className="flex flex-col gap-10">
  {/* Project Card */}
  <div className="detail-bg bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="typetext text-2xl font-semibold text-white mb-2">
      {t("cannabis.title")}
    </h3>
    <p className="description text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      {t("cannabis.description")}
    </p>
    <Image
      src="/cannabis/homepage.png"
      alt="Cannabis Project"
      width={600}
      height={300}
      className="rounded-md object-cover w-[1000px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href={`/${locale}/projectdetails/cannabis`}
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      {t("viewProject")}
    </PageTransition>
  </div>

  {/* Repeat for other projects */}
  <div className="detail-bg bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="typetext text-2xl font-semibold text-white mb-2">
      {t("tradeplanner.title")}
    </h3>
    <p className="description text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      {t("tradeplanner.description")}
    </p>
    <Image
      src="/tradetrack/homepage.png"
      alt="Trade Planner"
      width={600}
      height={300}
      className="rounded-md object-cover w-[1000px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href={`/${locale}/projectdetails/tradeplanner`}
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      {t("viewProject")}
    </PageTransition>
  </div>

  <div className="detail-bg bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="typetext text-2xl font-semibold text-white mb-2">{t("portfolio.title")}</h3>
    <p className="description text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      {t("portfolio.description")}
    </p>
    <Image
      src="/portfolio/homepage.png"
      alt="Portfolio"
      width={600}
      height={300}
      className="rounded-md object-cover w-[1000px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href={`/${locale}/projectdetails/portfolio`}
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      {t("viewProject")}
    </PageTransition>
  </div>

  <div className="detail-bg bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="typetext text-2xl font-semibold text-white mb-2">{t("calculator.title")}</h3>
    <p className="description text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      {t("calculator.description")}
    </p>
    <Image
      src="/calculator/homepage.png"
      alt="Smart Calculator"
      width={300}
      height={400}
      className="rounded-md object-cover w-[250px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href={`/${locale}/projectdetails/calculator`}
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      {t("viewProject")}
    </PageTransition>
  </div>
</div>

    </div>
    </div>
  );
}
