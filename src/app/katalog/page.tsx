"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { catalogCategories } from "@/lib/data/site-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Каталог продукции
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Трансформаторы и подстанции для любых задач
            </p>
          </div>
        </section>

        {/* Catalog */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalogCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/katalog/${category.id === 'ktp' ? 'podstancii-ktp' : category.id === 'oil' ? 'transformatory-maslyanye' : 'transformatory-suhie'}`}
                  className="panel overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-heading text-xl font-semibold">{category.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#666666] mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {category.specs.map((spec, i) => (
                          <div key={i}>
                            <span className="font-mono font-bold text-[#E63B2E]">{spec.value}</span>
                            <span className="text-xs text-[#666666] ml-1">{spec.unit}</span>
                          </div>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#E63B2E] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
              Не нашли нужное оборудование?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Свяжитесь с нами — мы изготовим трансформатор или подстанцию под ваши требования
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
