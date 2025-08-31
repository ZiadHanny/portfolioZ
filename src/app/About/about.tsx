"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section
			id="aboutme"
			className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-white via-gray-50 to-white"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				{/* صورة جانبية */}
				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<Image
						src="/about.svg"
						alt="About Me Illustration"
						width={500}
						height={500}
						className="rounded-2xl shadow-xl"
						priority
					/>
				</motion.div>

				{/* النص */}
				<motion.div
					className="text-center md:text-left max-w-2xl mx-auto"
					initial={{ opacity: 0, x: 80 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
						About <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700">Me</span>
					</h2>

					<p className="mt-6 text-gray-700 leading-relaxed text-lg">
						Passionate and results-driven Frontend Developer with a solid background in computer science and hands-on
						experience in building interactive, responsive, and scalable web applications. Skilled in using modern JavaScript
						frameworks such as React.js and Next.js to create user-centric interfaces that enhance performance and deliver
						seamless user experiences across multiple devices. Demonstrates strong problem-solving abilities, clean coding
						practices, and a deep understanding of frontend architecture, component-based design, and state management.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
