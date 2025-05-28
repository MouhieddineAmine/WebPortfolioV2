import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false); // light is the override

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseLight = savedTheme === "light";

    setIsLight(shouldUseLight);

    // Always apply dark mode by default
    document.documentElement.classList.add("dark");

    // Conditionally apply light override
    document.documentElement.classList.toggle("light-theme", shouldUseLight);
  }, []);

  const toggleTheme = () => {
    const useLight = !isLight;
    setIsLight(useLight);

    document.documentElement.classList.toggle("light-theme", useLight);
    localStorage.setItem("theme", useLight ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full cursor-pointer focus:outline-none"
      style={{
        background: "#041224",
        boxShadow: "inset 0 2px 4px rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.5)",
        border: "1px solid #334155",
        padding: "3px",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        animate={{ x: isLight ? 32 : 0 }}
        className="w-6 h-6 rounded-full bg-gray-500 shadow-md flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-[#fcc308]"
            >
              <FaSun size={14} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-[#122f54]"
            >
              <FaMoon size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
