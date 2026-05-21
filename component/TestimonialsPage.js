
import { Star, ChevronDown } from 'lucide-react';
import AboutHero from './AboutHero';
import SuccessStoriesHero from './SuccessStoriesHero';
import Image from 'next/image';

// Data from Ajay Sethi Content Brief
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Gym Owner, Jaipur",
    quote: "Ajay sir's program completely transformed how I run my gym. I went from 80 to 200 members in 6 months and hired my first trainer.",
    avatar: "/avatars/rahul.jpg" // Placeholder paths
  },
  {
    id: 2,
    name: "Meena Kapoor",
    role: "Yoga Instructor, Delhi",
    quote: "I had no idea how to price my classes or build a brand. After Ajay's mentorship, I now have a fully booked online yoga program.",
    avatar: "/avatars/meena.jpg"
  },
  {
    id: 3,
    name: "Dr. Anil Gupta",
    role: "Corporate Wellness Lead",
    quote: "We brought Ajay in for our company's wellness initiative. Employee productivity measurably improved within 3 months.",
    avatar: "/avatars/anil.jpg"
  },
  {
    id: 4,
    name: "Vikram S.",
    role: "Fitness Coach",
    quote: "I was earning ₹20,000/month as a freelance trainer. After the 3-month mentorship program, I launched group coaching and now earn ₹1.2 lakh/month.",
    avatar: "/avatars/vikram.jpg"
  },
  {
    id: 5,
    name: "Priya M.",
    role: "Wellness Entrepreneur",
    quote: "The B2B Coach Training didn't just give me a certification; it gave me a scalable business framework. I finally moved away from the exhausting time-for-money cycle.",
    avatar: "/avatars/priya.jpg"
  },
  {
    id: 6,
    name: "Sanjay D.",
    role: "Corporate HR Manager",
    quote: "Most wellness programs we tried were just talks. Ajay brought simple, practical systems that our employees actually follow daily. The energy shift in the office is undeniable.",
    avatar: "/avatars/sanjay.jpg"
  }
];



export default function TestimonialsPage() {

  return (
    <div className="min-h-screen text-neutral-900 font-sans  dark:bg-white">
      
      {/* 1. HERO SECTION */}
     
<SuccessStoriesHero />
      {/* 2. GRID SECTION */}
      <section id='stories' className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Testimonials</span>
        </div>
        <h2 className="text-4xl font-bold mb-12">Trusted by Professionals Nationwide</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div 
  key={t.id} 
  className="group relative cursor-pointer overflow-hidden bg-white p-8 border border-neutral-200 rounded-lg flex flex-col h-full hover:shadow-xl hover:border-[#ff6a3d] transition-all duration-500"
>
  {/* Background Fill Animation Layer */}
  <div className="absolute inset-0 bg-[#ff6a3d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

  {/* Content (relative + z-10 ensures it stays above the animated background) */}
  <div className="relative z-10 flex flex-col h-full">
    
    <p className="text-neutral-600 group-hover:text-white leading-relaxed mb-8 flex-grow font-medium transition-colors duration-500 delay-75">
      "{t.quote}"
    </p>
    
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100 group-hover:border-white/20 transition-colors duration-500">
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        {/* Fallback initials if image fails */}
        <div className="w-full h-full flex items-center justify-center text-sm font-bold text-neutral-500 bg-neutral-100 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
          {t.name.charAt(0)}
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-sm text-neutral-900 group-hover:text-white transition-colors duration-500 delay-100">
          {t.name}
        </h4>
        <p className="text-xs text-neutral-500 group-hover:text-white/80 transition-colors duration-500 delay-100">
          {t.role}
        </p>
      </div>
    </div>
    
  </div>
</div>
          ))}
        </div>
      </section>

      {/* 3. BIG PULL QUOTE SECTION */}
      <section className="py-24 px-4 border-y border-neutral-200/60 bg-white relative overflow-hidden text-center">
         {/* Subtle background diagonal lines mimicking the design */}
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ff6a3d 25%, transparent 25%, transparent 75%, #ff6a3d 75%, #ff6a3d), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-left sm:text-center leading-tight text-[#ff6a3d] mb-8">
             "I've struggled with time-for-money coaching for years, <span className="text-neutral-900 font-bold">and Ajay's business framework is hands down the best investment I made."</span>
          </h2>
          <div className="flex flex-col items-start sm:items-center">
            <div className="w-12 h-12 bg-neutral-200 rounded-full mb-3 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580929211634-0e8f1adae279" alt="Featured Coach" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-neutral-900">Aditya N.</h4>
            <p className="text-sm text-neutral-500">Founder, Apex Fitness Studio</p>
          </div>
        </div>
      </section>

      {/* 4. IMAGE GALLERY / SOCIAL PROOF (New Section) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
         <div className="flex items-center gap-2 mb-4 sm:mb-10 text-left sm:text-center justify-start sm:justify-center">
          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Live Impact</span>
        </div>
        <h2 className="text-3xl font-bold mb-12 text-left sm:text-center">Moments of Transformation</h2>
        
        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
  
  <div className="md:col-span-2 md:row-span-2 relative bg-neutral-200 rounded-xl overflow-hidden group">
    <Image
      src="/engage.webp"
      alt="Ajay speaking on stage"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

  <div className="relative bg-neutral-200 rounded-xl overflow-hidden group">
    <Image
      src="/dswa.jpg"
      alt="Corporate workshop"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

  <div className="relative bg-neutral-200 rounded-xl overflow-hidden group">
    <Image
      src="/habibi.jpg"
      alt="1 on 1 coaching"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

  <div className="md:col-span-2 relative bg-neutral-200 rounded-xl overflow-hidden group">
    <Image
      src="/feminist.jpg"
      alt="Large community fitness event"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

</div>
      </section>


    

    </div>
  );
}