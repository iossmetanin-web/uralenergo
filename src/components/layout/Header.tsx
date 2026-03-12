"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const phones = ["+7 (343) 383-56-58", "+7 (922) 608-07-37"];
  const email = "ural-energy@internet.ru";
  const address = "г. Екатеринбург, ул. Артинская, 31/1";

  const navigation = [
    { title: "Главная", href: "/" },
    { title: "О компании", href: "/about" },
    { 
      title: "Каталог", 
      href: "/katalog",
      children: [
        { title: "Подстанции КТП 2КТП КТПН", href: "/podstancii-ktp-2ktp-ktpn" },
        { title: "Трансформаторы масляные", href: "/transformatory-maslyanye" },
        { title: "Трансформаторы ТМГ", href: "/transformator-tmg" },
        { title: "Трансформаторы сухие", href: "/transformatory-suhie" },
        { title: "Склад готовой продукции", href: "/sklad-gotovoj-produkcii" }
      ]
    },
    { title: "Услуги", href: "/services" },
    { title: "Доставка", href: "/oplata-i-dostavka" },
    { title: "Контакты", href: "/contacts" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0073e6] text-white py-2.5 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            {phones.map((phone, i) => (
              <a key={i} href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">{phone}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
              <Mail className="h-4 w-4" />
              {email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {address}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image
                src="/images/logo.png"
                alt="Уралэнерго - Трансформаторы и электротехническое оборудование"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[#003366] text-2xl tracking-wide group-hover:text-[#0073e6] transition-colors">УРАЛЭНЕРГО</div>
              <div className="text-xs text-gray-500 tracking-wider">ТРАНСФОРМАТОРЫ И ОБОРУДОВАНИЕ</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.title} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-[#003366] hover:text-[#0073e6] font-medium transition-colors text-sm"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === item.title && (
                      <div
                        className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[280px] z-50 border border-gray-100"
                        onMouseEnter={() => setOpenDropdown(item.title)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0073e6]/10 hover:to-transparent hover:text-[#0073e6] transition-colors text-sm"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-[#003366] hover:text-[#0073e6] font-medium transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white shadow-lg shadow-[#0073e6]/30 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 text-[#003366] hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {navigation.map((item) => (
              <div key={item.title} className="py-1">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-3 text-[#003366] font-medium"
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 border-l-2 border-[#0073e6] ml-2 my-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-gray-600 hover:text-[#0073e6]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-[#003366] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t space-y-3">
              {phones.map((phone, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-[#0073e6]" />
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-[#0073e6]">{phone}</a>
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-[#0073e6]" />
                <a href={`mailto:${email}`} className="hover:text-[#0073e6]">{email}</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-[#0073e6]" />
                {address}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
