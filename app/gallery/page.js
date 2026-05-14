'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransformationStories from '@/component/TransformationStories';
import FaqSection from '@/component/FaqSection';
import FollowCtaSection from '@/component/FollowCtaSection';

// --- Curated Unsplash Images ---
const sliderData = [
  { 
    id: 1, 
    image: '/backns.webp', 
    title: 'Transforming Lives Daily' 
  },
  { 
    id: 2, 
    image: '/tali2.jpg', 
    title: 'Corporate Wellness Leadership' 
  },
  { 
    id: 3, 
    image: '/smgha.webp', 
    title: 'Global Speaking Events' 
  },
];

const categories = ['All', 'Mentorship', 'Corporate', 'Events'];

const galleryData = [
  { id: 1, category: 'Mentorship', image: '/conn.webp' },
  { id: 2, category: 'Events', image: '/ajay_sir_speaking.webp' },
  { id: 3, category: 'Corporate', image: '/dswa.jpg' },
  { id: 4, category: 'Mentorship', image: '/engage.webp' },
  { id: 5, category: 'Events', image: '/jums.jpg' },
  { id: 6, category: 'Corporate', image: '/sabha.webp' },
];

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredGallery =
    activeTab === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  return (
    <section className="w-full relative overflow-hidden">
      
      {/* --- FULL SCREEN HERO SLIDER --- */}
 
{/* HERO SLIDER CONTAINER - Set background to black to prevent white flashes */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Ken Burns Effect */}
            <motion.div 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              style={{ 
                  backgroundImage: `url(${sliderData[currentSlide].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
              }}
              className="absolute inset-0 w-full h-full"
            />

            {/* FIXED DARK OVERLAY - This stays dark so text is always visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10" />

          
          </motion.div>
        </AnimatePresence>

        {/* Liquid Glass Navigation */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-30">
          <div className="flex gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative flex items-center justify-center"
              >
                <div className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentSlide === index ? 'w-12 bg-[#ff6a3d]' : 'w-3 bg-white/30 hover:bg-white/60'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* --- GALLERY SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-30">
  
  {/* Navigation Tabs */}
  <div className="flex flex-col items-center mb-12 md:mb-20">
    <span className="text-gray-400 text-[10px] md:text-xs mb-2 md:mb-4 tracking-widest uppercase font-bold">
      Portfolio
    </span>
    <h3 className="text-3xl md:text-5xl text-neutral-900 mb-8 md:mb-10 text-center font-bold tracking-tight">
      Capturing the Journey
    </h3>
    
    {/* Responsive Tabs Wrapper */}
    <div className="w-full flex justify-start md:justify-center overflow-x-auto no-scrollbar pb-4 md:pb-0">
      <div className="inline-flex p-1 rounded-xl bg-neutral-100 border border-neutral-200/60 shadow-inner shrink-0">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 md:px-10 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === tab ? 'text-white' : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-neutral-900 rounded-xl z-0"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Gallery Grid - Responsive Columns */}
  <motion.div 
    layout 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
  >
    <AnimatePresence mode="popLayout">
      {filteredGallery.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="group relative aspect-[4/5] rounded-2xl md:rounded-[1rem] overflow-hidden cursor-pointer bg-neutral-200 shadow-lg md:shadow-xl"
        >
          {/* Background Image */}
          <div 
            className="w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
            style={{ 
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Skeuomorphic Glass Hover Effect - Visible on Hover (Desktop) and always available (Mobile interaction) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8">
            <motion.div 
              className="p-4 md:p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
            >
              <p className="text-[#ff6a3d] text-[10px] md:text-xs text-center font-bold uppercase tracking-widest mb-1">
                {item.category}
              </p>
            </motion.div>
          </div>
          
          {/* Mobile Tint (Optional: ensures visibility on touch devices) */}
          <div className="absolute inset-0 bg-black/10 md:hidden pointer-events-none" />
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
</div>
      <TransformationStories />
      <FaqSection />
      <FollowCtaSection/>
    </section>
  );
};

export default GallerySection;