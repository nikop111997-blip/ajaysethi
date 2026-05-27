import React, { useState, useEffect } from "react";

const KayapalatJournal = () => {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Form Data State
  const date = new Date();
  const [formData, setFormData] = useState({
    date: date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).toUpperCase(),
    time: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
    mainTask: "Finalize presentation and send proposal.",
    topTasks: ["Present proposal to new client.", "Write three blog posts.", "Evening run workout."],
    habits: ["Workout", "Meditate", "Hydrate", "Deep Work"],
    breakthroughs: ["Increase focus on priority #1.", "Maintain a constant positive state."],
    productiveScore: "8/10",
    mainWins: ["Proposal submitted.", "Ran 5km.", "Good morning focus."],
    stateReflection: "Managed state well, felt energetic and focused for deep work tasks.",
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  // STAGGERED OPEN TIMELINE
  const openJournal = () => {
    setShowModal(true);
    // 1. Smoothly fade in backdrop layer first
    setTimeout(() => setAnimateIn(true), 50);
    // 2. Unfold the book shortly after
    setTimeout(() => setIsOpen(true), 350);
  };

  // STAGGERED CLOSE TIMELINE
  const closeJournal = () => {
    // 1. Flip the book cover shut
    setIsOpen(false);
    // 2. Start fading out the backdrop halfway through the flip
    setTimeout(() => setAnimateIn(false), 400);
    // 3. Fully unmount once completely hidden
    setTimeout(() => setShowModal(false), 1100);
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleArrayChange = (e, field, index) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  const CoverDesign = ({ hintText }) => (
    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#141414] rounded-r-2xl rounded-l-md shadow-2xl shadow-black/60 border-l-[8px] md:border-l-[12px] border-[#0a0a0a] border-y border-r border-gray-800 p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
      <div className="absolute top-3 md:top-4 right-3 md:right-4 bottom-3 md:bottom-4 left-3 md:left-4 border border-[#d4af37]/30 rounded-lg pointer-events-none"></div>
      <div className="absolute top-5 md:top-6 right-5 md:right-6 w-2 md:w-3 h-2 md:h-3 bg-[#d4af37]/50 rounded-sm"></div>
      <div className="absolute top-5 md:top-6 left-5 md:left-6 w-2 md:w-3 h-2 md:h-3 bg-[#d4af37]/50 rounded-sm"></div>
      <div className="absolute bottom-5 md:bottom-6 right-5 md:right-6 w-2 md:w-3 h-2 md:h-3 bg-[#d4af37]/50 rounded-sm"></div>
      <div className="absolute bottom-5 md:bottom-6 left-5 md:left-6 w-2 md:w-3 h-2 md:h-3 bg-[#d4af37]/50 rounded-sm"></div>

      <div className="relative z-10 flex flex-col h-full justify-center items-center mt-[-20px] md:mt-[-40px]">
        <div className="flex items-center justify-center gap-2 mb-10 md:mb-16">
          <span className="text-[#ffffff] font-serif text-lg md:text-xl">*</span>
          <span className="text-[#ffff]/80 font-medium tracking-widest text-[10px] md:text-xs uppercase">Kayapalat</span>
        </div>
        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-none font-serif text-[#d4af37] text-center mb-4 md:mb-6 tracking-wide" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
          KP<br />JOURNAL
        </h2>
        <div className="w-12 md:w-16 h-[2px] bg-[#d4af37]/50 mx-auto"></div>
      </div>
      
      <div className="text-center space-y-2 md:space-y-3 relative z-10 pb-2 md:pb-4">
        <p className="text-[#d4af37]/80 text-xs md:text-sm tracking-wide">Your Daily Discipline System</p>
        <p className="text-[#d4af37]/50 text-[10px] md:text-xs italic font-serif">by - Ajay Sethi</p>
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center text-[#ffff] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">
        {hintText}
      </div>
    </div>
  );

  return (
    <>
      {/* =========================================
          1. THE TRIGGER (Main Page Component Container)
          ========================================= */}
      <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center [perspective:1500px] z-10">
       
        
        <div
          onClick={openJournal}
          className="relative w-[260px] h-[380px] md:w-[380px] md:h-[520px] cursor-pointer transition-transform duration-700 ease-out -rotate-y-[15deg] rotate-z-[2deg] hover:rotate-y-0 hover:rotate-z-0 hover:-translate-y-2 [transform-style:preserve-3d]"
        >
          <CoverDesign hintText="Click to Open Journal" />
        </div>
      </div>

      {/* =========================================
          2. THE MODAL OVERLAY (With Opacity Transition)
          ========================================= */}
      {showModal && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/55 backdrop-blur-sm md:p-4 overflow-hidden transition-opacity duration-500 cubic-bezier(0.25, 1, 0.5, 1) ${
            animateIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Backdrop layer intercepting close triggers safely */}
          <div className="absolute inset-0 cursor-default" onClick={closeJournal}></div>
          
          <button 
            onClick={closeJournal}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#ff6a3d] text-lg md:text-xl font-bold z-[110] transition-colors bg-black/50 md:bg-transparent px-3 py-1 rounded-full md:rounded-none"
          >
            ✕ Close
          </button>

          {/* =========================================
              MOBILE SCROLLABLE UI
              ========================================= */}
          <div className="flex md:hidden flex-col w-full h-full overflow-y-auto overflow-x-hidden bg-[#0a0a0a] pb-12 pt-16 px-4 custom-scrollbar">
            <div className="text-center mb-6">
               <h2 className="text-3xl font-serif text-[#d4af37] tracking-wide">KP JOURNAL</h2>
               <p className="text-[#d4af37]/60 text-xs tracking-widest uppercase mt-1">Daily Discipline</p>
            </div>

            <div className="bg-[#fcfcfc] rounded-t-xl rounded-b-md p-6 mb-4 shadow-lg w-full">
              <h3 className="text-gray-400 font-semibold tracking-widest text-xs mb-4 text-center border-b pb-2">DAILY PLAN</h3>
              <div className="flex justify-between items-center mb-6 text-gray-500 text-sm">
                <input type="text" value={formData.date} onChange={(e) => handleChange(e, 'date')} className="bg-transparent border-b border-gray-200 w-24 sm:w-28 outline-none focus:border-[#ff6a3d] text-base" />
                <input type="text" value={formData.time} onChange={(e) => handleChange(e, 'time')} className="bg-transparent border-b border-gray-200 w-24 text-right outline-none focus:border-[#ff6a3d] text-base" />
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-xs mb-1 text-gray-900">Main Task:</h4>
                <input type="text" value={formData.mainTask} onChange={(e) => handleChange(e, 'mainTask')} className="w-full bg-transparent border-b border-gray-300 italic font-serif outline-none focus:border-[#ff6a3d] py-1 text-base" />
              </div>
              <div className="mb-6 w-full">
                <h4 className="font-bold text-xs mb-3 text-gray-900">TOP 3 TASKS:</h4>
                <div className="space-y-4">
                  {formData.topTasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700 w-full">
                      <span className="w-4 text-sm flex-shrink-0">{index + 1}.</span>
                      <input type="text" value={task} onChange={(e) => handleArrayChange(e, 'topTasks', index)} className="bg-transparent border-b border-gray-200 w-full outline-none focus:border-[#ff6a3d] text-base" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <h4 className="font-bold text-xs mb-3 text-gray-900">BREAKTHROUGHS:</h4>
                <div className="space-y-4">
                  {formData.breakthroughs.map((breakthrough, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700 w-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a3d] flex-shrink-0"></span>
                      <input type="text" value={breakthrough} onChange={(e) => handleArrayChange(e, 'breakthroughs', index)} className="bg-transparent border-b border-gray-200 w-full outline-none focus:border-[#ff6a3d] text-base" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#fcfcfc] rounded-b-xl rounded-t-md p-6 shadow-lg relative w-full">
              <h3 className="text-gray-400 font-semibold tracking-widest text-xs mb-6 text-center border-b pb-2">DAILY REVIEW</h3>
              <div className="mb-6">
                <h4 className="font-bold text-xs mb-2 text-gray-900">Productivity Score:</h4>
                <input type="text" value={formData.productiveScore} onChange={(e) => handleChange(e, 'productiveScore')} className="bg-transparent border-b border-gray-300 italic font-serif outline-none focus:border-[#ff6a3d] w-full text-base py-1" />
              </div>
              <div className="mb-6 w-full">
                <h4 className="font-bold text-xs mb-3 text-gray-900">Main Wins:</h4>
                <div className="space-y-4">
                  {formData.mainWins.map((win, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700 w-full">
                      <span className="w-4 text-sm flex-shrink-0">{index + 1}.</span>
                      <input type="text" value={win} onChange={(e) => handleArrayChange(e, 'mainWins', index)} className="bg-transparent border-b border-gray-200 w-full outline-none focus:border-[#ff6a3d] text-base" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <h4 className="font-bold text-xs mb-2 text-gray-900">State Management:</h4>
                <textarea value={formData.stateReflection} onChange={(e) => handleChange(e, 'stateReflection')} className="w-full bg-transparent border border-gray-200 rounded p-3 text-base leading-relaxed outline-none focus:border-[#ff6a3d] resize-none h-32" />
              </div>
              <div className="text-center mt-8 text-gray-300 text-[10px] font-bold tracking-[0.2em]">KAYAPALAT</div>
            </div>
          </div>

          {/* =========================================
              DESKTOP UI (Smooth Kinetic 3D Unfolding)
              ========================================= */}
          <div className="hidden md:flex relative w-full h-[550px] items-center justify-center [perspective:1500px] pointer-events-none">
            <div 
              className={`relative w-[380px] h-[520px] transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] pointer-events-auto ${
                isOpen 
                  ? "translate-x-[130px] scale-100 rotate-0" 
                  : "-rotate-y-[45deg] rotate-z-[10deg] translate-x-0 scale-[0.7] opacity-0"
              }`}
            >
              {/* Desktop RIGHT PAGE */}
              <div className="absolute inset-0 bg-[#fcfcfc] rounded-r-2xl rounded-l-sm shadow-2xl border-y border-r border-gray-300 z-0 overflow-hidden flex flex-col shadow-[15px_0_30px_-10px_rgba(0,0,0,0.2)_inset]">
                <div className="p-8 flex flex-col h-full text-gray-800 space-y-4 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                  <h3 className="text-gray-400 font-semibold tracking-widest text-[13px] text-right mb-2">MY DAILY REVIEW</h3>
                  <div>
                    <h4 className="font-bold text-[13px] mb-1 text-gray-900">How productive did I feel today?</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm italic font-serif">Score:</span>
                      <input type="text" value={formData.productiveScore} onChange={(e) => handleChange(e, 'productiveScore')} className="bg-transparent border-b border-gray-300 text-sm italic font-serif outline-none focus:border-[#ff6a3d] w-16" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[13px] mb-2 text-gray-900">What were my main wins today?</h4>
                    <div className="space-y-3">
                      {formData.mainWins.map((win, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                          <span className="w-4">{index + 1}.</span>
                          <input type="text" value={win} onChange={(e) => handleArrayChange(e, 'mainWins', index)} className="bg-transparent border-b border-gray-200 w-full outline-none focus:border-[#ff6a3d]" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[13px] mb-2 text-gray-900">How well did I manage my state?</h4>
                    <textarea value={formData.stateReflection} onChange={(e) => handleChange(e, 'stateReflection')} className="w-full bg-transparent border border-gray-200 rounded p-2 text-sm leading-relaxed outline-none focus:border-[#ff6a3d] resize-none h-24" />
                  </div>
                  <div className="absolute bottom-6 right-8 text-gray-400/80 text-[11px] font-semibold tracking-[0.2em] pointer-events-none">KAYAPALAT</div>
                </div>
              </div>

              {/* Desktop FRONT COVER (Flipping Mechanism) */}
              <div className={`absolute inset-0 origin-left transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] z-10 ${isOpen ? "-rotate-y-180" : "rotate-y-0"}`}>
                <div onClick={() => setIsOpen(true)} className="absolute inset-0 [backface-visibility:hidden] cursor-pointer">
                  <CoverDesign hintText="Click to Flip Open" />
                </div>

                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#fcfcfc] rounded-l-2xl rounded-r-sm border-y border-l border-gray-300 overflow-hidden shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.15)_inset]">
                  <button onClick={closeJournal} className="absolute top-4 left-4 z-20 text-gray-400 hover:text-[#ff6a3d] text-[10px] font-bold tracking-widest px-2 py-1 border border-gray-200 rounded transition-colors">
                    ← CLOSE
                  </button>
                  <div className="p-8 flex flex-col h-full text-gray-800 relative z-10 space-y-4 pt-12 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                    <div className="text-center mb-2">
                      <h3 className="text-gray-400 font-semibold tracking-widest text-[13px] mb-2">KAYAPALAT DAILY PLAN</h3>
                      <div className="flex justify-center items-center gap-4 text-gray-500 text-xs">
                        <input type="text" value={formData.date} onChange={(e) => handleChange(e, 'date')} className="bg-transparent border-b border-gray-200 text-center w-24 outline-none focus:border-[#ff6a3d]" />
                        <input type="text" value={formData.time} onChange={(e) => handleChange(e, 'time')} className="bg-transparent border-b border-gray-200 text-center w-20 outline-none focus:border-[#ff6a3d]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[13px] mb-1 text-gray-900">Main Task for the day:</h4>
                      <input type="text" value={formData.mainTask} onChange={(e) => handleChange(e, 'mainTask')} className="w-full bg-transparent border-b border-gray-300 text-sm italic font-serif outline-none focus:border-[#ff6a3d] py-1" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[13px] mb-2 text-gray-900">TOP 3 TASKS & PROJECTS:</h4>
                      <div className="space-y-3">
                        {formData.topTasks.map((task, index) => (
                          <div key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                            <span className="w-4">{index + 1}.</span>
                            <input type="text" value={task} onChange={(e) => handleArrayChange(e, 'topTasks', index)} className="bg-transparent border-b border-gray-200 w-full outline-none focus:border-[#ff6a3d]" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[13px] mb-2 text-gray-900">BREAKTHROUGHS TO ACHIEVE:</h4>
                      <div className="space-y-3">
                        {formData.breakthroughs.map((breakthrough, index) => (
                          <div key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a3d] flex-shrink-0"></span>
                            <input type="text" value={breakthrough} onChange={(e) => handleArrayChange(e, 'breakthroughs', index)} className="bg-transparent border-b border-gray-200 w-full outline-none focus:border-[#ff6a3d]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KayapalatJournal;