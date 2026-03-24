"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Factory, Truck, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trust-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-24 border-t border-[#D6D3D1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="trust-animate">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#111111] flex items-center justify-center">
                <span className="text-[#FFD100] font-mono text-xs font-bold">≡</span>
              </div>
              <span className="coord-label">О компании</span>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
              Ваш Партнёр в Электротехнических Решениях
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-[#666666] leading-relaxed">
                Мы понимаем, что надёжность электроэнергетических систем — это основа для успешного функционирования бизнеса.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Сотрудничество с командой &quot;Урал Энерго&quot; — гарантия высокого качества работ, надёжность и долговечность оборудования для энергосистем Вашей компании.
              </p>
              <p className="text-[#666666] leading-relaxed">
                ООО «УралЭнерго» предлагает широкий ассортимент трансформаторов и подстанций, которые отвечают самым высоким стандартам качества и безопасности.
              </p>
            </div>

            <p className="font-heading font-semibold text-lg text-[#E63B2E]">
              Выбирайте стабильность и качество уже сегодня!
            </p>
          </div>

          {/* Right - Stats panel */}
          <div className="trust-animate">
            <div className="panel p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D6D3D1]">
                <span className="font-mono text-xs uppercase tracking-wider">Преимущества</span>
                <span className="status-dot active" />
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="border-r border-[#D6D3D1] pr-6">
                  <div className="coord-label mb-2">Производство</div>
                  <div className="data-value">100%</div>
                  <div className="text-sm text-[#666666] mt-1">Собственные мощности</div>
                </div>
                <div>
                  <div className="coord-label mb-2">Сертификация</div>
                  <div className="data-value">ГОСТ</div>
                  <div className="text-sm text-[#666666] mt-1">Полное соответствие</div>
                </div>
              </div>

              <hr className="h-px bg-[#D6D3D1] border-0 mb-6" />

              <div className="space-y-4">
                {[
                  { icon: Factory, text: "Полные лабораторные испытания оборудования" },
                  { icon: Truck, text: "Доставка по всей России" },
                  { icon: Shield, text: "Гарантия до 5 лет" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#E63B2E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
