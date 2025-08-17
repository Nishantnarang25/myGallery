import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { webDevProjects } from '../data/webDevProjects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const WebDev = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setSelectedProject(null);
    }
  };

  return (
<div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 py-12 md:py-12 mt-12">
      <motion.div
        className="mb-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#805AD5]/10 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#FFCC47]/10 blur-xl"
          animate={{
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4 text-left relative z-10">
          Web Development <span className="text-[#805AD5]">Projects</span>
        </h1>
        <p className="text-xl text-[#6B6B6B] max-w-4xl text-left relative z-10">
          Building modern, responsive, and interactive web applications using cutting-edge technologies.
        </p>
      </motion.div>

      <div className="space-y-12 relative">
        {webDevProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white/80 overflow-hidden hover:shadow-sm transition-all relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Floating tech bubbles background effect */}
            {hoveredProject === project.id && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {project.technologies.map((tech, index) => {
                  const size = Math.random() * 40 + 20;
                  const left = Math.random() * 80 + 10;
                  const top = Math.random() * 80 + 10;
                  const delay = Math.random() * 0.5;
                  const duration = Math.random() * 3 + 2;
                  
                  return (
                    <motion.div
                      key={`bubble-${index}`}
                      className="absolute rounded-full opacity-10 bg-[#805AD5]"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${left}%`,
                        top: `${top}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        delay,
                        duration,
                        type: 'spring',
                        damping: 5
                      }}
                    />
                  );
                })}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
              {/* Image Column with 3D tilt effect */}
              <motion.div 
                className="relative h-48 lg:h-full col-span-1 overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {project.mockups.length > 0 && (
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <motion.button 
                      className="px-3 py-1.5 bg-white/90 text-[#333333] rounded-full text-xs font-medium hover:bg-white transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Gallery
                    </motion.button>
                  </div>
                )}
              </motion.div>

              {/* Content Column */}
              <div className="col-span-2 p-6 flex flex-col justify-between text-left">
                <div>
                  {/* Title with underline animation */}
                  <motion.h2 
                    className="text-2xl font-bold text-[#333333] mb-3 inline-block relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {project.title}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#805AD5]"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </motion.h2>
                  
                  <p className="text-md text-[#6B6B6B] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies with staggered animation */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-[#F9F9F9] text-[#333333] text-sm border border-[#6B6B6B] rounded-full hover:bg-[#805AD5]/10 hover:border-[#805AD5] transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3,
                            delay: index * 0.05
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Buttons with cool hover effects */}
                <div className="flex flex-wrap gap-4 mt-2">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#333333] text-white rounded-lg text-sm hover:bg-[#6F42C1] transition-all relative overflow-hidden group"
                      whileHover={{ y: -2 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FiGithub /> GitHub
                      </span>
                      <span className="absolute inset-0 bg-[#6F42C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-[#805AD5] text-[#805AD5] rounded-lg text-sm hover:bg-[#805AD5]/10 transition-all relative overflow-hidden group"
                      whileHover={{ y: -2 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FiExternalLink /> Live Project
                      </span>
                      <span className="absolute inset-0 bg-[#805AD5] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    <AnimatePresence>
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center overflow-y-auto p-4"
          onClick={() => setSelectedProject(null)} // close on overlay click
        >
          <motion.div
            className="relative w-full max-w-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // prevent closing inside
          >
            {/* Close Button */}
            <motion.button
              className="absolute -top-12 right-0 z-50 bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition"
              onClick={() => setSelectedProject(null)}
              whileHover={{ rotate: 90 }}
            >
              ✕
            </motion.button>

            {/* Mockups Gallery */}
            <div className="flex flex-col w-full items-center space-y-4 max-h-[90vh] overflow-y-auto">
              {selectedProject.mockups.map((img, index) => (
                <motion.img
                  key={index}
                  src={img.url}
                  alt={img.alt || `Mockup ${index + 1}`}
                  className="w-full object-contain rounded-lg shadow-xl border-4 border-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    </div>
  );
};

export default WebDev;