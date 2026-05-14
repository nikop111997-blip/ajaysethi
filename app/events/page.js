'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransformationStories from '@/component/TransformationStories';
import FaqSection from '@/component/FaqSection';
import FollowCtaSection from '@/component/FollowCtaSection';
import VideoPopup from '@/component/VideoPopup';
import { AlarmClock, Brain, Briefcase, CloudLightning, Gauge, HistoryIcon, TargetIcon, TrendingUp, User2 } from 'lucide-react';

// --- Curated Unsplash Images (Existing) ---
const sliderData = [
  { 
    id: 1, 
    image: '/backns.webp', 
    title: 'Transforming Lives Daily' 
  },
  { 
    id: 2, 
    image: '/tad.jpg', 
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

// --- NEW DATA FOR SPEAKING ENGAGEMENTS ---
const keynoteTopics = [
  {
    icon: <Gauge/>,
    title: 'High Energy, High Performance',
    desc: 'How to build a lifestyle that sustains energy, focus, and productivity in demanding work environments.',
    idealFor: ['Leadership teams', 'High-performance organizations']
  },
  {
    icon: <Brain/>,
    title: 'The Science of Sustainable Health',
    desc: 'Why most health efforts fail—and how to build habits that actually last.',
    idealFor: ['Simple systems', 'Consistency over intensity', 'Lifestyle integration']
  },
  {
    icon: <HistoryIcon/>,
    title: 'From Motivation to Consistency',
    desc: 'How to stop starting and stopping—and build habits that stick.',
    idealFor: ['Behavior change', 'Habit building', 'Real-life application']
  },
  {
    icon: <Briefcase/>,
    title: 'Wellness as a Performance Strategy',
    desc: 'Why employee health is not a perk—but a business advantage.',
    idealFor: ['HR leaders', 'Corporate decision-makers']
  },
  {
    icon: <AlarmClock/>,
    title: 'Simplifying Health in a Busy Life',
    desc: 'Practical ways to stay fit, active, and healthy without disrupting your schedule.',
    idealFor: ['Busy professionals', 'Corporate teams']
  },
  {
    icon: <TrendingUp/>,
    title: 'Building a Wellness Career That Works',
    desc: 'How to turn your passion for health into a meaningful and scalable profession.',
    idealFor: ['Trainers', 'Coaches', 'Wellness professionals']
  },
  {
    icon: <TargetIcon/>,
    title: 'The Inside-Out Transformation Model',
    desc: 'Aligning body, physiology, and psychology for lasting change.',
    idealFor: ['Signature framework talk']
  },
  {
    icon: <User2 />,
    title: 'Stress, Recovery & Emotional Wellness',
    desc: 'How to manage stress, improve recovery, and stay mentally resilient.',
    idealFor: ['Corporate environments', 'Leadership teams']
  }
];

const pastEvents = [
  { name: 'Future Business Builder School', org: 'Herbalife International', year: 'March 2026', loc: 'JECC' },
  { name: 'Wellness Lifestyle Day', org: 'Corporate Wellness', year: 'Sept 2025', loc: 'Hyderabad' },
  { name: 'Kayapalat Coach Academy', org: 'Annual Event', year: 'Yearly', loc: 'In-Person / Online' },
  { name: 'Kayaalat Wellness Retreat', org: 'Annual Event', year: 'Yearly', loc: 'Various Locations' },
  { name: 'Virtual Masterclasses', org: 'Global Audience', year: 'Ongoing', loc: 'Online' },
];

const eventTypes = [
  'Corporate & Leadership Events',
  'Business & Professional Forums',
  'Wellness & Fitness Events',
  'Sports & Endurance Events',
  'Retreats & Workshops'
];

const differentiators = [
  'Simple, practical, and easy to apply',
  'Rooted in 30+ years of real experience',
  'Focused on behavior change—not just motivation',
  'Designed for immediate impact'
];


const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  
  // New state for Keynote Topics toggle
  const [showAllTopics, setShowAllTopics] = useState(false);

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

  const displayedTopics = showAllTopics ? keynoteTopics : keynoteTopics.slice(0, 8);

  return (
    <section className="w-full relative overflow-hidden">
      
      {/* --- FULL SCREEN HERO SLIDER (Existing) --- */}
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

      {/* --- NEW SECTION: SPEAKING ENGAGEMENTS INTRO --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 relative z-30">
        <span className="text-gray-400 text-xs md:text-sm mb-4 block">
          Speaking Engagements
        </span>
        <h2 className="text-3xl md:text-5xl text-neutral-900 mb-6 tracking-tight">
          Transforming Audiences from the <span className="text-[#ff6a3d]">Stage</span>
        </h2>
        <p className="text-lg md:text-lg text-neutral-800 leading-relaxed mb-8">
          Delivering high-impact keynotes at corporate events, leadership forums, and wellness platforms—helping individuals and organizations rethink health, energy, and performance in a practical, relatable way.
        </p>
        <p className="text-md md:text-lg text-neutral-500 font-medium italic">
          "Each session is designed to be engaging, actionable, and immediately applicable to real life."
        </p>
      </div>

      {/* --- NEW SECTION: KEYNOTE TOPICS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-12 relative z-30">

        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {displayedTopics.map((topic, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className=" rounded-lg p-8 border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h4 className="text-xl md:text-lg font-bold text-neutral-900 mb-3">
                  {topic.title}
                </h4>
                <p className="text-neutral-800 text-md mb-6 line-clamp-3">
                  {topic.desc}
                </p>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2 block">
                    Ideal For:
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {topic.idealFor.map((tag, idx) => (
                      <li key={idx} className="bg-[#000000] text-[#fcfcfc] text-xs px-3 py-1.5 rounded-md">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

       
      </div>

      {/* --- NEW SECTION: EVENTS & DIFFERENTIATORS --- */}
      <div className="bg-neutral-900 text-white py-20 md:py-32 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Col: Types of Events & Past Engagements */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Elevating Every Stage</h3>
              <ul className="space-y-4 mb-12 grid grid-cols-1 md:grid-cols-2">
                {eventTypes.map((type, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#ff6a3d] mr-3 text-lg">✓</span>
                    <span className="text-neutral-50 text-md">{type}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neutral-200 italic border-l-4 border-[#ff6a3d] pl-4 mb-12">
                From boardrooms to communities, every session focuses on making health simple, practical, and sustainable.
              </p>

              <h4 className="text-xl font-bold mb-6 text-white border-b border-neutral-700 pb-2">Past & Upcoming Engagements</h4>
              <div className="space-y-6">
                {pastEvents.map((event, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-4">
                    <div>
                      <h5 className="font-semibold text-lg text-neutral-100">{event.name}</h5>
                      <p className="text-sm text-neutral-500">{event.org} • {event.loc}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-[#ff6a3d]/20 text-[#ff6a3d] px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                        {event.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: What Makes it Different & Video Placeholder */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">The Signature Difference</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {differentiators.map((diff, idx) => (
                  <div key={idx} className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-[#ff6a3d] transition-colors">
                    <p className="text-neutral-200 text-md leading-relaxed">{diff}</p>
                  </div>
                ))}
              </div>

              {/* Video Teaser Placeholder */}
           <VideoPopup />
            </div>

          </div>
        </div>
      </div>

      {/* --- GALLERY SECTION (Existing - Perfect for "Audience Shots" & Photos) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-30">
        
        {/* Navigation Tabs */}
        <div className="flex flex-col items-center mb-12 md:mb-20">
          <span className="text-gray-400 text-[10px] md:text-xs mb-2 md:mb-4 tracking-widest uppercase font-bold">
            Portfolio & Audience
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
                
                {/* Skeuomorphic Glass Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8">
                  <motion.div 
                    className="p-4 md:p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <p className="text-[#ff6a3d] text-[10px] md:text-xs text-center font-bold uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                  </motion.div>
                </div>
                
                {/* Mobile Tint */}
                <div className="absolute inset-0 bg-black/10 md:hidden pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

<TransformationStories />
<FaqSection />
<FollowCtaSection />
    </section>
  );
};

export default GallerySection;