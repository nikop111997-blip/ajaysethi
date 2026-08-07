'use client';

import React from 'react';

const CheckIcon = () => (
  <svg 
    className="w-5 h-5 text-orange-200 shrink-0 mt-0.5" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

export default function WellnessCoachingOffer() {
  const commonFeatures = [
    "Online coaching & mentorship",
    "Live and offline training sessions",
    "Step-by-step business frameworks",
    "Group coaching + community support",
    "Real-world implementation assignments"
  ];

  return (
    <section className="w-full py-24 px-6 sm:px-10 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <p className="text-[#ff5a2b] font-bold tracking-widest text-sm uppercase mb-4">
            The Program
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Wellness Business Coaching
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            A structured pathway to turn your wellness expertise into a profitable, 
            scalable business — without heavy investment, rent, or confusion.
          </p>

          {/* Who It's For Box */}
          <div className="bg-white p-8 shadow-sm border border-dashed border-gray-100 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ff5a2b]"></div>
            <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">Who It's For</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              Fitness trainers, gym & studio owners, yoga instructors, dieticians, physiotherapists, doctors, 
              and ex-sportspeople who are skilled but not earning consistently — and ready to stop trading time for money.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto mb-16">
          
          {/* TIER 1 CARD */}
          <div className="relative bg-gradient-to-br from-[#ff8c42] via-[#e84d1c] to-[#b32005] p-2 shadow-2xl flex flex-col">
            
            {/* Top White Section */}
            <div className="bg-white p-8 md:p-10 flex flex-col h-full relative">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#ff5a2b] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a2b]"></span>
                  Tier 1 — Foundation
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a2b]"></span>
                </span>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
                Entry Program
              </h3>
              <p className="text-xl italic text-[#ff5a2b] mb-6">
                Build your base
              </p>
              
              <p className="text-gray-600 mb-8 font-medium line-clamp-3 min-h-[4.5rem]">
                12-week structured foundation to build your offer, systems, and first predictable client pipeline.
              </p>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">₹50k</span>
                <span className="text-2xl font-bold text-gray-400 mx-2">–</span>
                <span className="text-4xl font-extrabold text-gray-900">₹90k</span>
              </div>

              <div className="mt-auto">
                <button className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all transform hover:-translate-y-0.5 w-max">
                  Apply for Foundation →
                </button>
              </div>
            </div>

            {/* Bottom Orange Section (Features) */}
            <div className="px-8 py-10">
              <p className="text-white/90 font-bold mb-6 uppercase text-sm tracking-wider">What You Get:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {commonFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white text-sm font-medium">
                    <CheckIcon />
                    <span className="leading-tight pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TIER 2 CARD */}
          <div className="relative bg-gradient-to-br from-[#ff8c42] via-[#e84d1c] to-[#b32005] p-2 flex flex-col">
            
            {/* Top White Section */}
            <div className="bg-white p-8 md:p-10 flex flex-col h-full relative">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#ff5a2b] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a2b]"></span>
                  Tier 2 — Advanced
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a2b]"></span>
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  For Scaling
                </span>
              </div>
              
              <h3 className="text-4xl font-serif text-gray-900 mb-2 leading-tight">
                Advanced Mentorship
              </h3>
              <p className="text-xl font-serif italic text-[#ff5a2b] mb-6">
                Scale your impact
              </p>
              
              <p className="text-gray-600 mb-8 font-medium line-clamp-3 min-h-[4.5rem]">
                Ongoing mentorship for coaches ready to scale — deeper systems, community-based growth, and hands-on support.
              </p>

              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">₹4,00,000</span>
                <span className="text-2xl font-bold text-gray-600 ml-1">+</span>
              </div>

              <div className="mt-auto">
                <button className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all transform hover:-translate-y-0.5 w-max">
                  Apply for Advanced Mentorship →
                </button>
              </div>
            </div>

            {/* Bottom Orange Section (Features) */}
            <div className="px-8 py-10">
              <p className="text-white/90 font-bold mb-6 uppercase text-sm tracking-wider">What You Get:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {commonFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white text-sm font-medium">
                    <CheckIcon />
                    <span className="leading-tight pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Reassurance Line */}
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            <strong className="text-gray-900">Most wellness professionals don't fail from lack of skill — they fail from lack of positioning and systems.</strong><br className="hidden md:block" /> 
            This program fixes exactly that. Not theory. Real-world application, built from 30 years of running (and rebuilding) my own wellness business.
          </p>
        </div>

      </div>
    </section>
  );
}