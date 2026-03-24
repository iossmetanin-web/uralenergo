"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";

const navigation = [
  { name: "Главная", href: "/" },
  {
    name: "О компании",
    href: "/about",
    submenu: [
      { name: "О компании", href: "/about" },
      { name: "Наше производство", href: "/o-proizvodstve" },
      { name: "Документы", href: "/dokumenty" },
      { name: "Отзывы", href: "/reviews" },
    ],
  },
  {
    name: "Каталог",
    href: "/katalog",
    submenu: [
      { name: "Весь каталог", href: "/katalog" },
      { name: "Подстанции КТП", href: "/katalog/podstancii-ktp" },
      { name: "Трансформаторы масляные", href: "/katalog/transformatory-maslyanye" },
      { name: "Трансформаторы сухие", href: "/katalog/transformatory-suhie" },
    ],
  },
  { name: "Склад готовой продукции", href: "/sklad-gotovoj-produkcii" },
  { name: "Оплата и доставка", href: "/oplata-i-dostavka" },
  { name: "Контакты", href: "/contacts" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F3EE]/95 backdrop-blur-sm border-b border-[#D6D3D1]"
          : "bg-[#F5F3EE]"
      }`}
    >
      {/* Desktop: Top bar с адресом и телефонами */}
      <div className="hidden md:block border-b border-[#D6D3D1]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <span className="coord-label">{siteConfig.address}</span>
              <span className="text-[#D6D3D1]">|</span>
              <span className="coord-label">{siteConfig.workingHours}</span>
            </div>
            <div className="flex items-center gap-4">
              {siteConfig.phones.map((phone, i) => (
                <a
                  key={i}
                  href={phone.href}
                  className="flex items-center gap-1 hover:text-[#E63B2E] transition-colors font-mono text-xs"
                >
                  <Phone className="w-3 h-3" />
                  {phone.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav - одна строка на всех устройствах */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - слева */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo-uralenergo.png"
              alt="УралЭнерго"
              width={48}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav - по центру */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <div key={item.name} className="relative whitespace-nowrap">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button className="px-3 py-2 text-sm font-medium hover:text-[#E63B2E] transition-colors flex items-center gap-1 whitespace-nowrap">
                      <Link href={item.href}>{item.name}</Link>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {/* Dropdown */}
                    {openSubmenu === item.name && (
                      <div className="absolute top-full left-0 bg-white border border-[#D6D3D1] shadow-lg min-w-[200px] z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-3 text-sm hover:bg-[#F5F3EE] hover:text-[#E63B2E] transition-colors border-b border-[#D6D3D1] last:border-0 whitespace-nowrap"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium hover:text-[#E63B2E] transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button - справа */}
          <button
            className="lg:hidden p-2 hover:bg-[#D6D3D1]/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
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
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-3 border-b border-[#D6D3D1] font-medium"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="pl-4 bg-[#F5F3EE]/50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-3 text-sm border-b border-[#D6D3D1] last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 border-b border-[#D6D3D1] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
