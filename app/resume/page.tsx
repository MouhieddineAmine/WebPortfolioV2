"use client";
import { useState } from "react";
import BtnGoBack from "@/components/BtnGoBack";

export default function ResumePage() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  const resumePdf = lang === "fr" ? "/resumeFR.pdf" : "/resumeEN.pdf";
  const resumeDoc = lang === "fr" ? "/resumeFR.docx" : "/resumeFR.docx";
  return (
    <div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />
        <h1 className="text-4xl font-bold mb-2 mt-10">My Resume</h1>
        <p className="text-gray-400 mb-[20px]">Here&apos;s a quick look at my experience and education. You can also download or view the PDF version directly.</p>
        
        <hr className="border-t border-gray-400"/>

        <div className="mt-[50px] mb-6 flex justify-center gap-4">
          <button
            onClick={() => setLang("fr")}
            className={`px-5 py-2 rounded font-semibold transition ${
              lang === "fr"
                ? "bg-[#E6B821] text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            Français
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-5 py-2 rounded font-semibold transition ${
              lang === "en"
                ? "bg-[#E6B821] text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            English
          </button>
        </div>


        <div className="w-full h-[80vh]">
          <iframe
            src={resumePdf}
            className="w-full h-full border border-gray-700 rounded-md"
            title="My Resume PDF"
          ></iframe>
        </div>

          <p className="text-sm text-gray-400 italic text-center mt-2">
            If the PDF doesn&apos;t display, try disabling automatic PDF downloads in your browser settings or use another browser.
          </p>

        <div className="mt-10 text-center space-x-5">
          <a
            href={resumePdf}
            download
            className="inline-block px-5 py-2 bg-[#E6B821] text-white font-semibold rounded hover:bg-[#B38C1A] transition"
          >
            Download Resume (.PDF)
          </a>
          <a
            href={resumeDoc}
            download
            className="inline-block px-5 py-2 bg-[#E6B821] text-white font-semibold rounded hover:bg-[#B38C1A] transition"
          >
            Download Resume (.DOCX)
          </a>
        </div>




    </div>
    </div>
  );
}
