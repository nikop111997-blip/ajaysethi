'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Counter from '../Counter';
import YoutubePreview from './YoutubePreview';

const CornerHeroSection = () => {
  const videoSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ['start end', 'center center'],
  });

  // White background fades in first (finishes quickly)...
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  // ...then the video scales up from small to full size and fades in.
  const videoOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.1, 1], [0.4, 1]);

  // Initial Load Variants for Hero Text
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <main className="relative w-full bg-[#1a1a1a]">
      {/* --- 1. STICKY HERO SECTION --- */}
      <section className="sticky top-0 h-screen w-full overflow-hidden z-10">
        {/* Background Image & Effects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/conn.webp"
            alt="Background"
            fill
            className="object-cover object-top w-full -rotate-y-180"
            priority
          />
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none opacity-40 mix-blend-overlay"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="9.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10"
          style={{
            background:
              'radial-gradient(circle at 0% 100%, #000 0%, rgba(255,90,43,0.8) 25%, rgba(255,90,43,0.3) 50%, transparent 75%)',
          }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="absolute bottom-10 left-6 lg:bottom-24 lg:left-16 w-full max-w-3xl pr-4 pointer-events-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4 drop-shadow-sm text-white">
              I Trained <Counter to={1000} />+ Fitness &<br className="hidden md:block" />{' '}
              Wellness Professionals.
            </h1>
            <hr className="border-[0.1px] border-white/20 mt-4 mb-4 w-80" />
            <h2 className="text-2xl md:text-2xl font-semibold text-white/95 leading-tight mb-6 max-w-2xl drop-shadow-sm pr-8">
              Now I'll Show You How I Built a Business That Doesn't Depend on You Trading Hours
              for Money.
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-medium drop-shadow-md pr-8">
              You're skilled. Your clients get results. So why does your income still cap out at
              what you can personally deliver in a day? I spent 11 years figuring out the system
              that fixes that — for gyms, studios, and solo coaches alike.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="flex items-center justify-center gap-2 bg-orange-500 border border-white/30 text-[#fff] font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Apply for Business Mentorship
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <a
                href="#story"
                className="group flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors drop-shadow-md"
              >
                Watch Ajay's Story
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={popIn}
            className="absolute bottom-10 right-6 lg:bottom-24 lg:right-16 hidden md:block pointer-events-auto"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-5 max-w-[260px]">
              <div className="flex -space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-white/50 bg-gray-300 overflow-hidden relative shadow-sm">
                  <Image
                    src="https://images.pexels.com/photos/5439438/pexels-photo-5439438.jpeg"
                    alt="Coach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white/50 bg-gray-400 overflow-hidden relative shadow-sm">
                  <Image
                    src="https://images.pexels.com/photos/29440537/pexels-photo-29440537.jpeg"
                    alt="Coach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white/50 bg-gray-500 overflow-hidden relative shadow-sm">
                  <Image
                    src="https://images.pexels.com/photos/3778928/pexels-photo-3778928.jpeg"
                    alt="Coach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#ff5a2b] bg-[#ff5a2b] flex items-center justify-center text-white font-bold text-sm z-10 shadow-sm">
                  +
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                1,000+
              </h3>
              <p className="text-white/90 text-xs font-medium leading-relaxed drop-shadow-sm">
                Coaches trained across 400+ cities and 18+ countries over 30+ years of building
                wellness businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. VIDEO SECTION --- */}
      <section
        ref={videoSectionRef}
        className="relative z-20 w-full  sm:min-h-screen flex items-center justify-center px-4 lg:px-8 py-16 lg:py-24"
      >
        {/* Fading white background layer with gradient fade at the top */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Gradient fade transitioning into the solid white background */}
          {/* Solid white background */}
          <div className="absolute inset-0 bg-white" />
        </motion.div>

        {/* Video card: scales up from small to full size, fades in */}
        <motion.div
          style={{
            opacity: videoOpacity,
            scale: videoScale,
          }}
          className="relative z-10 w-full max-w-7xl aspect-video bg-black  overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.35)] pointer-events-auto"
        >
          <YoutubePreview />
        </motion.div>
      </section>
    </main>
  );
};

export default CornerHeroSection;