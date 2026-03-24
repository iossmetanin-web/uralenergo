"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";

const footerLinks = [
  {
    title: "Каталог",
    links: [
      { name: "Подстанции КТП", href: "/katalog/podstancii-ktp" },
      { name: "Трансформаторы масляные", href: "/katalog/transformatory-maslyanye" },
      { name: "Трансформаторы сухие", href: "/katalog/transformatory-suhie" },
    ],
  },
  {
    title: "Компания",
    links: [
      { name: "О компании", href: "/about" },
      { name: "Наше производство", href: "/o-proizvodstve" },
      { name: "Документы", href: "/dokumenty" },
      { name: "Отзывы", href: "/reviews" },
    ],
  },
  {
    title: "Информация",
    links: [
      { name: "Склад готовой продукции", href: "/sklad-gotovoj-produkcii" },
      { name: "Оплата и доставка", href: "/oplata-i-dostavka" },
      { name: "Контакты", href: "/contacts" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-[#F5F3EE] mt-auto">
      {/* Video background */}
      <VideoBackground overlayOpacity={0.75} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-uralenergo.png"
                alt="УралЭнерго"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-semibold text-lg">УралЭнерго</div>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-6 max-w-sm">
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
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#E63B2E] mt-0.5 flex-shrink-0" />
                {siteConfig.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
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
                      className="text-sm text-white/70 hover:text-white transition-colors"
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
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/50">Напишите нам:</span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10 hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
                  title="WhatsApp"
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-7 h-7 object-contain"
                  />
                </a>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10 hover:bg-[#0088cc] transition-all duration-300 hover:scale-110"
                  title="Telegram"
                >
                  <Image
                    src="/icons/telegram.png"
                    alt="Telegram"
                    width={32}
                    height={32}
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href={siteConfig.socials.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10 hover:bg-[#0077FF] transition-all duration-300 hover:scale-110"
                  title="VK"
                >
                  <Image
                    src="/icons/vk.png"
                    alt="VK"
                    width={32}
                    height={32}
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href={siteConfig.socials.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10 hover:bg-[#6B5CE7] transition-all duration-300 hover:scale-110"
                  title="MAX"
                >
                  <Image
                    src="/icons/max.jpg"
                    alt="MAX"
                    width={32}
                    height={32}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
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
