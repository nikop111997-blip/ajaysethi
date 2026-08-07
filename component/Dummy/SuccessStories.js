"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp, Activity } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    profession: "Fitness Consultant, Bangalore",
    before: { label: "Before", value: "5 clients" },
    after: { label: "After", value: "₹2.5 Lakh/mo" },
    quote: "I didn’t realize my pricing structure was holding me back until I joined. The guidance helped me bring my offerings under control & scale it effortlessly.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1000",
    overlayStat: { label: "Revenue Growth", value: "350%" },
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    profession: "Agency Owner, Mumbai",
    before: { label: "Before", value: "No systems" },
    after: { label: "After", value: "₹4 Lakh/mo" },
    quote: "Moving from chaotic freelance work to a structured agency model changed everything. The step-by-step blueprint gave me my time back.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
    overlayStat: { label: "Hours Saved", value: "25h/week" },
  },
  {
    id: 3,
    name: "Vikram Singh",
    profession: "Wellness Coach, Delhi",
    before: { label: "Before", value: "Struggling to close" },
    after: { label: "After", value: "80% Close Rate" },
    quote: "The sales scripts and positioning strategies were exactly what I was missing. I now attract clients who are actually happy to pay premium rates.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
    overlayStat: { label: "Avg. Ticket Size", value: "₹50K+" },
  },
  {
    id: 4,
    name: "Priya Desai",
    profession: "B2B Consultant, Pune",
    before: { label: "Before", value: "Relying on referrals" },
    after: { label: "After", value: "Consistent Pipeline" },
    quote: "I launched my own consulting studio and hit my 12-month goal in just 90 days. The community and direct feedback loops are unmatched.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000",
    overlayStat: { label: "New Leads", value: "40+/mo" },
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play logic
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className=" text-black py-20 sm:pt-20 sm:pb-0 px-6 md:px-12 lg:px-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Real Coaches.
            Real Businesses. <br />
            Real Numbers.
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-dashed border-[#ff6b42]/40 flex items-center justify-center hover:bg-[#ff6b42] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-300" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-dashed border-[#ff6b42]/40 flex items-center justify-center hover:bg-[#ff6b42]0 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-neutral-300" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative h-[600px] md:h-[500px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute inset-0 flex flex-col md:flex-row gap-4"
            >
              
              {/* Left Card: Content & Gradient */}
              <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-[#fdf6e7] via-[#fad694] to-[#f59e0b] p-8 md:p-10 flex flex-col justify-between text-neutral-900"
              style={{
    backgroundImage: `
      radial-gradient(
        ellipse at bottom center,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.1) 60%,
        transparent 100%
      ),
      repeating-radial-gradient(
        rgba(255, 255, 255, 0.08) 0px,
        rgba(255, 255, 255, 0.08) 0.6px,
        transparent 0.6px,
        transparent 2.4px
      ),
      linear-gradient(to bottom right, #ff6b42, #ff470f)
    `,
    backgroundSize: "100% 100%, 10px 10px, 100% 100%",
    backgroundRepeat: "no-repeat, repeat, no-repeat",
  }}
              >
                {/* Top Stats (Before / After) */}
                <div className="flex gap-12 border-b border-neutral-900/10 pb-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-100 mb-1">
                      {testimonials[currentIndex].before.label}
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-white">
                      {testimonials[currentIndex].before.value}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-50 mb-1">
                      {testimonials[currentIndex].after.label}
                      <Activity className="w-4 h-4" />
                    </div>
                    <p className="text-3xl font-bold text-white tracking-tight">
                      {testimonials[currentIndex].after.value}
                    </p>
                  </div>
                </div>

                {/* Main Quote */}
                <p className="text-xl md:text-2xl font-medium leading-relaxed my-8 text-white">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-lg text-white">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-neutral-100 font-medium">
                    {testimonials[currentIndex].profession}
                  </p>
                </div>
              </div>

              {/* Right Card: Image & Glassmorphism Overlay */}
              <div className="w-full md:w-1/2 h-full relative overflow-hidden group">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Glassmorphic Stat Widget */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 text-white w-[220px] shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-medium uppercase tracking-wider text-neutral-200">
                      {testimonials[currentIndex].overlayStat.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {testimonials[currentIndex].overlayStat.value}
                  </p>
                  {/* Faux mini-chart using SVG for aesthetic match */}
                  <svg className="w-full h-8 mt-3 text-red-400 opacity-80" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0 25 Q 10 15, 20 20 T 40 10 T 60 15 T 80 5 T 100 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-2 text-white font-medium hover:text-[#f59e0b] transition-colors pb-1 border-b border-transparent hover:border-[#f59e0b]">
            See More Success Stories 
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}