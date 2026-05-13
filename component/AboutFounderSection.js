import Image from "next/image";

export default function AboutFounderSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-zinc-950 overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-founder {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* =========================================
            LEFT COLUMN: Copy & Typography
            ========================================= */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <div className="animate-founder" style={{ animationDelay: "0.1s" }}>
            

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] leading-[1.1] tracking-tight mb-8">
              Meet your Wellness and <br className="hidden md:block" />
              <span className="text-[#ff6a3d]">Transformation</span> coach!
            </h2>

            {/* Content Blocks */}
            <div className="space-y-6 text-gray-100 text-base md:text-md leading-relaxed mb-10">
              <p>
                Ajay Sethi is a transformation specialist, wellness coach, and founder of Kayapalat Wellness, with over 30 years of experience in health, fitness, running and lifestyle coaching.
              </p>
              
              <p>
                An MBA from XLRI Jamshedpur and a former professional basketball player, Ajay has personally trained and mentored more than <strong className="text-[#ff6a3d]">1,000+ coaches</strong>, including doctors, dieticians, physiotherapists, yoga trainers, and fitness professionals.
              </p>

              <p>
                Known as India's <strong className="text-[#ff6a3d]">Fitness Lifestyle Coach</strong>, Ajay has helped clients lose up to <strong className="text-[#ff6a3d]">65+ kilos of weight</strong>, break <strong className="text-[#ff6a3d]">50K and 100K course records</strong>, and even run <strong className="text-[#ff6a3d]">200+ km in 24 hours</strong>. His students have won bodybuilding competitions and beauty pageants, proving that transformation can look different for everyone, but the foundation is always the same: sustainable results.
              </p>

              <p>
                Today, through Kayapalat, Ajay leads a thriving global community across <strong className="text-[#ff6a3d]">418 cities and 18+ countries</strong>, with members collectively losing over <strong className="text-[#ff6a3d]">65,000 kilos</strong> in just 51 months.
              </p>
            </div>

            {/* Highlighted Philosophy Quote */}
            <blockquote className="border-l-4 border-[#ff6a3d] pl-6 py-2 mb-10">
              <p className="text-xl md:text-2xl font-medium text-[#ffffff] italic leading-snug mb-3">
                "If you focus on getting better at something, you actually get better."
              </p>
              <p className="text-sm text-gray-200 font-medium">
                This philosophy powers the Kayapalat Method, aligning the body, mind, and emotions to create lasting change.
              </p>
            </blockquote>

            {/* Signature Area */}
            <div className="flex flex-col mt-4">
              {/* Replace with actual transparent PNG of his signature */}
              <div className="h-16 w-48 relative mb-2 opacity-80">
                <Image 
                  src="https://framerusercontent.com/images/mr1uWi4Fuq6yzrxrlGmsI0UVCs.png?scale-down-to=512&width=574&height=330" 
                  alt="Ajay Sethi Signature" 
                  fill 
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-[#ffffff]">Ajay Singh Sethi</span>
            </div>

          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: Portrait & Floating Badges
            ========================================= */}
        <div
  className="lg:col-span-5 relative w-full h-[600px] md:h-[700px] flex items-center justify-center animate-founder"
  style={{ animationDelay: "0.3s" }}
>
  {/* Frame */}
  <div className="relative w-[100%] h-full overflow-hidden rounded-xl">
    
    <Image
      src="/mer.jpg"
      alt="Ajay Sethi - Wellness Coach"
      fill
      className="object-cover object-right scale-150 grayscale"
    />
    
  </div>
</div>

      </div>
    </section>
  );
}