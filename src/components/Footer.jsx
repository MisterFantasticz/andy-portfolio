/** @format */

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 600; // duration in milliseconds
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      // easeOutCubic easing
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start * (1 - ease(progress)));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Andy.co. All rights reserved.
        </p>
      </footer>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary/10 text-primary shadow-lg transition-all duration-300
          ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </>
  );
};
