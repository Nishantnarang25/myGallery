import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import myStorys from '../data/mystory';
import TechnicalSkillsGraph from '../components/TechnicalSkillsGraph';
import { Palette, Code2, CheckCircle, Cpu, Server, Wrench, Briefcase, Calendar, Building2, ChevronRight } from 'lucide-react';


const About = () => {

    // At the top of your file
    const myStorys = [
        {
            id: 1,
            img: "/childhood.jpg",
            link: "#", // put actual link if needed
        },
        {
            id: 2,
            img: "/kerela.jpg",

            link: "#",
        },
        {
            id: 3,
            img: "/planeselfie.jpg",

            link: "#",
        },
        {
            id: 4,
            img: "/backwatershotel.jpg",

            link: "#",
        },
        {
            id: 5,
            img: "/backwatersselfie.jpg",
            link: "#",
        },
        {
            id: 6,
            img: "/plane.jpg",
            link: "#",
        },
        {
            id: 7,
            img: "/cafe.jpg",
            link: "#",
        },
    ];


    const experienceData = [
        {
            title: "Web Developer & Designer",
            company: "FinBizNet",
            duration: "Aug 2024 – Present",
            description: "Designing and developing responsive web applications with modern frameworks while maintaining brand consistency across digital products.",
            skills: ["React", "TailwindCSS", "MongoDB", "Node.js", "Express"]
        },
        {
            title: "UI/UX Designer & Social Media Manager",
            company: "OSS Consulting",
            duration: "Sep 2024 – Feb 2025",
            description: "Led social media strategy and created engaging content that increased engagement by 40%. Designed client websites with focus on conversion optimization.",
            skills: ["Figma", "Canva", "Social Media", "Branding"]
        },
        {
            title: "Graphic Designer",
            company: "NotClg",
            duration: "Mar – May 2024",
            description: "Created visual identity for college events including logos, posters, and digital assets that enhanced event participation by 25%.",
            skills: ["Illustrator", "Figma", "Canva", "Photoshop Basics", "Brand Identity"]
        }
    ];

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 py-12 md:py-16 space-y-16 bg-[#F1F1F1] text-[#333333]">
            {/* Hero Section */}

            <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
        opacity: 1,
        y: 0,
        backgroundPosition: ['0% 0%', '100% 100%']
    }}
    transition={{
        delay: 0.2,
        duration: 1,
        backgroundPosition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
        }
    }}
    className="relative text-md md:text-xl text-[#333333] leading-relaxed text-left p-8 font-sans mb-8 overflow-hidden border border-[#6B6B6B]/30 bg-[#F1F1F1] transition-all duration-300"
>
    <p className="relative z-10">
        My journey began at <span className="text-[#333333] font-bold">10 with painting</span> and sketching, evolving from <span className="underline decoration-[#805AD5]/50">paper to pixels</span>. Today, I channel that passion into <span className="font-bold text-[#805AD5] bg-clip-text">digital design and development</span>, combining creativity with code. My design approach balances <span className="italic font-medium">aesthetics and usability</span>, while development focuses on <span className="italic font-medium">performance and interactivity</span>.  

        <span className="block h-2"></span>

        Currently, I work as a Web Developer and Designer at <span className="font-bold text-[#805AD5]">Finbiznet</span>, building a startup website that merges innovation with user-focused design. I also recently completed a freelance UI/UX project for an <span className="italic">astrological app</span>, where I crafted intuitive interfaces and seamless user experiences.  

        <span className="block h-2"></span>

        Every project I take on reflects my commitment to <span className="font-mono bg-[#E5DBFF]/20 text-[#805AD5] px-2 py-1 rounded-lg">thoughtful design</span> and <span className="font-mono bg-[#F0F0F0]/10 text-[#333333] px-2 py-1 rounded-lg">clean, maintainable code</span>, transforming ideas into engaging digital experiences.
    </p>
</motion.div>

        



            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

                <ul className="flex flex-wrap gap-2 sm:gap-4">
                    {[
                        { name: "LinkedIn", url: "https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246/", color: "#333333" },
                        { name: "GitHub", url: "https://github.com/Nishantnarang25/", color: "#333333" },
                        {
                            name: "Email",
                            url: "https://mail.google.com/mail/?view=cm&fs=1&to=nishantnarang111@gmail.com&su=Hello&body=Hi%20Nishant,",
                            color: "#333333"
                        }
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={item.url}
                                style={{ backgroundColor: item.color }} // ✅ use inline style for hex color
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium text-sm sm:text-base transition-all duration-300 hover:opacity-90"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.name}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </motion.li>
                    ))}
                </ul>

            </motion.div>





            {/* Story Images */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-4"
            >
                {myStorys.map((data) => (
                    <motion.div
                        key={data.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -5 }}
                        className="relative group"
                    >
                        <motion.a
                            href=""
                            className="block overflow-hidden rounded-lg aspect-[4/3] shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <motion.img
                                src={data.img}
                                alt={`story-${data.id}`}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                loading="lazy"
                            />
                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                        </motion.a>

                        {/* Subtle shine effect on hover */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -rotate-45 scale-150" />
                        </div>
                    </motion.div>
                ))}
            </motion.section>

            {/* Experience */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="bg-white/50 p-8 transition-all duration-300"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[#805AD5] p-2 rounded-lg">
                        <Briefcase className="w-4 h-4 text-white" /> {/* Lucide-react icon */}
                    </div>
                    <h2 className="text-2xl font-bold text-[#333333]">Professional Journey</h2>
                </div>

                <div className="space-y-8 relative">
                    {/* Timeline line */}
                    <div className="absolute left-5 top-0 h-full w-0.5 bg-[#805AD5]/10"></div>

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-12 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-white bg-[#805AD5]  group-hover:scale-125 transition-transform"></div>

                            <div className="bg-[#fafafa] p-6 rounded-sm border border-[#f0f0f0] group-hover:border-[#805AD5]/30 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                    <h3 className="text-xl font-bold text-[#333] text-left">{exp.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#805AD5]" />
                                        <span className="text-sm font-medium text-[#555] text-right">{exp.duration}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <Building2 className="w-4 h-4 text-[#555]" />
                                    <span className="text-[#555] font-medium text-left">{exp.company}</span>
                                </div>

                                <p className="text-[#555] text-left leading-relaxed mb-4">{exp.description}</p>

                                {exp.skills && (
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.skills.map((skill, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ y: -2 }}
                                                className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#555]"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>


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
                                    <ul className="space-y-2">
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


            {/* Skills Graph */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-16"
            >
                <TechnicalSkillsGraph />
            </motion.section>








        </div>
    );
};

export default About;
