"use client";
import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";
import TechCarousel from "@/components/TechCarousel";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import Image from "next/image";


const Map = dynamic(() => import("../components/MtlMap"), { ssr: false });

export default function Home() {

   const [paused, setPaused] = useState(false);

  return (
      <>
    <div className="max-w-[3500px] mx-auto flex flex-col items-center px-2 sm:px-4 mt-20">
      <section id="about" className="max-w-[2000px] mb-[70px] text-center">
        <h1 className="text-4xl font-semibold text-white min-h-[120px] sm:min-h-0">
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
      <div className="flex flex-col sm:flex-row gap-6 mb-[120px]">
      <PageTransition href="/resume" className="bg-[#E6B821] hover:bg-[#B38C1A] transition w-[200px] py-3 rounded text-white font-semibold shadow-md text-center">
      Resume
      </PageTransition>
      <PageTransition href="/contact" className="bg-[#E6B821] hover:bg-[#B38C1A] transition w-[200px] py-3 rounded text-white font-semibold shadow-md text-center">
      Contact
      </PageTransition>
      </div>

      <div className="text-center text-gray-300 mb-[100px] bg-[#010812]/40 pt-10 pb-10 px-2 sm:px-6 w-full overflow-x-hidden hover:bg-[#010812]/100 transition-colors duration-400 ease-in-out"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies I Use</h2>
        <TechCarousel paused={paused}/>
        <p className="text-gray-300 mt-6 text-sm">
          Interested in a deeper dive into the tools and technologies I work with?{" "}
          <PageTransition href="/resume" className="underline hover:text-[#E6B821] font-semibold">
          Explore my full tech stack.
          </PageTransition>
        </p>
      </div>

      <div className="text-center text-gray-300 mb-[60px]">
        <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
        <p className="mb-10 max-w-[800px] mx-auto">
          Here&apos;s a quick look at some projects I have worked on. For more,{" "}
          <PageTransition href="/projects" className="underline hover:text-[#E6B821] font-semibold">
            check out my full project portfolio.
          </PageTransition>
        </p>


        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">

          <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-2">Cannabis Cultivation & Inventory</h3>
            <p className="text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">A desktop application for monitoring cannabis plant health, managing cultivation processes, and tracking inventory across growth cycles.</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/cannabis/homepage.png" alt="Cannabis Application" className="w-full h-full object-cover" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href="/projectdetails/cannabis" className="text-[#E6B821] font-semibold hover:underline">
            View project
            </PageTransition>
          </div>

          <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-2">Trading Journal & Planner</h3>
            <p className="text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">A desktop trading companion for logging trade details, planning strategies, writing notes, and visualizing performance analytics in a dashboard.</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/tradetrack/homepage.png" alt="Tradetrack Application" className="w-full h-full object-cover" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href="/projectdetails/tradeplanner" className="text-[#E6B821] font-semibold hover:underline">
            View project
            </PageTransition>
          </div>

          <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-2">Developer Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">A personal portfolio built with Next.js to showcase my projects, resume, and contact information in a responsive, user-friendly layout.</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/portfolio/homepage.png" alt="Portfolio" className="w-full h-full object-cover" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href="/projectdetails/portfolio" className="text-[#E6B821] font-semibold hover:underline">
            View project
            </PageTransition>
          </div>

          <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-2">Smart Calculator</h3>
            <p className="text-gray-400 text-sm mb-4 min-h-[100px] flex items-center justify-center text-center">A desktop calculator inspired by the sleek design of the iOS calculator. It performs basic math operations with a clean and intuitive user interface.</p>

            <div className="flex justify-center mb-[30px]">
            <div className="w-full max-w-[450px] h-[180px] sm:h-[220px] overflow-hidden mx-auto flex items-center justify-center">
            <Image src="/calculator/homepage.png" alt="Calculator Application" className="w-full h-full object-contain" width={1} height={1} sizes='100vw'/>
            </div>
            </div>


            <PageTransition href="/projectdetails/calculator" className="text-[#E6B821] font-semibold hover:underline">
            View project
            </PageTransition>
          </div>



        </div>


       <p className="mb-10 mt-10 max-w-[800px] mx-auto">
          Want to see more?{" "}
          <PageTransition href="/projects" className="underline hover:text-[#E6B821] font-semibold">
            Explore all projects
          </PageTransition>
        </p>
      </div>


      <section className="text-center text-gray-300 max-w-[800px] mb-6 px-2 sm:px-4">
        <h2 className="text-2xl font-semibold mb-2 text-white">My Location</h2>
        <p>
          I&apos;m based in the Greater Montreal area. You can find me around here:
        </p>
      </section>

      <Map center={[45.5408, -73.6497]} zoom={11} markerText="Un peu près ici / Around here" height="400px" />
      <p className="text-center text-gray-300 max-w-[800px] mt-5 mb-6 px-2 sm:px-4">I&apos;m open to local, remote, and hybrid opportunities.</p>
    </div>
    </>
  );
}