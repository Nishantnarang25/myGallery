import React from 'react';
import { useParams } from 'react-router-dom';
import { uiuxProjects } from '../../data/uiuxProjects';
import { motion } from 'framer-motion';
import { FiExternalLink, FiClock, FiUsers } from 'react-icons/fi';

const UIUXProject = () => {
  const { slug } = useParams();
  const project = uiuxProjects.find((p) => p.slug === slug);

  if (!project) return <div className="container mx-auto py-20">Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {project.title}
          </motion.h1>
          <p className="text-xl text-white/90 mb-8">{project.subtitle}</p>
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="mx-auto rounded-xl shadow-lg max-w-lg"
          />
        </div>
      </div>

      {/* Meta Info */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <FiClock className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
              <p className="font-medium">{project.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiUsers className="text-orange-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
              <p className="font-medium">{project.team}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-16">
          {/* Brief */}
          <div className="prose dark:prose-invert">
            <h2>Project Brief</h2>
            <p>{project.brief}</p>
          </div>

          {/* Problem */}
          <div className="prose dark:prose-invert">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="prose dark:prose-invert">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </div>

          {/* Process */}
          <div className="prose dark:prose-invert">
            <h2>Design Process</h2>
            <p>{project.processIntro}</p>
            <ul className="list-disc ml-6">
              {project.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>

          {/* Wireframes */}
          {project.wireframes.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Wireframes</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.wireframes.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} wireframe ${idx + 1}`} className="rounded-lg shadow" />
                ))}
              </div>
            </div>
          )}

          {/* Mockups */}
          {project.mockups.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Mockups</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.mockups.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} mockup ${idx + 1}`} className="rounded-lg shadow" />
                ))}
              </div>
            </div>
          )}

          {/* Learnings */}
          {project.learnings.length > 0 && (
            <div className="prose dark:prose-invert">
              <h2>Learnings</h2>
              <ul className="list-disc ml-6">
                {project.learnings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact */}
          <div className="prose dark:prose-invert">
            <h2>Impact</h2>
            <p>{project.impact}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 space-y-8">
          {/* Color Scheme */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Color Scheme</h3>
            <div className="flex gap-3">
              {project.colorScheme.map((color, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full border" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>

          {/* Fonts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Fonts</h3>
            <ul className="list-disc ml-6">
              {project.fonts.map((font, idx) => (
                <li key={idx}>{font}</li>
              ))}
            </ul>
          </div>

          {/* Prototype / Demo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Prototype / Demo</h3>
            {project.prototypeLink && (
              <a
                href={project.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <FiExternalLink />
                <span>View Prototype</span>
              </a>
            )}
            {project.videoDemo && (
              <video src={project.videoDemo} controls className="mt-4 w-full rounded-lg" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UIUXProject;
