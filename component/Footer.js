import Link from "next/link";
import { Globe, Mail } from "lucide-react"; // Only keeping standard icons from lucide

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 md:px-8 pb-4 md:pb-8">
      
      {/* The main dark container with rounded corners to match the reference */}
      <div className="max-w-7xl mx-auto bg-[#101010] rounded-[1rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
        
        {/* =========================================
            TOP SECTION: Logo, Links & Socials
            ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Abstract Icon matching the primary navbar design */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white transition-transform group-hover:scale-105"
            >
              <path
                d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 8C8.68629 8 6 10.6863 6 14V22H10V16H14V22H18V14C18 10.6863 15.3137 8 12 8Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-white">Ajay Sethi</span>
          </Link>

          {/* Right Side: Navigation & Social Icons Container */}
          <div className="flex flex-col items-start md:items-end gap-6">
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Home</Link>
              <Link href="/about" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">About</Link>
              <Link href="/personal-wellness" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Personal</Link>
              <Link href="/corporate-wellness" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Corporate</Link>
              <Link href="/business-coaching" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Coaching</Link>
              <Link href="/success-stories" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Results</Link>
              <Link href="/gallery" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Gallery</Link>
              <Link href="/contact-us" className="text-white/80 hover:text-[#ff6a3d] font-medium text-sm transition-colors">Contact</Link>
            </nav>

            {/* Social Icons - Circular dark buttons matching reference */}
            <div className="flex items-center gap-3">
              
              {/* Instagram SVG */}
              <Link href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff6a3d] transition-all border border-white/5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              
              {/* LinkedIn SVG */}
              <Link href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff6a3d] transition-all border border-white/5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>

              {/* YouTube SVG */}
              <Link href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff6a3d] transition-all border border-white/5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>

              {/* Website / Globe (Still in Lucide) */}
              <Link href="https://kayapalat.in" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff6a3d] transition-all border border-white/5">
                <Globe className="w-4 h-4" />
              </Link>

              {/* Email / Mail (Still in Lucide) */}
              <Link href="mailto:support@kayapalat.in" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff6a3d] transition-all border border-white/5">
                <Mail className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM SECTION: Copyright & Credits
            ========================================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-16 pt-8 border-t border-white/10 gap-4">
          <p className="text-white/60 text-sm font-medium">
            Copyright © {new Date().getFullYear()} — All Right Reserved
          </p>
          
          <div className="flex items-center gap-4 text-white/60 text-sm font-medium">
            <Link href="/privacy-policy" className="hover:text-[#ff6a3d] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#ff6a3d] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}