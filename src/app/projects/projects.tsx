"use client";
import React from "react";
import Image from "next/image";
import { Accessibility, ExternalLink, Github, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import MouseTilt from "../components/MouseTilt";

const projectsData = [
	{
		id: "01",
		title: "Tabe3 — Fleet Management System",
		description:
			"A complete fleet management system with real-time vehicle monitoring. Built live GPS tracking, interactive dashboards with advanced data tables and filters, and a secure admin panel with role-based access control and full CRUD modules for fleets, drivers, and assets.",
		image: null,
		link: "#",
		tags: ["Next.js", "TypeScript", "React Query", "Styled-Components"],
	},
	{
		id: "02",
		title: "Taskey",
		description:
			"A scalable business dashboard built with SamTech Middle East to visualize and manage operational data — fully customized charts, tables, and filters, plus barcode/QR code scanning to streamline daily workflows.",
		image: null,
		link: "#",
		tags: ["Next.js", "TypeScript", "React Query", "RESTful APIs"],
	},
	{
		id: "03",
		title: "Accessible Text↔Speech Assistant",
		description:
			"A client-side-only text-to-speech and speech-to-text web app built around WCAG 2.1 AA compliance from day one: full keyboard operability, a shared aria-live announcer, manually-verified color contrast, and an automated axe-core accessibility check running in CI on every PR.",
		image: null,
		icon: Accessibility,
		link: "https://ziadhanny.github.io/accessible-voice-text/",
		githubLink: "https://github.com/ZiadHanny/accessible-voice-text",
		tags: ["React", "TypeScript", "Vite", "WCAG 2.1 AA", "Web Speech API"],
	},
	{
		id: "04",
		title: "Website Builder",
		description:
			"A drag-and-drop website builder concept focused on a fast, intuitive editing experience for creating and previewing pages in real time.",
		image: "/website.png",
		link: "https://website-builder-alpha-one.vercel.app/",
		tags: ["React", "Next.js"],
	},
	{
		id: "05",
		title: "Website Builder",
		description:
			"A follow-up iteration of the website builder, exploring additional layout blocks and a refreshed component library.",
		image: "/image 770.png",
		link: "#",
		tags: ["React", "UI/UX"],
	},
	{
		id: "06",
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
			className="relative bg-gradient-to-b from-[#050414] to-[#0b0a1f] text-white py-20 px-6 md:px-12 overflow-hidden">
			<div className="glow-blob w-72 h-72 bg-fuchsia-700/15 top-0 right-1/4" />

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
								<MouseTilt max={10} className="w-full">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group relative block rounded-xl overflow-hidden shadow-lg border border-white/10"
									>
										{project.image ? (
											<Image
												src={project.image}
												alt={project.title}
												width={600}
												height={400}
												className="rounded-xl transition duration-500 group-hover:brightness-75 w-full h-auto"
											/>
										) : (
											<div className="w-full aspect-[3/2] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 transition duration-500 group-hover:brightness-90">
												{React.createElement(project.icon ?? LayoutDashboard, {
													size: 64,
													className: "text-white/70",
												})}
											</div>
										)}
										<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
											<span className="flex items-center gap-2 text-white font-medium bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 rounded-lg">
												<ExternalLink className="w-4 h-4" />
												View Project
											</span>
										</div>
									</a>
								</MouseTilt>
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
								<div className="flex items-center justify-center md:justify-start gap-5">
									{project.link !== "#" && (
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
									)}
									{project.githubLink && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="group inline-flex items-center gap-2 text-white hover:text-indigo-300 transition"
										>
											<Github className="w-5 h-5" />
											<span className="relative">
												Code
												<span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
											</span>
										</a>
									)}
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
