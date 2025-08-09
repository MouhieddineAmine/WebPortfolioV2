'use client';

import { PageTransition } from "./PageTransition";
import { IoReturnUpBack } from "react-icons/io5";
import { useLocale } from 'next-intl';
import { useTranslations } from "next-intl";
import React from "react";


interface BtnGoBackProps {
  sendLocale: (locale: string) => void;  // callback to send locale up
}

const BtnGoBack = ({ sendLocale }: BtnGoBackProps) => {
  const locale = useLocale();
  const t = useTranslations("btnBack");

  // Send locale back to parent once on mount
  React.useEffect(() => {
    sendLocale(locale);
  }, [locale, sendLocale]);
  return (
    <PageTransition
      href={`/${locale}/`}
      className="bg-[#E6B821] hover:bg-[#B38C1A] px-8 transition w-fit py-3 rounded text-white font-semibold text-center flex items-center justify-center gap-2"
      >
      <IoReturnUpBack className="w-6 h-6" />
      {t("home")}
    </PageTransition>
  );
};

export default BtnGoBack;
