"use client";

import React from "react";
import { Circle, Mail, Phone } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { IMAGES } from "../components/Images";

const socialLinks = [
    { icon: <IMAGES.ICONS.Facbook />, link: "#" },
    { icon: <IMAGES.ICONS.LinkedIn />, link: "#" },
    { icon: <IMAGES.ICONS.GitHub />, link: "#" },
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
        <footer id="contactme" className="bg-white border-t border-gray-800 overflow-hidden">
            {/* Main Section */}
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 ">
                {/* Left Section */}
                <motion.div {...fadeInUp(0)} className="flex w-full   justify-between text-center items-center ">
                    {/* Contact Info */}
                    <div>

                        <motion.div {...fadeInUp(0.2, 20)} className="mt-4 space-y-3">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                                <Mail size={18} className="text-gray-900" />
                                <span className="font-medium  text-gray-900">Ziadhany597@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                                <Phone size={18} className="text-gray-900" />
                                <span className="font-medium text-gray-900">+966541401707</span>
                            </div>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            {...fadeInScale(0.4)}
                            className="flex justify-center md:justify-start gap-3 mt-4"
                        >
                            {socialLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    className="p-2 border border-gray-700 rounded-lg text-gray-300 hover:text-blue-400 hover:border-blue-400 transition"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>


                    <div>

                        <h2 className="text-2xl font-bold text-gray-900">
                            Let’s <span className="text-gray-900">talk</span> for
                        </h2>
                        <h3 className="text-xl font-extrabold text-gray-900">Something special</h3>
                        <p className="text-gray-800 max-w-md mx-auto md:mx-0">
                            I seek to push the limits of creativity to create highly engaging,
                            user-friendly, and memorable interactive experiences.
                        </p>
                    </div>


                </motion.div>

                {/* Right Section (Optional) */}
                <motion.div
                    {...fadeInUp(0.3, 50)}
                    className="flex items-center justify-center md:justify-end"
                >
                    {/* هنا ممكن تضيف صورة أو لوجو */}
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-black text-gray-400 py-4"
            >
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
                    {/* Logo + Brand */}
                    <div className="flex items-center gap-2 font-semibold text-white">
                        <Circle size={18} className="text-blue-200" />
                        <span className="font-caveat">ZHM</span>
                    </div>

                    {/* Copyright */}
                    <span className="text-gray-500 text-center md:text-right font-caveat">
                        © 2024 ZHM — Ziad Hany
                    </span>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
