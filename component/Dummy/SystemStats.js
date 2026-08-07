'use client';

import React, { useEffect, useState, useRef } from 'react';

// Custom Animated Counter Hook/Component
const AnimatedNumber = ({ end, prefix = '', suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default function SystemStats() {
  const stats = [
    {
      numStart: 0,
      numEnd: 1000,
      suffix: '+',
      label: 'Wellness Professionals Trained',
      highlight: false,
    },
    {
      numStart: 0,
      numEnd: 30,
      suffix: '+',
      label: 'Years Building & Scaling Wellness Businesses',
      highlight: false,
    },
    {
      numStart: 0,
      numEnd: 10000,
      suffix: '+',
      label: "Members in Ajay's Own Business (Kayapalat)",
      highlight: true, 
    },
    {
      numStart: 1,
      numEnd: 3,
      prefix: '1 → ',
      label: 'Gyms Scaled (2008–2013), Then Rebuilt Into a Location-Free Model',
      highlight: false,
    },
    {
      numStart: 0,
      numEnd: 400,
      suffix: '+',
      label: 'Cities · 18+ Countries Reach of Coaches Trained Through Ajay\'s System',
      highlight: false,
    }
  ];

  return (
    <section className="w-full bg-orange-50/50 py-20 px-6 sm:px-10 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
            <span className="text-[#ff5a2b]">This isn't theory from a business book. </span>
            It's a system I built, broke, rebuilt, and now teach.
          </h2>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            // Apply complex layered texture/gradient only to the highlighted card
            const highlightStyle = stat.highlight
              ? {
                  backgroundImage: `
                    radial-gradient(ellipse at bottom center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 60%, transparent 100%),
                    repeating-radial-gradient(rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 0.6px, transparent 0.6px, transparent 2.4px),
                    linear-gradient(to bottom right, #ff6b42, #ff470f)
                  `,
                  backgroundSize: '100% 100%, 3px 3px, 100% 100%',
                  backgroundRepeat: 'no-repeat, repeat, no-repeat',
                }
              : {};

            return (
              <div 
                key={index}
                className={`p-6 md:p-8 flex flex-col justify-between border border-dashed transition-all duration-300 ${
                  stat.highlight 
                    ? 'shadow-lg transform hover:-translate-y-1 border-[#e65127]' 
                    : 'bg-white/30 hover:bg-white/40 backdrop-blur-sm shadow-sm border-gray-300'
                }`}
                style={highlightStyle}
              >
                <div 
                  className={`text-4xl md:text-5xl font-semibold mb-6 tracking-tight ${
                    stat.highlight ? 'text-white drop-shadow-md' : 'text-gray-700'
                  }`}
                >
                  <AnimatedNumber 
                    end={stat.numEnd} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </div>
                
                <p 
                  className={`text-sm md:text-base font-medium leading-snug ${
                    stat.highlight ? 'text-white/90' : 'text-gray-800'
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
