"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "../components/Images";

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
    <section
      id="home"
      className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white"
    >
      {/* Decorative glow blobs */}
      <div className="glow-blob animate-blob w-72 h-72 bg-indigo-300/30 -top-10 -left-10" />
      <div className="glow-blob animate-blob w-72 h-72 bg-fuchsia-300/30 top-1/3 right-0 [animation-delay:3s]" />

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          Available for new opportunities
        </motion.span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Hello, I’m <span className="gradient-text">Ziad Hany</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Frontend{" "}
          <span className="border-2 border-indigo-600 text-indigo-700 px-3 py-1 rounded-md shadow-sm inline-block">
            Developer
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Frontend Developer with 2+ years building high-performance React and Next.js applications. Skilled in TypeScript,
          React Query, and responsive design. Delivered scalable UI systems and performance optimizations that reduced load
          times by ~40% and improved user engagement. Seeking Frontend Engineer roles focused on performance and scalable
          architectures.
        </p>

        {/* CTA + Social */}
        <motion.div
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#contactme"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-medium shadow-md shadow-indigo-200 hover:shadow-lg hover:scale-105 transition-transform"
          >
            Contact Me
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ziad-hany-9a45b7236/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:text-indigo-600 hover:border-indigo-300 hover:scale-105 transition-transform"
            >
              <IMAGES.ICONS.LinkedIn size={26} />
            </a>
            <a
              href="https://github.com/ZiadHanny"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:text-indigo-600 hover:border-indigo-300 hover:scale-105 transition-transform"
            >
              <IMAGES.ICONS.GitHub size={26} />
            </a>
            <a
              href="mailto:ziadhanny579@gmail.com?subject=Hello&body=I want to contact you"
              className="p-2 border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:text-indigo-600 hover:border-indigo-300 hover:scale-105 transition-transform"
            >
              <IMAGES.ICONS.Email size={26} />
            </a>
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
          <Image
            src="/Banner.svg"
            alt="Illustration"
            width={550}
            height={550}
            className="w-[250px] sm:w-[350px] md:w-[550px] drop-shadow-xl rounded-lg"
            priority
          />
        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-r from-indigo-400/20 to-fuchsia-400/30 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#aboutme"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-400 hover:text-indigo-600 transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-wide">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
};

export default SecOne;
