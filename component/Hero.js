'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import HeroText from "./HeroText"; // Adjust the import path if needed

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Ajay Sethi Wellness"
          fill
          className="object-cover object-top grayscale brightness-75 rotate-y-0"
          priority
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end gap-10">
        
        {/* Main Content Column (All on one side) */}
        <div className="flex flex-col items-start gap-8 max-w-3xl mt-12">
          
          {/* Headline - 2 Lines */}
          <HeroText />
           <p className="text-white/80 text-xl w-full sm:max-w-md text-left leading-relaxed ">
              Through simple systems, consistent action, and community.
            </p>
               <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-start gap-4 mt-2 open-booking-modal"
          >
            {/* Orange CTA Card */}
            <div className="group bg-[#ff6a3d] hover:bg-[#ff5a2b] transition-colors cursor-pointer rounded-lg px-5 py-2 flex items-center justify-between gap-8 w-full sm:w-[280px] shadow-2xl">
              <div className="flex flex-row sm:flex-row justify-center sm:justify-between items-center sm:items-center gap-2">
                <Calendar className="w-5 h-5 text-white mb-2" />
                <span className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                  Free Clarity Call
                </span>
              </div>
              
              <div className="bg-[#ffffff] rounded-md relative overflow-hidden flex items-center justify-center w-10 h-10 shrink-0">
                <ArrowRight className="w-5 h-5 text-[#1a1a1a] absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
                <ArrowRight className="w-5 h-5 text-[#1a1a1a] absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
              </div>
            </div>

            {/* Subheadline/Subtext */}
           
          </motion.div>
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            {/* Lives Impacted */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
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

          {/* CTA Box & Subtext */}
       

        </div>
      </div>
    </section>
  );
}