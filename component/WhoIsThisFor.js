import { UserCircle, Briefcase, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhoIsThisFor() {
  const audiences = [
    {
      icon: <UserCircle className="w-8 h-8 text-[#ff6a3d]" />,
      title: "Driven Individuals",
      subtitle: "Personal Wellness",
      description: "For busy professionals and individuals who are tired of starting over. You don't need another restrictive diet; you need a system that fits your real life.",
      bullets: [
        "Tired of yo-yo diets and quick fixes",
        "Struggling to stay consistent",
        "Want high energy without burning out"
      ],
      link: "/personal-wellness",
      delay: "0.2s"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#ff6a3d]" />,
      title: "Wellness Professionals",
      subtitle: "Business Coaching",
      description: "For fitness trainers, gym owners, and coaches who are highly skilled but feel trapped in the exhausting 'time-for-money' hustle.",
      bullets: [
        "Working 14-hour days just to break even",
        "Struggling to transition to online coaching",
        "Need predictable systems to scale income"
      ],
      link: "/business-coaching",
      delay: "0.3s"
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#ff6a3d]" />,
      title: "Corporate Teams",
      subtitle: "Organizational Wellness",
      description: "For forward-thinking companies that understand employee health is a core business advantage, not just an HR perk.",
      bullets: [
        "Combating high employee burnout",
        "Looking to boost daily productivity",
        "Wanting to build a resilient team culture"
      ],
      link: "/corporate-wellness",
      delay: "0.4s"
    }
  ];

  return (
    <section className="w-full dark:bg-white py-20 md:py-14 px-6 md:px-12 font-sans overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-audience {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-left mb-16 md:mb-24 animate-audience" style={{ animationDelay: "0.1s" }}>
          <div className="max-w-3xl">

         <h2 className="text-3xl md:text-5xl text-[#1a1a1a] tracking-tight mb-6">
  Stop relying on willpower. <br className="hidden sm:block" />
  Start building <span className="text-[#ff6a3d]">scalable systems.</span>
</h2>


          <p className="text-gray-600 text-md sm:text-lg leading-relaxed">
            Whether you are looking to transform your own body, scale your wellness business, or energize your corporate team, our systems are built for lasting impact.
          </p>
          </div>
            <button
              className="open-booking-modal inline-flex items-center mt-4 sm:mt-0 -ml-11 sm:-ml-0 w-fit gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Book Free Business Audit
              <div className="bg-[#1a1a1a] rounded-lg relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </button>
        </div>

        {/* =========================================
            AUDIENCE CARDS GRID
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[0.8rem] p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col group hover:-translate-y-2 hover:shadow-xl hover:border-gray-200 transition-all duration-300 animate-audience relative overflow-hidden"
              style={{ animationDelay: item.delay }}
            >
              {/* Subtle top border accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6a3d] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#fdfbf9] border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#ff6a3d]/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[#2a2a2a] font-semibold text-sm tracking-wider  mb-2 block">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-[#1a1a1a] tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-800 leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Pain Points / Checklist */}
              <ul className="flex flex-col gap-3 mb-10 flex-grow">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5 group-hover:text-[#1a1a1a] transition-colors" />
                    <span className="text-gray-800 text-sm font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}