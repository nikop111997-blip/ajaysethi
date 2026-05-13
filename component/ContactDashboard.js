import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ContactDashboard() {
  // Data for the top info cards
  const contactInfo = [
    { label: "Address", value: "Jaipur, Rajasthan, India", link: "#" },
    { label: "Email Us", value: "support@kayapalat.in", link: "mailto:support@kayapalat.in" },
    { label: "Call Us", value: "+91 98765 43210", link: "tel:+919876543210" },
    { label: "Working Hours", value: "Mon - Sat, 9:00am - 6:00pm", link: "#" },
  ];

  return (
    <section className="w-full py-20 md:py-36 px-4 md:px-8 lg:px-12 font-sans overflow-hidden dark:bg-white">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-contact {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* =========================================
            TOP ROW: Contact Info Cards
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-contact" style={{ animationDelay: "0.1s" }}>
          {contactInfo.map((info, index) => (
            <Link 
              href={info.link} 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:border-[#ff6a3d]/30 hover:shadow-md transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-gray-800 text-xs tracking-wide uppercase mb-1">
                  {info.label}
                </span>
                <span className="text-[#1a1a1a] font-bold text-sm md:text-base">
                  {info.value}
                </span>
              </div>
              <div className="bg-[#1d1d1d] group-hover:bg-[#ff6a3d] rounded-full relative overflow-hidden flex items-center justify-center w-8 h-8">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
    
            </Link>
          ))}
        </div>

        {/* =========================================
            BOTTOM SECTION: Image & Form Container
            ========================================= */}
        <div 
          className="bg-white border border-gray-100 rounded-[1rem] p-4 md:p-6 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-6 animate-contact"
          style={{ animationDelay: "0.3s" }}
        >
          
          {/* LEFT SIDE: Image & Collab Card */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            
            {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-[0.6rem] overflow-hidden bg-gray-100 group">
              {/* Replace with an image of Ajay coaching or a community wellness shot */}
              <Image
                src="/cotnact.jpg" 
                alt="Partner with Ajay Sethi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional brand color overlay to match your reference's green vibe, but using Ajay's orange */}
              <div className="absolute inset-0 bg-[#ff6a3d]/10 mix-blend-multiply"></div>
            </div>

            {/* Partnership Card */}
            <Link 
              href="mailto:collabs@kayapalat.in"
              className="bg-[#fdfbf9] border border-gray-100 rounded-lg p-6 flex items-center justify-between hover:border-[#ff6a3d]/30 hover:shadow-sm transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs font-semibold mb-1">
                  Partnerships & Collaborations
                </span>
                <span className="text-[#1a1a1a] font-bold">
                  collabs@kayapalat.in
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6a3d] transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="w-full lg:w-7/12 p-4 md:p-8 flex flex-col justify-center">
            
            <div className="mb-8 hidden lg:block">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-2">Ready to transform?</h3>
              <p className="text-gray-800 text-sm">Send us a message and our team will get back to you shortly.</p>
            </div>

            <form className="flex flex-col gap-6 w-full">
              
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-bold text-[#1a1a1a] mb-2 ml-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Enter First Name" 
                    className="w-full bg-[#fdfbf9] border border-gray-200 text-[#1a1a1a] text-sm rounded-lg px-5 py-4 focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-bold text-[#1a1a1a] mb-2 ml-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter Last Name" 
                    className="w-full bg-[#fdfbf9] border border-gray-200 text-[#1a1a1a] text-sm rounded-lg px-5 py-4 focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-bold text-[#1a1a1a] mb-2 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your Email" 
                    className="w-full bg-[#fdfbf9] border border-gray-200 text-[#1a1a1a] text-sm rounded-lg px-5 py-4 focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-bold text-[#1a1a1a] mb-2 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Enter Phone Number" 
                    className="w-full bg-[#fdfbf9] border border-gray-200 text-[#1a1a1a] text-sm rounded-lg px-5 py-4 focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold text-[#1a1a1a] mb-2 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Enter your Message" 
                  className="w-full bg-[#fdfbf9] border border-gray-200 text-[#1a1a1a] text-sm rounded-lg px-5 py-4 focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-all resize-y min-h-[120px]"
                ></textarea>
              </div>

              {/* Row 4: Submit & Checkbox */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-2 border-t border-gray-100 pt-6">
                
                {/* Custom Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 rounded border border-gray-300 bg-[#fdfbf9] group-hover:border-[#ff6a3d] transition-colors">
                    <input type="checkbox" className="peer sr-only" />
                    {/* Custom Checkmark SVG shown on peer-checked */}
                    <svg className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {/* Background fill on peer-checked */}
                    <div className="absolute inset-0 rounded bg-[#ff6a3d] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium select-none">
                    I agree with Terms of Use and Privacy Policy
                  </span>
                </label>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-[#1a1a1a] text-white font-bold text-sm px-8 py-4 rounded-lg hover:bg-[#ff6a3d] transition-colors shadow-lg shadow-black/5"
                >
                  Send your Message
                </button>
              </div>

            </form>
          </div>
          
        </div>

      </div>
    </section>
  );
}