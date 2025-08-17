import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiVideo } from 'react-icons/fi';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { y: -10, transition: { type: "spring", stiffness: 300, damping: 15 } }
};

const imageVariants = {
  hover: { scale: 1.07, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
};

const ProjectDetailCard = ({ project }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-white to-gray-50 flex flex-col"
    >
      {/* Thumbnail */}
      {project.thumbnail && (
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-56 object-cover rounded-t-2xl"
          variants={imageVariants}
        />
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between tetx-left">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-left">{project.title}</h2>
          {project.subtitle && (
            <p className="text-gray-600 text-md line-clamp-3 mb-4 text-left">{project.subtitle}</p>
          )}

          {project.brief && (
            <p className="text-gray-500 text-sm mb-4 text-left">{project.brief}</p>
          )}

          {project.problem && (
            <p className="text-gray-500 text-sm mb-4 italic text-left">Problem: {project.problem}</p>
          )}
        </div>

        {/* Links */}
        <div className="mt-3 flex flex-wrap gap-3 items-center">
          {project.prototypeLink && (
            <a
              href={project.prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <FiExternalLink /> Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              <FiGithub /> GitHub
            </a>
          )}
          {project.videoDemo && (
            <a
              href={project.videoDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              <FiVideo /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailCard;
