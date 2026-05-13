"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
      <Image
  src="/hero.png"
  alt="Ajay Sethi Wellness"
  fill
  className="object-cover object-top grayscale brightness-75 rotate-y-180 "
  priority
/>
        {/* Gradient overlay to ensure text readability like the reference image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        
        {/* Left Column: Trust Badges & Typography */}
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Top Badge: 30+ Years Experience  */}
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 w-max">
              <CheckCircle className="w-4 h-4 text-white/80" />
              <span className="text-white text-xs font-medium">30+ Years Experience</span>
            </div>

            {/* Middle Badge: 50,000+ Lives Impacted  */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-3">
                {/* Avatar placeholders - replace src with actual small images */}
                <img className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                <img className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" src="https://i.pravatar.cc/100?img=2" alt="Client" />
                <img className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" src="https://i.pravatar.cc/100?img=3" alt="Client" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold tracking-wide">
                  50,000+ Lives Impacted
                </span>
                <span className="text-[#ffa98f] text-xs font-medium flex items-center gap-1">
                  ★ Rated highly by 1,000+ Coaches
                </span>
              </div>
            </div>
          </motion.div>

          {/* Headline  */}
        <HeroText />
        </div>

        {/* Right Column: CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-start md:items-end gap-3"
        >
          {/* Orange CTA Card mimicking the reference */}
          <div className="group bg-[#ff6a3d] hover:bg-[#ff5a2b] transition-colors cursor-pointer rounded-2xl px-5 py-2 sm:p-5 flex items-center justify-between gap-8 w-full sm:w-[280px] shadow-2xl">
            <div className="flex flex-row sm:flex-col justify-center sm:justify-between items-center sm:items-start gap-2">
              <Calendar className="w-5 h-5 text-black mb-2" />
              <span className="text-black text-xs font-semibold uppercase tracking-wider mb-1">
                Free 30-min Clarity Call
              </span>
              <span className="text-black text-lg font-bold hidden sm:block">
                Start With Clarity
              </span>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
          </div>

          {/* Subheadline/Subtext  */}
          <p className="text-white text-sm w-full sm:max-w-[280px] text-left md:text-left">
            Through simple systems, consistent action, and community—so transformation becomes sustainable.
          </p>
        </motion.div>

      </div>
    </section>
  );
}