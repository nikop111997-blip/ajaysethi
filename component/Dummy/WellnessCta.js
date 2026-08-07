import React from 'react';

export default function WellnessCta() {
  return (
    <div className="flex justify-center items-center min-h-screen  p-4 md:p-8 font-sans" 
    >
      <section className="relative w-full max-w-7xl  overflow-hidden px-6 py-16 md:py-24 text-center shadow-lg"
          style={{
    backgroundImage: `
      radial-gradient(
        ellipse at bottom center,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.1) 60%,
        transparent 100%
      ),
      repeating-radial-gradient(
        rgba(255, 255, 255, 0.08) 0px,
        rgba(255, 255, 255, 0.08) 0.6px,
        transparent 0.6px,
        transparent 2.4px
      ),
      linear-gradient(to bottom right, #ff6b42, #ff470f)
    `,
    backgroundSize: "100% 100%, 10px 10px, 100% 100%",
    backgroundRepeat: "no-repeat, repeat, no-repeat",
  }}>
        
        {/* Decorative Connecting Lines (Desktop only) */}
        <div className="hidden lg:block absolute h-[2px] w-16 bg-[#d96944]/40 top-[22%] left-[18%] rotate-[20deg] z-0"></div>
        <div className="hidden lg:block absolute h-[2px] w-16 bg-[#d96944]/40 bottom-[40%] left-[20%] -rotate-[35deg] z-0"></div>
        <div className="hidden lg:block absolute h-[2px] w-16 bg-[#d96944]/40 top-[28%] right-[18%] -rotate-[30deg] z-0"></div>
        <div className="hidden lg:block absolute h-[2px] w-16 bg-[#d96944]/40 bottom-[35%] right-[20%] rotate-[40deg] z-0"></div>

        {/* Floating Cards (Absolute on Desktop, Grid on Mobile) */}
        <div className="relative lg:absolute lg:inset-0 lg:pointer-events-none grid grid-cols-2 gap-6 mt-12 lg:mt-0 lg:block z-10 lg:z-0 order-last lg:order-none">
          
          {/* Card 1 */}
          <div className="relative lg:absolute flex flex-col items-center gap-3 w-full lg:w-[140px] lg:top-[12%] lg:left-[8%] pointer-events-auto">
            <div className="bg-white/20 border border-dashed border-white/30 w-16 h-16 md:w-[72px] md:h-[72px] flex justify-center items-center shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-[#ffff]" viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5M1.5,1.5L2.91,2.91L5.5,5.5L4.09,4.09L1.5,1.5M22.5,1.5L20.09,4.09L18.5,5.5L21.09,2.91L22.5,1.5Z" /></svg>
            </div>
            <div className="text-[#eaeaea] text-xs md:text-sm font-semibold leading-tight">Move Beyond the Time-for-Money Trap</div>
          </div>

          {/* Card 2 */}
          <div className="relative lg:absolute flex flex-col items-center gap-3 w-full lg:w-[140px] lg:bottom-[25%] lg:left-[10%] pointer-events-auto">
            <div className="bg-white/20 border border-dashed border-white/30 w-16 h-16 md:w-[72px] md:h-[72px]  flex justify-center items-center shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-[#ffff]" viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.28 2,8.5C2,5.42 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.09C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.42 22,8.5C22,12.28 18.6,15.36 13.45,20.04L12,21.35Z" /></svg>
            </div>
            <div className="text-[#eaeaea] text-xs md:text-sm font-semibold leading-tight">Integrate Founder Wellness</div>
          </div>

          {/* Card 3 */}
          <div className="relative lg:absolute flex flex-col items-center gap-3 w-full lg:w-[140px] lg:top-[15%] lg:right-[8%] pointer-events-auto">
            <div className=" bg-white/20 border border-dashed border-white/30 w-16 h-16 md:w-[72px] md:h-[72px] flex justify-center items-center shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-[#fff]" viewBox="0 0 24 24"><path d="M2,22V20C2,20 7,18 12,18C17,18 22,20 22,20V22H2M11.3,9.1C10.1,5.2 5.9,3 5.9,3C5.9,3 6,7.2 8.6,9.8C10.8,12 14.4,12 14.4,12C14.4,12 12.2,9.1 11.3,9.1M17.8,7.6C16.9,9.2 14.7,11.2 14.7,11.2C14.7,11.2 16.5,14 19.3,14.6C19.3,14.6 20.4,10.6 17.8,7.6M12.9,13.7C11.9,14.9 10.3,15.9 8.2,16.5C10.7,17.4 13.9,17.3 16.4,16C15,15.8 13.8,14.9 12.9,13.7Z" /></svg>
            </div>
            <div className="text-[#eaeaea] text-xs md:text-sm font-semibold leading-tight">Build a Scalable & Sustainable Business</div>
          </div>

          {/* Card 4 */}
          <div className="relative lg:absolute flex flex-col items-center gap-3 w-full lg:w-[140px] lg:bottom-[25%] lg:right-[10%] pointer-events-auto">
            <div className="bg-white/20 border border-dashed border-white/30 w-16 h-16 md:w-[72px] md:h-[72px] flex justify-center items-center shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-[#fff]" viewBox="0 0 24 24"><path d="M16,11C17.66,11 18.99,9.66 18.99,8C18.99,6.34 17.66,5 16,5C14.34,5 13,6.34 13,8C13,9.66 14.34,11 16,11M8,11C9.66,11 10.99,9.66 10.99,8C10.99,6.34 9.66,5 8,5C6.34,5 5,6.34 5,8C5,9.66 6.34,11 8,11M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M16,13C15.71,13 15.38,13.04 15.03,13.1C16.19,13.89 17,15.02 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13Z" /></svg>
            </div>
            <div className="text-[#eaeaea] text-xs md:text-sm font-semibold leading-tight">Lead with Purpose & Impact</div>
          </div>
        </div>

        {/* Main Center Content */}
        <div className="relative z-10 max-w-[750px] mx-auto flex flex-col items-center">
          <div className="bg-[#fff]/20 text-[#ffff] px-5 py-2 border border-dashed border-white/30 text-sm font-semibold flex items-center gap-2 mb-6">
        Wellness Business Accelerator
          </div>
          
          <h1 className="text-[#fff] text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Stop Trading Hours for Money. Start Building a Business.
          </h1>
          
          <p className="text-[#fff]/80 text-lg leading-relaxed mb-8 max-w-[500px]">
            Apply for Wellness Business Coaching and let&apos;s find out if you&apos;re the right fit.
          </p>
          
          <button className="bg-[#000] hover:bg-[#c45a38] hover:-translate-y-0.5 text-[#fff] border-none px-8 py-4 text-lg font-semibold cursor-pointer flex items-center gap-3 transition-all duration-300 shadow-[0_4px_15px_rgba(217,105,68,0.3)]">
            Apply for Business Mentorship 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

      

      </section>
    </div>
  );
}