import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "УралЭнерго — Производство и поставка трансформаторов и подстанций",
  description: "Производство и поставка трансформаторов и подстанций любого типа. Надежное оборудование для Ваших энергосистем. Собственное производство, полные лабораторные испытания.",
  keywords: ["трансформаторы", "подстанции", "КТП", "ТМГ", "электрооборудование", "УралЭнерго", "Екатеринбург"],
  authors: [{ name: "ООО УралЭнерго" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "УралЭнерго — Трансформаторы и подстанции",
    description: "Производство и поставка трансформаторов и подстанций любого типа",
    url: "https://uralenergo.ru",
    siteName: "УралЭнерго",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased bg-ue-bg text-ue-text min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
