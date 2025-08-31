"use client";
import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../components/Images";

// Skills Data
const skillsData = [
    { name: "JavaScript", icon: <IMAGES.ICONS.JavaScript /> },
    { name: "React", icon: <IMAGES.ICONS.React /> },
    { name: "Next.Js", icon: <IMAGES.ICONS.NextJs /> },
    { name: "HTML5", icon: <IMAGES.ICONS.HTML /> },
    { name: "CSS3", icon: <IMAGES.ICONS.CSS /> },
    { name: "Bootstrap", icon: <IMAGES.ICONS.BOOSTRAB /> },
    { name: "GitHub", icon: <IMAGES.ICONS.GitHub /> },
    { name: "Typescript", icon: <IMAGES.ICONS.typescript /> },
    { name: "SQL", icon: <IMAGES.ICONS.SQL /> },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="overflow-hidden w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20"
        >
            {/* Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-gray-700">
                My <span className="text-black">Skills</span>
            </h2>

            {/* Slider Wrapper */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 sm:gap-10 md:gap-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 10, // 👈 سرعة السليدر
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >

                    {[...skillsData, ...skillsData].map((skill, i) => (
                        <div
                            key={i}
                            className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] h-28 flex flex-col items-center justify-center border border-gray-200 rounded-xl sm:rounded-2xl shadow-md bg-white"
                        >
                            {/* أيقونة */}
                            <div className="mb-2 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
