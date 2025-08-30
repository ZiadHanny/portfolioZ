"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "../components/Images";

const Footer = () => {
    return (
        <footer
            id="contactme"
            className="bg-white border-t border-gray-200 overflow-hidden">
            {/* Main Section */}
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-3 text-center md:text-left"
                >
                    <h2 className="text-2xl font-bold">
                        Let’s <span className="text-black">talk</span> for
                    </h2>
                    <h3 className="text-xl font-extrabold">Something special</h3>
                    <p className="text-gray-500 max-w-md mx-auto md:mx-0">
                        I seek to push the limits of creativity to create high-engaging,
                        user-friendly, and memorable interactive experiences.
                    </p>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 space-y-1"
                    >
                        <p className="font-medium">youremail@gmail.com</p>
                        <p className="font-medium">1234567890</p>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-start gap-3 mt-4"
                    >
                        {[
                            { icon: <IMAGES.ICONS.Facbook />, link: "#" },
                            { icon: <IMAGES.ICONS.LinkedIn />, link: "#" },
                            { icon: <IMAGES.ICONS.GitHub />, link: "#" },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                className="p-2 border rounded-lg hover:bg-gray-100 transition"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Section (Optional Future Content) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center md:justify-end"
                >
                    {/* ممكن تحط صورة أو لوجو */}
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-black text-white py-4"
            >
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

                    {/* Logo + Brand */}
                    <div className="flex items-center gap-2 font-semibold">
                        <Circle size={18} className="text-white" />
                        <span>Personal</span>
                    </div>

                    {/* Copyright */}
                    <span className="text-gray-300 text-center md:text-right">
                        © 2019-2023 Personal — Made in Figma
                    </span>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
