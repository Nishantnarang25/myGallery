import { useParams } from 'react-router-dom';
import { webDevProjects } from '../../data/webDevProjects';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiClock, FiUsers } from 'react-icons/fi';

const webDevProjects = () => {
  const { slug } = useParams();
  const project = webDevProjects.find(project => project.slug === slug);

  if (!project) return <div className="container mx-auto py-20">Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h1>
            <p className="text-xl text-blue-100 mb-8">{project.subtitle}</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
      </div>

      {/* Project Meta */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FiClock className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
              <p className="font-medium">{project.meta.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <FiUsers className="text-purple-600 dark:text-purple-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
              <p className="font-medium">{project.meta.teamSize}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
              <p className="font-medium">{project.meta.status}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
              <p className="font-medium">{project.meta.client}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-2/3">
            {project.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-16"
              >
                {section.type === 'brief' && (
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-600 dark:text-gray-300">{section.content}</p>
                  </div>
                )}
                
                {section.type === 'problem' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{section.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                  </div>
                )}
                
                {section.type === 'solution' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{section.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                  </div>
                )}
                
                {section.type === 'features' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Technical Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technical Highlights</h2>
              <div className="space-y-6">
                {project.technical.challenges.map((challenge, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Challenge: {challenge.description}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-blue-500 dark:text-blue-400">Solution:</span> {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Tech Stack & Links */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-8 space-y-8"
            >
              {/* Tech Stack */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technical.stack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Project Links</h3>
                <div className="space-y-3">
                  {project.technical.deployment.live && (
                    <a
                      href={project.technical.deployment.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                    >
                      <FiExternalLink className="text-blue-500 dark:text-blue-400" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                  
                  {project.technical.github && (
                    <a
                      href={project.technical.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <FiGithub className="text-gray-700 dark:text-gray-300" />
                      <span className="font-medium">View on GitHub</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Screenshots Preview */}
              {project.media.screenshots.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Preview</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.media.screenshots.slice(0, 4).map((screenshot, index) => (
                      <a
                        key={index}
                        href={screenshot.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                      >
                        <img 
                          src={screenshot.url} 
                          alt={screenshot.alt || `${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      {project.media.demo && (
        <div className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">See It In Action</h2>
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {project.media.demo.type === 'gif' ? (
                <img 
                  src={project.media.demo.url} 
                  alt={`${project.title} demo`}
                  className="w-full h-auto"
                />
              ) : (
                <video 
                  src={project.media.demo.url} 
                  poster={project.media.demo.thumbnail}
                  controls
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default webDevProjects;