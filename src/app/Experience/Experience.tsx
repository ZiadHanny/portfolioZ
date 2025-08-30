"use client";

import { motion } from "framer-motion";
import Card from "../components/card";

const experiences = [
    {
        title: "Lead Software Engineer at Google",
        date: "Nov 2019 – Present",
        description:
            "Played a pivotal role in developing innovative solutions for Google's core search algorithms. Optimized search accuracy and user experiences for millions of users.",
    },
    {
        title: "Software Engineer at YouTube",
        date: "Jan 2017 – Oct 2019",
        description:
            "Focused on the design and implementation of backend systems for YouTube’s platform, working on large-scale data processing and user engagement features.",
    },
    {
        title: "Junior Software Engineer at Apple",
        date: "Jan 2016 – Dec 2017",
        description:
            "Contributed to mission-critical projects, designing scalable systems and providing technical leadership to cross-functional teams.",
    },
];

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Experience = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-extrabold text-center mb-14"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="text-white">Experience</span>
                </motion.h2>

                {/* Experience List */}
                <motion.div
                    className="relative grid gap-10 md:gap-14 md:grid-cols-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-4 top-3 hidden md:block w-3 h-3 rounded-full bg-white"></div>

                            {/* Card */}
                            <Card
                                title={exp.title}
                                date={exp.date}
                                description={exp.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
