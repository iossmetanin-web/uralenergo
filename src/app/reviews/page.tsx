"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/ui-custom/VideoBackground";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";
import { reviews } from "@/lib/data/site-data";
import { ArrowRight, Star } from "lucide-react";

const heroVideos = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center">
          <VideoBackground videos={heroVideos} />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
              Отзывы наших клиентов
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Что говорят о нас партнёры и заказчики
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="panel p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD100] text-[#FFD100]" />
                    ))}
                  </div>
                  <p className="text-[#666666] mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E63B2E] flex items-center justify-center text-white font-semibold">
                      {review.author[0]}
                    </div>
                    <span className="font-medium">{review.author}</span>
                  </div>
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
              Станьте нашим клиентом
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Закажите трансформатор или подстанцию — убедитесь в качестве сами
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
