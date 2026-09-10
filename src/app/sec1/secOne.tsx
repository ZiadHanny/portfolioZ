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
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-gradient-to-r from-white via-gray-50 to-white">
      {/* Left Section (Text) */}
      <motion.div
        className="md:w-1/2 space-y-6 text-center md:text-left"
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Hello, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700">
            Ziad Hany
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Frontend{" "}
          <span className="border-2 border-black px-3 py-1 rounded-md shadow-sm inline-block">
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

        {/* Social Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/ziad-hany-9a45b7236/"
            className="px-2 py-2  text-white rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            <IMAGES.ICONS.LinkedIn size={30} />
          </a>
          <a
            href="https://github.com/ZiadHanny"
            className="px-2 py-2 border border-gray-400 text-black rounded-lg shadow-sm hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            <IMAGES.ICONS.GitHub size={30} />
          </a>
          <a
            href=" mailto:ziadhanny579@gmail.com.com?subject=Hello&body=I want to contact you"
            className="px-2 py-2 border border-gray-400 text-black rounded-lg shadow-sm hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            <IMAGES.ICONS.Email size={30} />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative"
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/Banner.svg"
          alt="Illustration"
          width={550}
          height={550}
          className="w-[250px] sm:w-[350px] md:w-[550px] drop-shadow-xl rounded-lg"
          priority
        />

        {/* Decorative Glow Effect */}
        <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-r from-black/10 to-gray-400/20 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
};

export default SecOne;
