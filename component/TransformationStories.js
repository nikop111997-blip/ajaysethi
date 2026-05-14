import React from 'react';
import Image from 'next/image';

const TransformationStories = () => {
  return (
    <section className="dark:bg-white py-20 lg:py-8 lg:pb-20 px-6 sm:px-10 lg:px-22 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-16">
          <p className="text-sm text-neutral-400 mb-2">
            Testimonial
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
            Transformation Stories
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden relative">
                  {/* Replace with actual image */}
                  <Image src={'https://images.unsplash.com/photo-1629252321485-c9363dd2f581'} alt='rahul' height={100} width={100} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Rahul Sharma.,</h4>
                  <p className="text-xs text-neutral-800">Gym Owner, Jaipur</p>
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-6">
                <p className="text-neutral-800 leading-relaxed text-md">
                  "Ajay sir's program completely transformed how I run my gym. I went from 80 to 200 members in 6 months and hired my first trainer."
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden relative">
                  <Image src={'https://images.unsplash.com/photo-1570128641432-a1520efe3b1d'} alt='anil gupta' height={100} width={100} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Dr. Anil Gupta.,</h4>
                  <p className="text-xs text-neutral-800">Corporate Wellness Lead</p>
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-6">
                <p className="text-neutral-700 leading-relaxed text-md">
                  "We brought Ajay in for our company's wellness initiative. Employee productivity measurably improved within 3 months."
                </p>
              </div>
            </div>
          </div>

          {/* Center Column (Highlighted Featured Card) */}
          <div className="bg-white rounded-lg p-8 shadow-md border border-neutral-100 relative md:mt-0 mt-6 flex flex-col h-full">
            <div className="absolute top-6 right-6 bg-[#ff6a3d] text-white text-[10px] animate-bounce uppercase tracking-wider py-1.5 px-4 rounded-full z-10">
              Founder & Mentor
            </div>
            
            <div className="relative w-full h-64 mb-6 flex justify-center items-end bg-gradient-to-b from-neutral-50 to-white rounded-2xl">
               {/* Replace src with Ajay Sethi's cutout image */}
             <div className="relative inline-block">
  <Image
    src={"/png.png"}
    alt="Ajay Sethi"
    height={500}
    width={240}
    className="object-cover"
  />

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
</div>
            </div>

            <div className="flex-grow">
              <span className="text-4xl text-neutral-300 font-serif absolute -mt-4">"</span>
              <p className="text-md text-neutral-800 font-medium italic leading-relaxed pt-2 text-center">
                My mission is to multiply my 30+ years of wisdom by building the next generation of health leaders.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-neutral-100">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">1,000+</h3>
                <p className="text-xs text-neutral-800 font-medium uppercase tracking-wide mt-1">Coaches Trained</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">50K+</h3>
                <p className="text-xs text-neutral-800 font-medium uppercase tracking-wide mt-1">Lives Impacted</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden relative">
                  <Image src={'https://images.unsplash.com/photo-1649570443214-d4028de34e9f'} alt='meena' height={100} width={100} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Meena Kapoor.,</h4>
                  <p className="text-xs text-neutral-800">Yoga Instructor, Delhi</p>
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-6">
                <p className="text-neutral-800 leading-relaxed text-md">
                  "I had no idea how to price my classes or build a brand. After Ajay's mentorship, I now have a fully booked online yoga program."
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden relative">
                  <Image src={'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3'} alt='priya yoga' height={100} width={100} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Priya.,</h4>
                  <p className="text-xs text-neutral-800">Yoga Studio Owner, Pune</p>
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-6">
                <p className="text-neutral-800 leading-relaxed text-md">
                  "Started with 5 clients and no pricing structure. After completing the program, I launched my own studio, hired 3 staff members, and drastically scaled my revenue."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationStories;