import React from 'react';

export default function TrustSection() {
  return (
    <section className=" px-4 pb-12 font-sans text-white w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Trustpilot Box & Copy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          {/* Left: Trustpilot Rating Box */}
          <div className="border border-gray-300 rounded-lg p-6 w-full md:w-auto flex flex-col justify-center">
            <p className="text-gray-800 text-sm mb-3 text-center md:text-left">
              We are rated 4.8 out of 5
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span className="text-2xl font-bold text-gray-900">Excellent</span>
              
              {/* Blue Star Rating Boxes */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div 
                    key={star} 
                    className="bg-[#ff5a2b] w-8 h-8 flex items-center justify-center rounded-sm"
                  >
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Trustpilot Logo */}
              <div className="flex items-center gap-1 ml-2">
                <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xl text-gray-900 font-semibold tracking-tight">Trustpilot</span>
              </div>
            </div>
          </div>

          {/* Right: Text and Avatars */}
          <div className="w-full md:w-[50%] flex flex-col gap-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Don't miss out on the opportunity to join 1000+ successful businesses. Contact Ajay Sethi today & start your journey to growth.
            </p>
            
            {/* Overlapping Avatars */}
            <div className="flex -space-x-3 mt-2">
              {[
                "https://i.pravatar.cc/150?u=1",
                "https://i.pravatar.cc/150?u=2",
                "https://i.pravatar.cc/150?u=3",
                "https://i.pravatar.cc/150?u=4",
                "https://i.pravatar.cc/150?u=5",
                "https://i.pravatar.cc/150?u=6"
              ].map((src, index) => (
                <img
                  key={index}
                  className="w-12 h-12 rounded-full border-0.5 border-black object-cover"
                  src={src}
                  alt={`User avatar ${index + 1}`}
                />
              ))}
              {/* +2K Badge */}
              <div className="w-12 h-12 rounded-full border-2 border-black bg-[#ff5a2b] flex items-center justify-center text-sm font-bold z-10 relative">
                +1K
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Button with horizontal line */}
        <div className="relative pt-4">
          {/* Subtle Divider Line */}
          <div className="absolute inset-0 flex items-center mt-3.5" aria-hidden="true">
            <div className="w-full border-t border-[#1a1a1a]/20"></div>
          </div>
          
          {/* Centered Button overlapping the line */}
          <div className="relative flex justify-center">
            <button className="bg-[#ff5a2b] hover:bg-[#e35129] text-white font-medium py-3 px-10 rounded-md text-lg transition-colors duration-200 shadow-lg">
              Watch Free Training
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}