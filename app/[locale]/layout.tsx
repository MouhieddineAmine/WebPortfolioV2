import type { Metadata } from "next";
import "../globals.css";
import 'leaflet/dist/leaflet.css';
import PageLoaderWrapper from '../../components/PageLoaderWrapper';


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarBackground";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { promises } from "dns";


export const metadata: Metadata = {
  title: "Full-Stack Developer",
  description: "Portfolio of Mouhieddine Amine",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { locale } = await params;

  let messages;
  try{
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col relative z-10">
        <StarsCanvas />

        <PageLoaderWrapper>

          <NextIntlClientProvider locale={locale} messages={messages}>

        <div className="w-full min-h-screen flex-grow flex flex-col relative z-50">
        <Header />
        <div className="w-full mx-auto px-3 sm:px-6 py-6 flex-grow flex flex-col relative z-50">
          <main className="flex-grow mt-6">{children}</main>
        </div>
        <Footer/>
        </div>
        
        </NextIntlClientProvider>

      </PageLoaderWrapper>

      </body>
    </html>
  );
}
