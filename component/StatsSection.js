"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

// 1. The custom Animated Number component
function AnimatedCounter({ value }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  const numericValue = parseInt(value.replace(/,/g, "").replace(/\D/g, ""), 10);
  const stringSuffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(currentValue) {
          if (nodeRef.current) {
            nodeRef.current.textContent = 
              Math.floor(currentValue).toLocaleString("en-US") + stringSuffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue, stringSuffix]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {value}
    </span>
  );
}

// 2. The Main Section Component
export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "30+",
      title: "Years Experience",
      description: "Hands-on expertise across nutrition, fitness, and business",
    },
    {
      id: 2,
      value: "50,000+",
      title: "Lives Impacted",
      description: "Transforming health, energy, and performance globally",
    },
    {
      id: 3,
      value: "1,000+",
      title: "Coaches Trained",
      description: "Building the next generation of wellness leaders",
    },
    {
      id: 4,
      value: "70,000+",
      title: "Kgs Weight Loss",
      description: "Sustainable physical transformation in just the last 5 years",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-24 md:py-24 px-4 md:px-8 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              // Added Hover Classes Here: padding, rounded corners, transitions, transform, and shadow
              className="flex flex-col items-start text-left group p-8 rounded-3xl hover:bg-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-gray-50/50 cursor-default"
            >
              <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight dark:text-gray-950 transition-transform duration-500 group-hover:scale-105 origin-left">
                <AnimatedCounter value={stat.value} />
              </h2>
              <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300">
                {stat.title}
              </h3>
              <p className="text-md text-gray-800 leading-relaxed max-w-[240px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}