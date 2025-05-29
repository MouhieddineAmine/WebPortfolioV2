import type { Metadata } from "next";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import PageLoaderWrapper from '../components/PageLoaderWrapper';


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarBackground";


export const metadata: Metadata = {
  title: "Full-Stack Developer",
  description: "Portfolio of Mouhieddine Amine",
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

        <PageLoaderWrapper>

        <div className="w-full min-h-screen flex-grow flex flex-col relative z-50">
        <Header />
        <div className="w-full mx-auto px-6 py-6 flex-grow flex flex-col relative z-50">
          <main className="flex-grow mt-6">{children}</main>
        </div>
        <Footer/>
        </div>

      </PageLoaderWrapper>

      </body>
    </html>
  );
}
