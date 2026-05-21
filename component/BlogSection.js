import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18 px-6 md:px-12 font-sans overflow-hidden">
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blog {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-blog" style={{ animationDelay: "0.1s" }}>
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] leading-tight font-semibold tracking-tight mb-4">
              Insights for Lasting <br className="hidden sm:block"/>
              <span className="text-[#ff6a3d]">Transformation</span>
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Actionable tips, success stories, and mindset shifts to help you build health and scale your wellness business with confidence.
            </p>
          </div>
          
            <Link
              href="/business-audit"
              className="inline-flex items-center gap-4 w-fit bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-2xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              View All Articles
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>
        </div>

        {/* =========================================
            GRID LAYOUT: 1 Large Left, 2 Stacked Right
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: Featured Article */}
          <Link 
            href="/blog/scalable-systems"
            className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] group animate-blog hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[6/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1728413775558-5686da5a359d" // Replace with actual image
                alt="Wellness Coach working online"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-xl md:text-3xl  text-[#1a1a1a] mb-4 tracking-tight leading-snug group-hover:text-[#ff6a3d] transition-colors">
                From Solopreneur to Scalable Systems: A Coach's Guide
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                Learn how to transition from an exhausting, time-for-money coaching model to a structured, community-based business that grows without burning you out.
              </p>
              <div className="flex items-center gap-2 text-gray-900 font-medium text-sm group-hover:text-[#ff6a3d] transition-colors mt-auto">
                Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* RIGHT: Stacked Articles */}
          <div className="flex flex-col gap-8">
            
            {/* Top Stacked Article */}
            <Link 
              href="/blog/consistency-vs-motivation"
              className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] group animate-blog hover:shadow-xl transition-all duration-300 h-full"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607544836446-70a0f7e0ad95" // Replace with actual image
                  alt="Man writing in journal"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3 tracking-tight leading-snug group-hover:text-[#ff6a3d] transition-colors">
                  Consistency vs. Motivation: Habits That Stick
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-6">
                  Why relying on willpower fails, and how small habits, done consistently, create extraordinary long-term health results.
                </p>
                <div className="flex items-center gap-2 text-gray-900 font-medium text-sm group-hover:text-[#ff6a3d] transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Bottom Stacked Article */}
            <Link 
              href="/blog/corporate-roi"
              className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] group animate-blog hover:shadow-xl transition-all duration-300 h-full"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1637979909766-ccf55518a928" // Replace with actual image
                  alt="Corporate executive"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-3 tracking-tight leading-snug group-hover:text-[#ff6a3d] transition-colors">
                  The ROI of a Healthy Workforce
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-6">
                  Why employee health is no longer just an HR perk, but a core business advantage for high-performing leadership teams.
                </p>
                <div className="flex items-center gap-2 text-gray-900 font-medium text-sm group-hover:text-[#ff6a3d] transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}