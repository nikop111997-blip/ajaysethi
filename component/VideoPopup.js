"use client";

import { useState } from "react";

export default function VideoPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Video Thumbnail */}
      <div
        onClick={() => setOpen(true)}
        className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl group border border-neutral-700 cursor-pointer"
      >
        <div
          className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500 bg-cover bg-center"
          style={{ backgroundImage: "url('/ajay_sir_speaking.webp')" }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-20 h-20 bg-[#ff6a3d] text-white rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(255,106,61,0.5)] group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md">
            Watch Ajay in Action
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            {/* Video */}
            <iframe
  className="w-full aspect-video"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
          </div>
        </div>
      )}
    </>
  );
}