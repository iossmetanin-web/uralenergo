"use client";

import { useEffect, useRef, useState } from "react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

interface VideoBackgroundProps {
  className?: string;
  overlayOpacity?: number;
}

export function VideoBackground({ className = "", overlayOpacity = 0.6 }: VideoBackgroundProps) {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const currentVideo = showFirst ? videoRef1.current : videoRef2.current;
    const nextVideo = showFirst ? videoRef2.current : videoRef1.current;

    if (!currentVideo || !nextVideo) return;

    // Preload next video
    nextVideo.src = heroVideos[(currentVideoIndex + 1) % heroVideos.length];
    nextVideo.load();

    const handleEnded = () => {
      const nextIndex = (currentVideoIndex + 1) % heroVideos.length;

      // Prepare next video
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});

      // Smooth crossfade transition
      setShowFirst(!showFirst);
      setCurrentVideoIndex(nextIndex);

      // Preload the video after next
      const afterNextIndex = (nextIndex + 1) % heroVideos.length;
      const preloadTarget = showFirst ? videoRef1.current : videoRef2.current;
      if (preloadTarget) {
        setTimeout(() => {
          preloadTarget.src = heroVideos[afterNextIndex];
          preloadTarget.load();
        }, 1000);
      }
    };

    currentVideo.addEventListener("ended", handleEnded);

    // Start first video
    currentVideo.play().catch(() => {});

    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [currentVideoIndex, showFirst]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video 1 */}
      <video
        ref={videoRef1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          showFirst ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        autoPlay
        src={heroVideos[0]}
      />
      {/* Video 2 */}
      <video
        ref={videoRef2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          showFirst ? "opacity-0" : "opacity-100"
        }`}
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
