"use client";

import { motion } from "framer-motion";
import Card from "../components/card";

const experiences = [
    {
        title: "Front-End Developer — SamTech Middle East (Remote, Egypt)",
        date: "Aug 2024 – Present",
        description: `
      • Designed and implemented highly responsive, user-friendly web interfaces using HTML, CSS, and JavaScript, improving page load times and user engagement. 
      • Collaborated with UI/UX designers to translate complex mockups into interactive, pixel-perfect components, enhancing the overall user experience. 
      • Worked with backend developers to integrate APIs and dynamic features seamlessly, ensuring smooth functionality across web applications. 
      • Leveraged Git for version control, code reviews, and collaborative development, reducing bugs and accelerating feature delivery. 
      • Optimized website performance and ensured cross-browser and cross-device compatibility, increasing accessibility and usability.
    `,
    },
    {
        title: "Full Stack Developer Trainee — AMIT Learning",
        date: "Nov 2023 – May 2024",
        description: `
      • Completed intensive full-stack training with emphasis on clean architecture, RESTful API development, and Agile methodologies. 
      • Developed and delivered multiple full-stack projects, implementing backend logic, database integration, and dynamic front-end interfaces. 
      • Collaborated in teams using Git-based workflows, enhancing version control, code quality, and project management skills. 
      • Applied modern best practices to optimize performance, maintainable code, and scalable application structures.
    `,
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
                    className="relative grid gap-10 md:gap-14 md:grid-cols-1"
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
