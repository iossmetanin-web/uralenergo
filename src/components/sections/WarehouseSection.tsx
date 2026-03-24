"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Package, ArrowRight, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WarehouseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wh-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { image: "/images/oil-transformer.jpg", title: "Масляные трансформаторы", cat: "OIL" },
    { image: "/images/dry-transformer.jpg", title: "Сухие трансформаторы", cat: "DRY" },
    { image: "/images/ktp.jpg", title: "Подстанции КТП", cat: "KTP" },
  ];

  return (
    <section id="warehouse" ref={sectionRef} className="py-16 lg:py-24 border-t border-[#D6D3D1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 bg-[#111111] flex items-center justify-center">
            <span className="text-[#FFD100] font-mono text-xs font-bold">WH</span>
          </div>
          <span className="coord-label">Склад</span>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
          Склад готовой продукции
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main panel */}
          <div className="lg:col-span-2 lg:row-span-2 wh-card">
            <div className="panel overflow-hidden h-full">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Склад готовой продукции"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#111111]/70 flex flex-col items-center justify-center text-white p-8">
                  <Package className="w-16 h-16 mb-4 text-[#FFD100]" />
                  <div className="font-mono text-xs text-[#D6D3D1] mb-2">В НАЛИЧИИ</div>
                  <div className="font-heading text-3xl font-semibold text-center">
                    Трансформаторы и подстанции
                  </div>
                  <div className="font-mono text-sm text-[#D6D3D1] mt-2">
                    Готовы к отгрузке
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <span className="status-dot active" />
                      <span className="text-sm">На складе</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#D6D3D1]">
                      <Truck className="w-4 h-4" />
                      <span>Доставка по РФ</span>
                    </div>
                  </div>
                </div>

                <div className="coord-label absolute top-4 left-4 text-white z-10 bg-[#111111]/50 px-2 py-1">
                  WAREHOUSE.MAIN
                </div>
              </div>
            </div>
          </div>

          {/* Category cards */}
          {categories.map((item) => (
            <div key={item.cat} className="wh-card">
              <div className="panel overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#111111]/50 group-hover:bg-[#111111]/30 transition-colors flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="font-mono text-xs text-[#D6D3D1] mb-1">КАТЕГОРИЯ</div>
                      <div className="font-heading font-semibold">{item.title}</div>
                    </div>
                  </div>
                  <div className="coord-label absolute top-2 left-2 text-white z-10 bg-[#111111]/50 px-2 py-1">
                    CAT.{item.cat}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="wh-card">
            <div className="panel p-6 h-full flex flex-col items-center justify-center text-center">
              <ArrowRight className="w-8 h-8 mb-4 text-[#E63B2E]" />
              <div className="font-mono text-xs text-[#666666] mb-2">ОТПРАВИТЬ ЗАЯВКУ</div>
              <div className="font-heading font-semibold mb-4">
                Нужна консультация?
              </div>
              <a href="#contacts" className="btn-brutal btn-brutal-accent text-xs w-full">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
