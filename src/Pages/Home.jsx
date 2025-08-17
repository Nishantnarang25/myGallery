// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typed from 'typed.js';
import { recentProjects } from '../data/recentprojects';
import ProjectCard from '../components/ProjectCard';
import SkillsCard from '../components/SkillsCard';
import { recentCertificates } from '../data/recentCertificates';
import CertificateCard from '../components/Certificates';
import "../App.css";

const Home = () => {
    const [isExploding, setIsExploding] = useState(false);
    const controls = useAnimation();
    const typedRef = useRef(null);
    const doodles = ['✏️', '</>', '🎨', '📱', '💡', '🖋️', '🖥️', '🎯'];
    const roles = ["UI/UX designer", "Web developer", "Problem solver", "Creative thinker"];

    // Scroll animation
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                controls.start({
                    scale: [1, 1.05, 1],
                    transition: { duration: 0.5 }
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    // Typed.js animation
    useEffect(() => {
        if (!typedRef.current) return;
        const typed = new Typed(typedRef.current, {
            strings: roles,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 py-8 md:py-16 space-y-16 bg-[#F1F1F1] pt-20 md:pt-24">

            {/* Logo / Name with Easter Egg */}
            <div className="absolute top-4 left-4">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExploding(true)}
                    className="text-xl font-bold cursor-pointer"
                >
                    Nishantmek
                    {isExploding && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {doodles.map((doodle, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ x: 0, y: 0, opacity: 1 }}
                                    animate={{
                                        x: Math.random() * 200 - 100,
                                        y: Math.random() * 200 - 100,
                                        opacity: 0,
                                        scale: [1, 1.5, 0.5]
                                    }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    onAnimationComplete={() => setIsExploding(false)}
                                    className="absolute text-lg"
                                >
                                    {doodle}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Intro + Image */}
            <div className="flex flex-col lg:flex-row items-center gap-8 text-left">

                {/* Intro Text */}
                <motion.div
                    className="space-y-6 flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[#333333]">
                        From sketchbooks to screen pixels,{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">
                                my journey's been all about{' '}
                                <span style={{ color: "#805AD5" }}>building</span> with purpose.
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#805AD5]/10 opacity-70 -z-0"></span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#6B6B6B] max-w-3xl leading-relaxed">
                        I'm Nishant — a{' '}
                        <span
                            ref={typedRef}
                            className="text-[#805AD5] font-medium"
                            style={{ whiteSpace: 'pre' }}
                        />
                        {' '}who loves crafting digital experiences that feel just right, intuitive, and engaging.
                    </p>

                    {/* Resume Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                        <motion.a
                            href="/ui-ux"
                            className="relative px-6 py-3 font-bold rounded-lg overflow-hidden group transition-all duration-300 text-sm sm:text-base"
                            style={{ color: '#333333', backgroundColor: 'white', border: '2px solid #333333' }}
                            whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-[#FF6F3C] transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                            <span className="relative font-extrabold px-4 z-10 flex items-center justify-center gap-2 group-hover:text-white">
                                Download UI/UX Resume
                            </span>
                        </motion.a>

                        <motion.a
                            href="/web-dev"
                            className="relative px-6 py-3 font-bold rounded-lg overflow-hidden group transition-all duration-300 text-sm sm:text-base"
                            style={{ color: '#333333', backgroundColor: 'white', border: '2px solid #333333' }}
                            whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white">
                                Download Web Dev Resume
                            </span>
                        </motion.a>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-sm font-medium text-[#6B6B6B] mb-3">Let's connect —</h3>
                        <ul className="flex flex-wrap gap-2 sm:gap-4">
                            {[
                                { name: "LinkedIn", url: "https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246/", color: "#333333" },
                                { name: "GitHub", url: "https://github.com/Nishantnarang25/", color: "#333333" },
                                { name: "Email", url: "mailto:nishantnarang111@gmail.com", color: "#333333" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        style={{ backgroundColor: item.color }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium text-sm sm:text-base transition-all duration-300 hover:opacity-90"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full lg:max-w-xl h-80 flex justify-center items-center overflow-hidden bg-gray-50 hidden lg:flex rounded-sm"
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: [0.16, 0.77, 0.47, 0.97], // Custom bezier curve for smoothness
                        }
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                        perspective: 1000, // Enables 3D effects
                        transformStyle: "preserve-3d",
                    }}
                >
                    <motion.img
                        src="/kerela.jpg"
                        alt="Profile photo"
                        className="w-full h-full object-cover object-center "
                        initial={{ scale: 1.05, rotate: 0.5 }}
                        whileInView={{
                            scale: 1,
                            rotate: 0,
                            transition: {
                                delay: 0.15,
                                duration: 0.7,
                                ease: [0.34, 1.56, 0.64, 1]
                            }
                        }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.4 }
                        }}
                    />
                </motion.div>
            </div>


            {/* Projects Section */}
            <section className="py-6 text-left">
                <h2 className="text-left text-2xl text-[#333333] font-semibold mb-4">My Latest Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recentProjects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </section>

            {/* Skills */}
            <SkillsCard />

            {/* Certificates */}
            <section className="py-8">
                <h2 className="text-left text-2xl text-[#333333] font-semibold mb-4">Certificates & Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recentCertificates.map((cert) => (
                        <CertificateCard certificates={cert} key={cert.id} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
