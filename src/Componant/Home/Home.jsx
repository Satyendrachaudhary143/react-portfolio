import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Css/animations.css";

function Home() {
    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Satyendra Chaudhary
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Creative Web Developer | Full Stack Developer
                    </motion.p>

                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a 
                            href="#contact" 
                            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                        >
                            Hire Me
                        </a>
                        <a 
                            href="#portfolio" 
                            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                        >
                            View Portfolio
                        </a>
                    </motion.div>

                    <motion.div 
                        className="flex justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a 
                            href="https://www.linkedin.com/in/satyendra-chaudhary-b958632b9" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a 
                            href="https://github.com/satyendrachaudhary143" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a 
                            href="https://x.com/ssboss183032734" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaTwitter className="w-8 h-8" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
