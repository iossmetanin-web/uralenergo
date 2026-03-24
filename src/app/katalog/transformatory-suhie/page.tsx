"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Truck, Flame } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const specifications = [
  { label: "Мощность", value: "30 — 2500 кВА" },
  { label: "Напряжение ВН", value: "6, 10, 20, 35 кВ" },
  { label: "Напряжение НН", value: "0,4; 0,69; 6,3; 10,5 кВ" },
  { label: "Класс нагревостойкости", value: "F, H" },
  { label: "Климатическое", value: "У3, УХЛ3, Т3" },
  { label: "Срок службы", value: "30+ лет" },
];

export default function DryTransformersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <div className="coord-label text-white/60 mb-2">КАТАЛОГ</div>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Трансформаторы сухие
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Сухие трансформаторы для объектов с повышенными требованиями к безопасности
            </p>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/dry-transformer.jpg"
                  alt="Сухой трансформатор"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                  Описание
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Сухие трансформаторы — оптимальное решение для установки внутри помещений,
                  где требуется высокая пожаробезопасность и экологичность.
                </p>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Идеально подходят для медицинских учреждений, торговых центров,
                  офисных зданий, метрополитенов и других объектов с повышенными
                  требованиями к безопасности.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4">
                  {specifications.map((spec, i) => (
                    <div key={i} className="border-b border-[#D6D3D1] py-2">
                      <span className="text-sm text-[#666666]">{spec.label}:</span>
                      <br />
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 lg:py-24 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Преимущества сухих трансформаторов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="panel p-6 text-center">
                <Flame className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Пожаробезопасность</h3>
                <p className="text-sm text-[#666666]">Без масла — без риска возгорания</p>
              </div>
              <div className="panel p-6 text-center">
                <Zap className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Экологичность</h3>
                <p className="text-sm text-[#666666]">Без вредных веществ</p>
              </div>
              <div className="panel p-6 text-center">
                <Shield className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гарантия 5 лет</h3>
                <p className="text-sm text-[#666666]">На всё оборудование</p>
              </div>
              <div className="panel p-6 text-center">
                <Truck className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Простота монтажа</h3>
                <p className="text-sm text-[#666666]">Легко устанавливать внутри</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
              Нужна консультация?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Свяжитесь с нами — поможем подобрать трансформатор под ваши требования
            </p>
            <a href="/contacts" className="btn-brutal btn-brutal-accent">
              Связаться с нами
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MessengerWidget />
    </div>
  );
}
