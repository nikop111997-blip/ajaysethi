import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutAjay() {
  return (
    <section className="w-full text-black overflow-hidden flex justify-center "
    
    >
      <div className=" flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-2 mx-auto">
        
        {/* Left Column: Image (Matching the seated portrait style) */}
      <div
  className="w-full lg:w-1/3 relative flex justify-center lg:justify-end"
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
          <div className="relative w-full max-w-md lg:max-w-3xl aspect-[3/4] overflow-hidden">
            {/* 
              Replace with your actual image path. 
              For best results, use an image with a light/transparent background 
              matching the #FAFAF8 section background, just like the reference photo.
            */}
            <Image 
              src="/sared.png" 
              alt="Ajay Sethi" 
              fill
              className="object-cover w-full h-full object-top rounded-2xl"
            />
          </div>
          
          {/* Circular Stat Badge (Tanner-style Lift) */}
        
        </div>

        {/* Right Column: Typography & Copy */}
        <div className="w-full lg:w-2/3 py-12 bg-white flex flex-col justify-center px-12">
          
          {/* Eyebrow / Massive Header */}
          <div className="mb-8">
            <h2 className="text-[3rem] sm:text-[4rem] font-semibold leading-[0.85] tracking-tighter text-black ">
              About <span className='text-[#ff5a2b]/70'>Ajay.</span>
            </h2>
            {/* Gold Accent Line */}
            <div className="w-16 h-1 bg-[#ff5a2b] mt-8"></div>
          </div>

          {/* Headline & Body Copy */}
          <div className="space-y-6 font-sans text-gray-800 text-base md:text-lg leading-relaxed">
            <p className="font-bold text-xl">
              Welcome, Fellow Wellness Professional.
            </p>
            
            <p>
              My name is Ajay Sethi, and I've spent the last three decades doing exactly what you're trying to do — turn wellness expertise into a real, sustainable business.
            </p>
            
            <p>
              It started on a basketball court, then a corporate job at Tata Steel, and eventually my first gym in 1995 — with no roadmap, no ecosystem, no guarantees. It took me 13 years just to become financially stable. I built a computer business that failed. I scaled from 1 gym to 3, and learned the hard way that scaling revenue and scaling sustainably are two very different things.
            </p>

            <p>
              By 2020, I'd trained hundreds of trainers who now run successful businesses of their own. But I also saw the same pattern in almost every wellness professional I met: skilled, hardworking, capable — and stuck. Trading hours for money. Dependent on a location. One bad month away from real stress.
            </p>

            <p>
              So I rebuilt my own business from the ground up into something location-free, systemized, and scalable — and started teaching that exact system to other coaches.
            </p>

            <p className="font-semibold italic text-[#ff5a2b]">
              That system is what you're looking at now.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}