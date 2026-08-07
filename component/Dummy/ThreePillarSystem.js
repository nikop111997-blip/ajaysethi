"use client"
import React, { useState, useEffect } from 'react';

export default function ThreePillarSystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Pillars Data - Colors updated to shades of the previous orange background
  const pillars = [
    {
      id: 1,
      title: 'POSITION YOUR OFFER',
      shortTitle: 'Positioning',
      description: 'Stop competing on price. We help you build a clear, structured offer that separates you from every other trainer in your city — so clients choose you before they even ask "how much?".',
      icon: (
        <svg className="w-6 h-6 mb-1.5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: '#ff470f', // Deep Vibrant Orange
      // 60 degrees clockwise from top
      pos: { left: '71.65%', top: '37.5%' } 
    },
    {
      id: 2,
      title: 'BUILD YOUR CLIENT SYSTEM',
      shortTitle: 'Client System',
      description: 'Learn how to attract the right clients and run clarity calls that convert — without aggressive selling, without becoming a full-time social media manager.',
      icon: (
        <svg className="w-6 h-6 mb-1.5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: '#ff6b42', // Mid Orange
      // 180 degrees clockwise from top (bottom center)
      pos: { left: '50%', top: '75%' } 
    },
    {
      id: 3,
      title: 'SCALE WITHOUT BURNING OUT',
      shortTitle: 'Scale & Automate',
      description: 'Move from one-on-one, time-for-money sessions to group and community-based models. Build systems that grow your income without growing your hours.',
      icon: (
        <svg className="w-6 h-6 mb-1.5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: '#ff8f6e', // Lighter Peach/Orange
      // 300 degrees clockwise from top
      pos: { left: '28.35%', top: '37.5%' } 
    }
  ];

  // Auto-switch logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % pillars.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="w-full bg-orange-50/50 text-slate-900 py-16 px-6 sm:px-10 flex items-center font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="max-w-xl relative z-10">
          {/* Badge */}
          <div className="inline-block border border-dashed border-[#ff6b42]/50 bg-[#ff6b42]/20 text-[#ff6b42] px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
            System Summary
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-[3rem] font-bold leading-[1.1] tracking-tight mb-12 text-slate-900">
            The 3-Pillar Breakdown
          </h2>

          {/* Dynamic Content Area */}
          <div className="space-y-8 min-h-[220px] relative">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.id}
                className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
                  activeIndex === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 pointer-events-none transform translate-y-4'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <h3 
                    className="text-4xl font-bold drop-shadow-sm"
                    style={{ color: pillar.color }}
                  >
                    0{pillar.id}
                  </h3>
                  <h4 className="text-xl font-semibold text-slate-800">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed text-lg max-w-md">
                  {pillar.description}
                </p>
                
                {/* Progress Bar Indicator */}
                <div className="w-full max-w-md h-1.5 bg-slate-100 mt-6 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full rounded-full transition-all duration-[5000ms] ease-linear"
                    style={{ 
                      width: activeIndex === index ? '100%' : '0%',
                      backgroundColor: pillar.color,
                      transition: activeIndex === index ? 'width 5000ms linear' : 'none'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Donut Chart */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto z-10">
          
          {/* Decorative Outer Faint Rings (Adjusted for white background) */}
          <div className="absolute inset-2 rounded-full border-[1px] border-slate-200 pointer-events-none"></div>
          <div className="absolute inset-8 rounded-full border-[1px] border-slate-100 pointer-events-none"></div>

          {/* SVG Donut Chart */}
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" style={{ filter: 'drop-shadow(0px 15px 25px rgba(255, 71, 15, 0.15))' }}>
            {pillars.map((pillar, index) => {
              // Mathematical setup for SVG segments based on circumference
              const radius = 25;
              const circumference = 2 * Math.PI * radius; // Approx 157
              const strokeDasharray = circumference;
              const strokeDashoffset = circumference - (circumference / 3);
              const rotation = index * 120; // 0, 120, 240
              const isActive = activeIndex === index;

              return (
                <circle
                  key={`slice-${pillar.id}`}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  stroke={pillar.color}
                  // Increase active slice thickness to make it "pop" out
                  strokeWidth={isActive ? "30" : "26"}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 ease-in-out cursor-pointer hover:opacity-90 origin-center"
                  style={{ 
                    transform: `rotate(${rotation}deg)`,
                    opacity: isActive ? 1 : 0.85
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
            
            {/* Center White Hole (Updated to match new bg) */}
            <circle cx="50" cy="50" r="13" fill="#ffffff" className="pointer-events-none" />
          </svg>

          {/* Icon & Text Overlays - Positioned using exact polar coordinates */}
          {pillars.map((pillar, index) => (
            <div 
              key={`overlay-${pillar.id}`}
              className="absolute flex flex-col items-center justify-center text-center cursor-pointer group transition-transform hover:scale-105"
              style={{
                left: pillar.pos.left,
                top: pillar.pos.top,
                transform: 'translate(-50%, -50%)' // Pins perfectly onto the coordinate center
              }}
              onClick={() => setActiveIndex(index)}
            >
              {pillar.icon}
              <span className={`text-sm font-semibold text-white drop-shadow-md transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
                {pillar.shortTitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}