"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reviews } from "@/lib/data/site-data";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-16 lg:py-24 bg-white border-t border-[#D6D3D1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 bg-[#FFD100] flex items-center justify-center">
            <span className="text-[#111111] font-mono text-xs font-bold">★</span>
          </div>
          <span className="coord-label">Отзывы</span>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
          Что говорят наши клиенты
        </h2>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <div key={review.id} className="review-card panel p-6">
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#D6D3D1] flex items-center justify-center font-heading font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.author}</div>
                </div>
              </div>

              <hr className="h-px bg-[#D6D3D1] border-0 mb-4" />

              {/* Quote */}
              <div className="relative">
                <Quote className="w-6 h-6 text-[#E63B2E]/20 absolute -top-2 -left-1" />
                <p className="text-sm text-[#666666] leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>

              {/* Index */}
              <div className="coord-label mt-4 text-right">
                REV.{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
