"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      >
        {/* Wrapper for desktop centering */}
        <div className={`w-full transition-all duration-500 ${scrolled ? "md:flex md:justify-center md:pt-4" : "md:pt-6"
          }`}>
          <div
            className={`relative flex justify-between items-center transition-all duration-500 ${scrolled
                ? "bg-white/80 backdrop-blur-md shadow-lg py-3 px-6 md:w-[600px] md:rounded-full md:border md:border-white/20"
                : "w-full container px-6 py-4 md:py-2 bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
              }`}
          >
            <Link href="/" className="relative z-50 group">
              <span className={`text-2xl font-serif font-bold tracking-widest transition-colors duration-300 text-primary ${!scrolled ? "md:text-white md:mix-blend-difference" : ""}`}>
                IRAKLIS
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Magnetic key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-accent ${pathname === link.href ? "text-accent" : "text-primary"
                      } ${!scrolled ? "text-white mix-blend-difference" : ""}`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                      />
                    )}
                  </Link>
                </Magnetic>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 transition-colors duration-300 bg-primary"
              ></motion.span>
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 transition-colors duration-300 bg-primary"
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 transition-colors duration-300 bg-primary"
              ></motion.span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-secondary z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-5xl font-serif font-bold text-primary hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
