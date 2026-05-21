"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialCarousel() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth; // Scroll by exactly one full card width
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Testimonials sourced and adapted from the Content Brief
  const testimonials = [
    {
      id: 1,
      quote: "Ajay sir's program completely transformed how I run my gym. I went from 80 to 200 members in 6 months and hired my first trainer.",
      name: "Rahul Sharma",
      title: "Gym Owner, Jaipur",
      image: "https://images.unsplash.com/photo-1629252321485-c9363dd2f581", // Replace with actual image
      bgColor: "bg-[#e8dccb]" // Tan background matching the reference
    },
    {
      id: 2,
      quote: "I had no idea how to price my classes or build a brand. After Ajay's mentorship, I now have a fully booked online yoga program.",
      name: "Meena Kapoor",
      title: "Yoga Instructor, Delhi",
      image: "https://images.unsplash.com/photo-1649570443214-d4028de34e9f",
      bgColor: "bg-[#dbe4e0]" // Soft sage background
    },
    {
      id: 3,
      quote: "We brought Ajay in for our company's wellness initiative. Employee productivity and energy measurably improved within 3 months.",
      name: "Dr. Anil Gupta",
      title: "Corporate Wellness Lead",
      image: "https://images.unsplash.com/photo-1570128641432-a1520efe3b1d",
      bgColor: "bg-[#dbe0e4]" // Soft blue background
    },
    {
      id: 4,
      quote: "I came to Ajay with just 5 clients and no structure. Now I have my own studio, a team of 3, and a predictable monthly income.",
      name: "Priya T.",
      title: "Fitness Studio Founder, Pune",
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3",
      bgColor: "bg-[#e4dbdb]" // Soft rose background
    },
    {
      id: 5,
      quote: "I used to start and stop every diet. The Kayapalat system gave me habits I can actually live with. The daily guidance changed everything.",
      name: "Sunita R.",
      title: "Entrepreneur & KP PRO Member",
      image: "https://images.unsplash.com/photo-1761383396518-e2e30968a25f",
      bgColor: "bg-[#e4e1db]" // Soft warm gray background
    }
  ];

  return (
    <section className="w-full py-10 md:py-16 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center mb-12 md:mb-16 ">
          <h2 className="text-4xl md:text-5xl text-[#1a1a1a]  tracking-tight mb-4 dark:text-gray-50 font-semibold">
            Stories of Lasting <span className="text-[#ff6a3d]">Transformation</span>
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto text-left sm:text-right dark:text-gray-300">
            Real results from wellness professionals, corporate leaders, and individuals who built systems they could actually live with.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar rounded-3xl shadow-2xl"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              // Each card takes exactly 100% of the container width
              <div 
                key={item.id}
                className="w-full flex-shrink-0 snap-center flex flex-col md:flex-row bg-[#141414] text-white"
              >
                {/* Left Side: Image */}
                <div className={`relative w-full md:w-[40%] aspect-square md:aspect-auto ${item.bgColor}`}>
                  {/* Replace src with your actual portrait images */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  <Quote className="w-12 h-12 text-[#ff6a3d]/20 mb-8" />
                  
                  <p className="text-xl md:text-3xl lg:text-3xl font-medium leading-snug mb-12 text-white/90">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.name}</h4>
                      <p className="text-gray-200 text-sm">{item.title}</p>
                    </div>
                    
                    {/* Counter (e.g., 1/5) matching the reference */}
                    <div className="text-gray-500 font-medium tracking-widest text-sm">
                      {index + 1}/{testimonials.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Centered Below) */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Global style to hide webkit scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}