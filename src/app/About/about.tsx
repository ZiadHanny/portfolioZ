"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
	{ value: "2+", label: "Years Experience" },
	{ value: "10+", label: "Projects Delivered" },
	{ value: "40%", label: "Avg. Load Time Cut" },
];

const About = () => {
	return (
		<section
			id="aboutme"
			className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
		>
			<div className="glow-blob w-64 h-64 bg-indigo-200/30 top-10 right-10" />

			<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
						About <span className="gradient-text">Me</span>
					</h2>

					<p className="mt-6 text-gray-700 leading-relaxed text-lg">
						Passionate and results-driven Frontend Developer with a solid background in computer science and hands-on
						experience in building interactive, responsive, and scalable web applications. Skilled in using modern JavaScript
						frameworks such as React.js and Next.js to create user-centric interfaces that enhance performance and deliver
						seamless user experiences across multiple devices. Demonstrates strong problem-solving abilities, clean coding
						practices, and a deep understanding of frontend architecture, component-based design, and state management.
					</p>

					{/* Stats */}
					<motion.div
						className="mt-10 grid grid-cols-3 gap-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						{stats.map((stat, i) => (
							<div
								key={i}
								className="rounded-xl border border-gray-100 bg-white shadow-sm py-4 px-2 hover:shadow-md hover:-translate-y-1 transition-transform"
							>
								<p className="text-2xl md:text-3xl font-extrabold gradient-text">{stat.value}</p>
								<p className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</p>
							</div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
