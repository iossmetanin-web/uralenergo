"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/data/site-data";
import { Phone, Mail, ArrowRight, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contacts" ref={sectionRef} className="py-16 lg:py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="cta-item">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#E63B2E] flex items-center justify-center">
                <span className="text-white font-mono text-xs font-bold">@</span>
              </div>
              <span className="coord-label text-[#D6D3D1]">Контакты</span>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              Готовы обсудить ваш проект?
            </h2>

            <p className="text-[#D6D3D1] mb-8">
              Оставьте заявку или свяжитесь с нами любым удобным способом.
              Наши специалисты помогут подобрать оптимальное решение для ваших задач.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#form"
                className="btn-brutal bg-[#FFD100] text-[#111111] border-[#FFD100] hover:bg-[#E63B2E] hover:border-[#E63B2E] hover:text-white"
              >
                Оставить заявку
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href={siteConfig.phones[0]?.href}
                className="btn-brutal border-white text-white hover:bg-white hover:text-[#111111]"
              >
                Позвонить
              </a>
            </div>
          </div>

          {/* Right - Contact panel */}
          <div className="cta-item">
            <div className="border border-[#D6D3D1]/30 p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phones */}
                <div>
                  <div className="font-mono text-xs text-[#FFD100] uppercase tracking-wider mb-4">
                    Телефоны
                  </div>
                  <div className="space-y-3">
                    {siteConfig.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={phone.href}
                        className="flex items-center gap-3 hover:text-[#FFD100] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#E63B2E]" />
                        <span className="font-mono text-sm">{phone.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="font-mono text-xs text-[#FFD100] uppercase tracking-wider mb-4">
                    Адрес
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#D6D3D1]">
                    <MapPin className="w-4 h-4 text-[#E63B2E] mt-0.5 flex-shrink-0" />
                    {siteConfig.address}
                  </div>
                </div>

                {/* Email + Hours */}
                <div className="sm:col-span-2 pt-6 border-t border-[#D6D3D1]/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="font-mono text-xs text-[#FFD100] uppercase tracking-wider mb-4">
                        Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center gap-3 hover:text-[#FFD100] transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#E63B2E]" />
                        <span className="text-sm">{siteConfig.email}</span>
                      </a>
                    </div>

                    <div>
                      <div className="font-mono text-xs text-[#FFD100] uppercase tracking-wider mb-4">
                        Режим работы
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#D6D3D1]">
                        <Clock className="w-4 h-4 text-[#E63B2E]" />
                        <span>{siteConfig.workingHours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6 pt-6 border-t border-[#D6D3D1]/30">
                <div className="font-mono text-xs text-[#D6D3D1] mb-4">Напишите нам:</div>
                <div className="flex items-center gap-3">
                  {[
                    { href: siteConfig.socials.whatsapp, label: "WA" },
                    { href: siteConfig.socials.telegram, label: "TG" },
                    { href: siteConfig.socials.max, label: "MX" },
                    { href: siteConfig.socials.vk, label: "VK" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#D6D3D1]/20 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#111111] transition-colors text-xs font-bold"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
