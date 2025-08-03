import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Cart from "../Cart/Cart";
import "../Css/project.css";
import cProgramming from "../../assets/file/c-programming.svg";
import nodejsBackend from "../../assets/file/nodejs-backend.svg";
import htmlCourse from "../../assets/file/html-course.svg";

function Tutorial() {
    const [currentPage, setCurrentPage] = useState(1);
    const tutorialsPerPage = 2;
    const tutorials = [
        {
            title: "Programming with C",
            description: "A comprehensive C programming tutorial repository with detailed explanations, practice problems, and step-by-step solutions for beginners learning C programming language.",
            img: cProgramming,
            github: "https://github.com/Satyendrachaudhary143/programing-with-c",
            technologies: ["C", "Programming", "Tutorial", "Practice Problems"]
        },
        {
            title: "Complete Backend with Node.js",
            description: "A complete backend development tutorial using Node.js with comprehensive examples, API development, and server-side programming concepts.",
            img: nodejsBackend,
            github: "https://github.com/Satyendrachaudhary143/complete-backend",
            technologies: ["Node.js", "Backend", "API", "JavaScript"]
        },
        {
            title: "HTML Course",
            description: "A complete HTML course with 5 levels of learning, from basics to advanced concepts, including practical projects and comprehensive examples for web development beginners.",
            img: htmlCourse,
            github: "https://github.com/Satyendrachaudhary143/HTML_COURSE",
            technologies: ["HTML", "CSS", "Web Development", "Tutorial"]
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

    // Calculate pagination
    const totalPages = Math.ceil(tutorials.length / tutorialsPerPage);
    const startIndex = (currentPage - 1) * tutorialsPerPage;
    const endIndex = startIndex + tutorialsPerPage;
    const currentTutorials = tutorials.slice(startIndex, endIndex);
    
    // Debug logging
    console.log('Current Page:', currentPage);
    console.log('Total Pages:', totalPages);
    console.log('Start Index:', startIndex);
    console.log('End Index:', endIndex);
    console.log('Current Tutorials:', currentTutorials.map(t => t.title));

    const handlePageChange = (page) => {
        console.log('Changing to page:', page); // Debug log
        setCurrentPage(page);
        // Scroll to top of tutorials section
        setTimeout(() => {
            const tutorialsSection = document.getElementById('tutorials');
            if (tutorialsSection) {
                tutorialsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section id="tutorials" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-[#1a1a2e]">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#e94560] mb-3 sm:mb-4">Tutorials</h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                        Explore my comprehensive programming tutorials and learning resources. Each tutorial is designed to help beginners understand programming concepts step by step.
                    </p>
                </motion.div>

                <motion.div
                    key={`tutorials-container-${currentPage}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
                >
                    {currentTutorials.map((tutorial, index) => (
                        <motion.div
                            key={`${tutorial.title}-${currentPage}-${index}`}
                            variants={itemVariants}
                            className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#e94560] transition-all duration-300 hover:scale-105"
                        >
                            <Cart
                                title={tutorial.title}
                                description={tutorial.description}
                                img={tutorial.img}
                                github={tutorial.github}
                                technologies={tutorial.technologies}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-12 relative z-10">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-2 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm min-w-[60px] ${
                                currentPage === 1
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#e94560] text-white hover:bg-[#d13d56] hover:scale-105'
                            }`}
                        >
                            ← Prev
                        </button>

                        {/* Page Numbers */}
                        <div className="flex gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-2 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm min-w-[32px] ${
                                        currentPage === page
                                            ? 'bg-[#e94560] text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-2 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm min-w-[60px] ${
                                currentPage === totalPages
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#e94560] text-white hover:bg-[#d13d56] hover:scale-105'
                            }`}
                        >
                            Next →
                        </button>
                    </div>
                )}

                {/* Page Info */}
                <div className="text-center mt-4 sm:mt-6 relative z-10">
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Showing {startIndex + 1}-{Math.min(endIndex, tutorials.length)} of {tutorials.length} tutorials
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Tutorial; 