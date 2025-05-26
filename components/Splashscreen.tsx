import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import welcomeAnimation from "@/public/animations/loading.json";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#010812] text-white">
      <Lottie
        animationData={welcomeAnimation}
        loop={false}
        className="w-[420px] h-[400px]"
      />
    </div>
  );
}
