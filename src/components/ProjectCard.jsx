import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const ProjectCard = ({ project }) => {
  // pick correct link (priority: live -> caseStudy -> github)
  const link =
    project.liveLink ||
    project.caseStudyLink ||
    project.githubLink;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className="block h-full"
    >
      <div 
        className="h-full overflow-hidden bg-white/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        {/* Thumbnail with smooth scale animation */}
        {project.thumbnail && (
          <motion.div 
            className="w-full h-48 overflow-hidden relative"
            variants={imageVariants}
          >
            <motion.img
              src={project.thumbnail}
              alt={project.title}
              className="absolute w-full object-cover"
              style={{
                objectPosition: 'center',
                imageRendering: 'optimizeQuality'
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        )}

        {/* Content */}
        <motion.div 
          className="p-4 flex flex-col justify-between gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-[#333333] line-clamp-2">
            {project.title}
          </h2>
          
          <p className="text-sm text-[#555555] line-clamp-2">
            {project.description}
          </p>

          <motion.span 
            className="text-md text-[#6B6B6B] uppercase tracking-wider"
            whileHover={{ color: "#805AD5" }}
            transition={{ duration: 0.2 }}
          >
            {project.category}
          </motion.span>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
