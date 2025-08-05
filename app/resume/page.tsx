"use client";
import { useState } from "react";
import BtnGoBack from "@/components/BtnGoBack";
import { FaGraduationCap, FaLanguage, FaBriefcase, FaTools, FaUserFriends } from "react-icons/fa";

export default function ResumePage() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  const resumePdf = lang === "fr" ? "/resumeFR.pdf" : "/resumeEN.pdf";
  const resumeDoc = lang === "fr" ? "/resumeFR.docx" : "/resumeFR.docx";
  return (
    <div className="card min-h-screen px-5 sm:px-12 bg-[#010812] text-white pt-[35px] mx-0 sm:mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />
        <h1 className="typetext text-4xl font-bold mb-2 mt-10">My Resume</h1>
        <p className="description text-gray-400 mb-[20px]">Here&apos;s a quick look at my experience and education. You can also download or view the PDF version directly.</p>
        
        <hr className="light-border border-t border-gray-400"/>

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

          <p className="description text-sm text-gray-400 italic text-center mt-2">
            If the PDF doesn&apos;t display, try disabling automatic PDF downloads in your browser settings or use another browser.
          </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href={resumePdf}
            download
            className="w-[250px] text-center px-5 py-2 bg-[#E6B821] text-white font-semibold rounded hover:bg-[#B38C1A] transition"
          >
            Download Resume (.PDF)
          </a>
          <a
            href={resumeDoc}
            download
            className="w-[250px] text-center px-5 py-2 bg-[#E6B821] text-white font-semibold rounded hover:bg-[#B38C1A] transition"
          >
            Download Resume (.DOCX)
          </a>
        </div>

        <hr className="light-border border-t border-gray-400 mt-[50px] mb-[50px]"/>

<div className="mt-20 max-w-4xl mx-auto space-y-12">
  {/* Education */}
  <section>
    <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-4 text-[#E6B821]">
      <FaGraduationCap /> Education
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="detail-bg bg-[#112244] rounded-lg p-6 border border-gray-700 hover:border-[#E6B821] transition shadow-md">
        <h3 className="text-xl font-semibold mb-2">Diploma in Computer Programming</h3>
        <p className="description text-gray-400 mb-1">Collège La Cité</p>
        <p className="description text-gray-400 italic">Graduated 2024</p>
      </div>
      <div className="detail-bg bg-[#112244] rounded-lg p-6 border border-gray-700 hover:border-[#E6B821] transition shadow-md">
        <h3 className="text-xl font-semibold mb-2">High School Diploma</h3>
        <p className="description text-gray-400 mb-1">Lycée Scientifique Souissi</p>
        <p className="description text-gray-400 italic">Graduated 2021</p>
      </div>
    </div>
  </section>

{/* Languages */}
<section>
  <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-4 text-[#E6B821]">
    <FaLanguage /> Languages
  </h2>
  <div className="grid sm:grid-cols-2 gap-8 max-w-xl mx-auto">
    {[
      { label: "English", level: "Fluent" },
      { label: "French", level: "Fluent" },
    ].map((lang) => (
      <div
        key={lang.label}
        className="detail-bg bg-[#112244] rounded-lg p-6 border border-gray-700 hover:border-[#E6B821] transition shadow-md text-center"
      >
        <p className="font-semibold text-lg">{lang.label}</p>
        <p className="description text-gray-400 italic">{lang.level}</p>
      </div>
    ))}
  </div>
</section>


  {/* Current Employment */}
  <section>
    <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-4 text-[#E6B821]">
      <FaBriefcase /> Current Employment
    </h2>
    <div className="detail-bg max-w-sm mx-auto bg-[#112244] border border-gray-700 rounded-lg p-6 shadow-md text-center hover:border-[#E6B821] transition">
      <p className="font-semibold text-lg">UPS Class 5 Driver</p>
      <p className="description text-gray-400 italic mt-1">Since 2025</p>
    </div>
  </section>
</div>

<hr className="light-border border-t border-gray-400 mt-[50px] mb-[50px]"/>

<div className="mt-20">
  <h2 className="flex items-center justify-center gap-4 text-3xl text-[#E6B821] font-bold text-center mb-6"><FaTools /> What I Work With</h2>

  <div className="mb-12">
    <p className="description text-center text-gray-400 mb-6 text-lg font-medium">
      Languages & Frameworks
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center font-medium text-[15px]">
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
          className="detail-bg bg-[#112244] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
        >
          {tech}
        </div>
      ))}
    </div>
  </div>

  <div className="mb-12">
    <p className="description text-center text-gray-400 mb-6 text-lg font-medium">
      Databases
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center font-medium text-[15px]">
      {["MySQL", "MongoDB", "SQLite", "SQL Server", "Access", "...etc"].map(
        (db) => (
          <div
            key={db}
            className="detail-bg bg-[#112244] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
          >
            {db}
          </div>
        )
      )}
    </div>
  </div>

  <div className="mb-12">
    <p className="description text-center text-gray-400 mb-6 text-lg font-medium">
      Tools & Platforms
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center font-medium text-[15px]">
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
          className="detail-bg bg-[#112244] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
        >
          {tool}
        </div>
      ))}
    </div>
    </div>

      <div className="mb-6">
    <p className="description text-center text-gray-400 mb-6 text-lg font-medium">
      Other
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center font-medium text-[15px]">
      {["Wordpress", "OpenAI API", "Google APIs", "...etc"].map(
        (db) => (
          <div
            key={db}
            className="detail-bg bg-[#112244] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
          >
            {db}
          </div>
        )
      )}
    </div>
  </div>
  
</div>

<div className="mt-20">
  <h2 className="flex items-center justify-center gap-4 text-3xl text-[#E6B821] font-bold text-center mb-6">
    <FaUserFriends /> Soft Skills
  </h2>

  <p className="description text-center text-gray-400 mb-6 text-lg font-medium">
    Skills and Qualities
  </p>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center font-medium text-[15px]">
    {[
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
      "Communication",
      "Time Management",
      "Attention to Detail",
      "...etc"
    ].map((skill) => (
      <div
        key={skill}
        className="detail-bg bg-[#112244] border border-gray-700 rounded-lg py-3 px-4 hover:border-[#E6B821] transition"
      >
        {skill}
      </div>
    ))}
  </div>
</div>

    </div>
    </div>
  );
}
