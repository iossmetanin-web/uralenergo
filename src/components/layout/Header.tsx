"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#003366] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.contacts.phones[0]}`} className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
              <Phone className="h-4 w-4" />
              {siteConfig.contacts.phones[0]}
            </a>
            <a href={`tel:${siteConfig.contacts.phones[1]}`} className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
              <Phone className="h-4 w-4" />
              {siteConfig.contacts.phones[1]}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteConfig.contacts.email}`} className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
              <Mail className="h-4 w-4" />
              {siteConfig.contacts.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.contacts.address}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">УЭ</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[#003366] text-lg md:text-xl">Уралэнерго</div>
              <div className="text-xs text-gray-500">Трансформаторы и оборудование</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <div key={item.title} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-[#003366] hover:text-[#0073e6] font-medium transition-colors"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === item.title && (
                      <div
                        className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50"
                        onMouseEnter={() => setOpenDropdown(item.title)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-[#f0f0f0] hover:text-[#0073e6] transition-colors"
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
                    className="px-4 py-2 text-[#003366] hover:text-[#0073e6] font-medium transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white">
              <Phone className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#003366]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            {siteConfig.navigation.map((item) => (
              <div key={item.title} className="py-2">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 text-[#003366] font-medium"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 border-l-2 border-[#0073e6] ml-2 mt-2">
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
                    className="block py-2 text-[#003366] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t space-y-2">
              {siteConfig.contacts.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone}`} className="flex items-center gap-2 py-1 text-gray-600">
                  <Phone className="h-4 w-4 text-[#0073e6]" />
                  {phone}
                </a>
              ))}
              <a href={`mailto:${siteConfig.contacts.email}`} className="flex items-center gap-2 py-1 text-gray-600">
                <Mail className="h-4 w-4 text-[#0073e6]" />
                {siteConfig.contacts.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
