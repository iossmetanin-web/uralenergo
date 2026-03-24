"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { siteConfig, whyUs } from "@/lib/data/site-data";
import { CheckCircle, Users, Award, Factory } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              О компании
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {siteConfig.legalName} — надёжный партнёр в области энергетического оборудования
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                  Производство и поставка трансформаторов
                </h2>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  {siteConfig.description}
                </p>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  Мы специализируемся на производстве и поставке комплектных трансформаторных подстанций (КТП),
                  масляных и сухих трансформаторов различной мощности. Наше оборудование соответствует
                  всем российским и международным стандартам качества.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="panel p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Factory className="w-6 h-6 text-[#E63B2E]" />
                      <span className="font-mono text-2xl font-bold">500+</span>
                    </div>
                    <p className="text-sm text-[#666666]">Подстанций произведено</p>
                  </div>
                  <div className="panel p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-6 h-6 text-[#E63B2E]" />
                      <span className="font-mono text-2xl font-bold">200+</span>
                    </div>
                    <p className="text-sm text-[#666666]">Довольных клиентов</p>
                  </div>
                  <div className="panel p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-6 h-6 text-[#E63B2E]" />
                      <span className="font-mono text-2xl font-bold">15+</span>
                    </div>
                    <p className="text-sm text-[#666666]">Лет на рынке</p>
                  </div>
                  <div className="panel p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-[#E63B2E]" />
                      <span className="font-mono text-2xl font-bold">100%</span>
                    </div>
                    <p className="text-sm text-[#666666]">Гарантия качества</p>
                  </div>
                </div>
              </div>

              {/* Right - Why Us */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                  Почему выбирают нас
                </h2>
                <div className="space-y-4">
                  {whyUs.map((item) => (
                    <div key={item.number} className="panel p-4">
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-xl font-bold text-[#E63B2E]">{item.number}</span>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-[#666666]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
