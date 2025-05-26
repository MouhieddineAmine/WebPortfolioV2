"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <footer id="footer" className="w-full bg-[#010812] text-gray-400 pt-10 mt-20 border-t border-gray-700 z-50">
      <div className="max-w-[1500px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Contact Info */}
        <div className="flex justify-center">
          <div className="text-left">
            <h3 className="text-white text-[20px] font-bold mb-4">Contact</h3>

              <div className="mb-4 text-sm text-gray-300 font-semibold">
    <input
      type="checkbox"
      id="captcha-check"
      className="mr-2 accent-[#E6B821]"
      onChange={(e) => setIsVerified(e.target.checked)}
    />
    <label htmlFor="captcha-check" className="cursor-pointer hover:text-[#E6B821]">I am not a robot – reveal contact</label>
  </div>

            <p className="font-bold">
              Email:{' '}
                <span className={`${isVerified ? '' : 'blur-[2px]'} transition`}>
                amine.mouhieddine01@gmail.com
                </span>
            </p>
            <p className="font-bold">
              Phone:{' '}
                <span className={`${isVerified ? '' : 'blur-[2px]'} transition`}>
                +1 (514) 570-0463
                </span>
            </p>
            <p className="font-bold">
              Location:{' '}
                <span className={`${isVerified ? '' : 'blur-[2px]'} transition`}>
                Montréal, Québec
                </span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <div className="text-left">
            <h3 className="text-white text-[20px] font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#E6B821] font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#E6B821] font-bold">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E6B821] font-bold">
                  Contact Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center">
          <div className="text-left">
            <h3 className="text-white text-[20px] font-bold mb-4">Let&apos;s Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-[#E6B821]">
                <FaGithub className="text-lg" />
                <Link
                  href="https://github.com/MouhieddineAmine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  GitHub
                </Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#E6B821]">
                <FaLinkedin className="text-lg" />
                <Link
                  href="https://www.linkedin.com/in/mouhieddine-amine-0b9837269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-[180px]">
            <h3 id="language" className="text-white text-[20px] font-bold mb-4">Select Language</h3>
            <ul className="space-y-2 w-full">
              <li id="btnlanguage-en" className="flex justify-center items-center bg-gray-800 text-white text-sm w-full h-[35px] rounded-md hover:bg-gray-700 transition border border-transparent">
                <Image src="https://img.icons8.com/color/100/great-britain.png" alt="English" className="w-[35px] object-contain" width={1} height={1} sizes='100vw'/>
                <button className="font-bold w-[70px]">English</button>
              </li>
              <li id="btnlanguage-fr" className="flex justify-center items-center bg-gray-800 text-white text-sm w-full h-[35px] rounded-md hover:bg-gray-700 transition border border-transparent">
                <Image src="https://img.icons8.com/color/100/france.png" alt="Français" className="w-[35px] object-contain" width={1} height={1} sizes='100vw'/>
                <button className="font-bold w-[70px]">Français</button>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-gray-600 border-t border-gray-700 pt-6 pb-6 font-semibold">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
