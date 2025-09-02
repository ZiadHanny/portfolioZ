"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projectsData = [
	{
		id: "01",
		title: "Crypto Screener Application",
		description:
			"I'm Ziad Hany Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		image: "/image 770 (1).png",
		link: "#",
	},
	{
		id: "02",
		title: "Euphoria – Ecommerce (Apparels) Website Template",
		description:
			"I'm Ziad Hany Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		image: "/image 770.png",
		link: "#",
	},
	{
		id: "03",
		title: "Shopwise E-commerce WebSite",
		description:
			"Technologies Used : React.js, Vercel Purpose: An e- commerce platform that allows users to browse products, add them to the shopping cart, and complete purchases easily.",
		image: "/Shopwise.png",
		link: "https://ecommerce-react-five-navy.vercel.app/",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="bg-black text-white py-20 px-6 md:px-12">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-light mb-16 text-center md:text-left"
				>
					My <span className="font-bold">Projects</span>
				</motion.h2>

				<div className="flex flex-col gap-20">
					{projectsData.map((project, index) => (
						<div
							key={project.id}
							className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
								}`}
						>
							{/* الصورة */}
							<motion.div
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="w-full flex justify-center"
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 200 }}
									className="rounded-xl overflow-hidden shadow-lg"
								>
									<Image
										src={project.image}
										alt={project.title}
										width={600}
										height={400}
										className="rounded-xl"
									/>
								</motion.div>
							</motion.div>

							{/* النص */}
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className="text-center md:text-left"
							>
								<h3 className="text-5xl font-bold text-gray-500 mb-4">
									{project.id}
								</h3>
								<h4 className="text-2xl font-semibold mb-4">
									{project.title}
								</h4>
								<p className="text-gray-300 mb-6 leading-relaxed">
									{project.description}
								</p>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition"
								>
									<ExternalLink className="w-5 h-5" />
									<span>Visit</span>
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
