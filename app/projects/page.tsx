import BtnGoBack from "@/components/BtnGoBack";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";

export default function ProjectsPage() {
  return (
<div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />
        <h1 className="text-4xl font-bold mb-2 mt-10">Projects</h1>
        <p className="text-gray-400 mb-[20px]">A few projects I&apos;ve built — click any one to learn more.</p>
        
        <hr className="border-t border-gray-400 mb-10"/>

<div className="flex justify-center items-center gap-3 mb-10 text-gray-400 text-sm">
  <button
    disabled
    className="px-3 py-1 rounded border border-gray-700 bg-[#0a0f1a] text-gray-500 cursor-not-allowed opacity-50"
  >
    Previous
  </button>

  <span className="px-3 py-1 rounded border border-gray-600 bg-[#0a0f1a] text-white font-medium">
    1
  </span>
  <span className="px-3 py-1 rounded border border-gray-700 hover:bg-[#1a1f2a] cursor-not-allowed opacity-50">
    2
  </span>
  <span className="px-3 py-1 rounded border border-gray-700 hover:bg-[#1a1f2a] cursor-not-allowed opacity-50">
    3
  </span>

  <button
    disabled
    className="px-3 py-1 rounded border border-gray-700 bg-[#0a0f1a] text-gray-500 cursor-not-allowed opacity-50"
  >
    Next
  </button>
</div>


<div className="flex flex-col gap-10">
  {/* Project Card */}
  <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="text-2xl font-semibold text-white mb-2">
      Cannabis Cultivation & Inventory
    </h3>
    <p className="text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      A desktop application for monitoring cannabis plant health, managing cultivation processes, and tracking inventory across growth cycles.
    </p>
    <Image
      src="/cannabis/homepage.png"
      alt="Cannabis Project"
      width={600}
      height={300}
      className="rounded-md object-cover w-[1000px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href="/projectdetails/cannabis"
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      View Project
    </PageTransition>
  </div>

  {/* Repeat for other projects */}
  <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="text-2xl font-semibold text-white mb-2">
      Trading Journal & Planner
    </h3>
    <p className="text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      A desktop trading companion for logging trade details, planning strategies, writing notes, and visualizing performance analytics in a dashboard.
    </p>
    <Image
      src="/tradetrack/homepage.png"
      alt="Trade Planner"
      width={600}
      height={300}
      className="rounded-md object-cover w-[1000px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href="/projectdetails/tradeplanner"
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      View Project
    </PageTransition>
  </div>

  <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="text-2xl font-semibold text-white mb-2">Developer Portfolio</h3>
    <p className="text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      A personal portfolio built with Next.js to showcase my projects, resume, and contact information in a responsive, user-friendly layout.
    </p>
    <Image
      src="/portfolio/homepage.png"
      alt="Portfolio"
      width={600}
      height={300}
      className="rounded-md object-cover w-[1000px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href="/projectdetails/portfolio"
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      View Project
    </PageTransition>
  </div>

  <div className="bg-[#0a0f1a] rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
    <h3 className="text-2xl font-semibold text-white mb-2">Smart Calculator</h3>
    <p className="text-gray-400 text-sm mb-4 max-w-[600px] mx-auto">
      A desktop calculator inspired by the sleek design of the iOS calculator. It performs basic math operations with a clean and intuitive user interface.
    </p>
    <Image
      src="/calculator/homepage.png"
      alt="Smart Calculator"
      width={300}
      height={400}
      className="rounded-md object-cover w-[250px] h-full mb-5 mx-auto"
    />
    <PageTransition
      href="/projectdetails/calculator"
      className="inline-block bg-[#E6B821] hover:bg-[#B38C1A] text-white font-semibold px-5 py-2 rounded transition"
    >
      View Project
    </PageTransition>
  </div>
</div>








    </div>
    </div>
  );
}
