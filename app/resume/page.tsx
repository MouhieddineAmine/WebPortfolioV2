"use client";
import { useState } from "react";
import BtnGoBack from "@/components/BtnGoBack";
import { FaGraduationCap, FaLanguage, FaBriefcase } from "react-icons/fa";

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

        <hr className="border-t border-gray-400 mt-[50px] mb-[50px]"/>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
            <div className="max-w-xl mx-auto text-center text-gray-300 space-y-2">
              <p>
              <strong>Diploma in Computer Programming</strong><br/>
              Collège La Cité<br/>
              Graduated 2024
              </p>
              <p>
              <strong>High School Diploma</strong><br/> 
              Lycée Scientifique Souissi<br/>
              Graduated 2021
              </p>
            </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Languages</h2>
          <p className="text-center text-gray-300">
          English (Fluent)<br/>
          French (Fluent)</p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-6">Current Employment</h2>
          <p className="text-center text-gray-300">
            UPS Class 5 driver
          </p>
        </div>


<div className="mt-20 max-w-4xl mx-auto space-y-12">
  {/* Education */}
  <section>
    <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-yellow-500">
      <FaGraduationCap /> Education
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-[#112244] rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition shadow-md">
        <h3 className="text-xl font-semibold mb-2">Diploma in Computer Programming</h3>
        <p className="text-gray-400 mb-1">Collège La Cité</p>
        <p className="text-gray-500 italic">Graduated 2024</p>
      </div>
      <div className="bg-[#112244] rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition shadow-md">
        <h3 className="text-xl font-semibold mb-2">High School Diploma</h3>
        <p className="text-gray-400 mb-1">Lycée Scientifique Souissi</p>
        <p className="text-gray-500 italic">Graduated 2021</p>
      </div>
    </div>
  </section>

  {/* Languages */}
  <section>
    <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-yellow-500">
      <FaLanguage /> Languages
    </h2>
    <div className="flex justify-center gap-6 flex-wrap">
      {["English (Fluent)", "French (Fluent)"].map((lang) => (
        <span
          key={lang}
          className="bg-[#223355] text-yellow-400 px-4 py-2 rounded-full font-semibold shadow-md"
        >
          {lang}
        </span>
      ))}
    </div>
  </section>

  {/* Current Employment */}
  <section>
    <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-yellow-500">
      <FaBriefcase /> Current Employment
    </h2>
    <div className="max-w-sm mx-auto bg-[#112244] border border-gray-700 rounded-lg p-6 shadow-md text-center">
      <p className="text-yellow-400 font-semibold text-lg">UPS Class 5 Driver</p>
      <p className="text-gray-400 italic mt-1">Since 2022</p>
    </div>
  </section>
</div>




<div className="mt-20">
  <h2 className="text-3xl font-bold text-center mb-6">What I Work With</h2>

  <div className="mb-12">
    <p className="text-center text-gray-400 mb-6 text-lg font-medium">
      Languages & Frameworks
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center">
      {[
        "C#",
        "WPF",
        "Entity Framework",
        ".NET",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Angular.js",
        "Java",
        "Kotlin",
        "Swift",
        "Python",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Node.js",
        "PHP",
        "Bootstrap",
        "jQuery",
        "...etc"
      ].map((tech) => (
        <div
          key={tech}
          className="bg-[#111827] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
        >
          {tech}
        </div>
      ))}
    </div>
  </div>

  <div className="mb-12">
    <p className="text-center text-gray-400 mb-6 text-lg font-medium">
      Databases
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center">
      {["MySQL", "MongoDB", "SQLite", "SQL Server", "Access", "Other APIs", "...etc"].map(
        (db) => (
          <div
            key={db}
            className="bg-[#111827] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
          >
            {db}
          </div>
        )
      )}
    </div>
  </div>

  <div className="mb-12">
    <p className="text-center text-gray-400 mb-6 text-lg font-medium">
      Tools & Platforms
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center">
      {[
        "GitHub",
        "Vercel",
        "Postman",
        "Docker",
        "VS Code",
        "Xcode",
        "Android Studio",
        "Hostinger",
        "...etc"
      ].map((tool) => (
        <div
          key={tool}
          className="bg-[#111827] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
        >
          {tool}
        </div>
      ))}
    </div>
    </div>

      <div className="mb-6">
    <p className="text-center text-gray-400 mb-6 text-lg font-medium">
      Other
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center">
      {["Wordpress", "OpenAI API", "Google APIs", "...etc"].map(
        (db) => (
          <div
            key={db}
            className="bg-[#111827] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
          >
            {db}
          </div>
        )
      )}
    </div>
  </div>
  
</div>



    </div>
    </div>
  );
}
