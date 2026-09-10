"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MouseTilt from "../components/MouseTilt";
import { getYearsOfExperience } from "../components/experience";

const About = () => {
	const [years, setYears] = useState(2);

	useEffect(() => {
		// Computed client-side so it keeps ticking up automatically on each
		// anniversary of the first day of work, with no manual edits needed.
		setYears(getYearsOfExperience());
	}, []);

	const stats = [
		{ value: `${years}+`, label: "Years Experience" },
		{ value: "10+", label: "Projects Delivered" },
		{ value: "40%", label: "Avg. Load Time Cut" },
	];

	return (
		<section
			id="aboutme"
			className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#050414] via-[#0d0a22] to-[#050414] overflow-hidden"
		>
			<div className="glow-blob w-64 h-64 bg-indigo-700/25 top-10 right-10" />

			<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
				{/* صورة جانبية */}
				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<MouseTilt max={6} className="illustration-card p-4">
						<Image
							src="/about.svg"
							alt="About Me Illustration"
							width={500}
							height={500}
							className="rounded-xl w-full max-w-[420px]"
							priority
						/>
					</MouseTilt>
				</motion.div>

				{/* النص */}
				<motion.div
					className="text-center md:text-left max-w-2xl mx-auto"
					initial={{ opacity: 0, x: 80 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white">
						About <span className="gradient-text">Me</span>
					</h2>

					<p className="mt-6 text-gray-400 leading-relaxed text-lg">
						Software Developer with 3+ years of experience designing and building high-performance web
						applications. Proficient in React, Next.js, TypeScript, Node.js, and Express.js with solid
						knowledge of software development principles, design patterns, and scalable architectures.
						Experienced in optimizing performance and implementing maintainable UI systems. Skilled in
						Agile development, collaboration, and delivering robust, user-focused solutions.
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
							<motion.div
								key={i}
								whileHover={{ y: -4, scale: 1.03 }}
								className="rounded-xl border border-white/10 bg-white/5 shadow-sm py-4 px-2 hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-900/30 transition-all"
							>
								<p className="text-2xl md:text-3xl font-extrabold gradient-text">{stat.value}</p>
								<p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
