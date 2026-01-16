/** @format */

import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/library/utils";

export const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const [showButton, setShowButton] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Use refs to persist Audio objects
  const toggleDarkSound = useRef(null);
  const toggleLightSound = useRef(null);

  useEffect(() => {
    toggleDarkSound.current = new Audio("/sounds/toggle-dark.mp3");
    toggleDarkSound.current.volume = 0.2; // adjust here

    toggleLightSound.current = new Audio("/sounds/toggle-light.mp3");
    toggleLightSound.current.volume = 0.2; // adjust here
  }, []);

  // Scroll logic to hide/show button
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Function to play only a segment of audio
  const playAudioSegment = (audioRef, startTime, endTime) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = startTime;
    audioRef.current.play();

    const duration = (endTime - startTime) * 1000; // ms
    setTimeout(() => {
      audioRef.current.pause();
    }, duration);
  };

  const handleToggle = () => {
    if (!isDarkMode) {
      // Light → Dark: start sooner, play 0s → 0.5s
      playAudioSegment(toggleDarkSound, 0.1, 1);
    } else {
      // Dark → Light: play 0s → 0.4s
      playAudioSegment(toggleLightSound, 0, 1);
    }

    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
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
