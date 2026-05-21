'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Array of 10 images with mixed dimensions (horizontal, vertical, square)
const IMAGES = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=1000", // Vertical
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1000", // Vertical
  "https://images.unsplash.com/photo-1517462964-21fdce36acaa?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600", // Horizontal
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600"  // Horizontal
];

export default function BeBoldHero() {
  const containerRef = useRef(null);
  
  // Animation Sequence States
  const [activeIndex, setActiveIndex] = useState(-1);
  const [phase, setPhase] = useState('paused'); // 'opening' | 'closing' | 'paused'

  // 1. Core Sequence & Timing Manager
  useEffect(() => {
    let timeout;

    if (phase === 'opening') {
      timeout = setTimeout(() => {
        if (activeIndex >= IMAGES.length - 1) {
          // If we hit the last image, switch to closing mode
          setPhase('closing');
        } else {
          setActiveIndex((prev) => prev + 1);
        }
      }, 350); // Fast open speed
      
    } else if (phase === 'closing') {
      timeout = setTimeout(() => {
        if (activeIndex <= 0) {
          // If all are closed, go to -1 (black screen) and pause
          setActiveIndex(-1);
          setPhase('paused');
        } else {
          setActiveIndex((prev) => prev - 1);
        }
      }, 350); // Fast close speed
      
    } else if (phase === 'paused') {
      // The 2-second black screen before starting over
      timeout = setTimeout(() => {
        setPhase('opening');
        setActiveIndex(0); 
      }, 2000); 
    }

    return () => clearTimeout(timeout);
  }, [phase, activeIndex]);

  // 2. Scroll-to-Expand Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const width = useTransform(scrollYProgress, [0, 0.6, 1], ['25vw', '70vw', '100vw']);
  const height = useTransform(scrollYProgress, [0, 0.6, 1], ['30vh', '80vh', '100vh']);
  const left = useTransform(scrollYProgress, [0, 0.6, 1], ['2vw', '15vw', '0vw']);
  const bottom = useTransform(scrollYProgress, [0, 0.6, 1], ['2vh', '10vh', '0vh']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8, 1], ['12px', '12px', '0px']);
const textY = useTransform(scrollYProgress, [0.7, 1], ['20vh', '0vh']);
  // Fades in slightly faster than it moves
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  return (
    <div ref={containerRef} className="relative h-[380vh] bg-neutral-900 font-sans">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#9ecae6]">

        {/* --- Top Navigation --- */}
        <nav className="absolute top-0 left-0 w-full flex justify-between px-8 py-4 text-xs font-medium uppercase tracking-wider text-black mix-blend-difference z-20">
            <span>Based in NYC</span>
            <div className="flex gap-16">
                <span className="cursor-pointer hover:underline">About</span>
                <span className="cursor-pointer hover:underline">Works</span>
                <span className="cursor-pointer hover:underline">Insights</span>
                <span className="cursor-pointer hover:underline">Contact</span>
            </div>
        </nav>

        {/* --- Background Typography --- */}
        <div className="absolute top-16 w-full text-center z-0 select-none pointer-events-none">
          <h1 className="text-[20vw] font-bold leading-none text-[#e93524] tracking-tighter uppercase">
            Bebold
          </h1>
        </div>

        {/* --- Subtext Elements --- */}
        <div className="absolute top-[45%] left-[5%] max-w-sm text-black z-10 pointer-events-none">
          <p className="text-2xl font-medium tracking-tight">
            Partnered with 200+ businesses to grow their branding
          </p>
        </div>
        <div className="absolute top-[45%] right-[10%] text-black z-10 pointer-events-none">
          <h2 className="text-5xl font-bold uppercase leading-tight tracking-tighter">
            We craft bold<br />Marketing
          </h2>
        </div>

        {/* --- EXPANDING SHOWREEL CONTAINER --- */}
        <motion.div
          style={{ width, height, left, bottom, borderRadius }}
          className="absolute overflow-hidden shadow-2xl z-30 bg-black flex items-center justify-center"
        >
          {IMAGES.map((src, i) => {
            // Determine the state of this specific image relative to the sequence
            const isActive = i === activeIndex;
            const isBehind = i < activeIndex;
            
            // Animation values based on the phase
            let scaleTarget = 0;
            let opacityTarget = 0;

            if (isActive) {
              // The currently popping image
              scaleTarget = 1;
              opacityTarget = 1;
            } else if (isBehind) {
              // Images behind the active one. 
              // Breathe IN (grow) during opening, breathe OUT (shrink) during closing
              scaleTarget = phase === 'opening' ? 1.08 : 1;
              opacityTarget = 1;
            } else {
              // Images ahead in the queue (waiting to open)
              scaleTarget = 0;
              opacityTarget = 0;
            }

            return (
              <motion.img
                key={i}
                src={src}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: scaleTarget, opacity: opacityTarget }}
                transition={{
                  // Keep opacity snappy, but make the scale "breathe" slowly for background images
                  opacity: { duration: 0.25, ease: "easeOut" },
                  scale: isBehind 
                    ? { duration: 1.5, ease: "easeOut" } // Slow breath for background items
                    : { duration: 0.4, type: "spring", bounce: 0.1 } // Snappy pop for the active item
                }}
                style={{ zIndex: i }}
                // object-contain ensures horizontal/vertical/square all display perfectly without crop
                className="absolute inset-0 h-full w-full object-contain will-change-transform origin-center"
                alt={`Showreel frame ${i + 1}`}
                suppressHydrationWarning
              />
            );
          })}
          
          {/* Overlay Text */}
          <div className="absolute bottom-8 left-8 text-white z-40 select-none pointer-events-none">
             <p className="text-sm font-medium tracking-widest drop-shadow-md">[ SHOWREEL ]</p>
          </div>
        </motion.div>
        <motion.div 
          style={{ 
            y: textY, 
            opacity: textOpacity 
          }}
          className="absolute right-[10%] top-[35%] z-50 flex flex-col items-start mix-blend-difference pointer-events-auto"
        >
          {/* Pure white text becomes inverted cyan over red */}
          <h2 className="text-white text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            We turn brave<br />
            ideas into bold<br />
            results.
          </h2>
          
          {/* Outlined Button */}
          <button className="mt-8 flex items-center justify-between gap-8 border border-white px-6 py-2 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Showreel
            <span className="text-lg leading-none pb-1">+</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}