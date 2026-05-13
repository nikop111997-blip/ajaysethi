"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell,
  TrendingDown,
  Settings,
  Globe,
  Trophy,
  Activity,
  Users,
  Quote,
  Zap,
} from "lucide-react";

export default function JourneyTimeline() {
  const lineContainerRef = useRef(null);

  // Smooth scroll tracking for the vertical line
  const { scrollYProgress } = useScroll({
    target: lineContainerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


const journeySteps = [
  {
    year: "1989-1994",
    title: "Performance & The Corporate Reality",
    description: "Played professional basketball for the State and Tata Steel. Moving into the corporate world, I realized a jarring truth: people were highly successful, but rarely healthy.",
    highlight: "Pro Athlete & MBA",
    takeaway: "Performance requires discipline, but lifelong health requires systems.",
    icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    year: "1995-2003",
    title: "Building Without a Blueprint",
    description: "Started my first gym, 'Inshape', and a computer business that eventually failed. It took over 13 years of intense struggle, trial, and error just to reach financial stability.",
    highlight: "13 Years of Trial",
    takeaway: "Hard work alone does not create results. Clarity does.",
    icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    year: "2008-2013",
    title: "Scaling & The Hidden Cost",
    description: "Finally built a financially stable model, expanding from 1 to 3 gyms and hitting high revenues. I trained hundreds of trainers, but the operational pressure and heavy overheads were exhausting.",
    highlight: "3 Gyms, High Overheads",
    takeaway: "More overhead is a trap if the model is heavily dependent on location.",
    icon: <TrendingDown className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    year: "2013-2019",
    title: "The Community Shift",
    description: "Shifted focus from physical gyms to community movements. Founded the 24FIT Community and the 84km Chambal Challenge, setting records and realizing transformation needed a true ecosystem.",
    highlight: "Birth of 24FIT",
    takeaway: "Community drives compliance better than any gym membership.",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    year: "2020",
    title: "The Turning Point",
    description: "When the world shut down, clients didn't ask for workouts; they asked for support. I pivoted completely, creating Kayapalat Wellness as a virtual, habit-based system.",
    highlight: "Creation of Kayapalat",
    takeaway: "Adaptability and simple daily systems beat extreme routines.",
    icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    year: "2023",
    title: "The Multiplier Effect",
    description: "Achieved the massive 1 Million Volume Point milestone. The coaching model expanded rapidly, shifting from just training individuals to mentoring the next generation of wellness professionals.",
    highlight: "Network Scalability",
    takeaway: "Mentoring others creates the ultimate multiplier effect.",
    icon: <Dumbbell className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    year: "Today",
    title: "Impact & Global Legacy",
    description: "Over 10,000 members across 18+ countries with 65,000+ kg of weight loss. Now launching dedicated platforms to help other coaches build scalable businesses and escape the hustle.",
    highlight: "150+ Coaches Developed",
    takeaway: "Health shouldn't depend on a place; it should be a way of living.",
    icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
  },
];

  return (
    <section className="relative w-full py-20 md:py-16 px-4 md:px-12 overflow-hidden">
      {/* Background ambient glow */}
  
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left sm:text-center mb-20 md:mb-32"
        >
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-2 md:px-5 md:py-2.5 rounded-full mb-6 md:mb-8 shadow-sm">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ff6a3d] animate-pulse"></span>
            <span className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-widest">
              The Evolution
            </span>
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-6xl text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight dark:text-gray-50">
            13 Years of <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a3d] to-[#ff4b1f]">
              Transformation.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-800 sm:px-4 dark:text-gray-200">
            From the exhausting grind of the gym floor to building a globally
            scalable digital empire. Here is how the methodology was forged.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Vertical Track */}
          {/* Centered on Desktop, Left-aligned (24px from left edge) on Mobile */}
          <div
            ref={lineContainerRef}
            className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[3px] md:w-[4px] bg-gray-200/60 rounded-full"
          >
            {/* Animated Gradient Fill */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff6a3d] to-[#ff4b1f] rounded-full shadow-[0_0_15px_rgba(255,106,61,0.5)]"
              style={{ height: pathHeight }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial="inactive"
                  whileInView="active"
                  // Triggers active state when element enters the middle 60% of the screen
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  variants={{
                    inactive: { opacity: 0.25, scale: 0.95 },
                    active: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative flex items-center justify-start md:justify-center w-full group"
                >
                  {/* Left Column (Desktop) */}
                  <div className="hidden md:flex w-1/2 pr-16 justify-end">
                    {isEven && <TimelineCard step={step} alignment="right" />}
                  </div>

                  {/* Center Node */}
                  {/* perfectly centered on the line regardless of device */}
                  <motion.div
                    variants={{
                      inactive: {
                        backgroundColor: "#ffffff",
                        borderColor: "#e2e8f0",
                        color: "#94a3b8",
                        scale: 0.8,
                        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                      },
                      active: {
                        backgroundColor: "#ff6a3d",
                        borderColor: "#ff6a3d",
                        color: "#ffffff",
                        scale: 1.1,
                        boxShadow: "0px 0px 20px rgba(255,106,61,0.4)",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-[3px] md:border-4 flex items-center justify-center z-20"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Right Column (Desktop) */}
                  <div className="hidden md:flex w-1/2 pl-16 justify-start">
                    {!isEven && <TimelineCard step={step} alignment="left" />}
                  </div>

                  {/* Mobile Layout */}
                  {/* Shifted to the right to avoid overlapping the line and node */}
                  <div className="md:hidden w-full pl-16 pr-2 py-2">
                    <TimelineCard step={step} alignment="left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// Timeline Card Component
// ==========================================
function TimelineCard({ step, alignment }) {
  return (
    <div className="relative bg-white border border-gray-100 p-6 md:p-8 rounded-[1rem] md:rounded-[1rem] shadow-xl shadow-slate-200/50 hover:border-[#ff6a3d]/30 transition-all duration-300 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-[100%] rounded-tr-[1.5rem] md:rounded-tr-[2rem] -z-10" />

      {/* Year & Badge Row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5 md:mb-6">
        <span className="text-5xl md:text-6xl font-black text-slate-100 tracking-tighter">
          {step.year}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-wider w-fit">
          <Zap className="w-3 h-3 text-[#ff6a3d]" />
          {step.highlight}
        </span>
      </div>

      {/* Main Content */}
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
        {step.title}
      </h3>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
        {step.description}
      </p>

      {/* Takeaway Box */}
      <div className="bg-slate-50 border-l-[3px] border-[#ff6a3d] p-3 md:p-4 rounded-r-xl">
        <div className="flex gap-2.5 items-start">
          <Quote className="w-4 h-4 md:w-5 md:h-5 text-[#ff6a3d]/50 shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm font-medium text-slate-700 italic">
            {step.takeaway}
          </p>
        </div>
      </div>
    </div>
  );
}