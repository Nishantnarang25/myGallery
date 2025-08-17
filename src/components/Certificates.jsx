import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }
};

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
};

const CertificateCard = ({ certificates }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className="h-full"
    >
      <a 
        href={certificates.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        {certificates.image && (
          <motion.img
            src={certificates.image}
            alt={certificates.alt}
            className="w-full h-72 object-cover"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
          />
        )}
      </a>
    </motion.div>
  );
};

export default CertificateCard;
