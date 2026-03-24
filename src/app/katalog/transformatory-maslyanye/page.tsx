"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Truck, Droplets } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const specifications = [
  { label: "Мощность", value: "16 — 6300 кВА" },
  { label: "Напряжение ВН", value: "6, 10, 35 кВ" },
  { label: "Напряжение НН", value: "0,4; 0,69; 6,3; 10,5 кВ" },
  { label: "Потери ХХ", value: "Снижены на 20%" },
  { label: "Климатическое", value: "У1, УХЛ1" },
  { label: "Срок службы", value: "25+ лет" },
];

export default function OilTransformersPage() {
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
              Трансформаторы масляные
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Масляные трансформаторы серии ТМГ для наружной и внутренней установки
            </p>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/oil-transformer.jpg"
                  alt="Масляный трансформатор"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                  Описание
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Масляные трансформаторы ТМГ — это надёжное решение для преобразования
                  электроэнергии в сетях промышленных предприятий и объектов ЖКХ.
                </p>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Герметичное исполнение бака исключает контакт масла с воздухом,
                  что увеличивает срок службы трансформатора и снижает затраты на обслуживание.
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
              Преимущества масляных трансформаторов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="panel p-6 text-center">
                <Droplets className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Герметичный бак</h3>
                <p className="text-sm text-[#666666]">Без контакта масла с воздухом</p>
              </div>
              <div className="panel p-6 text-center">
                <Zap className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Низкие потери</h3>
                <p className="text-sm text-[#666666]">Экономия электроэнергии</p>
              </div>
              <div className="panel p-6 text-center">
                <Shield className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гарантия 5 лет</h3>
                <p className="text-sm text-[#666666]">На всё оборудование</p>
              </div>
              <div className="panel p-6 text-center">
                <Truck className="w-10 h-10 text-[#E63B2E] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-sm text-[#666666]">По всей России</p>
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
