'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    text: "How do you typically feel when you wake up?",
    options: [
      { label: "Ready to go and energized", points: 3 },
      { label: "Need coffee to function", points: 2 },
      { label: "Exhausted, heavy, and dreading the day", points: 1 }
    ]
  },
  {
    id: 2,
    text: "What happens when you try a new fitness or diet routine?",
    options: [
      { label: "It seamlessly becomes a lifestyle", points: 3 },
      { label: "I start strong but stop after a few weeks", points: 2 },
      { label: "I struggle to even start or find the time", points: 1 }
    ]
  },
  {
    id: 3,
    text: "How does stress affect your daily energy?",
    options: [
      { label: "I manage it well and recover fast", points: 3 },
      { label: "I push through but feel constantly tense", points: 2 },
      { label: "It drains me completely by the afternoon", points: 1 }
    ]
  },
  {
    id: 4,
    text: "How often do you rely on extreme diets or intense motivation bursts?",
    options: [
      { label: "Rarely, my habits keep me stable", points: 3 },
      { label: "Sometimes, usually before an event or holiday", points: 2 },
      { label: "Constantly, it's a cycle of all-or-nothing", points: 1 }
    ]
  },
  {
    id: 5,
    text: "How would you describe your current wellness support system?",
    options: [
      { label: "Strong, I have a community/coach keeping me accountable", points: 3 },
      { label: "Occasional support from friends or family", points: 2 },
      { label: "I am doing it entirely alone", points: 1 }
    ]
  },
  {
    id: 6,
    text: "Do you feel your health is currently a vehicle for your success, or an obstacle?",
    options: [
      { label: "A vehicle that drives my performance", points: 3 },
      { label: "It fluctuates depending on my workload", points: 2 },
      { label: "An obstacle that is holding me back", points: 1 }
    ]
  },
  {
    id: 7,
    text: "What is your primary wellness goal right now?",
    options: [
      { label: "Scaling my energy for peak performance", points: 3 },
      { label: "Getting my personal health back on a structured track", points: 2 },
      { label: "I just want to stop feeling tired and overwhelmed", points: 1 }
    ]
  }
];

export default function HealthAssessment() {
  const [stage, setStage] = useState('lead-capture'); // 'lead-capture', 'assessment', 'result'
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as they type
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email.";
    if (!/^\+?[\d\s-]{10,}$/.test(formData.whatsapp)) newErrors.whatsapp = "Please enter a valid WhatsApp number.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const startAssessment = () => {
    if (validateForm()) {
      setStage('assessment');
    }
  };

  const handleOptionClick = (points) => {
    const newScore = score + points;
    
    if (currentStep < questions.length - 1) {
      setScore(newScore);
      setCurrentStep(currentStep + 1);
    } else {
      setScore(newScore);
      setStage('result');
    }
  };

  const getResultDetails = () => {
    if (score >= 17) return {
      title: "Strong Foundation",
      desc: "You have a solid baseline. Ajay can help you optimize and scale this energy further."
    };
    if (score >= 10) return {
      title: "The Inconsistency Trap",
      desc: "You know what to do, but systems and structure are missing. Let's fix that."
    };
    return {
      title: "System Reset Needed",
      desc: "You are running on empty. It's time to build a sustainable system from the ground up."
    };
  };

  const generateWhatsAppLink = () => {
    const phone = "91XXXXXXXXXX"; // Replace with actual number
    const result = getResultDetails();
    const text = encodeURIComponent(`Hi Ajay, I'm ${formData.name}. I just completed the Health Clarity Assessment and scored ${score}/21 (${result.title}). My email is ${formData.email}. I'd like to book my free consultation.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  // Cinematic variant for page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3 } }
  };

  return (
    <section className=" dark:bg-white flex flex-col items-center justify-center p-4 md:p-8 md:py-12 relative overflow-hidden">
      

      {/* Main Glass Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 bg-white/60 backdrop-blur-2xl rounded-[1rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden relative z-10"
      >
        
        {/* Left Side: Visuals & Context */}
        <div className='hidden sm:block min-h-[500px]'>
        <div className="relative p-12 flex flex-col justify-center rounded-br-2xl bg-black overflow-hidden min-h-[500px]">
          <div className="absolute inset-0 z-0">
            {/* Using a placeholder gradient, but you should place your 3D phone asset here */}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <h2 className="text-4xl mb-4 text-[#ff6a3d] tracking-tight font-semibold">Ready to transform?</h2>
            <p className="text-orange-50 text-md mb-6 leading-relaxed">
              Find out exactly what's holding you back from sustainable health. Take the assessment to get clarity.
            </p>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">1</div>
                Provide your details
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">2</div>
                Answer 7 simple questions
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">3</div>
                Get your personalized action plan
              </li>
            </ul>
          </motion.div>
        </div>
        </div>

        {/* Right Side: Interactive Flow */}
        <div className="p-8 md:p-14 flex flex-col justify-center bg-white/40">
          <AnimatePresence mode="wait">
            
            {/* STAGE 1: LEAD CAPTURE */}
            {stage === 'lead-capture' && (
              <motion.div key="lead" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md mx-auto">
                <h3 className="text-3xl font-bold text-neutral-900 mb-2">Let's get started.</h3>
                <p className="text-neutral-800 mb-8">Enter your details to begin the assessment.</p>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">First & Last Name</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Email Address</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">WhatsApp Number</label>
                    <input 
                      type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                  </div>

                  <button 
                    onClick={startAssessment}
                    className="w-full py-4 mt-4 bg-[#ff6a3d] cursor-pointer text-white rounded-xl font-semibold text-lg hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                  >
                    Start Assessment
                  </button>
                </div>
              </motion.div>
            )}

            {/* STAGE 2: ASSESSMENT QUESTIONS */}
            {stage === 'assessment' && (
              <motion.div key={`question-${currentStep}`} variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md mx-auto">
                <div className="mb-8">
                  <p className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3">
                    Question {currentStep + 1} of {questions.length}
                  </p>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                      initial={{ width: `${(currentStep / questions.length) * 100}%` }}
                      animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-8 leading-snug">
                  {questions[currentStep].text}
                </h3>
                
                <div className="space-y-4">
                  {questions[currentStep].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionClick(option.points)}
                      className="w-full text-left p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-500 hover:bg-orange-50/50 transition-all duration-200 font-medium text-neutral-700 hover:text-orange-800 shadow-[0_2px_10px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_0_rgba(249,115,22,0.1)]"
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STAGE 3: RESULTS */}
            {stage === 'result' && (
              <motion.div key="result" variants={pageVariants} initial="initial" animate="animate" className="w-full max-w-md mx-auto text-center">
                <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-orange-100 to-orange-50 border border-orange-200 text-orange-600 rounded-full flex flex-col items-center justify-center mb-8 shadow-xl shadow-orange-500/10 relative">
                  <span className="text-4xl font-bold block leading-none">{score}</span>
                  <span className="text-sm font-semibold opacity-60">/ 21</span>
                </div>
                
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  {getResultDetails().title}
                </h3>
                <p className="text-neutral-600 mb-10 text-lg px-4">
                  {getResultDetails().desc}
                </p>
                
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 px-8 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  Get Action Plan
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}