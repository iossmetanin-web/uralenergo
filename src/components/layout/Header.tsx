"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Каталог", href: "#catalog" },
  { name: "Производство", href: "#production" },
  { name: "Склад", href: "#warehouse" },
  { name: "Отзывы", href: "#reviews" },
  { name: "Контакты", href: "#contacts" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F3EE]/95 backdrop-blur-sm border-b border-[#D6D3D1]"
          : "bg-[#F5F3EE]"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-[#D6D3D1]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <span className="coord-label hidden sm:inline">{siteConfig.address}</span>
              <span className="hidden sm:inline text-[#D6D3D1]">|</span>
              <span className="hidden sm:inline coord-label">{siteConfig.workingHours}</span>
            </div>
            <div className="flex items-center gap-4">
              {siteConfig.phones.map((phone, i) => (
                <a
                  key={i}
                  href={phone.href}
                  className="hidden md:flex items-center gap-1 hover:text-[#E63B2E] transition-colors font-mono text-xs"
                >
                  <Phone className="w-3 h-3" />
                  {phone.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E63B2E] flex items-center justify-center">
              <span className="text-white font-semibold text-lg">УЭ</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-lg leading-none">УралЭнерго</div>
              <div className="coord-label">Производство • Поставка</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium hover:text-[#E63B2E] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contacts" className="hidden lg:block btn-brutal btn-brutal-accent text-xs">
            Заказать звонок
          </a>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2 hover:bg-[#D6D3D1]/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D6D3D1] bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 border-b border-[#D6D3D1] last:border-0 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[#D6D3D1]">
              <a href="#contacts" className="btn-brutal btn-brutal-accent w-full text-center block">
                Заказать звонок
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
