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

export default function WellnessBusinessCoachingPage() {
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
    { q: "Who is this mentorship for?", a: "This is for fitness trainers, personal coaches, gym/studio owners, yoga instructors, dieticians, doctors, and wellness enthusiasts who want to build a stable and scalable coaching business." },
    { q: "I don't want to open a physical gym. Is this for me?", a: "Absolutely. This program heavily focuses on transitioning to online and hybrid coaching models so you don't have to invest heavily in rent, staff, or infrastructure." },
    { q: "What will I actually learn?", a: "You'll learn positioning, client acquisition, how to conduct clarity calls that convert without aggressive selling, and how to create simple, repeatable systems for predictable monthly income." },
    { q: "What is the format and duration?", a: "We offer 12-Week Foundation programs as well as Ongoing Mentorship for scaling. The format includes online coaching, step-by-step frameworks, group coaching, and practical real-world assignments." }
  ];

  return (
    <div className=" text-neutral-900 font-sans selection:bg-orange-200 overflow-hidden">
      
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
        {/* Replace src with an image representing business coaching, leadership, or mentoring */}
        <Image
          src="/conn.webp" 
          alt="Wellness Business Coaching"
          fill
          className="object-cover object-top grayscale"
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
              Wellness Business Coaching
            </span>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Turn Your Passion Into a <br />
              <span className="text-[#ff6a3d]">Profitable Business.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-50 text-md md:text-lg leading-relaxed mb-10 max-w-2xl">
              A structured pathway to help you build a scalable coaching business—<strong>without heavy investments, overheads, or confusion.</strong>
            </p>

            {/* Anchor Link / CTA */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-2xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Apply for Mentorship
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
                <TrendingUp className="w-5 h-5 text-[#ff6a3d]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg leading-none mb-1">Scalable Growth</span>
                <span className="text-gray-50 text-xs font-medium uppercase tracking-wider">Predictable Recurring Income</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 w-max">
              <div className="bg-[#ff6a3d]/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#ff6a3d]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg leading-none mb-1">Community Models</span>
                <span className="text-gray-50 text-xs font-medium uppercase tracking-wider">No Heavy Rent or Overheads</span>
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
          <h2 className="text-3xl md:text-4xl text-neutral-900">Are You Struggling to Scale Your Wellness Career?</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Clock />, title: "Time-for-Money Trap", desc: "You feel stuck working hourly sessions and cannot scale your income without working exhausting hours." },
            { icon: <BatteryLow />, title: "Skilled but Inconsistent", desc: "You are highly skilled and passionate, but you aren't earning a consistent, predictable income." },
            { icon: <Building2 />, title: "High Overhead Costs", desc: "You are drowning in rent, staff costs, or infrastructure needs just to keep your business running." },
            { icon: <AlertCircle />, title: "No Clear Systems", desc: "You lack positioning and struggle to attract the right clients or convert them without aggressive selling." }
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
            <Image src="/jump.jpg" fill alt="Wellness Business Transformation" className="w-full h-full object-cover grayscale" />
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl mb-6 text-neutral-900">Why This Framework Works</h2>
            <p className="text-lg text-neutral-800 mb-8">Most wellness professionals struggle not because they lack skill—but because they lack positioning, systems, and business clarity.</p>
            
            <div className="">
              {[
                { title: "Real-World Application", desc: "We move past theory. You implement step-by-step business frameworks that actually generate results." },
                { title: "Simple, Practical Systems", desc: "No complex tech or funnels. Just repeatable systems to attract and convert the right clients." },
                { title: "Community-Based Models", desc: "Learn to build a tribe, transitioning from one-time clients to recurring, scalable revenue." },
                { title: "Mindset & Identity Shift", desc: "Transform your positioning from just a 'trainer' to a confident coach and business owner." }
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
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900">Build a Business That Actually Works.</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Activity className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Business Growth</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Build a clear, structured offer</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Predictable monthly income</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Shift to recurring revenue</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-300 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Target className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Client Acquisition</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Attract the right clients</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Conduct clarity calls that convert</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Build trust without sleazy sales</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Repeat className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Systems & Scalability</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Create simple, repeatable systems</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Community-based coaching models</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Scale without increasing workload</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <BrainCircuit className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-xl font-medium mb-4">Identity & Confidence</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Shift from "trainer" to coach</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Build clarity & direction</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium text-sm"><CheckCircle2 className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" /> Develop long-term growth mindset</li>
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
            <span className="text-sm font-medium tracking-widest text-[#fff7ee] uppercase mb-2 block">Structured Mentorship</span>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-50 mb-6">Wellness Business Coaching</h2>
            <p className="text-lg text-neutral-100 mb-6 max-w-lg font-medium">
              Based on your level of support, depth, and program structure. We don't just teach theory—we help you build a business that works.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Online Coaching & Mentorship</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Live & Offline Training Sessions</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Step-by-step Business Frameworks</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Group Coaching & Community</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Real-world Implementation</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Practical Assignments</li>
            </ul>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-start bg-white p-8 rounded-xl shadow-xl border border-white/50 w-full md:w-auto min-w-[340px]">
            <div className="text-sm font-medium text-[#ff6a3d] uppercase tracking-wider mb-2">Investment Scope</div>
            <div className="text-3xl lg:text-4xl font-medium text-neutral-900 mb-2">₹50K - ₹4L+</div>
            <div className="text-sm font-medium text-neutral-600 mb-6">Customized based on your growth stage.</div>
            
            <div className="space-y-2 w-full mb-6 text-sm text-neutral-800 font-medium">
              <div className="flex justify-between border-b pb-2"><span>12-Week Foundation</span> <span className="text-right">₹50,000 – ₹90,000</span></div>
              <div className="flex justify-between pb-1"><span>Advanced Mentorship</span> <span className="text-right">₹4,00,000+</span></div>
            </div>

            <button className="w-full py-4 bg-[#0f172a] text-white font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          7. HOW WE WORK (4 Steps)
          ========================================= */}
      <section className="py-12 pb-12 px-6 max-w-7xl mx-auto bg-white my-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-6xl text-neutral-900 mb-4">Your Growth Pathway</h2>
          <p className="text-lg text-neutral-800 font-medium">A structured timeline to take you from a skilled professional to a profitable business owner.</p>
        </div>

        <section className="py-24 px-6 max-w-7xl mx-auto bg-white rounded-[1rem] shadow-sm border border-neutral-300 my-12">

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {[
            { icon: <Compass />, step: "Step 1", title: "Apply & Assess", desc: "Let's understand exactly where you are, your bottlenecks, and design your next growth step." },
            { icon: <ShieldCheck />, step: "Step 2", title: "Foundation & Offer", desc: "We structure your knowledge into a clear, compelling wellness offer that solves real problems." },
            { icon: <Target />, step: "Step 3", title: "Acquisition Systems", desc: "Implement simple, repeatable processes to attract the right clients and convert them confidently." },
            { icon: <Repeat />, step: "Step 4", title: "Scale & Community", desc: "Transition into ongoing mentorship to build recurring revenue models and scale without burnout." }
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