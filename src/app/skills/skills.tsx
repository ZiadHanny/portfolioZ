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
];

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 text-center bg-gradient-to-b from-white to-gray-50"
        >
            {/* Title */}
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My <span className="text-black">Skills</span>
            </motion.h2>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 place-items-center"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {skillsData.map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        animate={{
                            y: [0, -10, 0], // يتحرك لفوق شوية وينزل تاني
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: i * 0.2, // ⏳ كل عنصر يبدأ متأخر شوية
                        }}
                        whileHover={{
                            scale: 1.12,
                            boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                        }}
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center border border-gray-200 rounded-xl sm:rounded-2xl shadow-md bg-white cursor-pointer transition"
                    >
                        <div className="mb-2 sm:mb-3 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                            {skill.icon}
                        </div>
                        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
