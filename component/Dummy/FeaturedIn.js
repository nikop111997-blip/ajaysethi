import React from 'react';
import Image from 'next/image';

export default function FeaturedIn() {
  // Array of logos to map through. 
  // Replace the 'src' with your actual image paths in the public directory.
  const logos = [
    { name: 'NDTV', src: '/logos/ndtv.png' },
    { name: 'The Economic Times', src: '/logos/economic-times.png' },
    { name: 'Hindustan Times', src: '/logos/ht.png' },
    { name: 'Financial Express', src: '/logos/financial-express.png' },
    { name: 'News 18', src: '/logos/news18.png' },
    { name: 'ANI', src: '/logos/ani.png' },
    { name: 'Moneycontrol', src: '/logos/moneycontrol.png' },
  ];

  return (
    <section className="w-full  pt-12 pb-24 ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h3 className="text-center text-gray-800 text-xs sm:text-xl font-extrabold tracking-[0.2em] uppercase mb-4">
          As Featured In
        </h3>
        <hr className='max-w-[80px] border-0.5 border-gray-300 mx-auto mb-12' />

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-4 md:gap-x-0 md:justify-between opacity-90">
          
          {logos.map((logo, index) => (
            <React.Fragment key={logo.name}>
              {/* 
                LOGO WRAPPER
                Once you have the real images, replace the inner content of this div 
                with the Next.js <Image /> component below:
                
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  width={140} 
                  height={40} 
                  className="object-contain"
                />
              */}
              <div className="flex items-center justify-center w-[120px] lg:w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                {/* --- VISUAL PLACEHOLDERS (To mimic image_b7a8bf.png) --- */}
                {logo.name === 'NDTV' && (
                  <div className="text-gray-800 font-black text-2xl tracking-tighter flex items-center">
                    NDTV
                  </div>
                )}
                {logo.name === 'The Economic Times' && (
                  <div className="text-gray-800 font-serif text-sm lg:text-base leading-tight text-center">
                    THE ECONOMIC TIMES
                  </div>
                )}
                {logo.name === 'Hindustan Times' && (
                  <div className="bg-[#00a8ff] rounded-full w-10 h-10 flex items-center justify-center text-gray-800 font-serif font-bold text-xl">
                    HT
                  </div>
                )}
                {logo.name === 'Financial Express' && (
                  <div className="text-[#00a8ff] font-bold text-xs lg:text-sm flex items-center">
                    <span className="text-red-500 mr-1">❖</span> FINANCIAL EXPRESS
                  </div>
                )}
                {logo.name === 'News 18' && (
                  <div className="flex font-black text-lg">
                    <span className="bg-[#0b2447] text-gray-50 px-1">NEWS</span>
                    <span className="bg-red-600 text-gray-300 px-1">18</span>
                  </div>
                )}
                {logo.name === 'ANI' && (
                  <div className="text-gray-800 text-center">
                    <div className="font-black text-2xl leading-none">ANI</div>
                    <div className="text-[6px] tracking-wider text-gray-400 mt-1 uppercase">Multimedia News Agency</div>
                  </div>
                )}
                {logo.name === 'Moneycontrol' && (
                  <div className="flex font-bold text-base bg-white px-1 rounded-sm">
                    <span className="text-[#8CC63F]">money</span>
                    <span className="text-[#0055A5]">control</span>
                  </div>
                )}
                {/* --- END VISUAL PLACEHOLDERS --- */}
              </div>

              {/* Vertical Divider (Hidden on mobile, visible on medium+ screens) */}
              {index < logos.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-gray-800" />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}