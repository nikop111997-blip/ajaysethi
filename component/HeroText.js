"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroText() {
  const [index, setIndex] = useState(0);

  const rotatingPhrases = [
    "Create High-Energy Teams.",
    "Grow a Scalable Business.", // Slightly shortened to ensure it fits nicely on one line
  ];

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
      className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight flex flex-col w-full"
    >
      {/* Line 1: Static Line */}
      <span className="block font-semibold">Build Lasting Health.</span>

      {/* Line 2: Rotating Line (Fixed height strictly holds it to a 2nd line without jumping) */}
      <div className="relative h-[1.3em] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="absolute top-0 left-0 w-full m-0 bg-clip-text text-transparent bg-gradient-to-r font-semibold from-[#ff6a3d] to-[#ffaa8b]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: {
                transition: { staggerChildren: 0.04 },
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
            {rotatingPhrases[index].split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, display: "none" },
                  visible: { opacity: 1, display: "inline" },
                }}
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