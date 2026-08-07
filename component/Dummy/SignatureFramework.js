"use client";

import { useEffect, useRef, useState } from "react";
import { Crosshair, Tag, Cog, TrendingUp } from "lucide-react";

/**
 * SignatureFramework
 * Drop this into a Next.js app-router project as-is.
 * Images have been added to each step using relevant stock photos from Pexels.
 */

const STEPS = [
  {
    n: "01",
    key: "clarity",
    title: "Clarity",
    copy: "Understand exactly where your business stands today by identifying what's working, what's holding you back, and where your biggest opportunities lie. Gain complete clarity on your revenue, positioning, audience, and goals so every decision you make is based on strategy instead of guesswork.",
    icon: Crosshair,
    image: "https://images.pexels.com/photos/8279278/pexels-photo-8279278.jpeg", // Business planning / clarity
  },
  {
    n: "02",
    key: "positioning",
    title: "Positioning",
    copy: "Create an offer that clearly communicates your value and attracts the right clients. Learn how to differentiate yourself from competitors, build trust, confidently price your services, and become the obvious choice in your market.",
    icon: Tag,
    image: "https://images.pexels.com/photos/12903181/pexels-photo-12903181.jpeg", // Strategy / standing out
  },
  {
    n: "03",
    key: "systems",
    title: "Systems",
    copy: "Build simple, repeatable systems that consistently generate leads, nurture prospects, and convert them into paying clients. Automate repetitive tasks, streamline your workflow, and create a business that delivers predictable results without relying on constant hustle.",
    icon: Cog,
    image: "https://images.pexels.com/photos/8436731/pexels-photo-8436731.jpeg", // Technology / organized workflow
  },
  {
    n: "04",
    key: "scale",
    title: "Scale",
    copy: "Transition from trading time for money to building scalable income streams through group programs, digital products, memberships, and community-based offers. Grow your impact, increase profitability, and create a business that continues to thrive even when you're not working every hour.",
    icon: TrendingUp,
    image: "https://images.pexels.com/photos/7108959/pexels-photo-7108959.jpeg", // Growth / upward chart
  },
];

export default function SignatureFramework() {
  const [active, setActive] = useState(0);
  const triggerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    triggerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ActiveIcon = STEPS[active].icon;

  return (
    <section className="relative bg-orange-50/50 pt-20">
      {/* KICKER STRIP */}
      <div className="mx-auto max-w-7xl px-6 md:px-0">
        <div className="inline-block w-fit border border-dashed border-[#ff6b42]/50 bg-[#ff6b42]/20 text-[#ff6b42] px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
          The Framework
        </div>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#2a2926] md:text-6xl">
          From Trainer to
          <br />
          Business Owner
        </h2>
      </div>

      {/* SCROLL STACK */}
      <div className="relative" style={{ height: `${STEPS.length * 100}vh` }}>
        {/* invisible scroll triggers — one per step, define scroll bands */}
        {STEPS.map((s, i) => (
          <div
            key={s.key}
            ref={(el) => (triggerRefs.current[i] = el)}
            data-index={i}
            className="absolute left-0 w-full"
            style={{ top: `${i * 100}vh`, height: "100vh" }}
          />
        ))}

        {/* sticky viewport-height layer */}
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-0">
            {/* LEFT — sticky image panel */}
            <div className="relative order-2 flex h-[36vh] items-center justify-center overflow-hidden shadow-2xl md:order-1 md:h-[70vh]">
              
              {/* Dynamic Pexels Background Image */}
              <img
                key={`img-${active}`}
                src={STEPS[active].image}
                alt={STEPS[active].title}
                className="absolute inset-0 h-full w-full object-cover "
              />
              

              {/* watermark number */}
             

       

              {/* progress rail */}
              <div className="absolute bottom-6 left-6 right-6 h-[2px] bg-white/20 z-10 md:hidden" />
              <div className="absolute right-6 top-6 hidden h-[calc(100%-3rem)] w-[2px] bg-white/20 z-10 md:block">
                <div
                  className="w-full bg-[#FF4B1F] transition-all duration-500 ease-out shadow-[0_0_10px_#FF4B1F]"
                  style={{ height: `${((active + 1) / STEPS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* RIGHT — sticky heading + accumulating step list */}
            <div className="order-1 flex flex-col justify-center md:order-2">
              <ol className="flex flex-col gap-8">
                {STEPS.map((s, i) => {
                  const isActive = i === active;
                  const isPast = i < active;
                  return (
                    <li
                      key={s.key}
                      className={`flex gap-5 py-5 transition-all duration-400 ${
                        isActive ? "opacity-100" : isPast ? "opacity-40" : "opacity-30"
                      }`}
                    >
                      <span
                        className={`font-mono text-sm tracking-widest transition-colors duration-400 ${
                          isActive ? "text-[#FF4B1F]" : "text-[#1f2021]"
                        }`}
                      >
                        {s.n}
                      </span>
                      <div>
                        <h3
                          className={`font-black uppercase tracking-tight transition-all duration-400 ${
                            isActive
                              ? "text-2xl text-[#444341] md:text-3xl"
                              : "text-lg text-[#414449]"
                          }`}
                        >
                          {s.title}
                        </h3>
                        <p
                          className={`mt-2 max-w-md text-[15px] leading-relaxed text-[#3d3d3d] transition-all duration-400 ${
                            isActive
                              ? "max-h-32 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0"
                          }`}
                        >
                          {s.copy}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}