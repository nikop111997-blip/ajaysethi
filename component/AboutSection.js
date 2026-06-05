import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Notice there is no "use client" at the top. 
// This is now a pure Server Component.

export default function AboutSection() {
  return (
    <section className="w-full py-20 md:py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Main Image */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
  <Image
    src="/wes.jpg"
    alt="Ajay Sethi - Wellness Consultant"
    fill
    priority
    sizes=""
    className="object-cover object-top"
  />
</div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-start relative">
          
          {/* Section Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-[#d1d5db]"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-50 uppercase">
              About
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] font-semibold dark:text-gray-50 leading-[1.1] tracking-tight mb-6">
            Meet <span className="text-[#ff6a3d]">Ajay Sethi</span> <br />
            Your Wellness & Business Growth Partner
          </h2>

          {/* Paragraph (From Content Brief) */}
          <p className="text-gray-800 text-lg leading-relaxed mb-4 max-w-xl dark:text-gray-50">
           Former professional athlete, entrepreneur, and founder of Kayapalat Wellness.
          </p>
<p className="text-gray-800 text-lg leading-relaxed mb-4 max-w-xl dark:text-gray-50">
           For over 30 years, Ajay has worked with individuals, professionals, athletes, and organizations helping them build healthier, more active, and more fulfilling lives.</p>
<p className="text-gray-800 text-lg font-bold leading-relaxed mb-2 max-w-xl dark:text-gray-50">
           Along the way, he realised something important: </p>
           <ul className="list-disc list-inside mb-6">
             <li className="text-gray-800 text-md leading-relaxed  max-w-xl dark:text-gray-50">
               Most people don’t fail because they lack discipline or motivation.
             </li>
             <li className="text-gray-800 text-md leading-relaxed max-w-xl dark:text-gray-50">
          
           They fail because the systems they follow feel stressful, restrictive, and impossible to sustain in real life.</li>
            <li className="text-gray-800 text-md leading-relaxed max-w-xl dark:text-gray-50">
           That realization eventually led to the creation of Kayapalat—a simple, structured, community-driven approach that makes health, movement, and wellbeing feel natural, enjoyable, and deeply integrated into everyday life.
         </li>
         </ul>
<p className="text-gray-800 text-lg leading-relaxed mb-10 max-w-xl dark:text-gray-50">
Because when wellness becomes a way of living instead of a task to complete<strong>{" "}going back to your old self becomes almost impossible.</strong>
          </p>
          {/* CTA Button - CSS Hover animations still work perfectly on server components! */}
          <Link
              href="/about"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-2xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Know More About Me
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>

        </div>
      </div>
    </section>
  );
}