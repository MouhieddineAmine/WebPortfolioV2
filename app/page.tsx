"use client";
import { Typewriter } from "react-simple-typewriter";
import Link from 'next/link';
import dynamic from "next/dynamic";
import TechCarousel from "@/components/TechCarousel";
import PageTransition from "@/components/PageTransition";


const Map = dynamic(() => import("../components/MtlMap"), { ssr: false });

export default function Home() {
  return (
      <>
      <PageTransition>
    <div className="max-w-[2000px] mx-auto flex flex-col items-center px-15 mt-20">
      <section id="about" className="mb-[70px] text-center">
        <h1 className="text-4xl font-semibold text-white">
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
         <p className="mt-12 text-gray-300 max-w-[800px]">
          I&apos;m a Full-Stack Developer passionate about creating robust applications that deliver seamless user experiences.<br/>
          I Enjoy tackling complex challenges through clean, maintainable code and focus on building scalable, reliable solutions across front-end, back-end, and database systems.
        </p>
      </section>
      <div className="flex gap-6 mb-[80px]">
      <Link href="/resume" className="bg-[#E6B821] hover:bg-[#B38C1A] transition w-[200px] py-3 rounded text-white font-semibold shadow-md text-center">
      Resume
      </Link>
      <Link href="/contact" className="bg-[#E6B821] hover:bg-[#B38C1A] transition w-[200px] py-3 rounded text-white font-semibold shadow-md text-center">
      Contact Info
      </Link>
      </div>

      <div className="text-center text-gray-300 mb-[80px] bg-[#010812]">
        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies I Use</h2>
        <TechCarousel />
        <p className="text-gray-400 mt-6 text-sm">
          Interested in a deeper dive into the tools and technologies I work with?{" "}
          <Link href="/resume" className="underline hover:text-[#E6B821] font-semibold">
          Explore my full tech stack.
          </Link>
        </p>
      </div>


      <section className="text-center text-gray-300 max-w-[800px] mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">My Location</h2>
        <p>
          I’m based in the Greater Montreal area. You can find me around here:
        </p>
      </section>

      <Map center={[45.5408, -73.6497]} zoom={11} markerText="Un peu près ici / Around here" height="400px" />
      <p className="text-center text-gray-300 max-w-[800px] mt-5 mb-6">I&apos;m open to local, remote, and hybrid opportunities.</p>
    </div>
    </PageTransition>
    </>
  );
}