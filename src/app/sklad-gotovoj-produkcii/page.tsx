"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import Image from "next/image";
import { ArrowRight, Package, Clock, Truck } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const warehouseItems = [
  { name: "КТП-250/10/0,4", available: true },
  { name: "КТП-400/10/0,4", available: true },
  { name: "КТП-630/10/0,4", available: true },
  { name: "КТП-1000/10/0,4", available: true },
  { name: "ТМГ-250/10", available: true },
  { name: "ТМГ-400/10", available: true },
  { name: "ТМГ-630/10", available: true },
  { name: "ТМГ-1000/10", available: false },
];

export default function WarehousePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Склад готовой продукции
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Товар в наличии — быстрая отгрузка
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="panel p-6 text-center">
                <Package className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">В наличии</h3>
                <p className="text-sm text-[#666666]">Популярные модели всегда на складе</p>
              </div>
              <div className="panel p-6 text-center">
                <Clock className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Быстрая отгрузка</h3>
                <p className="text-sm text-[#666666]">Отгрузка в течение 3-5 дней</p>
              </div>
              <div className="panel p-6 text-center">
                <Truck className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-sm text-[#666666]">По всей России</p>
              </div>
            </div>

            {/* Available Items */}
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
              Оборудование на складе
            </h2>
            <div className="panel overflow-hidden">
              <div className="border-b border-[#D6D3D1] bg-[#F5F3EE] p-4 grid grid-cols-2 font-semibold text-sm">
                <span>Наименование</span>
                <span className="text-right">Наличие</span>
              </div>
              {warehouseItems.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-[#D6D3D1] p-4 grid grid-cols-2 last:border-0"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className={`text-right text-sm ${item.available ? 'text-green-600' : 'text-[#666666]'}`}>
                    {item.available ? 'В наличии' : 'Под заказ'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Images */}
        <section className="py-16 lg:py-24 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Наш склад
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-video">
                <Image src="/images/ktp.jpg" alt="Склад КТП" fill className="object-cover" />
              </div>
              <div className="relative aspect-video">
                <Image src="/images/oil-transformer.jpg" alt="Склад трансформаторов" fill className="object-cover" />
              </div>
              <div className="relative aspect-video">
                <Image src="/images/dry-transformer.jpg" alt="Сухие трансформаторы" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
              Нужен другой номинал?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Изготовим подстанцию или трансформатор под ваши требования
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
