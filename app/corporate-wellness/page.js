'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  BrainCircuit, 
  BatteryLow, 
  Clock, 
  AlertCircle,
  Activity,
  ShieldCheck,
  HeartPulse,
  Compass,
  Target,
  Repeat,
  Users,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Building2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import StatsSection from '@/component/StatsSection';
import FaqSection from '@/component/FaqSection';
import FollowCtaSection from '@/component/FollowCtaSection';
import TransformationStories from '@/component/TransformationStories';

export default function CorporateWellnessLandingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const faqs = [
    { q: "Who is this program for?", a: "This is designed for mid to large organizations, HR leaders, and business heads who manage high-performance environments." },
    { q: "How is this different from other corporate wellness programs?", a: "Most corporate wellness programs focus purely on awareness. We focus on practical application, simple systems employees can follow daily, and consistency over intensity." },
    { q: "What formats do you offer?", a: "We offer highly flexible formats including Keynote Talks, Interactive Workshops, 30-Day Programs, Corporate Retreats, and Health Audits. Delivery can be Online, Offline, or Hybrid." },
    { q: "What is the typical duration and investment?", a: "Engagements range from one-time 90-minute sessions to 12-month cultural transformations. Investments range from ₹50,000 to ₹10,00,000+ depending on the scope and number of employees." }
  ];

  return (
    <div className=" text-neutral-900 font-sans selection:bg-orange-200 overflow-hidden dark:bg-white">
      
      {/* =========================================
          1. HERO SECTION
          ========================================= */}
     <section className="relative w-full h-[110vh] sm:min-h-screen flex items-end pb-20 md:pb-32 px-6 md:px-12 font-sans overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-text {
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      {/* =========================================
          BACKGROUND IMAGE & OVERLAYS
          ========================================= */}
      <div className="absolute inset-0 z-0">
        {/* Replace src with an image representing a corporate setting, leadership, or a team workshop */}
        <Image
          src="/backns.webp" 
          alt="Corporate Wellness Keynote"
          fill
          className="object-cover object-center grayscale"
        />
        {/* Dark gradient overlay: Starts dark at the bottom for text readability, fades to transparent at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* =========================================
          HERO CONTENT
          ========================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col items-start max-w-3xl">
          
          <div className="animate-hero-text" style={{ animationDelay: "0.1s" }}>
            {/* Eyebrow / Tag */}
            <span className="flex items-center gap-3 text-sm font-bold text-[#ff6a3d] mb-4 sm:mb-6">
              <span className="w-8 h-[2px] bg-[#ff6a3d]"></span>
              Corporate Wellness
            </span>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
              Build a Healthier, <br />
              <span className="text-[#ff6a3d]">More Productive Team.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-50 text-md md:text-xl leading-relaxed mb-10 max-w-2xl">
              Designed for organizations and leadership teams that recognize a simple truth: <strong>Employee health directly impacts performance, productivity, and culture.</strong>
            </p>

            {/* Anchor Link / CTA */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-2xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Book a Consultation
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
                <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
                <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Floating Trust Indicators (Glassmorphism) */}
        <div className="flex flex-col gap-4 animate-hero-text" style={{ animationDelay: "0.4s" }}>
          
          <div className="hidden sm:block">
            {/* Badge 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl mb-4 p-5 flex items-center gap-4 w-max">
              <div className="bg-[#ff6a3d]/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-[#ff6a3d]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg leading-none mb-1">Trusted Partner</span>
                <span className="text-gray-50 text-xs font-medium uppercase tracking-wider">Mid to Large Organizations</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 w-max">
              <div className="bg-[#ff6a3d]/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#ff6a3d]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg leading-none mb-1">Proven Outcomes</span>
                <span className="text-gray-50 text-xs font-medium uppercase tracking-wider">High-Performance Culture</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

      {/* =========================================
          2. PAIN POINTS GRID (Sound Familiar?)
          ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <span className="text-sm font-medium text-gray-400 mb-3 block">Who It's For</span>
          <h2 className="text-3xl md:text-4xl text-neutral-900">Are Your Teams Facing These Challenges?</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <BatteryLow />, title: "Low Energy & Burnout", desc: "Teams feeling constantly drained, affecting their daily output and focus." },
            { icon: <AlertCircle />, title: "High Stress & Fatigue", desc: "High-pressure environments leading to chronic fatigue and mental exhaustion." },
            { icon: <HeartPulse />, title: "Lifestyle Health Issues", desc: "Sedentary work setups causing long-term, lifestyle-related health problems." },
            { icon: <Users />, title: "Low Engagement", desc: "A lack of active participation and team connection despite existing HR initiatives." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all text-left sm:text-center group">
              <div className="w-14 h-14 sm:mx-auto bg-neutral-50 group-hover:bg-orange-50 text-neutral-800 group-hover:text-[#ff6a3d] rounded-2xl flex items-center justify-center sm:justify-center mb-6 transition-colors">
  {item.icon}
</div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-neutral-800 leading-relaxed text-md">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================
          3. BENEFITS SPLIT (Why Our Approach Works)
          ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-[1rem] overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-200 aspect-[4/5]">
            <Image src="/jums.jpg" fill alt="Corporate Wellness Transformation" className="w-full h-full object-cover grayscale" />
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl mb-6 text-neutral-900">Why This Works</h2>
            <p className="text-lg text-neutral-800 mb-8">Most corporate wellness programs fail because they only focus on awareness. Our approach focuses on making wellness a seamless part of your company culture.</p>
            
            <div className="">
              {[
                { title: "Practical Application", desc: "We move past theory and focus on actionable steps your employees can take immediately." },
                { title: "Simple Daily Systems", desc: "Frameworks designed to fit into a busy professional's schedule without causing disruption." },
                { title: "Consistency over Intensity", desc: "Building sustainable habits that last, rather than short-lived, extreme challenges." },
                { title: "A New Way of Working", desc: "Wellness doesn't remain just an HR initiative—it becomes a true way of working and living." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-5 bg-white p-6 border-b border-neutral-300">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#ff6a3d]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-1">{item.title}</h4>
                    <p className="text-neutral-800 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. STATS BANNER
          ========================================= */}
     <StatsSection />

      {/* =========================================
          5. OUTCOMES (Experience & Track Record)
          ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <span className="text-sm font-medium text-gray-400 mb-3 block">What You Can Expect</span>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900">Comprehensive Organizational Outcomes.</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Activity className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Energy & Productivity</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> More energized & focused teams</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Reduced fatigue & burnout</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Higher daily output</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-300 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <BrainCircuit className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Mental & Emotional</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Better stress management</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Improved emotional resilience</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Healthier work environment</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Users className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Engagement & Culture</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Stronger team connection</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Higher initiative participation</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Action-oriented support culture</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Target className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Business Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Performance consistency</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Reduced absenteeism</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Long-term employee wellbeing</li>
            </ul>
          </motion.div>

        </motion.div>
      </section>

      {/* =========================================
          6. PROGRAM / PRICING BANNER
          ========================================= */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#ff6a3d] rounded-[1rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-[#c1e1cd]">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
          
          <div className="relative z-10 flex-1">
            <span className="text-sm font-medium tracking-widest text-[#fff7ee] uppercase mb-2 block">Flexible & Customised Formats</span>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-50 mb-6">Corporate Wellness Programs</h2>
            <p className="text-lg text-neutral-100 mb-6 max-w-lg font-medium">
              Delivered based on your organization's specific needs—available Online, Offline, or Hybrid.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Keynotes & Awareness Sessions</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Interactive Workshops</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> 30-Day Living Programs & Challenges</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Leadership Energy Sessions</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Corporate Retreats & Experiences</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Health Audit Camps</li>
            </ul>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-start bg-white p-8 rounded-xl shadow-xl border border-white/50 w-full md:w-auto min-w-[340px]">
            <div className="text-sm font-medium text-[#ff6a3d] uppercase tracking-wider mb-2">Investment Scope</div>
            <div className="text-3xl lg:text-4xl font-medium text-neutral-900 mb-2">₹50K - ₹10L+</div>
            <div className="text-sm font-medium text-neutral-800 mb-6">Customized based on employee count, format, and involvement.</div>
            
            <div className="space-y-2 w-full mb-6 text-sm text-neutral-800 font-medium">
              <div className="flex justify-between border-b pb-2"><span>One-time Sessions</span> <span>90–120 mins</span></div>
              <div className="flex justify-between border-b pb-2"><span>Short-term Programs</span> <span>30–90 days</span></div>
              <div className="flex justify-between pb-1"><span>Long-term Engagement</span> <span>3–12 months</span></div>
            </div>

            <button className="open-booking-modal w-full py-4 bg-[#0f172a] text-white font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2">
              Let's Talk <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          7. HOW WE WORK (4 Steps)
          ========================================= */}
      <section className="py-12 pb-12 px-6 max-w-7xl mx-auto bg-white my-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-6xl text-neutral-900 mb-4">How We Engage</h2>
          <p className="text-lg text-neutral-800 font-medium">A structured approach to designing a solution that actually works for your company.</p>
        </div>

        <section className="py-24 px-6 max-w-7xl mx-auto bg-white rounded-[1rem] shadow-sm border border-neutral-300 my-12">

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {[
            { icon: <ShieldCheck />, step: "Step 1", title: "Consultation & Audit", desc: "We start with Health Audit Camps to understand your organization's specific needs." },
            { icon: <Compass />, step: "Step 2", title: "System Design", desc: "Designing customized Employee Wellness Systems and identifying the right program format." },
            { icon: <Target />, step: "Step 3", title: "Implementation", desc: "Executing Keynotes, Workshops, or 30-Day Fitness Challenges with your team." },
            { icon: <Repeat />, step: "Step 4", title: "Long-Term Sustenance", desc: "Ongoing engagements (3-12 months) to ensure wellness becomes a permanent culture." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="text-left sm:text-center relative">
              
              {/* Animated Connecting Line (Hidden on Mobile, Visible on Desktop) */}
              {i !== 3 && (
                <div className="hidden lg:block absolute top-8 left-[50%] w-full h-[2px] bg-neutral-100 z-0">
                  <motion.div 
                    className="h-full bg-[#ff6a3d]"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.4), ease: "easeInOut" }}
                  />
                </div>
              )}

              {/* Icon Container (Set to relative z-10 so it sits ABOVE the line) */}
              <div className="w-16 h-16 mr-auto sm:mx-auto bg-white border-2 border-neutral-100 text-neutral-800 rounded-full flex items-center justify-center mb-6 relative z-10 hover:border-[#ff6a3d] hover:text-[#ff6a3d] transition-colors duration-300 shadow-sm">
  {item.icon}
</div>
              
              <div className="text-sm font-medium text-[#ff6a3d] uppercase tracking-wider mb-2">{item.step}</div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-neutral-800 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      </section>
<TransformationStories />
<FaqSection faqs={faqs} />
<FollowCtaSection />
    </div>
  );
}