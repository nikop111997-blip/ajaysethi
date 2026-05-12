"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// 1. Define your navigation links to keep the JSX clean
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Ajay", href: "/about" },
  { name: "Personal", href: "/personal-wellness" },
  { name: "Corporate", href: "/corporate-wellness" },
  { name: "Coaching", href: "/business-coaching" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Resources", href: "/resources" },
];

// 2. Define the routes that have a dark hero section where text should be white initially
const darkRoutes = ["/", "/about"]; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we are on a dark route
  const isDarkRoute = darkRoutes.includes(pathname);

  // Text should be dark (black) IF: we are scrolled down, OR the mobile menu is open (since it has a white bg), OR we are NOT on a dark route.
  const isDarkText = isScrolled || isMobileMenuOpen || !isDarkRoute;
  const textColorClass = isDarkText ? "text-black" : "text-white";

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Framer Motion Variants for the Mobile Menu Background
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      y: "0%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Framer Motion Variants for staggering the mobile links
  const linkContainerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
  };

  const linkItemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 font-sans transition-colors duration-300 ease-in-out ${
          isScrolled && !isMobileMenuOpen
            ? "bg-white shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Brand / Logo Area */}
          <Link href="/" className={`flex items-center gap-2 relative z-50 transition-colors duration-300 ${textColorClass}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="current-color"
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
            <span className="text-xl font-bold tracking-tight">Ajay Sethi</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative group py-1 transition-colors duration-300 ${textColorClass} hover:text-[#f9997b] `}
              >
                <span>{link.name}</span>
                {/* Amazing Hover Effect: Expanding Underline */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
         <div className="hidden lg:block relative z-50">
  <Link
    href="/work-with-ajay"
    // Added 'group', 'relative', and 'overflow-hidden' for the fill effect
    className={`relative group overflow-hidden px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 inline-block ${
      isDarkText 
        ? "bg-[#1a1a1a] text-white" 
        : "bg-white text-black"
    }`}
  >
    {/* The animated orange background fill */}
    <span className="absolute inset-0 w-full h-full bg-[#ff6a3d] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
    
    {/* The text, positioned above the fill with z-10 */}
    <div className="flex gap-4 items-center">
    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
      Start With Clarity
    </span>
    <div className="bg-[#ff6a3d] group-hover:bg-[#1d1d1d] rounded-full relative overflow-hidden flex items-center justify-center w-8 h-8">
  <ArrowRight className="w-5 h-5 text-white absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]" />
  
  
  <ArrowRight className="w-5 h-5 text-white absolute -translate-x-[150%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
</div>
    </div>
  </Link>
</div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 relative z-50 transition-colors duration-300 ${textColorClass}`}
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                // Close Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Menu Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8"
          >
            <motion.div 
              variants={linkContainerVariants}
              className="flex flex-col gap-3 text-xl tracking-tight text-black"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkItemVariants}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative group inline-block py-1 border-b-2 border-dashed border-[#cac8c8]/50 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={linkItemVariants} className="mt-8">
                <Link
                  href="/work-with-ajay"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block bg-[#ff6a3d] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#ff5a2b] transition-colors"
                >
                  Start With Clarity
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}