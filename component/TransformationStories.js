import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma.",
    role: "Gym Owner, Jaipur",
    image:
      "https://images.unsplash.com/photo-1629252321485-c9363dd2f581",
    thumbnail:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    text: `"Ajay sir's program completely transformed how I run my gym. I went from 80 to 200 members in 6 months and hired my first trainer."`,
  },
  {
    name: "Dr. Anil Gupta.",
    role: "Corporate Wellness Lead",
    image:
      "https://images.unsplash.com/photo-1570128641432-a1520efe3b1d",
    thumbnail:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    text: `"We brought Ajay in for our company's wellness initiative. Employee productivity measurably improved within 3 months."`,
  },
  {
    name: "Meena Kapoor.",
    role: "Yoga Instructor, Delhi",
    image:
      "https://images.unsplash.com/photo-1649570443214-d4028de34e9f",
    thumbnail:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    video: "https://www.youtube.com/embed/jfKfPfyJRdk",
    text: `"I had no idea how to price my classes or build a brand. After Ajay's mentorship, I now have a fully booked online yoga program."`,
  },
  {
    name: "Priya.",
    role: "Yoga Studio Owner, Pune",
    image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3",
    thumbnail:
      "https://images.unsplash.com/photo-1518611012118-f847c4d0d5d7",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    text: `"Started with 5 clients and no pricing structure. After completing the program, I launched my own studio, hired 3 staff members, and drastically scaled my revenue."`,
  },
];

const TestimonialCard = ({ item, openVideo }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden relative">
          <Image
            src={item.image}
            alt={item.name}
            height={100}
            width={100}
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h4 className="font-semibold text-neutral-900">{item.name}</h4>
          <p className="text-xs text-neutral-800">{item.role}</p>
        </div>
      </div>

      {/* Thumbnail Video */}
      <div
        onClick={() => openVideo(item.video)}
        className="relative w-full h-48 rounded-2xl overflow-hidden cursor-pointer group mb-6"
      >
        <Image
          src={item.thumbnail}
          alt="video thumbnail"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play
              size={20}
              className="fill-black text-black ml-1"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-6">
        <p className="text-neutral-800 leading-relaxed text-md">
          {item.text}
        </p>
      </div>
    </div>
  );
};

const TransformationStories = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="dark:bg-white py-20 lg:py-0 lg:pb-20 px-6 sm:px-10 lg:px-22 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-16">
            <p className="text-sm text-neutral-400 mb-2">
              Testimonial
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
              Transformation Stories
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <TestimonialCard
                item={testimonials[0]}
                openVideo={setActiveVideo}
              />

              <TestimonialCard
                item={testimonials[1]}
                openVideo={setActiveVideo}
              />
            </div>

            {/* Center */}
           {/* Center */}
<div className="bg-white rounded-lg p-8 shadow-md border border-neutral-100 relative md:mt-0 mt-6 flex flex-col h-full overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#ff6a3d]/10 blur-3xl rounded-full" />
  <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-neutral-200/40 blur-3xl rounded-full" />

  {/* Badge */}
  <div className="absolute top-6 right-6 bg-[#ff6a3d] text-white text-[10px] animate-bounce uppercase tracking-wider py-1.5 px-4 rounded-full z-10">
    Founder & Mentor
  </div>

  {/* Small Floating Elements */}
  <div className="absolute left-5 top-10 text-[10px] uppercase tracking-[0.3em] text-neutral-300 rotate-[-90deg]">
    Wellness
  </div>

  <div className="absolute right-[-20px] bottom-32 text-[70px] font-bold text-neutral-100 leading-none select-none">
    30+
  </div>

  {/* Image Section */}
  <div className="relative w-full h-64 mb-6 flex justify-center items-end bg-gradient-to-b from-neutral-50 to-white rounded-2xl">

    {/* Decorative Circle */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-dashed border-neutral-200 animate-spin [animation-duration:20s]" />

    <div className="relative inline-block z-10">
      <Image
        src={"/png.png"}
        alt="Ajay Sethi"
        height={500}
        width={240}
        className="object-cover drop-shadow-2xl"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  </div>

  {/* Quote */}
  <div className="flex-grow relative z-10">
    <span className="text-6xl text-[#ff6a3d]/10 font-serif absolute -top-8 left-1/2 -translate-x-1/2">
      ”
    </span>

    <p className="text-md text-neutral-800 font-medium italic leading-relaxed pt-4 text-center px-2">
      My mission is to multiply my 30+ years of wisdom by building the next generation of health leaders.
    </p>

    {/* Mini Stats Pills */}
    <div className="flex justify-center gap-3 mt-6 flex-wrap">
      <div className="px-4 py-2 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700">
        Fitness Mentor
      </div>

      <div className="px-4 py-2 rounded-full bg-[#ff6a3d]/10 text-xs font-medium text-[#ff6a3d]">
        Business Coach
      </div>

      <div className="px-4 py-2 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700">
        Wellness Expert
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-neutral-100 relative z-10">
    
    <div className="bg-neutral-50 rounded-2xl p-4 text-center">
      <h3 className="text-2xl font-bold text-neutral-900">
        1,000+
      </h3>

      <p className="text-[11px] text-neutral-600 font-medium uppercase tracking-wide mt-1">
        Coaches Trained
      </p>
    </div>

    <div className="bg-[#ff6a3d]/5 rounded-2xl p-4 text-center">
      <h3 className="text-2xl font-bold text-neutral-900">
        50K+
      </h3>

      <p className="text-[11px] text-neutral-600 font-medium uppercase tracking-wide mt-1">
        Lives Impacted
      </p>
    </div>
  </div>
</div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              <TestimonialCard
                item={testimonials[2]}
                openVideo={setActiveVideo}
              />

              <TestimonialCard
                item={testimonials[3]}
                openVideo={setActiveVideo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 bg-white text-black w-10 h-10 rounded-full"
            >
              ✕
            </button>

            <iframe
              src={activeVideo}
              title="Testimonial Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TransformationStories;