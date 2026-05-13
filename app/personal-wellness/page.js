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
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import StatsSection from '@/component/StatsSection';
import FaqSection from '@/component/FaqSection';
import FollowCtaSection from '@/component/FollowCtaSection';
import TransformationStories from '@/component/TransformationStories';

export default function PersonalWellnessLandingPage() {
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
    { q: "What is coaching and how does it work?", a: "Personal Wellness is a simple, structured system with daily live guidance, nutritional support, and community accountability to help you build lasting health without extreme diets." },
    { q: "How is this different from other programs?", a: "We don't rely on extreme workouts or willpower. We focus on simple systems, habit-based transformation, and consistency over intensity." },
    { q: "Do I need a gym membership?", a: "No. Our fitness and movement programs are designed with no gym dependency, fitting seamlessly into your real life." },
    { q: "What if I don't have much time?", a: "This is built for busy professionals and entrepreneurs (35-55). The systems are simple, guided, and designed to not disrupt your lifestyle." }
  ];

  return (
    <div className=" text-neutral-900 font-sans selection:bg-orange-200 overflow-hidden">
      
      {/* =========================================
          1. HERO SECTION
          ========================================= */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] -z-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-neutral-900">
              Build Lasting Health. <br />
              <span className="text-[#ff6a3d]">Results That Last.</span>
            </h1>
            <p className="text-lg text-neutral-800 mb-8 leading-relaxed font-medium">
              A simple, structured system to help you build lasting health, fitness, and happiness—without extreme diets, long workouts, or disrupting your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
              href="/contact-us"
              className="inline-flex items-center gap-4 bg-[#ff6a3d] text-[#ffffff] py-2 pl-6 pr-4 rounded-xl text-base font-semibold hover:bg-[#ff7a53] transition-colors group"
            >
              Connect Now
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-[#f8f9fa] overflow-hidden">
                    <img src={`/avatars/user-${i}.jpg`} alt="Member" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm font-medium text-neutral-800">Trusted by 10,000+ members</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative rounded-[1rem] overflow-hidden border-[8px] border-white shadow-2xl aspect-[4/5] bg-neutral-200">
              <img src="/white.png" alt="Personal Wellness Coaching" className="w-full h-full object-cover grayscale" />
            </div>
            {/* Glassmorphic Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-[300px]">
              <div className="text-[#ff6a3d] font-medium text-2xl mb-1">Personal Wellness</div>
              <p className="text-sm text-neutral-800 font-medium leading-snug">Daily guidance & community accountability</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. PAIN POINTS GRID (Sound Familiar?)
          ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <span className="text-sm font-medium text-gray-400 mb-3 block">Sound Familiar?</span>
          <h2 className="text-3xl md:text-4xl text-neutral-900">You Have Big Goals, But Something Keeps Holding You Back.</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <BrainCircuit />, title: "Inconsistency", desc: "You start strong, but lose momentum and fall back into old patterns." },
            { icon: <AlertCircle />, title: "Lack of Time", desc: "You are a busy professional or entrepreneur struggling to find time." },
            { icon: <BatteryLow />, title: "Low Energy", desc: "You feel drained, exhausted, and lack the energy for daily demands." },
            { icon: <Clock />, title: "Constant Restarting", desc: "You've tried gyms, diets, or routines—but couldn’t sustain them." }
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
            <Image src="/smgha.jpg" fill alt="Consistent Transformation" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl mb-6 text-neutral-900">Why Our Approach Works</h2>
            <p className="text-lg text-neutral-800 mb-8">Most people fail because they rely on extreme workouts, hunger-prone diet plans, and willpower. Personal Wellness replaces all of that.</p>
            
            <div className="">
              {[
                { title: "Simple systems", desc: "No complicated rules. Just structured daily routines you can actually live with." },
                { title: "Daily guidance", desc: "Live coaching sessions from Monday to Saturday to keep you on track." },
                { title: "Community accountability", desc: "A supportive transformation community that makes consistency easier." },
                { title: "Habit-based transformation", desc: "We focus on changing how you live, think, move, and eat." }
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
      <section className=" px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-medium text-gray-400 mb-3 block">What You Get</span>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900">Transformation from the Inside Out.</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-white p-10 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <Activity className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-2xl font-medium mb-4">Physical Transformation</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Sustainable weight loss</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Improved strength & mobility</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Better sleep and recovery</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-10 rounded-xl border border-neutral-300 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <HeartPulse className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-2xl font-medium mb-4">Energy & Lifestyle</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Higher daily energy levels</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Reduced stress and fatigue</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> More productive and active days</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-10 rounded-xl border border-neutral-200 border-t-4 border-t-[#ff6a3d] shadow-sm">
            <ShieldCheck className="w-10 h-10 text-[#ff6a3d] mb-6" />
            <h3 className="text-2xl font-medium mb-4">Mental & Emotional</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Improved self-confidence</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Better relationship with food</li>
              <li className="flex items-start gap-2 text-neutral-800 font-medium"><CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" /> Reduced guilt and overwhelm</li>
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
            <span className="text-sm font-medium tracking-widest text-[#fff7ee] uppercase mb-2 block">Popular Program</span>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-50 mb-6">Personal Wellness</h2>
            <p className="text-lg text-neutral-100 mb-6 max-w-lg font-medium">
              Designed to help you build lasting health without extreme diets or disrupting your lifestyle.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Daily Live Coaching (Mon–Sat)</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Structured Weekly Themes</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> No gym dependency</li>
              <li className="flex items-center gap-2 font-medium text-neutral-50"><CheckCircle2 className="w-5 h-5 text-[#eeeeee]" /> Fully Online (accessible anywhere)</li>
            </ul>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-start bg-white p-8 rounded-xl shadow-xl border border-white/50 w-full md:w-auto min-w-[320px]">
            <div className="text-5xl font-medium text-neutral-900 mb-2">₹8,484</div>
            <div className="text-sm font-medium text-neutral-800 uppercase tracking-wider mb-8">Per Month</div>
            <button className="w-full py-4 bg-[#0f172a] text-white font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-neutral-800 mt-4 text-center w-full font-medium">Replaces multiple gym memberships and trial-and-error diets.</p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          7. HOW WE WORK (4 Steps)
          ========================================= */}
      <section className="py-12 pb-12 px-6 max-w-7xl mx-auto bg-white my-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-6xl text-neutral-900 mb-4">How It Works</h2>
          <p className="text-lg text-neutral-800 font-medium">A simple, proven process to get you from where you are to where you want to be.</p>
        </div>

        <section className="py-24 px-6 max-w-7xl mx-auto bg-white rounded-[1rem] shadow-sm border border-neutral-300 my-12">

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {[
            { icon: <Compass />, step: "Step 1", title: "Clarity", desc: "Understand where you are and what actually needs to change." },
            { icon: <Target />, step: "Step 2", title: "Coaching", desc: "Daily live guidance and structured direction." },
            { icon: <Repeat />, step: "Step 3", title: "Consistency", desc: "Implement simple habits that fit your real life." },
            { icon: <Users />, step: "Step 4", title: "Community", desc: "Support that keeps you on track to achieve results." }
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
                    // Delay is staggered so line 1 draws, then line 2, then line 3
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
<FaqSection />
<FollowCtaSection />
    </div>
  );
}