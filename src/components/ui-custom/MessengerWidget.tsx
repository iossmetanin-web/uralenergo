"use client";

import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";

export function MessengerWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const messengers = [
    {
      name: "WhatsApp",
      href: siteConfig.socials.whatsapp,
      color: "#25D366",
      abbr: "WA",
    },
    {
      name: "Telegram",
      href: siteConfig.socials.telegram,
      color: "#0088cc",
      abbr: "TG",
    },
    {
      name: "MAX",
      href: siteConfig.socials.max,
      color: "#6B5CE7",
      abbr: "MX",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white border border-[#D6D3D1] shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="p-4 border-b border-[#D6D3D1] flex items-center justify-between">
            <span className="font-heading font-semibold">Напишите нам</span>
            <span className="coord-label">Мессенджеры</span>
          </div>

          {/* List */}
          <div className="p-2">
            {messengers.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-[#F5F3EE] transition-colors"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: m.color }}
                >
                  {m.abbr}
                </div>
                <div>
                  <div className="font-medium text-sm">{m.name}</div>
                  <div className="text-xs text-[#666666]">
                    Написать сообщение
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Phone */}
          <div className="p-2 border-t border-[#D6D3D1]">
            <a
              href={siteConfig.phones[0]?.href}
              className="flex items-center gap-3 p-3 hover:bg-[#F5F3EE] transition-colors"
            >
              <div className="w-10 h-10 bg-[#E63B2E] flex items-center justify-center text-white">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Позвонить</div>
                <div className="text-xs text-[#666666] font-mono">
                  {siteConfig.phones[0]?.label}
                </div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-200 border-2 ${
          isOpen
            ? "bg-[#111111] text-white border-[#111111]"
            : "bg-[#E63B2E] text-white border-[#E63B2E] hover:bg-[#B82820] hover:border-[#B82820]"
        }`}
        aria-label="Открыть мессенджеры"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
