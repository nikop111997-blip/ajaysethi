import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function SuccessStoriesHero() {
  return (
    <section className="relative w-full h-[110vh] sm:min-h-screen flex items-end pb-20 md:pb-32 px-6 md:px-12 font-sans overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-text {
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      {/* =========================================
          BACKGROUND IMAGE & OVERLAYS
          ========================================= */}
      <div className="absolute inset-0 z-0">
        {/* Replace src with a high-res, cinematic image of Ajay with a group or speaking to an audience */}
        <Image
          src="/sabha.webp"
          alt="Ajay Sethi - Success Stories"
          fill
          className="object-cover object-center grayscale"
          priority
        />
        {/* Dark gradient overlay: Starts dark at the bottom for text readability, fades to transparent at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        {/* Optional: subtle dark tint across the whole image */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* =========================================
          HERO CONTENT
          ========================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col items-start max-w-3xl">
          
          <div className="animate-hero-text" style={{ animationDelay: "0.1s" }}>
            {/* Eyebrow / Tag */}
            <span className="flex items-center gap-3 text-sm font-bold text-[#ff6a3d] tracking-widest uppercase mb-4 sm:mb-6">
              <span className="w-8 h-[2px] bg-[#ff6a3d]"></span>
              Success Stories
            </span>
            
            {/* Headline from Content Brief */}
            <h1 className="text-4xl md:text-6xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
              Real feedback from<br />
              <span className="text-[#ff6a3d]">real transformations.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-50 text-md md:text-xl leading-relaxed mb-10 max-w-2xl">
              Don't just take our word for it. Discover how individuals, corporate teams, and passionate wellness professionals have broken through their limits and built sustainable systems with Ajay Sethi.
            </p>

            {/* Anchor Link to scroll down to the testimonials */}
            <a
              href="#stories"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-2xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Read Their Stories
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
                <ArrowDown className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-y-[150%]" />
                <ArrowDown className="w-5 h-5 text-white absolute -translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Floating Trust Indicators */}
        <div className="flex flex-col gap-4 animate-hero-text" style={{ animationDelay: "0.4s" }}>
          
          <div className="hidden sm:block">
            {/* Badge 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl mb-4 p-5 flex items-center gap-4 w-max shadow-xl">
              <div className="bg-[#ff6a3d]/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ff6a3d]/30">
                <CheckCircle2 className="w-5 h-5 text-[#ff6a3d]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none mb-1">50,000+ Lives</span>
                <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Impacted Globally</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 w-max shadow-xl">
              <div className="bg-[#ff6a3d]/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ff6a3d]/30">
                <CheckCircle2 className="w-5 h-5 text-[#ff6a3d]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none mb-1">1,000+ Coaches</span>
                <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Trained & Mentored</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}