/** @format */

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user scrolls more than 50px
      setShowScrollDown(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi! I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Andy
            </span>
            <br />
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Web Developer • Problem Solver • Builder
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A passionate web developer dedicated to crafting seamless and
            engaging digital experiences. With a knack for problem-solving and a
            love for building innovative solutions, I thrive on turning ideas
            into reality through code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {showScrollDown && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      )}
    </section>
  );
};
