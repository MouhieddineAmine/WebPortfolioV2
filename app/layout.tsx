import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarBackground";

export const metadata: Metadata = {
  title: "Full-Stack Developer",
  description: "Minimalistic portfolio of Mouhieddine Amine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative z-10">
        <StarsCanvas />
        <Header />
        <div className="w-full mx-auto px-6 py-6 flex-grow flex flex-col relative z-50">
          <main className="flex-grow mt-6">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
