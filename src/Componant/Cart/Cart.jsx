import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

function Cart({ title, description, img, github, technologies }) {
    return (
        <div className="h-full flex flex-col relative z-10">
            <div className="relative h-40 sm:h-48 overflow-hidden group">
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-[#e94560] mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 flex-grow">{description}</p>
                
                <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-800 text-gray-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 sm:gap-4 mt-auto relative z-20">
                    <motion.a 
                        href={github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#e94560] text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-[#d13d56] transition-colors duration-300 text-center flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base cursor-pointer"
                    >
                        <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                        GitHub
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default Cart;
