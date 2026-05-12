"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  // FAQs crafted from the core philosophies and services in the Content Brief
  const faqs = [
    {
      question: "Do I need to follow extreme diets or workouts?",
      answer: "No. Most people fail because they rely on extreme workouts or hunger-prone diet plans. Our approach focuses on simple systems, daily guidance, and habit-based transformation that fits seamlessly into your real, everyday life.",
    },
    {
      question: "What is the KP PRO Personal Wellness Membership?",
      answer: "It is a simple, structured system to help you build lasting health, fitness, and happiness. It includes daily live coaching sessions, structured weekly themes, and community accountability so you can stop starting and stopping.",
    },
    {
      question: "Who is the Wellness Business Coaching for?",
      answer: "It is designed for fitness trainers, gym owners, yoga instructors, and wellness professionals who are skilled but feel stuck in time-for-money models. We help you build a clear offer, attract clients, and create predictable monthly income.",
    },
    {
      question: "How do your Corporate Wellness programs work?",
      answer: "We design practical wellness systems tailored to your organization—ranging from keynote talks to 30-Day Wellness Living Programs. The focus is on improving energy, productivity, and culture without disrupting daily work.",
    },
    {
      question: "Are the coaching sessions online or in-person?",
      answer: "We offer flexible formats. The Personal Wellness program is fully online and accessible from anywhere. Corporate and Business Coaching programs can be delivered online, offline, or in a hybrid format depending on your specific needs.",
    }
  ];

  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* =========================================
            LEFT COLUMN: Sticky Header & CTA
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
          <span className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4">
            FAQ
          </span>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
            Frequently <br className="hidden md:block" />
            Asked Questions
          </h3>

          <p className="text-gray-900 text-base leading-relaxed mb-10 max-w-sm">
            If you're new here or wondering what to expect, these answers will guide you through how coaching works, what's included, and how we tailor every plan to your needs.
          </p>

          {/* Contact Button mimicking the reference image */}
          <Link
            href="mailto:support@kayapalat.in"
            className="inline-flex items-center w-80 justify-between border border-gray-300 rounded-xl pl-6 pr-4 py-2 hover:border-gray-400 transition-colors group"
          >
            <span className="text-[#1a1a1a] font-medium mr-6">Send e-mail</span>
            <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
          </Link>
        </div>

        {/* =========================================
            RIGHT COLUMN: Accordion List
            ========================================= */}
        <div className="lg:col-span-7 flex flex-col border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
                >
                  <h3 className="text-lg md:text-xl font-medium text-[#1a1a1a] pr-8 group-hover:text-[#ff6a3d] transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-[#1a1a1a]">
                    {isOpen ? (
                      <Minus className="w-6 h-6 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-6 h-6 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="pb-8 text-gray-900 text-base leading-relaxed pr-4 md:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}