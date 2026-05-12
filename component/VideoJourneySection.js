import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";

export default function VideoJourneySection() {
  return (
    <section 
      // The `bg-fixed` class creates the parallax "stuck background" effect when scrolling
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-fixed bg-center bg-cover font-sans overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')" }} // Replace with actual high-res background image
    >
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

      {/* Dark Overlay to ensure text readability against the background */}
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/80 md:to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* =========================================
            LEFT COLUMN: Text & CTA
            ========================================= */}
        <div className="flex flex-col items-start text-white animate-card" style={{ animationDelay: "0.1s" }}>
          
          {/* Eyebrow Pill */}
          <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#ff6a3d] animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-white/90">Watch Our Approach</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl leading-[1.05] tracking-tight mb-8 max-w-lg">
            Watch the video and start your <span className="text-[#ff6a3d]">transformation.</span>
          </h2>
          
          {/* CTA Button */}
          <Link
            href="/clarity-call"
            className="inline-flex items-center gap-4 bg-[#1a1a1a] text-white py-2 pl-6 pr-4 rounded-full text-base font-bold hover:bg-black transition-colors group border border-white/10"
          >
            Start With Clarity
            <div className="bg-[#ff6a3d] rounded-full relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
          </Link>
        </div>

        {/* =========================================
            RIGHT COLUMN: The White Floating Card
            ========================================= */}
        <div 
          className="bg-white rounded-[1rem] p-8 md:p-10 shadow-2xl w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto animate-card" 
          style={{ animationDelay: "0.3s" }}
        >
          {/* Avatar Group */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Client" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="Client" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="Client" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1a1a1a] flex items-center justify-center text-white text-xs font-bold z-10">
                50k+
              </div>
            </div>
          </div>

          {/* Quote / Mission Statement */}
          <p className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-8 leading-snug tracking-tight">
            "Small habits, done consistently, create extraordinary results."
          </p>

          {/* Video Thumbnail (Clickable representation) */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 group cursor-pointer shadow-lg">
            {/* Replace with an actual thumbnail image */}
            <Image
              src="/thu.jpg" 
              alt="Kayapalat Wellness Video"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-white ml-1 fill-white" />
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#ff6a3d] w-6 h-6 flex-shrink-0" />
              <span className="text-gray-700 font-medium text-sm md:text-base">
                Simple systems that fit your lifestyle
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#ff6a3d] w-6 h-6 flex-shrink-0" />
              <span className="text-gray-700 font-medium text-sm md:text-base">
                Community accountability & daily guidance
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}