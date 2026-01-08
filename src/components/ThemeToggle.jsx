import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/library/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

    useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [isDarkMode]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    return (
        <button onClick={toggleTheme}
            className={cn("fixed max-sm:hidden top-2.5 left-5 z-50 p-3 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}
        >
        {" "}
        {isDarkMode ? (
            <Sun className="h-8 w-8 text-yellow-300" /> 
        ) : (
            <Moon className="h-8 w-8 text-gray-700" />
        )}
    </button>
    );
};