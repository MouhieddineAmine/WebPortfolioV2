"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PageTransition } from "@/components/PageTransition";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


export default function Footer() {
  const [isVerified, setIsVerified] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (targetLocale: string) => {
  const segments = pathname.split("/");
  segments[1] = targetLocale; // replace current locale segment
  return segments.join("/");};
  
  const t = useTranslations("footer");


  return (
    <footer id="footer" className="w-full bg-[#010812] text-gray-400 pt-10 mt-20 border-t border-gray-700 z-50">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Contact Info */}
        <div className="flex justify-center text-center sm:text-left sm:items-start">
          <div className="text-left md:text-left mx-auto">
            <h3 className="text-white text-[20px] font-bold mb-4 text-center md:text-left">{t("contact")}</h3>

              <div className="mb-4 text-sm text-gray-300 font-semibold flex justify-center md:justify-start">
    <input
      type="checkbox"
      id="captcha-check"
      className="mr-2 accent-[#E6B821]"
      onChange={(e) => setIsVerified(e.target.checked)}
    />
    <label htmlFor="captcha-check" className="cursor-pointer hover:text-[#E6B821]">{t("iAmNotARobot")}</label>
  </div>

            <p className="font-bold flex justify-center md:justify-start gap-1">
              {t("email")}{' '}
                <span className={`${isVerified ? '' : 'blur-[2px]'} transition`}>
                amine.mouhieddine01@gmail.com
                </span>
            </p>
            <p className="font-bold flex justify-center md:justify-start gap-1">
              {t("phone")}{' '}
                <span className={`${isVerified ? '' : 'blur-[2px]'} transition`}>
                +1 (514) 570-0463
                </span>
            </p>
            <p className="font-bold flex justify-center md:justify-start gap-1">
              {t("location")}{' '}
                <span className={`${isVerified ? '' : 'blur-[2px]'} transition`}>
                Montréal, Québec
                </span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center text-center sm:text-left sm:items-start">
          <div className="text-lef mx-auto">
            <h3 className="text-white text-[20px] font-bold mb-4 text-center md:text-left">{t("navigation")}</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <PageTransition href={`/${locale}/`} className="hover:text-[#E6B821] font-bold">{t("home")}</PageTransition>
              </li>
              <li>
                <PageTransition href={`/${locale}/resume`} className="hover:text-[#E6B821] font-bold">{t("resume")}</PageTransition>
              </li>
              <li>
                <PageTransition href={`/${locale}/projects`} className="hover:text-[#E6B821] font-bold">{t("projects")}</PageTransition>
              </li>
              <li>
                <PageTransition href={`/${locale}/contact`} className="hover:text-[#E6B821] font-bold">{t("contactInfo")}</PageTransition>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center text-center sm:text-left sm:items-start">
          <div className="text-left">
            <h3 className="text-white text-[20px] font-bold mb-4 text-center md:text-left">{t("letsConnect")}</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-[#E6B821]">
                <FaGithub className="text-lg" />
                <Link
                  href="https://github.com/MouhieddineAmine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  GitHub
                </Link>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-[#E6B821]">
                <FaLinkedin className="text-lg" />
                <Link
                  href="https://www.linkedin.com/in/mouhieddine-amine-0b9837269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="flex justify-center text-center sm:text-left sm:items-start">
          <div className="flex flex-col items-center w-[180px]">
            <h3 id="language" className="text-white text-[20px] font-bold mb-4 text-center md:text-left">{t("selectLanguage")}</h3>
            <ul className="space-y-2 w-full">
              <li id="btnlanguage-en" className={`flex justify-center items-center bg-gray-800 text-white text-sm w-full h-[35px] rounded-md hover:bg-gray-700 transition border-2 border-transparent ${
    locale === "en" ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"}`}>
                <Image src="https://img.icons8.com/color/100/great-britain.png" alt="English" className="w-[35px] object-contain" width={1} height={1} sizes='100vw'/>
                <Link href={getLocalizedPath("en")} className="font-bold w-[70px] ml-2">English</Link>
              </li>
              <li id="btnlanguage-fr" className={`flex justify-center items-center bg-gray-800 text-white text-sm w-full h-[35px] rounded-md hover:bg-gray-700 transition border-2 border-transparent ${
    locale === "fr" ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"}`}>
                <Image src="https://img.icons8.com/color/100/france.png" alt="Français" className="w-[35px] object-contain" width={1} height={1} sizes='100vw'/>
                <Link href={getLocalizedPath("fr")} className="font-bold w-[70px] ml-2">Français</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-gray-600 border-t border-gray-700 pt-6 pb-6 font-semibold">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
