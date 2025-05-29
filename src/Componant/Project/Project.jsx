import React from 'react';
import { motion } from 'framer-motion';
import Cart from "../Cart/Cart";
import "../Css/project.css";
import food from "../../assets/file/food.png";
import va from "../../assets/file/va.png";
import tti from "../../assets/file/tti.png";
import br from "../../assets/file/br.png";

function Project() {
    const projects = [
        {
            title: "FOOD APP",
            description: "A modern food delivery application with real-time tracking and payment integration.",
            img: food,
            github: "https://github.com/yourusername/food-app",
            demo: "https://food-app-demo.com",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            title: "VIRTUAL ASSISTANT",
            description: "An AI-powered virtual assistant that helps with daily tasks and productivity.",
            img: va,
            github: "https://github.com/yourusername/virtual-assistant",
            demo: "https://virtual-assistant-demo.com",
            technologies: ["Python", "TensorFlow", "NLP", "API Integration"]
        },
        {
            title: "TEXT TO IMAGE",
            description: "An AI tool that converts text descriptions into stunning images.",
            img: tti,
            github: "https://github.com/yourusername/text-to-image",
            demo: "https://text-to-image-demo.com",
            technologies: ["React", "OpenAI", "Node.js", "Tailwind CSS"]
        },
        {
            title: "BACKGROUND REMOVER",
            description: "A powerful tool for removing backgrounds from images with high precision.",
            img: br,
            github: "https://github.com/yourusername/background-remover",
            demo: "https://background-remover-demo.com",
            technologies: ["Python", "OpenCV", "Flask", "React"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="projects" className="py-12 sm:py-20 bg-gradient-to-b from-[#1a1a2e] to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#e94560] mb-3 sm:mb-4">My Projects</h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project is carefully crafted with attention to detail and modern technologies.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#e94560] transition-all duration-300"
                        >
                            <Cart
                                title={project.title}
                                description={project.description}
                                img={project.img}
                                github={project.github}
                                demo={project.demo}
                                technologies={project.technologies}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Project;
