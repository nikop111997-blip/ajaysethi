import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FollowCtaSection() {
  return (
    <section className="w-full bg-white py-20 md:py-12 px-6 md:px-12 font-sans">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-cta {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div 
          className="relative w-full rounded-[1rem] overflow-hidden flex flex-col md:flex-row items-center animate-cta"
          // Soft peach-to-orange gradient matching the reference
          style={{ background: "linear-gradient(135deg, #ff6a3d 0%, #ffcfa8 100%)" }}
        >
          
          {/* =========================================
              BACKGROUND ACCENTS (Geometric Triangles)
    

          {/* =========================================
              LEFT COLUMN: Portrait Image
              ========================================= */}
          <div className="relative w-full md:w-5/12 h-[350px] md:h-[450px] lg:h-[500px] flex-shrink-0 pt-10 px-8 md:px-0">
            {/* The image should ideally be a transparent PNG cutout of Ajay */}
            <Image
              src="/png.png" 
              alt="Ajay Sethi"
              fill
              className="object-contain object-bottom drop-shadow-xl z-10 rotate-y-180"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            
          </div>
          {/* =========================================
              RIGHT COLUMN: Typography & Button
              ========================================= */}
          <div className="relative z-20 w-full md:w-7/12 p-10 md:p-16 lg:pr-24 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-[1.2] font-semibold tracking-tight mb-8 ">
              Follow for proven systems on sustainable health, business growth, and leadership.
            </h2>
            <div className="flex flex-col items-center sm:flex-row gap-2">
  <button
              className="open-booking-modal inline-flex items-center gap-4 bg-[#ff6a3d] text-[#1a1a1a] py-2 pl-6 pr-4 rounded-xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
             Connect Now
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </button>
            <Link
              href="https://www.linkedin.com/in/wellnesscoachajay/" // Replace with actual social link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] w-fit text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-black transition-transform hover:-translate-y-0.5 shadow-lg shadow-black/10 group"
            >
              Follow Me
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}