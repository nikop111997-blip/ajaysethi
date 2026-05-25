"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroText() {
  const [index, setIndex] = useState(0);

  // The phrases to cycle through
  const rotatingPhrases = [
    "Create High-Energy Teams.",
    "Grow a Scalable Wellness Business.",
  ];

  // Increased to 4 seconds to give the typing animation time to finish reading
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      // Changed leading to 1.2 to prevent descenders (g, p, y) from getting cut
      className="text-white text-4xl md:text-6xl lg:text-6xl leading-[1.2] tracking-tight flex flex-col"
    >
      {/* Static Line */}
      <span className="block mb-2 font-semibold">Build Lasting Health.</span>

      <div className="relative min-h-[2.5em] md:min-h-[1.5em] w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="absolute top-0 left-0 w-full m-0 bg-clip-text text-transparent bg-gradient-to-r font-semibold from-[#ff6a3d] to-[#ffaa8b]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: {
                transition: { staggerChildren: 0.04 }, // Controls typing speed
              },
              hidden: {},
              exit: {
                opacity: 0,
                y: -10,
                filter: "blur(4px)",
                transition: { duration: 0.4 },
              },
            }}
          >
            {/* Split the string and map out each character for the typing effect */}
            {rotatingPhrases[index].split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, display: "none" },
                  visible: { opacity: 1, display: "inline" },
                }}
                // whitespace-pre is required so spaces aren't ignored by HTML during mapping
                className={char === " " ? "whitespace-pre" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}