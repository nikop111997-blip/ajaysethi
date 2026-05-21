'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Activity, Target, BrainCircuit, Globe2, Heart, ArrowRight } from 'lucide-react';

export default function CreativeStorySection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="dark:bg-white text-neutral-900 py-16 font-sans overflow-hidden">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#ff6a3d]"></div>
            <span className="text-[#ff6a3d] font-bold tracking-widest uppercase text-sm">The Origin Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl tracking-tight leading-[1.05] mb-8 font-semibold">
            From Performance <br className="hidden md:block"/>
            <span className="text-[#ff6a3d]">to Purpose.</span>
          </h2>
          <p className="text-md md:text-lg text-neutral-600 leading-relaxed font-medium">
            My journey began on the basketball court. As a professional athlete, performance was everything—discipline, effort, pushing limits. That mindset took me into the corporate world at Tata Steel, where I experienced a very different reality: <strong className="text-neutral-900">People were successful. But they were not healthy.</strong>
          </p>
        </motion.div>
      </div>

      {/* 2. THE BENTO GRID STORY */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: The Struggle (Spans 8 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-8 bg-white p-10 md:p-14 rounded-xl border border-neutral-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <Activity className="w-10 h-10 text-[#ff6a3d] mb-6" />
              <h3 className="text-xl font-bold mb-4">Building Without a Blueprint</h3>
              <p className="text-md text-neutral-800 mb-6 leading-relaxed">
                In 1995, I started my first gym. There was no roadmap. No ecosystem. Over the next decade, I experimented, built, failed, and rebuilt. I started a gym, a running club, and a computer business (which I eventually had to shut down).
              </p>
              <div className="bg-neutral-50 p-6 rounded-2xl border-l-4 border-[#ff6a3d]">
                <p className="text-lg font-bold text-neutral-900">It took me 13 years just to become financially stable.</p>
                <p className="text-neutral-800 mt-2">That phase taught me something most people don’t realise: Hard work alone does not create results. Clarity and systems do.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Scaling (Spans 4 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-4 bg-[#141414] text-white p-10 md:p-14 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <Target className="w-10 h-10 text-gray-200 opacity-40 mb-6" />
              <h3 className="text-xl font-bold mb-4">Scaling Success & Its Hidden Cost</h3>
              <p className="text-gry-50 text-md leading-relaxed mb-8">
                Between 2008 and 2013, I scaled from one gym to three. I trained hundreds of trainers. But the model was heavy: high overheads, constant pressure, and dependency on location.
              </p>
            </div>
            <p className="text-lg italic">It worked... but it wasn't sustainable.</p>
          </motion.div>

          {/* Card 3: The Realisation (Spans 5 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-5 bg-[#141414] text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <BrainCircuit className="w-10 h-10 text-neutral-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">A Deeper Realisation</h3>
            <p className="text-neutral-300 text-md leading-relaxed mb-8">
              Working with athletes, corporate professionals, and everyday individuals, I saw the exact same pattern. People were not failing because they were lazy. They were failing because the system was broken. Too much focus on exercise. Too little focus on lifestyle.
            </p>
          </motion.div>

          {/* Card 4: Kayapalat (Spans 7 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-7 bg-white p-10 md:p-14 rounded-xl border border-neutral-200 shadow-sm relative overflow-hidden">
            <Globe2 className="w-10 h-10 text-[#ff6a3d] mb-6 absolute top-10 right-10 opacity-20 scale-150" />
            <h3 className="text-xl font-bold mb-4 text-neutral-900">2020: The Turning Point</h3>
            <p className="text-md text-neutral-800 leading-relaxed mb-6">
              When the world stopped and gyms shut down, my clients reached out—not for workouts, but for support. They were overwhelmed. I felt a strong responsibility: <span className="text-neutral-900 font-semibold">People need support right now. I need to do something.</span>
            </p>
            <p className="text-xl font-bold text-[#ff6a3d] mb-6">Kayapalat was not a business idea. It was a response.</p>
            <p className="text-md text-neutral-600 leading-relaxed">
              I began training people to train themselves. To take charge of their movement, eating, thinking, and daily habits. We didn’t chase weight loss. We focused on how people live. And naturally, energy improved, confidence returned, and weight loss followed.
            </p>
          </motion.div>

        </div>
      </div>

      {/* 3. THE BREAKTHROUGH PULL-SECTION */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className=" border border-orange-200 rounded-[1rem] p-6 md:p-20 text-center relative overflow-hidden">
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-neutral-900 font-semibold leading-tight mb-8 text-left sm:text-center">
              Inspired by the work of Dave Brailsford, I focused on one core principle: 
              <span className="text-[#ff6a3d]">Small habits, done consistently, create extraordinary results.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-md text-zinc-50">
              <span className="bg-[#ff6a3d] px-6 py-3 rounded-md shadow-sm">No extreme routines.</span>
              <span className="bg-zinc-950 px-6 py-3 rounded-lg shadow-sm">No pressure.</span>
              <span className="bg-[#ff6a3d] px-6 py-3 rounded-lg shadow-sm">Consistency.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. WHAT I DO TODAY */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl  text-neutral-900 mb-6 font-semibold">What I Do Today</h2>
          <p className="text-md sm:text-lg text-neutral-800 max-w-2xl">
            What started as a response during a crisis became a community, a system, and a way of living. Today, my work is focused on three areas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "For Individuals", desc: "Helping people build lifetime health, fitness, and happiness without forcing a lifestyle that doesn't fit." },
            { title: "For Corporates", desc: "Helping organizations create healthier, more energised, and productive teams." },
            { title: "For Professionals", desc: "Helping passionate individuals build profitable, scalable wellness businesses without the burnout." }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 rounded-xl border border-neutral-200 hover:border-[#ff6a3d] hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-neutral-100 group-hover:bg-[#ff6a3d] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. PERSONAL NOTE & CORE BELIEF */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-neutral-900 text-white rounded-[1rem] p-6 py-10 md:p-20 flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <h3 className="text-2xl mb-6">A Personal Note</h3>
            <p className="text-neutral-50 text-md sm:text-lg leading-relaxed mb-8">
              I live in Kota, Rajasthan, with my wife Nisreen—who is also a fitness professional—and our two children. Family, community, and contribution are not separate from my work. They are at the heart of it.
            </p>
            <div className="border-l-4 border-[#ff6a3d] pl-6">
              <p className="text-md sm:text-xl font-bold text-white">"Health should not depend on a place. It should become a way of living."</p>
            </div>
          </div>

          <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">If You Are Here</h3>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              If you are looking for quick fixes, I may not be the right coach for you. But if you are ready to build real health, create meaningful transformation, or grow a purpose-driven wellness business... <strong className="text-white">Then you are in the right place.</strong>
            </p>
            <button className="open-booking-modal w-full py-4 bg-[#ff6a3d] text-black font-semibold rounded-lg hover:bg-[#ff7a53] hover:-translate-y-1 transition-all shadow-lg ">
              Start Your Transformation
            </button>
          </div>

        </motion.div>
      </div>

    </section>
  );
}