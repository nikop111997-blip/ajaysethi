"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Animate each word
const Word = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block mr-[0.25em] mb-[0.1em]">
      {/* Background */}
      <span className="absolute text-gray-200">{children}</span>

      {/* Animated foreground */}
      <motion.span
        style={{ opacity }}
        className={`relative ${
          isHighlight ? "text-[#ff5a2b]" : "text-gray-900"
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function AgitationScrollReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const highlightKeywords = [
    "system",
    "business",
    "Positioning",
    "Pricing",
  ];

  // Content with real <br /> tags
  const content = [

    <React.Fragment key="br1">
      <br />
      <br />
    </React.Fragment>,

    "You didn't get into this to be broke. You got certified. You got good at what you do. Your clients get real results — you know that, they know that.",
    <React.Fragment key="br2">
      <br />
      <br />
    </React.Fragment>,

    "And yet, every month looks the same.",
    <React.Fragment key="br3">
      <br />
      <br />
    </React.Fragment>,

    "You're capped at how many people you can personally train in a day.",
    <br key="br4" />,

    "Or you're paying rent on a gym that eats half of what it makes.",
    <br key="br5" />,

    "Or you're posting on Instagram, hoping the algorithm decides today's the day someone books a session.",
    <React.Fragment key="br6">
      <br />
      <br />
    </React.Fragment>,

    "Meanwhile, someone with half your knowledge is running a fully-booked online program, charging triple what you charge, working fewer hours than you.",
    <React.Fragment key="br7">
      <br />
      <br />
    </React.Fragment>,

    "The difference isn't skill.",
    <br key="br8" />,

    "It's never been skill.",
    <React.Fragment key="br9">
      <br />
      <br />
    </React.Fragment>,

    "It's the business system underneath the skill.",
    <br key="br10" />,

    "Positioning.",
    <br key="br11" />,

    "Pricing.",
    <br key="br12" />,

    "A predictable way to attract the right clients — without becoming a full-time content creator to do it.",
    <React.Fragment key="br13">
      <br />
      <br />
    </React.Fragment>,

    "I spent 11 years figuring that system out the hard way, so you don't have to.",
  ];

  // Convert into renderable items
  const items = [];

  content.forEach((item) => {
    if (typeof item === "string") {
      item.split(" ").forEach((word) => {
        items.push({
          type: "word",
          value: word,
        });
      });
    } else {
      items.push({
        type: "break",
        value: item,
      });
    }
  });

  const totalWords = items.filter((i) => i.type === "word").length;
  let wordIndex = 0;

  return (
    <section className="w-full bg-white py-24 md:py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <span className="mb-4 border border-dashed border-[#ff5a2b]/40 bg-[#ff5a2b]/10 backdrop-blur-2xl text-[#ff5a2b] px-4 py-1">Problem Statement </span>
        <h3 className="text-5xl font-bold mt-8" > Why do skilled coaches stay stuck at the same income for years?</h3>
        <p
          ref={containerRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[1.55rem] leading-[1.45] font-semibold tracking-tight"
        >
          {items.map((item, index) => {
            if (item.type === "break") {
              return (
                <React.Fragment key={index}>
                  {item.value}
                </React.Fragment>
              );
            }

            const start = wordIndex / totalWords;
            const end = start + 1 / totalWords;
            wordIndex++;

            const cleanWord = item.value.replace(/[.,!?—]/g, "");
            const isHighlight = highlightKeywords.includes(cleanWord);

            return (
              <Word
                key={index}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlight={isHighlight}
              >
                {item.value}
              </Word>
            );
          })}
        </p>

        <div className="mt-20">
          <Link
            href="#system"
            className="inline-flex items-center gap-2 text-xl font-bold border-b-2 border-black pb-1 hover:text-[#ff5a2b] hover:border-[#ff5a2b] transition-all group"
          >
            See the System
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}