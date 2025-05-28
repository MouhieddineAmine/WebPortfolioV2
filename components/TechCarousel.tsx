"use client";
import React from "react";
import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiSass,
  SiVercel,
  SiDotnet,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Sass", icon: <SiSass className="text-pink-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: ".NET", icon: <SiDotnet className="text-blue-500" /> },
  { name: "Entity Framework", icon: <SiDotnet className="text-purple-300" /> },
];

// Width of each item in px (adjust if you change styling)
const ITEM_WIDTH = 200; // including margin/padding

export default function TechCarousel() {
  // duplicate the items 3 times so scrolling looks infinite
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
          /* make sure total width matches item count * item width */
          animation: scroll 30s linear infinite;
        }
        .carousel-item {
          flex: 0 0 auto;
          width: ${ITEM_WIDTH - 20}px; /* item width minus margin */
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
        <div className="carousel-track" aria-live="off">
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
