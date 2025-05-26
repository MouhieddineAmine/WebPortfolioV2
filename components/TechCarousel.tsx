"use client";
import { useEffect, useRef } from "react";
import { FaJs, FaPython, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiSass, SiVercel } from "react-icons/si";

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
];

export default function TechCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scroll) {
        scroll.scrollLeft = scrollAmount;
        scrollAmount += 1;
        if (scrollAmount >= scroll.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#111] py-12 text-white overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-8">Tech I Use</h2>
      <div
        ref={scrollRef}
        className="flex w-full gap-12 overflow-x-scroll whitespace-nowrap px-6 scrollbar-hide"
      >
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[100px]"
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-sm text-gray-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
