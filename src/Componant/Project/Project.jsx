import React from 'react';
import { motion } from 'framer-motion';
import Cart from "../Cart/Cart";
import "../Css/project.css";
import urlShortener from "../../assets/file/url-shortener.svg";
import videoPlayer from "../../assets/file/video-player.svg";
import resumeMaker from "../../assets/file/resume-maker.svg";
import blogApp from "../../assets/file/blog-app.svg";
import newYearWishing from "../../assets/file/new-year-wishing.svg";
import schoolManagement from "../../assets/file/school-management.svg";
import foodApp from "../../assets/file/food-app.svg";

function Project() {
    const projects = [
        {
            title: "URL Shortener",
            description: "A full-stack URL shortening application with authentication and advanced features.",
            img: urlShortener,
            github: "https://github.com/Satyendrachaudhary143/urlShortner",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            title: "Custom Video Player",
            description: "A modern custom video player built with React.js with advanced controls and features.",
            img: videoPlayer,
            github: "https://github.com/Satyendrachaudhary143/custom-video-player",
            technologies: ["React", "JavaScript", "CSS3", "HTML5"]
        },
        {
            title: "Resume Maker",
            description: "A beautiful resume builder with multiple templates and PDF download functionality.",
            img: resumeMaker,
            github: "https://github.com/Satyendrachaudhary143/resumemaker",
            technologies: ["HTML5", "CSS3", "JavaScript", "html2pdf.js"]
        },
        {
            title: "Blog App",
            description: "A modern blog application built with Next.js featuring dynamic content and responsive design.",
            img: blogApp,
            github: "https://github.com/Satyendrachaudhary143/blog_Using_nextjs",
            technologies: ["Next.js", "React", "JavaScript", "CSS"]
        },
        {
            title: "New Year Wishing",
            description: "An interactive New Year 2025 celebration website with animations and festive design.",
            img: newYearWishing,
            github: "https://github.com/Satyendrachaudhary143/happy-new-year-2025",
            technologies: ["HTML5", "CSS3", "JavaScript"]
        },
        {
            title: "School Management System",
            description: "A comprehensive school management system with student, teacher, and admin modules.",
            img: schoolManagement,
            github: "https://github.com/Satyendrachaudhary143/MIPSchool",
            technologies: ["JavaScript", "Node.js", "Express", "MongoDB"]
        },
        {
            title: "Food Delivery App",
            description: "A modern food delivery application with real-time tracking and payment integration.",
            img: foodApp,
            github: "https://github.com/Satyendrachaudhary143/food-app",
            technologies: ["React", "JavaScript", "CSS", "Vite"]
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
