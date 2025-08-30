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
						I am a passionate, self-proclaimed designer who specializes in full
						stack development{" "}
						<span className="font-semibold">(React.js & Node.js)</span>.
						User experience, pixel-perfect design, and writing clear,
						readable, highly performant code matter to me.
					</p>

					<p className="mt-4 text-gray-700 leading-relaxed text-lg">
						I began my journey as a web developer in{" "}
						<span className="font-semibold">2015</span>, and since then,
						I have continued to grow and evolve as a developer—taking on new
						challenges and learning the latest technologies along the way.
						Now, I am building cutting-edge applications with{" "}
						<span className="font-semibold">
							Next.js, TypeScript, NestJS, TailwindCSS, Supabase
						</span>{" "}
						and more.
					</p>

					<p className="mt-4 text-gray-700 leading-relaxed text-lg">
						When I am not in full-on developer mode, you can find me on
						Twitter or Indie Hackers, witnessing the journey of early startups
						or enjoying some free time.
						Follow me on <span className="text-black font-semibold">Twitter</span> or check out my{" "}
						<span className="text-black font-semibold">GitHub</span>.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
