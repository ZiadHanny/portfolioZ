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
        transition: {
            staggerChildren: 0.2, // delay between each card
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
    return (
        <section id="skills" className="px-8 md:px-16 py-20 text-center">
            {/* Title */}
            <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My <span className="font-bold">Skills</span>
            </motion.h2>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {skillsData.map((skill, i) => (
                    <motion.div
                        key={i}
                        // variants={item}
                        whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                        className="w-32 h-32 flex flex-col items-center justify-center border rounded-md shadow-sm bg-white cursor-pointer"
                    >
                        <div className="mb-2 text-black w-12 h-12 flex items-center justify-center">
                            {skill.icon}
                        </div>
                        <p className="text-sm font-medium text-black">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
