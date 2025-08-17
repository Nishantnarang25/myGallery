// IntroAnimation.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function IntroAnimation({ onComplete }) {
  const [animationState, setAnimationState] = useState("typing");
  const [showAnimation, setShowAnimation] = useState(true);

  // Animation sequence with better timing
  useEffect(() => {
    const sequence = [
      { state: "typing", duration: 5000 }, // Typing phase
      { state: "holding", duration: 1500 }, // Brief pause
      { state: "exiting", duration: 1000 } // Smooth exit
    ];

    let currentStep = 0;
    let timeout;

    const runSequence = () => {
      if (currentStep >= sequence.length) {
        setShowAnimation(false);
        onComplete();
        return;
      }

      const step = sequence[currentStep];
      setAnimationState(step.state);

      timeout = setTimeout(() => {
        currentStep++;
        runSequence();
      }, step.duration);
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [onComplete]);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Smoother particle configuration
  const particlesConfig = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 30 },
      size: { value: 2.5 },
      move: { 
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      },
      color: { value: "#FFCC47" },
      opacity: {
        value: 0.5,
        random: true
      }
    }
  };

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { 
              duration: 1,
              ease: "easeInOut" 
            } 
          }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center flex-col overflow-hidden"
        >
          {/* Subtle particle background */}
          <Particles
            init={particlesInit}
            options={particlesConfig}
            className="absolute inset-0 z-0 opacity-70"
          />

          {/* Main content with better transitions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { 
                duration: 0.8,
                ease: "backOut" 
              }
            }}
            exit={{ 
              y: -20, 
              opacity: 0,
              transition: { 
                duration: 0.6,
                ease: "easeIn" 
              }
            }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              <Typewriter
                words={["Hello, I'm Nishant", "Welcome to my Portfolio"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </h1>
            
            {animationState === "holding" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                className="text-lg text-gray-600 mt-4"
              >
                Let's create something amazing
              </motion.p>
            )}
          </motion.div>

          {/* Background transition layer */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: animationState === "exiting" ? 1 : 0,
              transition: { 
                duration: 1,
                ease: "anticipate" 
              }
            }}
            className="absolute inset-0 bg-[#FFCC47] origin-left z-5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}