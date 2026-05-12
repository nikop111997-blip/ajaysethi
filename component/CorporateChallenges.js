import Image from "next/image";
import { BatteryWarning, Users, Activity } from "lucide-react";

export default function CorporateChallenges() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 md:py-32 px-6 md:px-12 font-sans overflow-hidden">
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-card" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-4xl md:text-5xl lg:text-5xl  text-white leading-[1.1] tracking-tight max-w-2xl">
            Your Team Isn't Lacking Effort.<br />
            <span className="text-[#ff6a3d]">They're Lacking Systems.</span>
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm md:text-right">
            Most corporate wellness programs focus on awareness. We focus on practical application so wellness doesn't remain an initiative—it becomes a way of working.
          </p>
        </div>

        {/* =========================================
            3-COLUMN GRID
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          
          {/* LEFT CARD: Dark */}
          <div 
            className="bg-[#141414] border border-white/5 rounded-[1rem] p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-full animate-card hover:bg-[#1a1a1a] transition-colors group"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <BatteryWarning className="w-8 h-8 text-white/40 mb-6 transition-colors group-hover:text-[#ff6a3d]" />
              <h3 className="text-2xl md:text-3xl text-white tracking-tight">
                High Stress & Fatigue
              </h3>
            </div>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Leadership teams and employees are facing low energy and burnout in high-performance environments, leading to lifestyle-related health issues.
            </p>
          </div>

          {/* CENTER CARD: Image with Overlapping Light Card */}
          <div 
            className="relative rounded-[1rem] overflow-hidden min-h-[400px] md:min-h-full animate-card group"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1579389083395-4507e98b5e67" // Replace with an actual image of a corporate team
              alt="Corporate Team Stress"
              fill
              className="object-cover  transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Gradient overlay for better contrast if needed */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Overlapping Light Card at the bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-6 md:p-8 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <Users className="w-6 h-6 text-[#1a1a1a] mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
                Low Engagement
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Corporate initiatives fail when they disrupt work. Health must fit people's lives, not depend on a place or extreme routines.
              </p>
            </div>
          </div>

          {/* RIGHT CARD: Dark */}
          <div 
            className="bg-[#141414] border border-white/5 rounded-[1rem] p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-full animate-card hover:bg-[#1a1a1a] transition-colors group"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <Activity className="w-8 h-8 text-white/40 mb-6 transition-colors group-hover:text-[#ff6a3d]" />
              <h3 className="text-2xl md:text-3xl text-white tracking-tight">
                Inconsistent Performance
              </h3>
            </div>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Capable people don't lack knowledge or effort. They struggle because their systems don't fit their lifestyle, directly impacting business performance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}