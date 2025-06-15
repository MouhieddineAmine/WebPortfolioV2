import BtnGoBack from "@/components/BtnGoBack";

export default function ResumePage() {
  return (
    <div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />
        <h1 className="text-4xl font-bold mb-2 mt-10">My Resume</h1>
        <p className="text-gray-400 mb-10">Here&apos;s a quick look at my experience and education. You can also download or view the PDF version directly.</p>




        <div className="w-full h-[80vh]">
          <iframe
            src="/cv-fr-pdf.pdf"
            className="w-full h-full border border-gray-700 rounded-md"
            title="My Resume PDF"
          ></iframe>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/cv-fr.docx"
            download
            className="inline-block px-5 py-2 bg-white text-[#010812] font-semibold rounded hover:bg-gray-200 transition"
          >
            Download Resume (PDF)
          </a>
        </div>




    </div>
    </div>
  );
}
