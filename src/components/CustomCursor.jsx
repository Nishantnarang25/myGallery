import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    // Add mousemove listener
    window.addEventListener("mousemove", moveCursor);

    // Add hover listeners for all interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .hover-effect");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <motion.div
      className={`fixed rounded-full pointer-events-none shadow-lg transition-colors duration-300 bg-yellow-400 w-5 h-5 z-[9999]`}
      style={{ left: position.x - (hovered ? 24 : 8), top: position.y - (hovered ? 24 : 8) }}
      transition={{ type: "spring", damping: 30, stiffness: 500 }}
    />
  );
};

export default CustomCursor;
