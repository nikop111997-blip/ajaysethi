import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function AboutFeatureSection() {
  return (
    <section className="w-full py-20 md:py-20 px-6 md:px-12 overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-feature {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* =========================================
            LEFT COLUMN: Image & Overlapping Card
            ========================================= */}
        <div className="relative w-full h-[500px] lg:h-[650px] animate-feature" style={{ animationDelay: "0.1s" }}>
          
          {/* Main Background Image */}
          <div className="absolute inset-0 rounded-[1rem] overflow-hidden bg-gray-200">
            {/* Replace src with an image of Ajay coaching or speaking */}
            <Image
              src="/smgha.webp" 
              alt="Ajay Sethi Coaching"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating White Card (Overlapping at the bottom) */}
          <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6 mb-6">
              <h3 className="text-lg md:text-2xl font-bold text-[#1a1a1a] leading-snug w-full lg:max-w-sm tracking-tight">
                "Small habits, done consistently, create extraordinary results."
              </h3>
              
              {/* Social Icons (Raw SVGs to match the aesthetic) */}
              <div className="flex gap-3 flex-shrink-0">
                <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#ff6a3d] hover:text-[#ff6a3d] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#ff6a3d] hover:text-[#ff6a3d] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#ff6a3d] hover:text-[#ff6a3d] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
              </div>
            </div>
            
            <p className="text-[#1a1a1a] font-bold text-lg">
              Ajay Sethi <span className="text-gray-400 font-medium text-sm sm:text-base">— Founder, Kayapalat</span>
            </p>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: Copy, Stats & CTA
            ========================================= */}
        <div className="flex flex-col items-start animate-feature" style={{ animationDelay: "0.3s" }}>
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff6a3d]"></span>
            <span className="text-sm font-bold text-[#1a1a1a] tracking-wide">The Kayapalat Philosophy</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#1a1a1a] leading-[1.05] tracking-tight mb-6 dark:text-gray-50">
            Empowering your journey to sustainable health
          </h2>

          {/* Description */}
          <p className="text-gray-800 text-lg leading-relaxed mb-10 max-w-xl dark:text-gray-200">
            Empowering your journey means providing daily guidance, practical systems, and ongoing community support to help you build habits that fit seamlessly into your real life—without extreme diets or burnout.
          </p>

          {/* Stats Box */}
          <div className="w-full bg-white rounded-3xl p-8 flex flex-wrap sm:flex-nowrap items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100 mb-10 gap-6">
            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-1 tracking-tight">30+</span>
              <span className="text-gray-800 text-sm font-medium text-center sm:text-left">Years of Experience</span>
            </div>
            
            {/* Divider lines hidden on small screens */}
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            
            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-1 tracking-tight">10k+</span>
              <span className="text-gray-800 text-sm font-medium text-center sm:text-left">Community Members</span>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>

            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-1 tracking-tight">30+</span>
              <span className="text-gray-800 text-sm font-medium text-center sm:text-left">Corporate Partners</span>
            </div>
          </div>

          {/* Bottom Row: CTA & Reviews */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            
            {/* CTA Button matching your aesthetic */}
           <Link
              href="/contact-us"
              className="inline-flex items-center -ml-8 sm:-ml-0 gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-2xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Connect Now
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>

            {/* Google Reviews Block */}
            <div className="flex items-center gap-4">
              {/* Google G Logo */}
              <svg width="32" height="32" viewBox="0 0 48 48" className="flex-shrink-0">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-[#1a1a1a] font-black text-lg dark:text-gray-50">4.9/5</span>
                  <Star className="w-5 h-5 fill-[#1a1a1a] text-[#1a1a1a] dark:text-gray-50" />
                </div>
                <span className="text-gray-800 text-xs font-medium dark:text-gray-50">Based on Kayapalat PRO reviews</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}