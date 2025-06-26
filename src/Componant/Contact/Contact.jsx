import React from 'react';
import { motion } from 'framer-motion';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const contactInfo = [
        {
            icon: <MdOutlineEmail className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Email",
            content: "satyendrachaudhary38@gmail.com",
            color: "#e94560"
        },
        {
            icon: <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Phone",
            content: "+91 8840859444",
            color: "#e94560"
        },
        {
            icon: <CiLocationOn className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Location",
            content: "UP, Maharajganj, India",
            color: "#e94560"
        }
    ];

    return (
        <section id="contact" className="py-12 sm:py-20 bg-gradient-to-b from-[#1a1a2e] to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-center text-[#e94560] mb-8 sm:mb-12"
                >
                    Contact Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a2e] p-6 sm:p-8 rounded-xl border border-gray-800"
                    >
                        <form action="https://formspree.io/f/xyzypvyb" method="POST" className="space-y-4 sm:space-y-6">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e94560] text-white placeholder-gray-400 transition-colors duration-300 text-sm sm:text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e94560] text-white placeholder-gray-400 transition-colors duration-300 text-sm sm:text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e94560] text-white placeholder-gray-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#e94560] text-white rounded-lg font-semibold hover:bg-[#d13d56] transition-colors duration-300 text-sm sm:text-base"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#1a1a2e] p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-[#e94560] transition-all duration-300"
                            >
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div style={{ color: info.color }}>{info.icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white text-base sm:text-lg font-semibold">{info.title}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm break-all">{info.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
