import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { uiuxProjects } from '../data/uiuxProjects';
import { FiFigma, FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdPalette, MdOutlineDesignServices, MdInsights } from 'react-icons/md';
import { RiUserVoiceFill } from 'react-icons/ri';

const UIUX = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setSelectedProject(null);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      (prev + 1) % (selectedProject.wireframes.length + selectedProject.mockups.length)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      (prev - 1 + (selectedProject.wireframes.length + selectedProject.mockups.length)) %
      (selectedProject.wireframes.length + selectedProject.mockups.length)
    );
  };

  return (
<div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 py-12 md:py-12 mt-12">
      <div className="max-w-8xl mx-auto">
        {/* Animated Header Section */}
        <motion.div
          className="mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >


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
            UI/UX Design <span className="text-[#805AD5]">Projects</span>
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-4xl text-left relative z-10">
            Crafting intuitive and beautiful digital experiences through user-centered design principles and innovative solutions.
          </p>


        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {uiuxProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/80 overflow-hidden hover:shadow-sm transition-all relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Design elements that appear on hover */}
              {hoveredProject === project.id && (
                <>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating design elements */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute border-2 border-[#805AD5]/20 rounded-full pointer-events-none"
                        style={{
                          width: `${Math.random() * 100 + 50}px`,
                          height: `${Math.random() * 100 + 50}px`,
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.8,
                          type: 'spring'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
  {/* Image Column */}
  <motion.div
    className="relative h-64 lg:h-80 col-span-1 overflow-hidden rounded-l-xl"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <motion.img
      src={project.thumbnail}
      alt={project.title}
      className="w-full h-full object-cover object-center"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    />

    {/* Overlay Button */}
    {(project.wireframes.length + project.mockups.length) > 0 && (
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 cursor-pointer"
        onClick={() => {
          setSelectedProject(project);
          setCurrentImageIndex(0);
        }}
      >
        <motion.button
          className="px-3 py-1.5 bg-white/90 text-[#333333] rounded-full text-xs font-medium hover:bg-white transition-all flex items-center gap-1 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdOutlineDesignServices className="text-[#805AD5]" />
          View Gallery
        </motion.button>
      </div>
    )}
  </motion.div>

  {/* Content Column */}
  <div className="col-span-2 p-6 flex flex-col justify-between text-left">
    <div>
      {/* Tags */}
      <motion.div className="flex items-center gap-2 mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <motion.span className="px-4 py-2 bg-[#FFCC47]/20 text-[#FFCC47] text-sm font-medium rounded-full" whileHover={{ scale: 1.05 }}>
          {project.duration}
        </motion.span>
        <motion.span className="px-4 py-2 bg-[#805AD5]/20 text-[#805AD5] text-sm font-medium rounded-full" whileHover={{ scale: 1.05 }}>
          {project.team}
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.h2 className="text-2xl font-bold text-[#333333] mb-3 relative inline-block" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        {project.title}
        <motion.span className="absolute bottom-0 left-0 w-0 h-1 bg-[#805AD5]" initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
      </motion.h2>

      {/* Description */}
      <motion.p className="text-md text-[#6B6B6B] leading-relaxed mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        {project.brief}
      </motion.p>

      {/* Tools & Technologies */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h3 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2 flex items-center gap-2">
          <MdPalette className="text-[#805AD5]" /> Tools & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <motion.span key={index} className="px-6 py-2 bg-[#F9F9F9] text-[#333333] text-sm border border-[#6B6B6B] rounded-full hover:border-[#805AD5] hover:text-[#805AD5] transition-colors" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.05 }} whileHover={{ scale: 1.05 }}>
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mt-4">
      {project.prototypeLink && (
        <motion.a
          href={project.prototypeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#333333] text-white rounded-lg text-sm hover:bg-[#6F42C1] transition-all relative overflow-hidden group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ y: -2 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <FiFigma /> View Prototype
          </span>
          <span className="absolute inset-0 bg-[#6F42C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      )}

      {project.caseStudyLink && (
        <motion.a
          href={project.caseStudyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-[#805AD5] text-[#805AD5] rounded-lg text-sm hover:bg-[#805AD5]/10 transition-all relative overflow-hidden group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ y: -2 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <FiExternalLink /> View Case Study
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
          ref={modalRef}
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

            {/* Vertical Scroll Gallery */}
            <div className="flex flex-col w-full items-center space-y-4 max-h-[90vh] overflow-y-auto">
              {[...(selectedProject.wireframes || []), ...(selectedProject.mockups || [])].map(
                (img, index) => (
                  <motion.img
                    key={index}
                    src={img.url || img} // support objects or strings
                    alt={img.alt || `Design ${index + 1}`}
                    className="w-full object-contain rounded-lg shadow-xl border-4 border-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                  />
                )
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>



      </div>
    </div>
  );
};

export default UIUX;