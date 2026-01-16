/** @format */

import { cn } from "@/library/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // background effect
      setIsScrolled(currentScrollY > 10);

      // hide / show logic
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true); // scrolling down
      } else {
        setIsHidden(false); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const start = window.scrollY;
    const end = targetElement.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const duration = 600; // ms
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + distance * easeOutCubic(progress));

      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-3",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-xs"
          : "bg-transparent",
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}>
      <div className="container relative flex items-center justify-between px-4 md:px-0">
        <a
          href="#hero"
          className="
            absolute left-1/2 -translate-x-1/2
            md:static md:translate-x-0
            flex items-center font-bold text-primary
          "
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#hero");
            setIsMobileMenuOpen(false);
          }}>
          <span className="relative z-10 text-sm md:text-2xl text-center">
            <span className="text-glow text-foreground">Andy Wijaya</span>{" "}
            <span className="block sm:inline text-1xl sm:text">Portfolio</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(item.href);
              }}>
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden ml-auto p-2 text-foreground z-50"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  smoothScrollTo(item.href);
                }}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
