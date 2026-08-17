"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  // FAQs crafted from the core philosophies and services in the Content Brief
  const faqs = [
  {
    question: "Do I need any prior experience to become a Wellness Coach?",
    answer:
      "No. The program is designed for people from different backgrounds and does not require prior industry experience. Whether you are starting a new career, looking for a second income, or already have experience in health, fitness, nutrition, sports, or related fields, you can learn and build your skills through the program.",
  },
  {
    question: "What will I learn in the Wellness Coach course?",
    answer:
      "The course covers the key areas required to become a Wellness Coach, including wellness, nutrition, exercise, mindset, marketing, sales, and practical business skills. You are also coached and mentored by experienced Coaches and become part of a community where you can learn from successful coaches.",
  },
  {
    question: "Can I work as a Wellness Coach part-time?",
    answer:
      "Yes. The Wellness Coach Academy model is designed to provide flexibility. You can work part-time or full-time and build your wellness coaching activities around your existing schedule.",
  },
  {
    question: "Can I work as a Wellness Coach from home?",
    answer:
      "Yes. The program supports both online and offline opportunities. You can work with clients from home, an office, your own wellness center, or other locations depending on how you choose to build your coaching business.",
  },
  {
    question: "Can I start my own Wellness Coaching business?",
    answer:
      "Yes. The program is designed to help you develop the knowledge, coaching skills, marketing skills, and business understanding needed to start your own online or offline wellness coaching practice or wellness center.",
  },
  {
    question: "What kind of support do I receive during the program?",
    answer:
      "The program includes coaching and mentorship from experienced Coaches, support material, sales and marketing training, and access to a community where you can learn best practices and receive guidance as you develop your wellness coaching business.",
  },
  {
    question: "Can I start earning while I am learning?",
    answer:
      "The Academy's model is designed around learning through practical implementation. You can begin engaging with the business and applying what you learn while completing the course, under the guidance and supervision of experienced mentors.",
  },
  {
    question: "Who can join Wellness Coach Academy?",
    answer:
      "The program is suitable for people who want to build a meaningful career or business in wellness, including fitness professionals, nutrition and health professionals, sports professionals, people looking for a second income, students, homemakers, retired individuals, entrepreneurs, and people looking for a new career direction.",
  },
  {
    question: "What can I do after completing the course?",
    answer:
      "After completing the course, you can work independently as a Wellness Coach, continue working with the Academy, develop clients online or offline, or build your own wellness coaching business or wellness center.",
  },
  {
    question: "Is the Wellness Coach opportunity limited to one location?",
    answer:
      "No. The Academy's model is designed to support both local and online business opportunities. You can develop clients online as well as offline and build your wellness coaching business in different locations.",
  },
  {
    question: "How does the Wellness Coach Academy program work?",
    answer:
      "You enroll in the course, start learning the core wellness and business skills, apply what you learn with guidance from experienced mentors, and develop your coaching and business capabilities. The goal is to help you move from learning to practical implementation and eventually build your own wellness coaching business.",
  },
];

  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 md:pb-10 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* =========================================
            LEFT COLUMN: Sticky Header & CTA
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
         <div className="inline-block w-fit border border-dashed border-[#ff6b42]/50 bg-[#ff6b42]/20 text-[#ff6b42] px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
            FAQs
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] tracking-tight mb-6 font-semibold">
            Frequently <br className="hidden md:block" />
            Asked Questions
          </h3>

          <p className="text-gray-900 text-base leading-relaxed mb-10 max-w-sm">
            If you're new here or wondering what to expect, these answers will guide you through how coaching works, what's included, and how we tailor every plan to your needs.
          </p>

          {/* Contact Button mimicking the reference image */}
          <Link
            href="mailto:support@kayapalat.in"
            className="inline-flex items-center w-80 justify-between border border-dashed border-[#ff6b42]/50 pl-6 pr-4 py-2 hover:border-gray-400 transition-colors group"
          >
            <span className="text-[#ff6b42]/60 font-medium mr-6">Send e-mail</span>
            <div className="bg-[#ff6b42] relative overflow-hidden flex items-center justify-center w-10 h-10">
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