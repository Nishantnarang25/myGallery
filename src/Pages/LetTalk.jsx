import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";

const LetTalk = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "query recieve",
        "template_y8lw8ap",
        formRef.current,
        "-BURQLDj9L_LgpAmW"
      )
      .then(
        () => {
          setLoading(false);
          formRef.current.reset();
          toast.success("✨ Message sent successfully! I'll reply soon.", {
            position: "top-right",
            style: {
              background: "#8A2BE2", // electric purple
              color: "#fff",
            },
          });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          toast.error("⚠️ Failed to send. Please try again later.", {
            position: "top-right",
            style: {
              background: "#FF6F3C", // orange
              color: "#fff",
            },
          });
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#F1F1F1]">
      <Toaster />

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#333333] mb-2"
            whileHover={{ scale: 1.02 }}
          >
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#805AD5] to-[#8A2BE2]">
              Collaborate
            </span>
          </motion.h1>
          <motion.p
            className="text-[#6B6B6B] text-lg md:text-xl"
            whileHover={{ x: 5 }}
          >
            Got an idea brewing? Let’s make it happen together!
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={itemVariants}
          className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6 relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          {/* Decorative gradient circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#8A2BE2]/20"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#8A2BE2]/10"></div>

          {/* Animated plane */}
          <motion.div
            className="absolute top-0 left-0 text-[#8A2BE2] text-2xl"
            animate={{
              x: isHovered ? "100vw" : -50,
              y: isHovered ? [0, -100, 0] : 0,
              rotate: isHovered ? [0, 360] : 0,
            }}
            transition={{ duration: 2 }}
          >
            <FaPaperPlane />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <motion.div className="relative" whileHover={{ scale: 1.01 }}>
              <label className="block text-sm font-medium text-[#333333] mb-1 flex items-center">
                <FiUser className="mr-2 text-[#8A2BE2]" /> Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C] outline-none transition-all"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email */}
            <motion.div className="relative" whileHover={{ scale: 1.01 }}>
              <label className="block text-sm font-medium text-[#333333] mb-1 flex items-center">
                <FiMail className="mr-2 text-[#8A2BE2]" /> Email Address
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C] outline-none transition-all"
                placeholder="you@example.com"
              />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div className="relative" whileHover={{ scale: 1.01 }}>
            <label className="block text-sm font-medium text-[#333333] mb-1 flex items-center">
              <FiMessageSquare className="mr-2 text-[#8A2BE2]" /> Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF6F3C] focus:ring-2 focus:ring-[#FF6F3C] outline-none transition-all"
              placeholder="Tell me about your project..."
            ></textarea>
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-[#333333]  text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(138, 43, 226, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {loading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FiSend />
              </motion.span>
            ) : (
              <>
                <span>Send Message</span>
                <FiSend />
              </>
            )}
          </motion.button>


          {/* Submit */}
          <motion.button
            className="w-full bg-white text-gray-600 border border-[#333333] font-medium py-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(138, 43, 226, 0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
         
              <span className="text-sm sm:text-base tracking-wide">
                or you can mail me at <span className="font-semibold text-[#333]">nishantnarang111@gmail.com</span>
              </span>
          </motion.button>

          {/* Micro-interaction */}
          <motion.div
            className="text-center text-sm text-[#6B6B6B] mt-4"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            P.S. I usually respond within 24 hours!
          </motion.div>
        </motion.form>

        {/* Footer */}
        <motion.div
          className="mt-10 text-center text-[#6B6B6B] text-sm"
          variants={itemVariants}
        >
          <p>Alternatively, you can reach me at:</p>
          <motion.div
            className="flex justify-center space-x-4 mt-2"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="https://github.com/Nishantnarang25/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A2BE2] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6F3C] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-[#FFC107] transition-colors"
            >
              Dev
            </a>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default LetTalk;
