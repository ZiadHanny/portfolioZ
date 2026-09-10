"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "../components/Images";
import CursorSpotlight from "../components/CursorSpotlight";
import MouseTilt from "../components/MouseTilt";

// Animation Variants
const fadeInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const fadeInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const SecOne = () => {
  return (
    <CursorSpotlight
      id="home"
      className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-gradient-to-b from-[#050414] via-[#0b0a1f] to-[#050414]"
    >
      {/* Decorative glow blobs */}
      <div className="glow-blob animate-blob w-72 h-72 bg-indigo-700/30 -top-10 -left-10" />
      <div className="glow-blob animate-blob w-72 h-72 bg-fuchsia-700/25 top-1/3 right-0 [animation-delay:3s]" />

      {/* Left Section (Text) */}
      <motion.div
        className="relative z-10 md:w-1/2 space-y-6 text-center md:text-left"
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 border border-indigo-400/30 text-indigo-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
          </span>
          Available for new opportunities
        </motion.span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Hello, I’m <span className="gradient-text">Ziad Hany</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-100">
          Frontend{" "}
          <span className="border-2 border-fuchsia-500/60 text-fuchsia-300 px-3 py-1 rounded-md shadow-sm shadow-fuchsia-900/40 inline-block">
            Developer
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Software Developer with 3+ years building high-performance React and Next.js applications. Skilled in
          TypeScript, Node.js, and scalable UI systems. Delivered performance optimizations that reduced load
          times by ~40% and improved user engagement. Seeking Software Engineer or Frontend Engineer roles
          focused on performance and scalable architectures.
        </p>

        {/* CTA + Social */}
        <motion.div
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="#contactme"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-purple-900/50 transition-shadow hover:shadow-purple-700/60"
          >
            Contact Me
          </motion.a>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/ziad-hany-9a45b7236/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/95 rounded-lg shadow-md hover:shadow-fuchsia-500/30 transition-shadow"
            >
              <IMAGES.ICONS.LinkedIn size={26} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ZiadHanny"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/95 rounded-lg shadow-md hover:shadow-fuchsia-500/30 transition-shadow"
            >
              <IMAGES.ICONS.GitHub size={26} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:ziadhanny579@gmail.com?subject=Hello&body=I want to contact you"
              className="p-2 bg-white/95 rounded-lg shadow-md hover:shadow-fuchsia-500/30 transition-shadow"
            >
              <IMAGES.ICONS.Email size={26} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="relative z-10 md:w-1/2 mt-10 md:mt-0 flex justify-center"
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="animate-float">
          <MouseTilt max={8} className="illustration-card p-6">
            <Image
              src="/Banner.svg"
              alt="Illustration"
              width={550}
              height={550}
              className="w-[220px] sm:w-[300px] md:w-[460px]"
              priority
            />
          </MouseTilt>
        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/30 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#aboutme"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-500 hover:text-fuchsia-400 transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-wide">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </CursorSpotlight>
  );
};

export default SecOne;
