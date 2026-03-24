"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { FileText, Download, Award, CheckCircle } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const documents = [
  {
    title: "Сертификат соответствия ГОСТ Р",
    description: "Соответствие требованиям безопасности и качества",
  },
  {
    title: "Сертификат ISO 9001",
    description: "Система менеджмента качества",
  },
  {
    title: "Сертификат ISO 14001",
    description: "Система экологического менеджмента",
  },
  {
    title: "Лицензия на производство",
    description: "Официальное разрешение на производство оборудования",
  },
  {
    title: "Паспорта качества",
    description: "На каждое изделие",
  },
  {
    title: "Гарантийные талоны",
    description: "Гарантия до 5 лет на всё оборудование",
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Документы
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Сертификаты, лицензии и гарантии качества нашей продукции
            </p>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, i) => (
                <div key={i} className="panel p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{doc.title}</h3>
                    <p className="text-sm text-[#666666]">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality */}
        <section className="py-16 lg:py-24 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <Award className="w-16 h-16 text-[#E63B2E] mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
              Гарантия качества
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto mb-8">
              Вся наша продукция проходит строгий контроль качества на каждом этапе производства.
              Мы предоставляем полную документацию и гарантию на все виды оборудования.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>ГОСТ Р</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>ISO 14001</span>
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
