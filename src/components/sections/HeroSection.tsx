"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Download, Shield } from "lucide-react";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".hero-guarantee", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex items-center">
      {/* Video background */}
      <VideoBackground videos={heroVideos} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="hero-title mb-6">
            <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Производство и поставка
            </span>
            <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#E63B2E] mt-1">
              трансформаторов и подстанций
            </span>
            <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-1 text-white">
              любого типа
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-white/80 mb-8">
            Надежное оборудование для Ваших энергосистем
          </p>

          {/* Guarantee */}
          <div className="hero-guarantee flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FFD100] flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[#111111]" />
            </div>
            <div>
              <div className="font-mono text-xs text-white/60 uppercase tracking-wider">
                Гарантия
              </div>
              <div className="font-heading font-semibold text-lg text-white">
                до 5 лет
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hero-cta flex flex-wrap gap-4">
            <a 
              href="/oprosnyj_list_uralenergo.xlsx" 
              download 
              className="btn-brutal btn-brutal-accent"
            >
              <Download className="w-4 h-4 mr-2 inline" />
              Скачать опросный лист
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
