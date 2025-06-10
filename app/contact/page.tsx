"use client";
import BtnGoBack from "@/components/BtnGoBack";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactPage() {
  const [isRVerified, setIsRVerified] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPopup, setShowPopup] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleClear = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

const validate = () => {
  const newErrors: { [key: string]: string } = {};

  if (!form.name.trim()) newErrors.name = "Name is required.";
  else if (form.name.length < 2) newErrors.name = "Name must be at least 2 characters.";

  if (!form.email.trim()) newErrors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format.";

  if (!form.subject.trim()) newErrors.subject = "Subject is required.";
  else if (form.subject.length < 2) newErrors.subject = "Subject must be at least 2 characters.";

  if (!form.message.trim()) newErrors.message = "Message is required.";
  else if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters.";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  if (!recaptchaToken) {
    setRecaptchaError("Please complete the reCAPTCHA.");
    return;
  }

  // send form to your API endpoint
  fetch("/api/contactbackend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
      setTimeout(()=>{
      setShowPopup(true);
      setIsFadingOut(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      }, 500);
    })
    .catch(() => alert("Something went wrong. Please try again."));
};

const handleClosePopup = () => {
  setIsFadingOut(true);
  setTimeout(() => {
    setShowPopup(false);
    setIsFadingOut(false);
    document.body.style.overflow = "auto";
  }, 300);
};

const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);


  return (
    <div className="min-h-screen px-12 bg-[#010812] text-white pt-[35px] mx-5 pb-[60px] rounded-xl">
      <div className="max-w-6xl mx-auto">
        <BtnGoBack />

        <h1 className="text-4xl font-bold mb-2 mt-10">Get in Touch</h1>
        <p className="text-gray-400 mb-10">I&apos;m open to new opportunities, collaborations, or any questions you may have.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 bg-[#041224] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#E6B821]">Contact Info</h2>

            <div className="mb-10 pt-2 text-sm text-gray-300 font-semibold">
              <input type="checkbox" id="recaptcha-check" className="mr-2 accent-[#E6B821]"
              onChange={(f) => setIsRVerified(f.target.checked)}/>
              <label htmlFor="recaptcha-check" className="cursor-pointer hover:text-[#E6B821]">I am not a robot – reveal contact</label>
              <hr className="mt-5 border-t border-gray-700" />
            </div>

            <div className="space-y-4 text-sm font-semibold">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#E6B821]" />
                <a href="mailto:youremail@example.com" className="hover:underline">
                  <span className={`${isRVerified ? '' : 'blur-[2px]'} transition`}>amine.mouhieddine01@gmail.com</span> 
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-[#E6B821]" />
                <a href="tel:+1234567890" className="hover:underline">
                  <span className={`${isRVerified ? '' : 'blur-[2px]'} transition`}>+1 (514) 570-0463</span>
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
                  <span className={`${isRVerified ? '' : 'blur-[2px]'} transition`}>https://www.linkedin.com/in/mouhieddine-amine-0b9837269/</span>
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
                  <span className={`${isRVerified ? '' : 'blur-[2px]'} transition`}>https://github.com/MouhieddineAmine</span>
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
                  <span className={`${isRVerified ? '' : 'blur-[2px]'} transition`}>Montréal, Québec</span>
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-2 bg-[#041224] p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#E6B821]">Send a Message</h2>

            <div>
              <label htmlFor="name" className="block text-[15px] mb-1 ml-1 font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
              <p className={`text-red-500 text-sm mt-1 ml-1 min-h-[1.25rem] ${
                errors.name ? "visible" : "invisible"}`}>{errors.name || " "}</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-[15px] mb-1 ml-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
              <p className={`text-red-500 text-sm mt-1 ml-1 min-h-[1.25rem] ${
                errors.email ? "visible" : "invisible"}`}>{errors.email || " "}</p>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[15px] mb-1 ml-1 font-semibold">
                Subject
              </label>
              <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
              <p className={`text-red-500 text-sm mt-1 ml-1 min-h-[1.25rem] ${
                errors.subject ? "visible" : "invisible"}`}>{errors.subject || " "}</p>
            </div>


            <div>
              <label htmlFor="message" className="block text-[15px] mb-1 ml-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="min-h-[5rem] w-full px-4 py-2 rounded-md bg-[#010812] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E6B821]"
              />
              <p className={`text-red-500 text-sm mt-1 ml-1 min-h-[1.25rem] ${
                errors.message ? "visible" : "invisible"}`}>{errors.message || " "}</p>
            </div>

            <button
              type="submit"
              className="bg-[#E6B821] text-white font-semibold px-6 py-2 rounded hover:bg-[#b38c1a] transition w-full"
            >
              Send Message
            </button>
            <button
            type="button" onClick={handleClear}
            className="mt-2 w-full bg-gray-700 text-white font-semibold px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Clear Form
            </button>
            
            <div className="w-full flex flex-col justify-center mt-[20px]">
            <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token: string | null) => setRecaptchaToken(token)}
            theme="dark"/>
            {recaptchaError && (
              <p className="text-red-500 text-sm mt-2 text-center">{recaptchaError}</p>
              )}
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
  <div className={`fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50
      ${isFadingOut
        ? "animate-[fadeBackdropOut_0.3s_ease-out_forwards]"
        : "animate-[fadeBackdrop_0.3s_ease-out_forwards]"
      }`}>
    <div className={`relative bg-[#041224] w-[500px] px-[80px] py-[60px] rounded-xl shadow-lg text-center text-white border border-gray-700
        ${isFadingOut
          ? "animate-[fadeOutPopup_0.3s_ease-out_forwards]"
          : "animate-[fadeInPopup_0.3s_ease-out_forwards]"
        }`}>
      {/* Close "X" button */}
      <button
        onClick={handleClosePopup}
        className="absolute top-2 right-3 text-gray-300 hover:text-[#E6B821] text-3xl font-bold transition duration-150 cursor-pointer"
        aria-label="Close"
      >
        ×
      </button>

      {/* Icon */}
      <div className="flex justify-center mb-5 text-4xl text-green-400">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* English + French message with visual separation */}
      <div className="space-y-1 mb-2">
        <p className="text-lg font-semibold">Message sent successfully!</p>
        <p className="text-sm text-gray-300">Thanks for reaching out — I’ll get back to you soon.</p>
        <p className="text-sm text-gray-300 italic">Please check your inbox for confirmation.</p>
      </div>

      <hr className="border-gray-600 my-4" />

      <div className="space-y-1">
        <p className="text-lg font-semibold">Message envoyé avec succès&nbsp;!</p>
        <p className="text-sm text-gray-300">Merci pour votre message — je vous répondrai bientôt.</p>
        <p className="text-sm text-gray-300 italic">Veuillez vérifier votre boîte de réception pour la confirmation.</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
