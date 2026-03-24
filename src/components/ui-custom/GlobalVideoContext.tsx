"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

interface GlobalVideoContextType {
  currentVideoIndex: number;
  isPlaying: boolean;
}

const GlobalVideoContext = createContext<GlobalVideoContextType>({
  currentVideoIndex: 0,
  isPlaying: false,
});

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

export function GlobalVideoProvider({ children }: { children: ReactNode }) {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showFirst, setShowFirst] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const currentVideo = showFirst ? videoRef1.current : videoRef2.current;
    const nextVideo = showFirst ? videoRef2.current : videoRef1.current;

    if (!currentVideo || !nextVideo) return;

    // Preload next video
    nextVideo.src = heroVideos[(currentVideoIndex + 1) % heroVideos.length];
    nextVideo.load();

    const handleEnded = () => {
      const nextIndex = (currentVideoIndex + 1) % heroVideos.length;

      // Start next video
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});

      // Fade transition
      setShowFirst(!showFirst);
      setCurrentVideoIndex(nextIndex);

      // Preload the video after next
      const afterNextIndex = (nextIndex + 1) % heroVideos.length;
      const afterNextVideo = !showFirst ? videoRef2.current : videoRef1.current;
      if (afterNextVideo) {
        setTimeout(() => {
          afterNextVideo.src = heroVideos[afterNextIndex];
          afterNextVideo.load();
        }, 500);
      }
    };

    currentVideo.addEventListener("ended", handleEnded);

    // Start first video
    currentVideo.play().then(() => setIsPlaying(true)).catch(() => {});

    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [currentVideoIndex, showFirst]);

  return (
    <GlobalVideoContext.Provider value={{ currentVideoIndex, isPlaying }}>
      {/* Hidden global video players */}
      <div className="fixed inset-0 pointer-events-none opacity-0">
        <video
          ref={videoRef1}
          muted
          playsInline
          src={heroVideos[0]}
        />
        <video
          ref={videoRef2}
          muted
          playsInline
        />
      </div>
      {children}
    </GlobalVideoContext.Provider>
  );
}

export function useGlobalVideo() {
  return useContext(GlobalVideoContext);
}

export { heroVideos };
