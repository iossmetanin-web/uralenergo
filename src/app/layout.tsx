import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ООО Уралэнерго - Трансформаторы и Электротехническое Оборудование",
  description: "ООО Уралэнерго предлагает трансформаторы и электротехническое оборудование, соответствующее международным стандартам. Доставка и комплексные решения.",
  keywords: ["трансформаторы", "электротехническое оборудование", "Екатеринбург", "обслуживание", "доставка", "подстанции", "КТП", "ТМГ", "ТМ"],
  authors: [{ name: "ООО Уралэнерго" }],
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "ООО Уралэнерго - Трансформаторы и Электротехническое Оборудование",
    description: "Производство и поставка трансформаторов и электротехнического оборудования в Екатеринбурге",
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
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
