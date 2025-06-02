import BtnGoBack from "@/components/BtnGoBack";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#010812] text-white pt-[30px] pb-[60px] rounded-xl">
      <div className="max-w-4xl mx-auto">
        <BtnGoBack />

        <h1 className="text-4xl font-bold mb-2 mt-6">Get in Touch</h1>
        <p className="text-gray-400 mb-10">I&apos;m open to new opportunities, collaborations, or any questions you may have.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 bg-[#041224] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#E6B821]">Contact Info</h2>

            <div className="space-y-4 text-sm font-semibold">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#E6B821]" />
                <a href="mailto:youremail@example.com" className="hover:underline">
                  amine.mouhieddine01@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-[#E6B821]" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (514) 570-0463
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaLinkedin className="text-[#E6B821]" />
                <a
                  href="https://www.linkedin.com/in/mouhieddine-amine-0b9837269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  https://www.linkedin.com/in/mouhieddine-amine-0b9837269/
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaGithub className="text-[#E6B821]" />
                <a
                  href="https://github.com/MouhieddineAmine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  https://github.com/MouhieddineAmine
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#E6B821]" />
                <a
                  href="https://www.google.com/maps/place/Montreal,+QC/@45.5587087,-74.041511,10z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Montréal, Québec
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="/api/contact"
            method="POST"
            className="space-y-6 bg-[#041224] p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#E6B821]">Send a Message</h2>

            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm mb-1">
                Subject
              </label>
              <input
              id="subject"
              name="subject"
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
            </div>


            <div>
              <label htmlFor="message" className="block text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#E6B821] text-black font-semibold px-6 py-2 rounded-lg hover:bg-[#b38c1a] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
