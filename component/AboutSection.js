import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Notice there is no "use client" at the top. 
// This is now a pure Server Component.

export default function AboutSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Main Image */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
  <Image
    src="/self.jpg"
    alt="Ajay Sethi - Wellness Consultant"
    fill
    priority
    className="object-cover object-top scale-125 translate-y-22"
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
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] dark:text-gray-50 leading-[1.1] tracking-tight mb-6">
            Meet <span className="text-[#ff6a3d]">Ajay Sethi</span> <br />
            Your Wellness & Business Growth Partner
          </h2>

          {/* Paragraph (From Content Brief) */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-10 max-w-xl dark:text-gray-50">
            I'm a former professional athlete, entrepreneur, and founder of Kayapalat Wellness. For over 30 years, I've worked with athletes, professionals, and everyday individuals trying to answer one question: Why do capable people struggle to stay healthy, fit, and happy?
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

          {/* Bottom Area: Stats & Secondary Image */}
          <div className="w-full mt-16 flex flex-col sm:flex-row justify-between items-end gap-10 ">
            {/* Stats */}
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#1a1a1a] dark:text-gray-50 mb-1">30+</span>
                <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#1a1a1a] dark:text-gray-50 mb-1">50k+</span>
                <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">Lives Impacted</span>
              </div>
            </div>

            {/* Secondary Image (like the reference) */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gray-100 shadow-lg flex-shrink-0">
               {/* Replace src with an action shot or secondary portrait */}
              <Image
                src="/tali.webp" 
                alt="Ajay Sethi Coaching"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}