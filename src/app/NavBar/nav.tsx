"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["About Me", "Skills", "Experience", "Projects", "Contact Me"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`w-full px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div
        className="text-2xl font-bold flex items-center text-gray-900 gap-2 tracking-wide cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Circle size={18} className="text-indigo-600" fill="currentColor" />
        <span className="font-caveat text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
          ZHM
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        {navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="https://drive.google.com/file/d/1znKWsV0YOpluYzmHYV8dr4UIz6EN8tPU/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-5 py-2 rounded-lg items-center gap-2 shadow-md shadow-indigo-200 hover:shadow-lg hover:scale-105 transition"
        whileHover={{ y: -2 }}
      >
        My Resume
      </motion.a>

      <button
        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-gray-900 rounded transition ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-gray-900 rounded transition ${isOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-gray-900 rounded transition ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-6 py-8 md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1znKWsV0YOpluYzmHYV8dr4UIz6EN8tPU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition"
              onClick={() => setIsOpen(false)}
            >
              My Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
