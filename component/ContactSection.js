import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-6 md:px-12 font-sans overflow-hidden">
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-contact {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
        
        /* Custom styles to remove default input backgrounds and keep just the bottom border */
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e5e7eb; /* tailwind gray-200 */
          padding: 0.75rem 0;
          font-size: 1rem;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .form-input:focus {
          border-bottom-color: #ff6a3d;
        }
        .form-input::placeholder {
          color: #9ca3af; /* tailwind gray-400 */
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* =========================================
            LEFT COLUMN: Copy & Contact Cards
            ========================================= */}
        <div className="flex flex-col">
          <div className="animate-contact" style={{ animationDelay: "0.1s" }}>
            <span className="text-gray-500 text-sm font-medium tracking-wide mb-4 block">
              Contact
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
              Let's build your <br />
              plan together!
            </h2>

            <p className="text-gray-800 text-base leading-relaxed mb-12 max-w-md">
              Have a question about personal coaching, corporate wellness, or speaking engagements? Reach out—we’ll help you find your next step forward.
            </p>
          </div>

          {/* Contact Cards Stack */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: WhatsApp / Chat */}
            <Link 
              href="https://wa.me/91XXXXXXXXXX" // Replace with actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-[1rem] p-6 md:p-8 flex items-center justify-between group animate-contact"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col">
                <MessageCircle className="w-6 h-6 text-[#1a1a1a] mb-8" />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">WhatsApp Chat</h3>
                <p className="text-gray-500 text-sm">Chat directly with our team</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>

            {/* Card 2: Email */}
            <Link 
              href="mailto:support@kayapalat.in"
              className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-[1rem] p-6 md:p-8 flex items-center justify-between group animate-contact"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex flex-col">
                <Mail className="w-6 h-6 text-[#1a1a1a] mb-8" />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm">support@kayapalat.in</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </Link>

          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: The Form
            ========================================= */}
        <div className="flex flex-col lg:pt-8 animate-contact" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-8 tracking-tight">
            Send a Message
          </h3>

          <form className="flex flex-col gap-8">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-[#1a1a1a] mb-2">
                Full name
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your full name" 
                className="form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-[#1a1a1a] mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="hello@example.com" 
                className="form-input"
                required
              />
            </div>

            {/* Enquiry Type Dropdown (Sourced from Brief) */}
            <div className="flex flex-col">
              <label htmlFor="enquiry" className="text-sm font-semibold text-[#1a1a1a] mb-2">
                What are you inquiring about?
              </label>
              <select id="enquiry" className="form-input text-gray-500 bg-white" required>
                <option value="" disabled selected>Select an option...</option>
                <option value="coach-training">Coach Training Program</option>
                <option value="mentorship">1:1 Mentorship</option>
                <option value="corporate">Corporate Wellness</option>
                <option value="speaking">Speaking / Event Booking</option>
                <option value="workshop">Workshop Registration</option>
                <option value="general">General / Other</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-[#1a1a1a] mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Tell me about your goals or what you'd like help with..." 
                className="form-input resize-y min-h-[100px]"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="mt-4 flex items-center justify-between bg-[#ff6a3d] hover:bg-[#ff5a2b] transition-colors text-[#ededed] font-semibold py-3 pl-8 pr-4 rounded-2xl w-full group"
            >
              <span>Send Message</span>
              <div className="bg-[#1a1a1a] rounded-xl relative overflow-hidden flex items-center justify-center w-10 h-10">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}