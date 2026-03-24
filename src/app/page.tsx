"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { KTPAdvantagesSection } from "@/components/sections/KTPAdvantagesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MessengerWidget } from "@/components/ui-custom/MessengerWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <CatalogSection />
        <KTPAdvantagesSection />
        <WhyUsSection />
      </main>
      <Footer />
      <MessengerWidget />
    </div>
  );
}
