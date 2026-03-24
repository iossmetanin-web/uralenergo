"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { catalogCategories } from "@/lib/data/site-data";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CatalogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".catalog-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="catalog" ref={sectionRef} className="py-16 lg:py-24 border-t border-[#D6D3D1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#E63B2E] flex items-center justify-center">
                <span className="text-white font-mono text-xs font-bold">≡</span>
              </div>
              <span className="coord-label">Каталог</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              Каталог продукции
            </h2>
          </div>
          <Link
            href="#contacts"
            className="text-sm font-mono hover:text-[#E63B2E] transition-colors flex items-center gap-2"
          >
            ВЕСЬ СПИСОК ПРОДУКЦИИ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {catalogCategories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="catalog-card group block"
            >
              <div className="panel overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-[#E63B2E]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-mono text-sm uppercase tracking-wider">
                      Подробнее →
                    </span>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-2 left-2 coord-label bg-white/90 px-2 py-1 z-10">
                    CAT.{index + 1}
                  </div>
                  <div className="absolute top-2 right-2 coord-label bg-white/90 px-2 py-1 z-10">
                    {category.id.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#666666] mb-4">
                    {category.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D6D3D1]">
                    {category.specs.map((spec, i) => (
                      <div key={i}>
                        <div className="coord-label mb-1">{spec.label}</div>
                        <div className="flex items-baseline gap-1">
                          <span className="font-mono text-xl font-semibold">{spec.value}</span>
                          <span className="font-mono text-xs text-[#666666]">{spec.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
