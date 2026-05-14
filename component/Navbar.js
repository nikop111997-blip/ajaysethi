"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Ajay", href: "/about" },
  { name: "Personal", href: "/personal-wellness" },
  { name: "Corporate", href: "/corporate-wellness" },
  { name: "Coaching", href: "/business-coaching" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Events", href: "/events" },
];

const darkRoutes = ["/", "/about", "/success-stories", "/events", "/corporate-wellness", "/business-coaching"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isDarkRoute = darkRoutes.includes(pathname);
  const isDarkText = isScrolled || isMobileMenuOpen || !isDarkRoute;
  const textColorClass = isDarkText ? "text-black" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const menuVariants = {
    closed: { clipPath: "circle(0% at 100% 0%)", transition: { type: "spring", stiffness: 400, damping: 40 } },
    open: { clipPath: "circle(150% at 100% 0%)", transition: { type: "spring", stiffness: 20, restDelta: 2 } }
  };

  const linkItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#ff6a3d] z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled && !isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-12 flex justify-between items-center">
          
          {/* Logo with slight hover lift */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
  href="/"
  className={`flex items-center gap-2 relative z-50 transition-colors duration-300 `}
>
  <Image
    key={isScrolled ? "logo-dark" : "logo-light"}
    src={isScrolled || !isDarkRoute || isMobileMenuOpen? "/logo.png" : "/2.png"}
    alt="logo ajay sethi"
    height={80}
    width={200}
    priority
  />
</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative group py-1 transition-colors duration-300 ${textColorClass} hover:text-[#ff6a3d] `}
              >
                <span>{link.name}</span>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#ff6a3d] origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="hidden lg:block relative z-50">
            <button
              className={`relative group open-booking-modal overflow-hidden px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 inline-block border ${
                isDarkText ? "bg-black text-white border-black" : "bg-white text-black border-white"
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-[#ff6a3d] origin-bottom scale-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] group-hover:scale-y-100 z-0"></span>
              <div className="flex gap-3 items-center relative z-10">
                <span className="group-hover:text-white transition-colors duration-300">Start With Clarity</span>
                <div className="relative overflow-hidden w-5 h-5">
                  <ArrowRight className="w-5 h-5 absolute transition-transform duration-500 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                  <ArrowRight className="w-5 h-5 absolute -translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 relative z-50 transition-colors duration-300 ${textColorClass}`}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Circular Reveal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-10"
          >
            <motion.div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name} 
                  variants={linkItemVariants}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold  hover:text-[#ff6a3d] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}