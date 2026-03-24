"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { ArrowRight, CreditCard, Truck, FileText, Shield } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Безналичный расчёт",
    description: "Для юридических лиц. Полный пакет документов.",
  },
  {
    icon: FileText,
    title: "Договор",
    description: "Работаем по договору с отсрочкой платежа.",
  },
  {
    icon: Shield,
    title: "Гарантия",
    description: "Гарантийное и постгарантийное обслуживание.",
  },
];

const deliveryMethods = [
  {
    title: "Автотранспорт",
    description: "Доставка собственным автопарком и транспортными компаниями",
  },
  {
    title: "Железнодорожный транспорт",
    description: "Отгрузка негабаритных грузов через ЖД",
  },
  {
    title: "Самовывоз",
    description: "Возможность забрать оборудование со склада",
  },
];

export default function PaymentDeliveryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Оплата и доставка
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Удобные способы оплаты и доставки по всей России
            </p>
          </div>
        </section>

        {/* Payment */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Способы оплаты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method, i) => (
                <div key={i} className="panel p-6">
                  <method.icon className="w-10 h-10 text-[#E63B2E] mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-[#666666]">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="py-16 lg:py-24 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-12">
              Способы доставки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliveryMethods.map((method, i) => (
                <div key={i} className="panel p-6">
                  <Truck className="w-10 h-10 text-[#E63B2E] mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-[#666666]">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
              Остались вопросы?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Свяжитесь с нами — ответим на все вопросы по оплате и доставке
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
