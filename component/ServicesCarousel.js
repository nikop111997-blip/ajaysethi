"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicesCarousel() {
  const scrollContainerRef = useRef(null);

  // Improved scroll logic: dynamically calculates the width of one card to scroll perfectly
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Get the width of the first card
      const cardWidth = container.children[0].clientWidth;
      // The gap between cards is 1.5rem (24px) based on the 'gap-6' class
      const gap = 24; 
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
      
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Data extracted directly from the website content brief
  const services = [
    {
      id: 1,
      title: "Personal Wellness",
      description: "A simple, structured system to help you build lasting health, fitness, and happiness—without extreme diets, long workouts, or disrupting your lifestyle.",
      image: "https://images.unsplash.com/photo-1758274526979-fa8dbb31cb21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbmFsJTIwd2VsbG5lc3N8ZW58MHwwfDB8fHww"
    },
    {
      id: 2,
      title: "Corporate Wellness",
      description: "Practical wellness systems that help organizations build healthier, more energised, and more productive teams; without disrupting work.",
      image: "https://images.unsplash.com/photo-1758691737584-a8f17fb34475?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: "/corporate-wellness"
    },
    {
      id: 3,
      title: "Business Coaching",
      description: "A structured pathway to help you turn your passion for wellness into a profitable, scalable coaching business—without heavy investments or confusion.",
      image: "https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: ""
    },
    // Added 4th Item from the brief to enable scrolling on desktop
    {
      id: 4,
      title: "Speaking & Workshops",
      description: "Engaging, actionable sessions designed for leadership teams and organizations to build sustainable health, high energy, and performance.",
      image: "https://images.unsplash.com/photo-1715610258704-e8f9f5710fe0?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: "/speaking"
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight tracking-tight mb-4">
              Here’s How I Help You <br />
              <span className="text-[#ff6a3d]">Transform</span>
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Proven systems, personalized strategy, and community accountability to turn your health and business goals into lasting results.
            </p>
          </div>
          
          {/* Top CTA Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/services"
              className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors"
            >
              View All Services
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-[#1a1a1a] bg-white px-6 py-3 rounded-full text-sm font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Free Call
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            // snap-x and snap-mandatory enable the smooth locking effect when swiping
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <div 
                key={service.id}
                // width settings calculate exactly how many cards show per breakpoint
                className="bg-white border border-gray-100 shadow-sm rounded-[1rem] p-8 flex flex-col snap-start shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 tracking-tight pr-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-800 text-sm leading-relaxed mb-8 flex-grow">
                  <span className="font-semibold text-gray-900">Description: </span>
                  {service.description}
                </p>

                {/* Bottom Image */}
                <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mt-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer text-gray-600 hover:bg-zinc-950 hover:text-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer text-gray-600 hover:bg-zinc-950 hover:text-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Global style to hide webkit scrollbar for the carousel container */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}