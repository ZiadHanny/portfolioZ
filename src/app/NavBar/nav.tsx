"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About Me", "Skills", "Projects", "Contact Me"];

  return (
    <motion.nav
      className="w-full bg-white shadow-md px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div
        className="text-2xl font-bold flex items-center text-black gap-2 tracking-wide cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Circle size={18} className="text-gray-900" />
        <span className="w-[18px] font-caveat">ZHM</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-black">
        {navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      {/* Resume button (Desktop only) */}
      <motion.a
        href="https://drive.google.com/file/d/1BUJu7bJ_KSRc0BWICHHzX3NBriLhE30_/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex bg-gradient-to-r from-black to-gray-700 text-white px-5 py-2 rounded-lg items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition"
        whileHover={{ y: -2 }}
      >
        CV
      </motion.a>

      {/* Hamburger (Mobile only) */}
      <button
        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-0.5 w-6 bg-black rounded transition ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-black rounded transition ${isOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-black rounded transition ${isOpen ? "-rotate-45 -translate-y-2" : ""
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
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="text-lg font-medium text-gray-800 hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1BUJu7bJ_KSRc0BWICHHzX3NBriLhE30_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-black to-gray-700 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition"
              onClick={() => setIsOpen(false)}
            >
              CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
