"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-data";
import { ArrowRight, Shield } from "lucide-react";

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

      gsap.from(".hero-panel", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="hero-title mb-6">
              <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Производство и поставка
              </span>
              <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#E63B2E] mt-1">
                трансформаторов и подстанций
              </span>
              <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-1">
                любого типа
              </span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-[#666666] mb-8">
              Надежное оборудование для Ваших энергосистем
            </p>

            {/* Guarantee */}
            <div className="hero-guarantee flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#FFD100] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#666666] uppercase tracking-wider">
                  Гарантия
                </div>
                <div className="font-heading font-semibold text-lg">
                  до 5 лет
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="hero-cta flex flex-wrap gap-4">
              <a href="#contacts" className="btn-brutal btn-brutal-accent">
                Отправить запрос
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </a>
              <a href="#catalog" className="btn-brutal btn-brutal-outline">
                В каталог
              </a>
            </div>
          </div>

          {/* Right - Panel */}
          <div className="hero-panel">
            <div className="panel overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/ktp.jpg"
                  alt="Комплектная трансформаторная подстанция КТП"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

                {/* Product info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="font-mono text-xs text-white/60 mb-1">
                    ПОДСТАНЦИЯ КОМПЛЕКТНАЯ
                  </div>
                  <div className="font-heading text-2xl font-semibold">КТП-630/10/0,4</div>
                  <div className="flex gap-6 mt-3">
                    <div>
                      <div className="font-mono text-2xl font-bold text-[#FFD100]">630</div>
                      <div className="font-mono text-xs text-white/60">кВА</div>
                    </div>
                    <div>
                      <div className="font-mono text-2xl font-bold text-[#FFD100]">10/0,4</div>
                      <div className="font-mono text-xs text-white/60">кВ</div>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute top-4 left-4 coord-label bg-white/90 px-2 py-1">
                  CAT.KTP
                </div>
              </div>

              {/* Status bar */}
              <div className="border-t border-[#D6D3D1] p-4 bg-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="status-dot active" />
                  <span className="text-sm">В наличии на складе</span>
                </div>
                <span className="coord-label">АРТ: KTP-630</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
