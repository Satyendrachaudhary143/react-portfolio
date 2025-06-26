import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMysql, SiPhp, SiNextdotjs, SiPython, SiRedis } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

function Skill() {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" />, level: 90, color: '#E44D26' },
        { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" />, level: 85, color: '#264DE4' },
        { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8" />, level: 95, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, level: 95, color: '#06B6D4' },
        { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, level: 80, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact className="w-8 h-8" />, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, level: 85, color: '#000000' },
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, level: 80, color: '#339933' },
        { name: 'Express', icon: <SiExpress className="w-8 h-8" />, level: 90, color: '#000000' },
        { name: 'Python', icon: <SiPython className="w-8 h-8" />, level: 85, color: '#3776AB' },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, level: 80, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, level: 80, color: '#4479A1' },
        { name: 'Redis', icon: <SiRedis className="w-8 h-8" />, level: 75, color: '#DC382D' },
        { name: 'PHP', icon: <SiPhp className="w-8 h-8" />, level: 70, color: '#777BB4' },
        { name: 'Java', icon: <FaJava className="w-8 h-8" />, level: 75, color: '#007396' },
        { name: 'DSA', icon: <TbBrandLeetcode className="w-8 h-8" />, level: 90, color: '#FFA116' }
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-[#1a1a2e]">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-[#e94560] mb-12"
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800 hover:border-[#e94560] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-2xl" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
                            </div>
                            
                            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="absolute top-0 left-0 h-full rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </div>
                            
                            <div className="mt-2 text-right">
                                <span className="text-sm text-gray-400">{skill.level}%</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;