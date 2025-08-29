"use client";
import React from "react";
import { motion } from "framer-motion";

const SecOne = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-r from-white via-gray-50 to-white">
      {/* Left Section (Text) */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Hello, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700">Ziad Hany</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Frontend{" "}
          <span className="border-2 border-black px-3 py-1 rounded-md shadow-sm">
            Developer
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
          Passionate about building interactive, modern web applications.
          Skilled in React, Next.js, and UI/UX design, always aiming for clean
          and scalable code that brings ideas to life.
        </p>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#"
            className="px-5 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="px-5 py-2 border border-gray-400 text-black rounded-lg shadow-sm hover:bg-gray-100 hover:scale-105 transition"
          >
            GitHub
          </a>
          <a
            href="#"
            className="px-5 py-2 border border-gray-400 text-black rounded-lg shadow-sm hover:bg-gray-100 hover:scale-105 transition"
          >
            Instagram
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          <img
            src="/Banner.svg"
            alt="Illustration"
            className="max-w-md w-full drop-shadow-xl"
          />
          {/* Decorative Glow Effect */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-black/10 to-gray-400/10 rounded-full blur-2xl"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default SecOne;
