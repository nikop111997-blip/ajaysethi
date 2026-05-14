import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Settings, Map, Users } from "lucide-react";

export default function StrugglesBento() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 font-sans overflow-hidden">
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bento {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-stretch">
        
        {/* =========================================
            LEFT COLUMN: Text & CTA
            (Adjusted spacing to match reference perfectly)
            ========================================= */}
        <div className="xl:col-span-5 flex flex-col items-start justify-center py-10">
          <span 
            className="text-sm font-semibold text-gray-400 tracking-wider mb-6 animate-bento"
            style={{ animationDelay: "0.1s" }}
          >
            The Challenge
          </span>
          
          <h2 
            className="text-5xl md:text-6xl  text-white leading-[1.05] tracking-tight mb-8 animate-bento"
            style={{ animationDelay: "0.2s" }}
          >
            Feeling stuck as a wellness professional?
          </h2>

          <p 
            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-12 max-w-md animate-bento"
            style={{ animationDelay: "0.3s" }}
          >
            You are highly skilled but not earning a consistent, predictable income. If you feel stuck in an exhausting, time-for-money coaching model, you aren't alone.
          </p>

          <div className="animate-bento" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#1a1a1a] py-2 pl-6 pr-4 rounded-xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Book Free Business Audit
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: Bento Box Grid
            (Adjusted heights for perfect alignment)
            ========================================= */}
        <div className="xl:col-span-7 flex flex-col gap-5 w-full">
          
          {/* Top Row: Tall Card + Stacked Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Tall Card (Lack of Positioning) */}
            <div 
              className="bg-[#141414]  rounded-[1rem] p-8 md:p-10 flex flex-col justify-between min-h-[440px] animate-bento group hover:bg-[#1a1a1a] transition-colors"
              style={{ animationDelay: "0.5s" }}
            >
              <Target className="w-16 h-16 text-white/20 mb-8 transition-colors group-hover:text-[#ff6a3d]/60" />
              <div>
                <h3 className="text-3xl  text-white mb-4 tracking-tight">Lack of Positioning</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  You have deep expertise, but struggle to build a clear brand offer or attract the right clients who value your worth.
                </p>
              </div>
            </div>

            {/* Stacked Small Cards */}
            <div className="flex flex-col gap-5 h-full">
              
              {/* Small Card 1 (Missing Systems) */}
              <div 
                className="bg-[#141414] rounded-[1rem] p-8 flex-1 flex flex-col justify-between min-h-[210px] animate-bento hover:bg-[#1a1a1a] transition-colors"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <Settings className="w-6 h-6 text-white/70" />
                  <h3 className="text-xl font-bold text-white tracking-tight">Missing Systems</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Juggling marketing, sales, and coaching alone—relying entirely on manual effort.
                </p>
              </div>

              {/* Small Card 2 (No Clarity) */}
              <div 
                className="bg-[#141414]  rounded-[1rem] p-8 flex-1 flex flex-col justify-between min-h-[210px] animate-bento hover:bg-[#1a1a1a] transition-colors"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <Map className="w-6 h-6 text-white/70" />
                  <h3 className="text-xl font-bold text-white tracking-tight">No Clarity</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Trapped in a cycle of starting and stopping without a structured roadmap.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Row: Wide Card (Time-for-Money Trap) */}
          <div 
            className="bg-[#141414] rounded-[1rem] h-110 flex flex-col-reverse md:flex-row overflow-hidden animate-bento hover:bg-[#1a1a1a] transition-colors min-h-[280px]"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Wide Card Text */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-[#ff6a3d]" />
                <span className="text-[#ff6a3d] font-semibold text-sm tracking-wide uppercase">Scale Up</span>
              </div>
              <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">The Time-for-Money Trap</h3>
              <p className="text-gray-200 text-base leading-relaxed mb-0">
                Transition to scalable online or hybrid coaching without heavy investments in rent, staff, or infrastructure. Build community-based models.
              </p>
              </div>
            </div>

            {/* Wide Card Image */}
            <div className="relative w-full md:w-[55%] min-h-[400px] md:min-h-full">
              <Image
                src="/micpe.webp"
                alt="Scalable Coaching Business"
                fill
                className="object-cover"
              />
              {/* Inner shadow to blend image edge into the dark background */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141414] via-transparent to-transparent"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}