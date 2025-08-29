import React from 'react'
import { motion } from 'framer-motion'
import { Palette, CheckCircle, Code2, Cpu, Server, Wrench } from 'lucide-react'

const SkillsCard = () => {
    return (
        <div>
            {/* Skills Grid */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
                className="grid md:grid-cols-2 gap-6 mb-16"
            >
                {/* Design Card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                    className="group relative overflow-hidden bg-white/50 p-8 rounded-sm border border-[#f0f0f0] hover:border-[#805AD5]/30 transition-all duration-300"
                >
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#805AD5]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#805AD5] p-3 rounded-lg text-white shadow-sm group-hover:rotate-6 transition-transform">
                                <Palette className="w-6 h-6" /> {/* Using Lucide-react icon */}
                            </div>
                            <h2 className="text-2xl font-bold text-[#222]">Design Craft</h2>
                        </div>

                        <div className="space-y-4 text-[#555]">
                            <p className="leading-relaxed text-left">
                                I create pixel-perfect interfaces that marry aesthetics with intuitive functionality.
                            </p>

                            <ul className="space-y-3 text-left">
                                {[
                                    "UI/UX Design (Web & Mobile)",
                                    "Logo & Brand Identity",
                                    "Prototyping & User Flows",
                                    "Design Systems",
                                    "Wireframing & Mockups",
                                    "Visual Design & Typography",
                                    "Tools: Figma, Adobe XD (Basics), Canva",
                                    "Social Media & Instagram Post Design"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: -10 }}
                                        whileInView={{ x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle className="w-5 h-5 mt-0.5 text-[#805AD5] flex-shrink-0" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Development Card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2, delay: 0.1 }}
                    className="group relative overflow-hidden bg-white/50 p-8 rounded-sm border border-[#f0f0f0] hover:border-[#333]/30 transition-all duration-300"
                >
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#333]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#333] p-3 rounded-lg text-white shadow-sm group-hover:rotate-6 transition-transform">
                                <Code2 className="w-6 h-6" /> {/* Using Lucide-react icon */}
                            </div>
                            <h2 className="text-2xl font-bold text-[#222]">Code Expertise</h2>
                        </div>

                        <div className="space-y-4 text-[#555]">
                            <p className="leading-relaxed text-left">
                                I transform designs into robust, scalable digital experiences with clean code.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-medium text-[#333] mb-2 flex items-center gap-2">
                                        <Cpu className="w-4 h-4" /> Frontend
                                    </h3>
                                    <ul className="space-y-2 text-left">
                                        {["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"].map((tech, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.05 * i }}
                                                className="text-md flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium text-[#333] text-left  mb-2 flex items-center gap-2">
                                        <Server className="w-4 h-4" /> Backend
                                    </h3>
                                    <ul className="space-y-2 text-left">
                                        {["Node.js", "Express", "PostgreSQL", "MongoDB", "Sequelize", "Firebase", "Supabase"].map((tech, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.05 * i + 0.2 }}
                                                className="text-md flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h3 className="font-medium text-[#333] mb-2 flex items-center gap-2">
                                    <Wrench className="w-4 h-4" /> Tools
                                </h3>
                                <div className="flex flex-wrap gap-2 text-left">
                                    {["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Render", "Figma"].map((tool, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ y: -2 }}
                                            className="px-3 py-1 bg-[#f5f5f5] rounded-full text-md"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </motion.section>

        </div>
    )
}

export default SkillsCard
