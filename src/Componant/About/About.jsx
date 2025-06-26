import React from 'react';
import { motion } from 'framer-motion';
import "../Css/About.css";
import { IoPerson } from "react-icons/io5";
import code from "../../assets/file/code.png"
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoBag } from "react-icons/io5";


function About() {
    const infoCards = [
        {
            icon: <IoPerson className="w-8 h-8" />,
            title: "Name",
            content: "Satyendra Chaudhary"
        },
        {
            icon: <MdOutlineEmail className="w-8 h-8" />,
            title: "Email",
            content: "satyendrachaudhary38@gmail.com"
        },
        {
            icon: <CiLocationOn className="w-8 h-8" />,
            title: "Location",
            content: "UP, Maharajganj, India"
        },
        {
            icon: <IoBag className="w-8 h-8" />,
            title: "Freelance",
            content: "Available"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-gray-900">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-[#e94560] mb-12"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-80 h-80 mx-auto">
                            <div className="absolute inset-0 bg-[#e94560] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <img 
                                src={code} 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-full border-4 border-[#e94560] transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Hi, I'm Satyendra Chaudhary, a full stack web developer specializing in complete web applications from start to finish. My expertise includes managing databases, developing APIs, ensuring security, and optimizing performance. I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL. I am passionate about creating modern, responsive, and user-friendly websites. I am available for freelance work and would love to hear about your project.
                        </p>
                    </motion.div>
                </div>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
                >
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800 hover:border-[#e94560] transition-colors duration-300"
                        >
                            <div className="text-[#e94560] mb-4">{card.icon}</div>
                            <h3 className="text-white text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm break-all">{card.content}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About
