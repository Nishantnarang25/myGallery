import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoProjects } from "../data/logoProjects";
import { FiX, FiExternalLink, FiChevronRight } from "react-icons/fi";

const Logos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
<div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 py-12 md:py-12 mt-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 relative text-left text-[#333333]">
          Logo & Brand
          <span className="text-[#805AD5]"> Showcase</span>
          <motion.span
            className="absolute bottom-0 left-0 w-32 h-1 bg-[#805AD5]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </h2>
        <p className="text-lg text-[#555555] max-w-3xl">
          Crafting memorable brand identities through logos, mockups, and visual storytelling.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {logoProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="cursor-pointer group relative"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-square bg-white  shadow-sm p-6 flex items-center justify-center overflow-hidden relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium text-sm translate-y-2 group-hover:translate-y-0 transition-transform">
                  View Details
                </span>
              </div>
            </div>
            <h3 className="mt-3 px-2 font-medium text-xl text-[#333333] text-left">{project.title}</h3>
                        <p className="mt-2 px-2 font-medium text-md text-[#555555] text-left">{project.subtitle}</p>

          </motion.div>
        ))}
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-4 overflow-y-auto text-left"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl p-0 max-w-6xl w-full relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F1F1F1] transition-colors z-20"
                onClick={() => setSelectedProject(null)}
              >
                <FiX size={24} className="text-[#555555]" />
              </button>

              {selectedProject.overlayImage && (
                <div className="w-full flex justify-center bg-gray-50">
                  <img
                    src={selectedProject.overlayImage}
                    alt={selectedProject.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}


              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-[#333333]">{selectedProject.title}</h2>
                    <p
                      className="text-xl"
                      style={{ color: selectedProject.colorPalette ? selectedProject.colorPalette[0] : "#805AD5" }}
                    >
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#333333] text-white rounded-lg hover:bg-[#805AD5] transition-colors"
                    >
                      <FiExternalLink /> Visit Brand
                    </a>
                  )}
                </div>

                {/* Brand Info Grid */}
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-[#F1F1F1] flex items-center" style={{ color: selectedProject.colorPalette ? selectedProject.colorPalette[0] : "#805AD5" }}>
                        <FiChevronRight className="mr-2" />
                        Design Brief
                      </h3>
                      <p className="text-[#555555]">{selectedProject.brief}</p>
                    </div>
                    <div className="space-y-4">
                      {selectedProject.problem && (
                        <div>
                          <h4 className="font-medium" style={{ color: selectedProject.colorPalette ? selectedProject.colorPalette[0] : "#805AD5" }}>The Challenge</h4>
                          <p className="text-[#555555] text-sm">{selectedProject.problem}</p>
                        </div>
                      )}
                      {selectedProject.solution && (
                        <div>
                          <h4 className="font-medium" style={{ color: selectedProject.colorPalette ? selectedProject.colorPalette[0] : "#805AD5" }}>Our Solution</h4>
                          <p className="text-[#555555] text-sm">{selectedProject.solution}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {selectedProject.colorPalette && selectedProject.colorPalette.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-[#F1F1F1] flex items-center" style={{ color: selectedProject.colorPalette[0] }}>
                          <FiChevronRight className="mr-2" />
                          Color Palette
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.colorPalette.map((color, idx) => (
                            <div
                              key={idx}
                              className="w-12 h-12 rounded-lg border border-[#F1F1F1] shadow-sm"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.fonts && selectedProject.fonts.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-[#F1F1F1] flex items-center" style={{ color: selectedProject.colorPalette ? selectedProject.colorPalette[0] : "#805AD5" }}>
                          <FiChevronRight className="mr-2" />
                          Typography
                        </h3>
                        <div className="flex flex-col gap-4">
                          {selectedProject.fonts.map((font, idx) => (
                            <div key={idx} className="p-3 bg-[#F9F9F9] rounded-lg">
                              <p className="text-sm text-[#555555]">Font: {font}</p>
                              <p className="text-xl" style={{ fontFamily: font }}>The quick brown fox jumps over the lazy dog</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mockups */}
                {selectedProject.logos && selectedProject.logos.length > 0 && (
                  <div className="pt-8">
                    <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-[#F1F1F1]" style={{ color: selectedProject.colorPalette ? selectedProject.colorPalette[0] : "#805AD5" }}>
                      Brand Mockups
                    </h3>
                    <div className="flex flex-col gap-6">
                      {selectedProject.logos.map((mockup, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="w-full rounded-xl overflow-hidden shadow-sm"
                        >
                          <img
                            src={mockup}
                            alt={`Mockup ${idx + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



    </div>
  );
};

export default Logos;
