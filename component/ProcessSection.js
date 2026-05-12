import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
  // Steps mapped directly from the "How It Works" section of the brief
  const steps = [
    {
      num: "01",
      title: "Clarity",
      desc: "Understand where you are and what actually needs to change in your current lifestyle.",
    },
    {
      num: "02",
      title: "Coaching",
      desc: "Receive daily live guidance and structured direction to remove guesswork and overwhelm.",
    },
    {
      num: "03",
      title: "Consistency",
      desc: "Build simple, manageable habits that fit seamlessly into your real, everyday life.",
    },
    {
      num: "04",
      title: "Community",
      desc: "Gain access to ongoing support and accountability that keeps you on track for the long term.",
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32 px-6 md:px-12 font-sans overflow-hidden">
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-process {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* =========================================
            LEFT COLUMN: Sticky Header, CTA & Image
            ========================================= */}
        <div className="flex flex-col lg:sticky lg:top-32">
          
          <div className="animate-process" style={{ animationDelay: "0.1s" }}>
            <span className="text-gray-800 text-sm font-medium tracking-wide mb-4 block">
              How it works
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
              Your path to <br className="hidden md:block" />
              sustainable change
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-10 max-w-md">
              Most people fail because they rely on extreme workouts or willpower. Here is how we build a system you can actually live with — one step at a time.
            </p>

            <Link
              href="/clarity-call"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-xl text-base font-bold hover:bg-[#ff7a53] transition-colors group mb-12 w-max"
            >
              Start With Clarity
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>
          </div>

          {/* Left Column Image */}
          <div 
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[5/3] rounded-[1rem] overflow-hidden bg-gray-100 shadow-lg animate-process"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Replace src with the actual coaching/wellness image */}
            <Image
              src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0"
              alt="Ajay Sethi Coaching Process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: The Steps
            ========================================= */}
        <div className="flex flex-col gap-12 md:gap-16 lg:pt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start animate-process"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Step Number */}
              <span className="text-gray-400 text-lg md:text-xl font-medium tracking-wider mb-2">
                {step.num}
              </span>
              
              {/* Step Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-3 tracking-tight">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-800 text-base leading-relaxed max-w-md">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}