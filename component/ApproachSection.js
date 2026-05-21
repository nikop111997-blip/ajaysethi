import Link from "next/link";
import { Target, Zap, Shield, Star } from "lucide-react";

export default function ApproachSection() {
  return (
    <section className="w-full py-20 md:py-16 px-6 md:px-12 overflow-hidden text-center">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-approach {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="flex flex-col items-start sm:items-center mb-16 animate-approach" style={{ animationDelay: "0.1s" }}>
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff6a3d]"></span>
            <span className="text-sm font-bold text-[#1a1a1a] tracking-wide">Our Approach</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] font-semibold text-left sm:text-center tracking-tight mb-6 max-w-6xl dark:text-gray-50">
            Focused on <span className="text-[#ff6a3d]">sustainable</span> systems
          </h2>

          <p className="text-gray-800 text-lg max-w-2xl leading-relaxed text-left sm:text-center  dark:text-gray-200">
            By focusing on practical lifestyle changes rather than extreme quick fixes, we guide you toward lasting health, predictable business growth, and a resilient mindset.
          </p>
        </div>

        {/* =========================================
            3-COLUMN GRID
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 text-left">
          
          {/* CARD 1: My Mission (Light) */}
          <div 
            className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] flex flex-col hover:-translate-y-1 transition-transform duration-300 animate-approach"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a]">My Mission</h3>
            </div>
            
            <p className="text-gray-800 leading-relaxed flex-grow mb-10">
              To empower individuals and organizations to take absolute control of their health and performance through structured, personalized coaching that doesn't disrupt their real lives.
            </p>

            <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
              <span className="text-4xl font-bold text-[#1a1a1a] tracking-tighter">90%</span>
              <span className="text-sm font-semibold text-gray-800 leading-snug max-w-[180px]">
                Focus Long-Term Results
              </span>
            </div>
          </div>

          {/* CARD 2: My Philosophy (Dark & Highlighted) */}
          <div 
            className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-10 shadow-2xl shadow-[#1a1a1a]/20 flex flex-col relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 animate-approach"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6a3d] opacity-10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#ff6a3d] flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">My Philosophy</h3>
            </div>
            
            <p className="text-gray-50 leading-relaxed flex-grow mb-10 relative z-10">
              Hard work alone does not create results. Clarity and systems do. True transformation happens when healthy living ceases to be a chore and becomes a frictionless, natural part of everyday life.
            </p>

            <div className="border-t border-white/15 pt-6 flex items-center gap-4 relative z-10">
              <span className="text-4xl font-bold text-white tracking-tighter">100%</span>
              <span className="text-sm font-semibold text-gray-50 leading-snug max-w-[180px]">
                Human Led Coaching
              </span>
            </div>
          </div>

          {/* CARD 3: My Values (Light) */}
          <div 
            className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] flex flex-col hover:-translate-y-1 transition-transform duration-300 animate-approach"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a]">My Values</h3>
            </div>
            
            <p className="text-gray-800 leading-relaxed flex-grow mb-10">
              We believe in radical transparency, community-driven accountability, and delivering honest, practical guidance over exhausting willpower and quick-fix marketing gimmicks.
            </p>

            <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
              <span className="text-4xl font-bold text-[#1a1a1a] tracking-tighter">98%</span>
              <span className="text-sm font-semibold text-gray-800 leading-snug max-w-[180px]">
                Client Trust & Satisfaction
              </span>
            </div>
          </div>

        </div>

        {/* =========================================
            FOOTER / CTA SECTION
            ========================================= */}
        <div className="flex flex-col items-start text-left  sm:text-center sm:items-center gap-4 animate-approach" style={{ animationDelay: "0.5s" }}>
          
          {/* Action Link matching reference */}
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-50">
            <span className="bg-[#e4ffd4] text-[#1e6000] font-bold px-3 py-1 rounded-md text-xs tracking-wide">
              FREE
            </span>
            <span>
              Learn More About Our Services, Approach, and Client Support. -  
              <Link href="/contact" className="text-[#1a1a1a] font-bold underline decoration-2 decoration-[#1a1a1a]/40 hover:decoration-[#1a1a1a] transition-colors ml-1 dark:text-gray-50">
                Contact Us Now.
              </Link>
            </span>
          </div>

          {/* Trust Stars */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm font-semibold text-[#1a1a1a] dark:text-gray-50">
              Trusted By <span className="text-[#1a1a1a] font-black tracking-tight dark:text-gray-50">11,000+</span> Users
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#0a312d] text-[#0a312d] dark:text-[#e4ffd4]" />
              ))}
              <span className="text-sm font-black text-[#1a1a1a] ml-1 dark:text-gray-50">4.9/5</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}