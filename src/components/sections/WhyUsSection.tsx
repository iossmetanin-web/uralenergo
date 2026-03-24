"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyUs } from "@/lib/data/site-data";
import { Users, Shield, DollarSign, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = [Users, Shield, DollarSign, Headphones];

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-card", {
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
    <section id="why" ref={sectionRef} className="py-16 lg:py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 bg-[#FFD100] flex items-center justify-center">
            <span className="text-[#111111] font-mono text-xs font-bold">?</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#D6D3D1]">
            Преимущества
          </span>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
          Почему выбирают нас?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUs.map((item, index) => {
            const Icon = icons[index] || Users;
            return (
              <div key={item.number} className="why-card border border-[#D6D3D1]/30 p-6 flex gap-6 hover:border-[#FFD100] transition-colors">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#FFD100] flex items-center justify-center">
                    <span className="font-mono text-lg font-bold text-[#111111]">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#E63B2E]" />
                    <h3 className="font-heading font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#D6D3D1] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
