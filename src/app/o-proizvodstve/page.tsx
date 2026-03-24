"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { ktpAdvantages } from "@/lib/data/site-data";
import Image from "next/image";
import { Settings, Cog, Wrench, Shield } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const productionSteps = [
  {
    icon: Settings,
    title: "Проектирование",
    description: "Разработка индивидуальных решений под ваши требования",
  },
  {
    icon: Cog,
    title: "Производство",
    description: "Современное оборудование и квалифицированные специалисты",
  },
  {
    icon: Wrench,
    title: "Сборка",
    description: "Полная сборка и тестирование на производстве",
  },
  {
    icon: Shield,
    title: "Контроль качества",
    description: "Многоступенчатая проверка на каждом этапе",
  },
];

export default function ProductionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Наше производство
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Современный производственный комплекс площадью более 5000 м²
            </p>
          </div>
        </section>

        {/* Production Steps */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12 text-center">
              Этапы производства
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productionSteps.map((step, i) => (
                <div key={i} className="panel p-6 text-center">
                  <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#666666]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 lg:py-24 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Преимущества нашего производства
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

        {/* Images */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Фотографии производства
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-video">
                <Image src="/images/ktp.jpg" alt="Производство КТП" fill className="object-cover" />
              </div>
              <div className="relative aspect-video">
                <Image src="/images/oil-transformer.jpg" alt="Масляные трансформаторы" fill className="object-cover" />
              </div>
              <div className="relative aspect-video">
                <Image src="/images/dry-transformer.jpg" alt="Сухие трансформаторы" fill className="object-cover" />
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
