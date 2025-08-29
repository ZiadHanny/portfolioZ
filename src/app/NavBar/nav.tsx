"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center text-black gap-2 tracking-wide">
        <span className="text-3xl">🚀</span> ZHM
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-black  transition">
        {["About Me", "Skills", "Projects", "Contact Me"].map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.toLowerCase().replace(" ", "")}`}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      {/* Resume button */}
      <motion.a
        href="/resume.pdf"
        download
        className="bg-gradient-to-r from-black to-gray-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition"
        whileHover={{ y: -2 }}
      >
        Resume <span className="text-sm">⬇</span>
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
