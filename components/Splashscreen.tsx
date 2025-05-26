import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import welcomeAnimation from "@/public/animations/loading.json";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition
      setTimeout(() => {
        setVisible(false); // Unmount after fade-out
        onComplete();
      }, 500); // Duration of fade-out (matches class below)
    }, 3000); // Duration before fade starts

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#010812] transition-opacity duration-[350ms] ${
        fadeOut ? "opacity-0" : "opacity-100"
        }`}
        >
      <Lottie
        animationData={welcomeAnimation}
        loop={false}
        className="w-[420px] h-[400px]"
      />
    </div>
  );
}
