"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projectsData = [
	{
		id: "01",
		title: "Website Builder",
		description:
			"A drag-and-drop website builder concept focused on a fast, intuitive editing experience for creating and previewing pages in real time.",
		image: "/website.png",
		link: "https://website-builder-alpha-one.vercel.app/",
		tags: ["React", "Next.js"],
	},
	{
		id: "02",
		title: "Website Builder",
		description:
			"A follow-up iteration of the website builder, exploring additional layout blocks and a refreshed component library.",
		image: "/image 770.png",
		link: "#",
		tags: ["React", "UI/UX"],
	},
	{
		id: "03",
		title: "Shopwise E-commerce Website",
		description:
			"An e-commerce platform that allows users to browse products, add them to the shopping cart, and complete purchases easily.",
		image: "/Shopwise.png",
		link: "https://ecommerce-react-five-navy.vercel.app/",
		tags: ["React", "Vercel"],
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6 md:px-12 overflow-hidden">
			<div className="glow-blob w-72 h-72 bg-fuchsia-600/10 top-0 right-1/4" />

			<div className="relative z-10 max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-light mb-16 text-center md:text-left"
				>
					My <span className="font-bold gradient-text">Projects</span>
				</motion.h2>

				<div className="flex flex-col gap-20">
					{projectsData.map((project, index) => (
						<div
							key={project.id}
							className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10`}
						>
							{/* الصورة */}
							<motion.div
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className={`w-full flex justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}
							>
								<motion.a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.03 }}
									transition={{ type: "spring", stiffness: 200 }}
									className="group relative block rounded-xl overflow-hidden shadow-lg border border-white/10"
								>
									<Image
										src={project.image}
										alt={project.title}
										width={600}
										height={400}
										className="rounded-xl transition duration-500 group-hover:brightness-75"
									/>
									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/30">
										<span className="flex items-center gap-2 text-white font-medium bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 rounded-lg">
											<ExternalLink className="w-4 h-4" />
											View Project
										</span>
									</div>
								</motion.a>
							</motion.div>

							{/* النص */}
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className={`text-center md:text-left ${index % 2 === 1 ? "md:order-1" : ""}`}
							>
								<h3 className="text-5xl font-bold gradient-text opacity-80 mb-4">
									{project.id}
								</h3>
								<h4 className="text-2xl font-semibold mb-3">
									{project.title}
								</h4>
								<div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-3 py-1"
										>
											{tag}
										</span>
									))}
								</div>
								<p className="text-gray-300 mb-6 leading-relaxed">
									{project.description}
								</p>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 text-white hover:text-indigo-300 transition"
								>
									<ExternalLink className="w-5 h-5" />
									<span className="relative">
										Visit
										<span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
									</span>
								</a>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
