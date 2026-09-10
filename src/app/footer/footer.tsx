"use client";

import React from "react";
import { Circle, Mail, Phone } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { IMAGES } from "../components/Images";

const socialLinks = [
    { icon: <IMAGES.ICONS.LinkedIn size={30} />, link: "https://www.linkedin.com/in/ziad-hany-9a45b7236/" },
    { icon: <IMAGES.ICONS.GitHub size={30} />, link: "https://github.com/ZiadHanny" },
    { icon: <IMAGES.ICONS.Email size={30} />, link: "mailto:ziadhanny579@gmail.com?subject=Hello&body=I want to contact you" },
];

// Animation Variants
const fadeInUp = (delay = 0, y = 30) => ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: easeOut },
    viewport: { once: true },
});

const fadeInScale = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay },
    viewport: { once: true },
});

const Footer = () => {
    return (

        <footer id="contactme" className="relative bg-gradient-to-b from-[#0b0a1f] to-[#050414] border-t border-white/10 overflow-hidden">
            <div className="glow-blob w-72 h-72 bg-indigo-700/20 -bottom-10 left-1/4" />

            {/* Main Section */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    {...fadeInUp(0)}
                    whileHover={{ scale: 1.01 }}
                    className="rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 px-6 py-10 md:px-14 md:py-14 flex flex-col md:flex-row justify-between items-center gap-10 shadow-xl shadow-purple-950/60 border border-white/10"
                >
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Let’s talk for
                        </h2>
                        <h3 className="text-xl md:text-2xl font-extrabold text-white/90 mt-1">Something special</h3>
                        <p className="text-white/80 max-w-md mt-4">
                            I seek to push the limits of creativity to create highly engaging,
                            user-friendly, and memorable interactive experiences.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        {/* Contact Info */}
                        <motion.div {...fadeInUp(0.2, 20)} className="space-y-3">
                            <a
                                href="mailto:ziadhanny579@gmail.com?subject=Hello&body=I want to contact you"
                                className="flex items-center justify-center md:justify-start gap-2 text-white hover:text-white/80 transition"
                            >
                                <Mail size={18} />
                                <span className="font-medium">ziadhanny579@gmail.com</span>
                            </a>
                            <a
                                href="tel:+966541401707"
                                className="flex items-center justify-center md:justify-start gap-2 text-white hover:text-white/80 transition"
                            >
                                <Phone size={18} />
                                <span className="font-medium">+966541401707</span>
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            {...fadeInScale(0.4)}
                            className="flex justify-center md:justify-start gap-3 mt-5"
                        >
                            {socialLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 border border-white/30 rounded-lg text-white hover:bg-white hover:text-indigo-600 transition"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative z-10 bg-black text-gray-400 py-4"
            >
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
                    {/* Logo + Brand */}
                    <div className="flex items-center gap-2 font-semibold text-white">
                        <Circle size={18} className="text-indigo-400" fill="currentColor" />
                        <span className="font-caveat text-xl">ZHM</span>
                    </div>

                    {/* Copyright */}
                    <span className="text-gray-500 text-center md:text-right font-caveat text-lg">
                        © {new Date().getFullYear()} ZHM — Ziad Hany
                    </span>
                </div>
            </motion.div>
        </footer>
    )


};

export default Footer;
