"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ktpAdvantages } from "@/lib/data/site-data";
import { Cpu, Paintbrush, Zap, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = [Cpu, Paintbrush, Zap];

export function KTPAdvantagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ktp-adv", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="production" ref={sectionRef} className="py-16 lg:py-24 bg-white border-t border-[#D6D3D1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#111111] flex items-center justify-center">
                <span className="text-[#FFD100] font-mono text-xs font-bold">⚙</span>
              </div>
              <span className="coord-label">Производство</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              Ключевые преимущества наших КТП
            </h2>
          </div>
          <Link
            href="#contacts"
            className="text-sm font-mono hover:text-[#E63B2E] transition-colors flex items-center gap-2"
          >
            Подробнее о производстве
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ktpAdvantages.map((adv, index) => {
            const Icon = icons[index] || Cpu;
            return (
              <div key={index} className="ktp-adv panel p-6 hover:border-[#111111] hover:shadow-[4px_4px_0_#111111] transition-all">
                <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-heading font-semibold text-lg mb-4">
                  {adv.title}
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed">
                  {adv.description}
                </p>

                <hr className="h-px bg-[#D6D3D1] border-0 my-6" />

                <Link
                  href="#contacts"
                  className="coord-label hover:text-[#E63B2E] transition-colors"
                >
                  Подробнее →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
