/** @format */

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/library/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [showButton, setShowButton] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    // Apply theme
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        // scrolling down
        setShowButton(false);
      } else {
        // scrolling up
        setShowButton(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className={cn(
        "fixed top-4 z-50 p-0.5 rounded-full transition-transform duration-300",
        "left-5 sm:left-5 md:left-5",
        "hover:bg-primary/10 focus:outline-none",
        showButton ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      )}
      aria-label="Toggle theme">
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
};
