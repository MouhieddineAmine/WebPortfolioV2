'use client';

import { PageTransition } from "./PageTransition";

const BtnGoBack = () => {
  return (
    <PageTransition
      href="/"
      className="bg-blue-600 hover:bg-blue-700 transition w-[120px] py-2 rounded text-white font-semibold shadow-md text-center"
      aria-label="Go back to home"
    >
      ← Home
    </PageTransition>
  );
};

export default BtnGoBack;
