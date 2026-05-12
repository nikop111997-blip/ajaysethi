"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroText() {
  const [index, setIndex] = useState(0);

  // The phrases to cycle through
  const rotatingPhrases = [
    "Create High-Energy Teams.",
    "Grow Scalable Businesses.",
    "Transform Your Life."
  ];

  // Change the text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="text-white text-4xl md:text-6xl lg:text-6xl leading-[1.0] tracking-tight flex flex-col"
    >
      {/* Static Line */}
      <span className="block mb-2">Build Lasting Health.</span>

      {/* Animated Rollover Container */}
      {/* The fixed height (h-[1.2em]) ensures the container doesn't collapse during the transition */}
      <div className="relative h-[1.2em] w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            // Enter from below
            initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
            // Settle in the center
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            // Exit by moving up
            exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
            // Cinematic easing
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            // Absolute positioning allows new text to overlap the old text during the transition
            className="block absolute top-0 left-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a3d] to-[#ffaa8b]"
          >
            {rotatingPhrases[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}