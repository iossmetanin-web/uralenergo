"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { ktpAdvantages } from "@/lib/data/site-data";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const specifications = [
  { label: "Мощность", value: "25 — 2500 кВА" },
  { label: "Напряжение ВН", value: "6, 10, 35 кВ" },
  { label: "Напряжение НН", value: "0,4 кВ" },
  { label: "Исполнение", value: "КТП, 2КТП, КТПН" },
  { label: "Климатическое", value: "У1, УХЛ1" },
  { label: "Срок службы", value: "25+ лет" },
];

export default function KTPPage() {
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
              Подстанции КТП, 2КТП, КТПН
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Комплектные трансформаторные подстанции для промышленных и жилых объектов
            </p>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/ktp.jpg"
                  alt="Подстанция КТП"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                  Описание
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Комплектные трансформаторные подстанции (КТП) предназначены для приёма,
                  преобразования и распределения электроэнергии трёхфазного переменного тока
                  частотой 50 Гц в сетях с изолированной нейтралью.
                </p>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Мы производим подстанции различных типов: КТП (однотрансформаторные),
                  2КТП (двухтрансформаторные), КТПН (для наружной установки).
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
              Преимущества наших КТП
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ktpAdvantages.map((adv, i) => (
                <div key={i} className="panel p-6">
                  <h3 className="font-semibold text-lg mb-3">{adv.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="panel p-6 text-center">
                <Zap className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Готовность к подключению</h3>
                <p className="text-sm text-[#666666]">Полная сборка на производстве</p>
              </div>
              <div className="panel p-6 text-center">
                <Shield className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гарантия до 5 лет</h3>
                <p className="text-sm text-[#666666]">На всё оборудование</p>
              </div>
              <div className="panel p-6 text-center">
                <Truck className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Доставка по России</h3>
                <p className="text-sm text-[#666666]">Транспортировка негабарита</p>
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
              Свяжитесь с нами — поможем подобрать подстанцию под ваши требования
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
