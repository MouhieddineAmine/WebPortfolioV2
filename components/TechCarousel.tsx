"use client";
import React from "react";
import Image from "next/image";
import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiDotnet,
  SiMysql,
  SiSqlite,
  SiKotlin,
  SiSwift,
  SiJquery,
  SiBootstrap,
  SiAngular,
  SiExpress,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-10 h-10" /> },
  { name: "GitHub", icon: <FaGithub className="text-white w-10 h-10" /> },
  { name: "Python", icon: <FaPython className="text-blue-300 w-10 h-10" /> },
  { name: "C#",icon: <Image src="/c-sharp.svg" alt="C#" className="w-10 h-10"/> },
  { name: ".NET", icon: <SiDotnet className="text-blue-500 w-10 h-10" /> },
  { name: "SQLite", icon: <SiSqlite className="text-gray-400 w-10 h-10" /> },
  { name: "Java", icon: <FaJava className="text-orange-500 w-10 h-10" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500 w-10 h-10" /> },
  { name: "Swift", icon: <SiSwift className="text-orange-400 w-10 h-10" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-700 w-10 h-10" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-10 h-10" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 w-10 h-10" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-10 h-10" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-10 h-10" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500 w-10 h-10" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600 w-10 h-10" /> },
  { name: "Angular", icon: <SiAngular className="text-red-600 w-10 h-10" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-10 h-10" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-10 h-10" /> },
  { name: "Express", icon: <SiExpress className="text-white w-10 h-10" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-10 h-10" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 w-10 h-10" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300 w-10 h-10" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-700 w-10 h-10" /> },
  { name: "Vercel", icon: <SiVercel className="text-white w-10 h-10" /> },
];


const ITEM_WIDTH = 200; // px including margin

export default function TechCarousel({paused}: {paused:boolean}) {
  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <>
      <style>{`
        .carousel-container {
          overflow: hidden;
          background: transparent;
          padding: 1rem 0;
          width: 100%;
          user-select: none;
        }
        .carousel-track {
          display: flex;
          width: ${duplicatedTechs.length * ITEM_WIDTH}px;
          animation: scroll 30s linear infinite;
          transition: animation-play-state 0.3s ease;
          animation-play-state: ${paused ? "paused" : "running"};
        }
        .carousel-item {
          flex: 0 0 auto;
          width: ${ITEM_WIDTH - 20}px;
          margin-right: 20px;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.1rem;
        }
        .carousel-item svg {
          font-size: 3rem;
          margin-bottom: 0.4rem;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${techs.length * ITEM_WIDTH}px);
          }
        }
      `}</style>

      <section
        className="carousel-container"
        aria-label="Technology Carousel"
        role="list"
      >
        <div className="carousel-track"  aria-live="off">
          {duplicatedTechs.map((tech, i) => (
            <div className="carousel-item" key={i} role="listitem">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
