'use client';

import { PageTransition } from "./PageTransition";
import { IoReturnUpBack } from "react-icons/io5";
import { useLocale } from 'next-intl';

const BtnGoBackProject = () => {
  const locale = useLocale();
  return (
    <PageTransition
      href={`/${locale}/projects`}
      className="bg-[#E6B821] hover:bg-[#B38C1A] px-8 transition w-fit py-3 rounded text-white font-semibold text-center flex items-center justify-center gap-2"
      >
      <IoReturnUpBack className="w-6 h-6" />
      Home
    </PageTransition>
  );
};

export default BtnGoBackProject;
