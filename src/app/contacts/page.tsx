"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { siteConfig } from "@/lib/data/site-data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Мы всегда на связи и готовы ответить на ваши вопросы
            </p>
          </div>
        </section>

        {/* Contacts */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Info */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
                  Контактная информация
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-[#666666]">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефоны</h3>
                      <div className="space-y-1">
                        {siteConfig.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={phone.href}
                            className="block text-[#666666] hover:text-[#E63B2E] transition-colors"
                          >
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-[#666666] hover:text-[#E63B2E] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-[#666666]">{siteConfig.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Map */}
              <div>
                <div className="panel overflow-hidden">
                  <div className="aspect-square bg-[#F5F3EE]">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?ll=60.573450%2C56.806850&z=16&pt=60.573450,56.806850,pm2rdm&mode=search&text=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%2C%20%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%90%D1%80%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2C%2031%D1%811"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 border-t border-[#D6D3D1] bg-white">
                    <a
                      href="https://yandex.ru/maps/-/CDxxYZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E63B2E] hover:underline text-sm"
                    >
                      Открыть на Яндекс.Картах →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MessengerWidget />
    </div>
  );
}
