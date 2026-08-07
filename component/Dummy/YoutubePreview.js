"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function YoutubePreview() {
  const [play, setPlay] = useState(false);

  const videoId = "DGLR_1D0WgY"; // Your YouTube video ID

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!play ? (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          <Image
            // CHANGED: Using maxresdefault.jpg for maximum quality and opacity
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            fill
            className="object-cover"
            priority // Helps load the large thumbnail faster
          />

          {/* Dark Overlay - Added a slight tint so the Play button is highly visible */}
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-xl transition-transform group-hover:scale-110">
              <Play className="h-10 w-10 fill-white text-white ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}