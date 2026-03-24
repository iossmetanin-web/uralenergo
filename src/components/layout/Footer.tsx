"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";

const footerLinks = [
  {
    title: "Каталог",
    links: [
      { name: "Подстанции КТП", href: "#catalog" },
      { name: "Трансформаторы масляные", href: "#catalog" },
      { name: "Трансформаторы сухие", href: "#catalog" },
    ],
  },
  {
    title: "Компания",
    links: [
      { name: "Производство", href: "#production" },
      { name: "Склад", href: "#warehouse" },
      { name: "Отзывы", href: "#reviews" },
    ],
  },
  {
    title: "Информация",
    links: [
      { name: "Доставка", href: "#" },
      { name: "Контакты", href: "#contacts" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#F5F3EE] mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FFD100] flex items-center justify-center">
                <span className="text-[#111111] font-semibold text-lg">УЭ</span>
              </div>
              <div>
                <div className="font-semibold text-lg">УралЭнерго</div>
                <div className="text-xs text-[#D6D3D1]">
                  Производство электрического оборудования
                </div>
              </div>
            </div>
            <p className="text-sm text-[#D6D3D1] mb-6 max-w-sm">
              {siteConfig.description}
            </p>

            {/* Contacts */}
            <div className="space-y-3">
              {siteConfig.phones.map((phone, i) => (
                <a
                  key={i}
                  href={phone.href}
                  className="flex items-center gap-2 text-sm hover:text-[#FFD100] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E63B2E]" />
                  <span className="font-mono">{phone.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm hover:text-[#FFD100] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E63B2E]" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-[#D6D3D1]">
                <MapPin className="w-4 h-4 text-[#E63B2E] mt-0.5 flex-shrink-0" />
                {siteConfig.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#D6D3D1]">
                <Clock className="w-4 h-4 text-[#E63B2E]" />
                {siteConfig.workingHours}
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#FFD100]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#D6D3D1] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-8 pt-8 border-t border-[#D6D3D1]/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#D6D3D1]">Напишите нам:</span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#D6D3D1]/20 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#111111] transition-colors text-xs font-bold"
                  title="WhatsApp"
                >
                  WA
                </a>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#D6D3D1]/20 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#111111] transition-colors text-xs font-bold"
                  title="Telegram"
                >
                  TG
                </a>
                <a
                  href={siteConfig.socials.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#D6D3D1]/20 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#111111] transition-colors text-xs font-bold"
                  title="MAX"
                >
                  MX
                </a>
                <a
                  href={siteConfig.socials.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#D6D3D1]/20 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#111111] transition-colors text-xs font-bold"
                  title="VK"
                >
                  VK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D6D3D1]/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#D6D3D1]">
            <div>
              Copyright © {currentYear} {siteConfig.legalName}
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
