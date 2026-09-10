"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Boxes,
    Braces,
    Cpu,
    Database,
    FlaskConical,
    GitBranch,
    LayoutTemplate,
    Server,
} from "lucide-react";
import { IMAGES } from "../components/Images";

// Headline stack shown in the scrolling marquee
const skillsData = [
    { name: "JavaScript", icon: <IMAGES.ICONS.JavaScript /> },
    { name: "TypeScript", icon: <IMAGES.ICONS.typescript /> },
    { name: "React", icon: <IMAGES.ICONS.React /> },
    { name: "Next.Js", icon: <IMAGES.ICONS.NextJs /> },
    { name: "Node.js", icon: <IMAGES.ICONS.NodeJS /> },
    { name: "Redux", icon: <IMAGES.ICONS.Redux /> },
    { name: "Tailwind CSS", icon: <IMAGES.ICONS.TailwindCSS /> },
    { name: "HTML5", icon: <IMAGES.ICONS.HTML /> },
    { name: "CSS3", icon: <IMAGES.ICONS.CSS /> },
    { name: "Bootstrap", icon: <IMAGES.ICONS.BOOSTRAB /> },
    { name: "MongoDB", icon: <IMAGES.ICONS.MongoDB /> },
    { name: "MySQL", icon: <IMAGES.ICONS.SQL /> },
    { name: "GitHub", icon: <IMAGES.ICONS.GitHub /> },
];

// Full stack, grouped exactly as listed on the CV
const skillGroups = [
    {
        title: "Languages",
        icon: Braces,
        items: ["TypeScript", "JavaScript (ES6+)", "C#", "C++"],
    },
    {
        title: "Frontend",
        icon: LayoutTemplate,
        items: ["React.js", "Next.js", "React Native", "SSR/SSG", "Styled-Components", "Tailwind CSS", "Bootstrap", "jQuery"],
    },
    {
        title: "Backend",
        icon: Server,
        items: ["Node.js", "Express.js", "Nest.js", "Basic PHP"],
    },
    {
        title: "State & Data",
        icon: Boxes,
        items: ["React Query", "Redux / Context API", "React Hook Form", "Radix UI", "Shadcn UI", "MUI", "Chart.js"],
    },
    {
        title: "Testing & QA",
        icon: FlaskConical,
        items: ["React Testing Library"],
    },
    {
        title: "Database",
        icon: Database,
        items: ["MySQL", "MongoDB"],
    },
    {
        title: "DevOps",
        icon: Cpu,
        items: ["Docker", "CI/CD"],
    },
    {
        title: "Tools",
        icon: GitBranch,
        items: ["Git", "GitHub Actions", "RESTful APIs", "Jira"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const Skills = () => {
    const [paused, setPaused] = useState(false);

    return (
        <section
            id="skills"
            className="overflow-hidden w-full bg-gradient-to-b from-[#050414] to-[#0d0a22] py-16 md:py-20"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-white"
            >
                My <span className="gradient-text">Skills</span>
            </motion.h2>

            {/* Slider Wrapper */}
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Edge fade masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#050414] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#050414] to-transparent z-10" />

                {/* Shared gradient definition referenced by every icon below */}
                <svg width="0" height="0" className="absolute">
                    <defs>
                        <linearGradient id="skillIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4338ca" />
                            <stop offset="50%" stopColor="#7e22ce" />
                            <stop offset="100%" stopColor="#c026d3" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className={`flex gap-8 sm:gap-10 md:gap-12 animate-scroll ${paused ? "paused" : ""}`}>
                    {[...skillsData, ...skillsData].map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6, scale: 1.05 }}
                            className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] h-28 flex flex-col items-center justify-center border border-white/10 rounded-xl sm:rounded-2xl shadow-md bg-white/5 hover:shadow-lg hover:shadow-indigo-900/30 hover:border-indigo-400/30 transition-all duration-300"
                        >
                            {/* أيقونة */}
                            <div className="icon-gradient mb-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-200">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Full tech-stack, grouped like the CV */}
            <motion.div
                className="max-w-5xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skillGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                        <motion.div
                            key={group.title}
                            variants={item}
                            whileHover={{ y: -4 }}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-400/30 hover:bg-white/[0.05] transition-all"
                        >
                            <div className="flex items-center gap-2 mb-3 text-fuchsia-300">
                                <Icon size={18} />
                                <h3 className="text-sm font-semibold uppercase tracking-wide">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Skills;
