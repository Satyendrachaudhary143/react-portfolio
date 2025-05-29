import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1a1a2e] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    {/* Column 1: Logo & Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <a href="#" className="text-xl sm:text-2xl font-bold text-[#e94560] hover:text-white transition-colors duration-300">
                            MyPortfolio
                        </a>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            I am full stack web developer and specialize in complete web applications from start to finish. My expertise includes managing databases, developing APIs, ensuring security, and optimizing performance.
                        </p>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-[#e94560]">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <motion.li
                                    key={link}
                                    whileHover={{ x: 5 }}
                                    className="text-sm sm:text-base text-gray-400 hover:text-[#e94560] transition-colors duration-300"
                                >
                                    <a href={`#${link.toLowerCase()}`} className="flex items-center">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e94560] rounded-full mr-2"></span>
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-[#e94560]">Contact Info</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-center text-sm sm:text-base text-gray-400">
                                <MdEmail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#e94560]" />
                                satyendrachaudhary38.com
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-400">
                                <FaPhoneAlt className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#e94560]" />
                                +91 8840859444
                            </li>
                            <li className="pt-2 sm:pt-4">
                                <div className="flex space-x-3 sm:space-x-4">
                                    <motion.a
                                        href="https://www.linkedin.com/in/satyendra-chaudhary-b958632b9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="text-gray-400 hover:text-[#e94560] transition-colors duration-300"
                                    >
                                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/satyendrachaudhary143"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="text-gray-400 hover:text-[#e94560] transition-colors duration-300"
                                    >
                                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.a>
                                    <motion.a
                                        href="https://x.com/ssboss183032734"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="text-gray-400 hover:text-[#e94560] transition-colors duration-300"
                                    >
                                        <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.a>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400"
                >
                    <p>© 2025 satyendra chaudhary. All Rights Reserved.</p>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#e94560] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#d13d56] transition-colors duration-300"
            >
                <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
        </footer>
    );
}

export default Footer;  