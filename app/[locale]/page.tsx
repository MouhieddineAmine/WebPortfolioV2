"use client";
import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";
import TechCarousel from "@/components/TechCarousel";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import Image from "next/image";
import { useLocale } from 'next-intl';
import { useTranslations } from "next-intl";


const Map = dynamic(() => import("../../components/MtlMap"), { ssr: false });

export default function Home() {

   const [paused, setPaused] = useState(false);
   const locale = useLocale();
   const t = useTranslations("home");

  return (
      <>
    <div className="max-w-[3500px] mx-auto flex flex-col items-center px-2 sm:px-4 mt-20">
      <section id="about" className="max-w-[2000px] mb-[70px] text-center">
        <h1 className="typetext text-4xl font-semibold text-white min-h-[120px] sm:min-h-0">
          <Typewriter
            words={[
              "Hello, I'm Mouhieddine Amine",
              "I'm a Full-Stack Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
         <p className="description mt-12 text-gray-300 max-w-[800px]">
          {t("descriptionPT1")}<br/>{t("descriptionPT2")}
        </p>
      </section>
      <div className="flex flex-col sm:flex-row gap-6 mb-[120px]">
      <PageTransition href={`/${locale}/resume`} className="bg-[#E6B821] hover:bg-[#B38C1A] transition w-[200px] py-3 rounded text-white font-semibold shadow-md text-center">
      {t("resumeButton")}
      </PageTransition>
      <PageTransition href={`/${locale}/contact`} className="bg-[#E6B821] hover:bg-[#B38C1A] transition w-[200px] py-3 rounded text-white font-semibold shadow-md text-center">
      {t("contactButton")}
      </PageTransition>
      </div>



<div className="w-screen relative -ml-[50vw] -mr-[50vw] bg-[#010812]/40 mb-[100px] pt-10 pb-10 overflow-x-hidden hover:bg-[#010812]/100 transition-colors duration-400 ease-in-out"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  <div className="text-center text-gray-300 px-2 sm:px-4">
    <h2 className="text-2xl font-semibold mb-4 text-white">{t("technologiesTitle")}</h2>
  </div>

  <TechCarousel paused={paused} />

  <div className="text-center text-gray-300 mt-6 text-sm px-8 sm:px-4">
    <p>
      {t("technologiesExplore")}{" "}
      <PageTransition href={`/${locale}/resume`} className="underline hover:text-[#E6B821] font-semibold">
      {t("technologiesExploreLink")}
      </PageTransition>
    </p>
  </div>
</div>





      <div className="description text-center text-gray-300 mb-[60px]">
        <h2 className="typetext text-2xl font-semibold mb-4 text-white">{t("projectsTitle")}</h2>
        <p className="mb-10 max-w-[800px] mx-auto">
          {t("projectsIntro")}{" "}
          <PageTransition href={`/${locale}/projects`} className="underline hover:text-[#E6B821] font-semibold">
          {t("projectsPortfolioLink")}
          </PageTransition>
        </p>


        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">

          <div className="card bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="typetext text-xl font-semibold text-white mb-2">{t('projects.cannabis.title')}</h3>
            <p className="description text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">{t('projects.cannabis.description')}</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/cannabis/homepage.png" alt="Cannabis Application" className="w-full h-full object-cover" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href={`/${locale}/projectdetails/cannabis`} className="text-[#E6B821] font-semibold hover:underline">
            {t("viewProject")}
            </PageTransition>
          </div>

          <div className="card bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="typetext text-xl font-semibold text-white mb-2">{t('projects.tradeplanner.title')}</h3>
            <p className="description text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">{t('projects.tradeplanner.description')}</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/tradetrack/homepage.png" alt="Tradetrack Application" className="w-full h-full object-cover" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href={`/${locale}/projectdetails/tradeplanner`} className="text-[#E6B821] font-semibold hover:underline">
            {t("viewProject")}
            </PageTransition>
          </div>

          <div className="card bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="typetext text-xl font-semibold text-white mb-2">{t('projects.portfolio.title')}</h3>
            <p className="description text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">{t('projects.portfolio.description')}</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/portfolio/homepage.png" alt="Portfolio" className="w-full h-full object-cover" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href={`/${locale}/projectdetails/portfolio`} className="text-[#E6B821] font-semibold hover:underline">
            {t("viewProject")}
            </PageTransition>
          </div>

          <div className="card bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="typetext text-xl font-semibold text-white mb-2">{t('projects.calculator.title')}</h3>
            <p className="description text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">{t('projects.calculator.description')}</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/calculator/homepage.png" alt="Calculator Application" className="w-full h-full object-contain" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href={`/${locale}/projectdetails/calculator`} className="text-[#E6B821] font-semibold hover:underline">
            {t("viewProject")}
            </PageTransition>
          </div>



        </div>


       <p className="mb-10 mt-10 max-w-[800px] mx-auto">
          {t("moreProjects")}{" "}
          <PageTransition href={`/${locale}/projects`} className="underline hover:text-[#E6B821] font-semibold">
            {t("moreProjectsLink")}
          </PageTransition>
        </p>
      </div>


      <section className="description text-center text-gray-300 max-w-[800px] mb-6 px-2 sm:px-4">
        <h2 className="typetext text-2xl font-semibold mb-2 text-white">{t("locationTitle")}</h2>
        <p>
         {t("locationDescription")}
        </p>
      </section>

      <Map center={[45.5408, -73.6497]} zoom={11} markerText="Un peu près ici / Around here" height="400px" />
      <p className="description text-center text-gray-300 max-w-[800px] mt-5 mb-6 px-2 sm:px-4">{t("availability")}</p>
    </div>
    </>
  );
}