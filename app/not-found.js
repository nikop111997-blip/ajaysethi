import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 font-sans overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-404 {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        
        {/* Subtle Icon Accent */}
    

        {/* The 404 Headline */}
        <h1 
          className="text-8xl md:text-9xl text-[#1a1a1a] tracking-tighter leading-none mb-6 animate-404 "
          style={{ animationDelay: "0.2s" }}
        >
          4<span className="text-[#ff6a3d]">0</span>4
        </h1>

        {/* Subheadline */}
        <h2 
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-6 animate-404"
          style={{ animationDelay: "0.3s" }}
        >
          You seem to have lost your way.
        </h2>

        {/* Brand-aligned Body Text */}
        <p 
          className="text-gray-800 text-lg leading-relaxed max-w-xl mb-12 animate-404"
          style={{ animationDelay: "0.4s" }}
        >
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to building lasting health and scalable systems.
        </p>

        {/* Signature CTA Button */}
        <div className="animate-404" style={{ animationDelay: "0.5s" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-2 rounded-xl text-base hover:bg-[#ff7a53] transition-colors shadow-lg shadow-[#ff6a3d]/20 group"
          >
            Return to Homepage
            <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
          </Link>
        </div>

      </div>
    </main>
  );
}