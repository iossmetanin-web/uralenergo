import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { ProductCard } from "@/components/ui/ProductCard";
import { InfoSection, FeatureCard } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/button";
import { Factory, Truck, Shield, Award, Zap, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ООО Уралэнерго - Трансформаторы и Электротехническое Оборудование в Екатеринбурге",
  description:
    "ООО Уралэнерго предлагает трансформаторы и электротехническое оборудование, соответствующее международным стандартам. Доставка и комплексные решения.",
  keywords:
    "трансформаторы, электротехническое оборудование, Екатеринбург, обслуживание, доставка, подстанции, КТП",
};

export default function HomePage() {
  const products = [
    {
      title: "Подстанции КТП 2КТП КТПН",
      description:
        "Комплектные трансформаторные подстанции для электроснабжения промышленных и гражданских объектов",
      href: "/podstancii-ktp-2ktp-ktpn",
      features: ["Напряжение до 10 кВ", "Быстрый монтаж", "Полная комплектация"],
    },
    {
      title: "Трансформаторы масляные",
      description:
        "Масляные силовые трансформаторы для распределительных сетей и промышленных предприятий",
      href: "/transformatory-maslyanye",
      features: ["Мощность до 2500 кВА", "Надежность", "Долгий срок службы"],
    },
    {
      title: "Трансформаторы ТМГ",
      description:
        "Герметичные масляные трансформаторы серии ТМГ с расширенным функционалом",
      href: "/transformator-tmg",
      features: ["Герметичный бак", "Без обслуживания", "Энергоэффективность"],
    },
    {
      title: "Трансформаторы сухие",
      description:
        "Сухие силовые трансформаторы для помещений с повышенными требованиями безопасности",
      href: "/transformatory-suhie",
      features: ["Без масла", "Пожаробезопасность", "Экологичность"],
    },
  ];

  const features = [
    {
      icon: Factory,
      title: "Собственное производство",
      description:
        "Завод-изготовитель с полной технологической базой для производства трансформаторов",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description:
        "Всё оборудование сертифицировано и соответствует ГОСТ и отраслевым стандартам",
    },
    {
      icon: Truck,
      title: "Доставка по России",
      description:
        "Доставим оборудование в любую точку страны транспортными компаниями",
    },
    {
      icon: Wrench,
      title: "Сервисное обслуживание",
      description:
        "Полный цикл услуг: от проектирования до монтажа и пусконаладки",
    },
    {
      icon: Award,
      title: "Опыт и репутация",
      description:
        "Проверенный поставщик с многолетним опытом работы на рынке",
    },
    {
      icon: Zap,
      title: "Напряжение до 110 кВ",
      description:
        "Работаем с объектами напряжением до 110 кВ, серийные и индивидуальные решения",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Ваш Партнёр в Электротехнических Решениях"
        subtitle="ООО Уралэнерго"
        description="Мы понимаем, что надёжность электроэнергетических систем — это основа для успешного функционирования бизнеса. Сотрудничество с командой Урал Энерго — гарантия высокого качества работ."
        primaryButton={{ text: "Перейти в каталог", href: "/katalog" }}
        secondaryButton={{ text: "О компании", href: "/about" }}
      />

      {/* Products Section */}
      <InfoSection
        title="Наша продукция"
        description="Широкий ассортимент трансформаторов и подстанций, отвечающих самым высоким стандартам качества и безопасности"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white"
          >
            <Link href="/katalog">Весь каталог продукции</Link>
          </Button>
        </div>
      </InfoSection>

      {/* Features Section */}
      <InfoSection title="Почему выбирают нас" bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </InfoSection>

      {/* About Section */}
      <InfoSection title="О компании">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ООО «УралЭнерго» предлагает широкий ассортимент трансформаторов и
              подстанций, которые отвечают самым высоким стандартам качества и
              безопасности. Наша команда специализируется на изготовлении
              оборудования для сетей мощностью до 110 тысяч вольт и предоставляет
              комплексные услуги в сфере энергетики.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ООО &quot;Урал Энерго&quot; — это не просто поставщик, а проверенный
              завод-изготовитель с опытом, репутацией и технологической базой. Мы
              работаем с объектами напряжением до 110 кВ, предлагая как серийные,
              так и индивидуальные инженерные решения.
            </p>
            <Button
              asChild
              className="bg-[#0073e6] hover:bg-[#005bb5] text-white"
            >
              <Link href="/about">Узнать больше о компании</Link>
            </Button>
          </div>
        </div>
      </InfoSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Выбирайте стабильность и качество уже сегодня!
              </h2>
              <p className="text-white/90 mb-6">
                Каждое оборудование выпускается по всем требованиям ГОСТ, ТУ и
                отраслевым стандартам. Благодаря постоянному внедрению новых
                технологий мы производим дополнительные линейки энергосберегающих
                трансформаторов.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-white/80">лет опыта</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm text-white/80">клиентов</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">110 кВ</div>
                  <div className="text-sm text-white/80">напряжение</div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <InfoSection title="Склад готовой продукции" bgColor="gray">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Всё оборудование сертифицировано, проходит лабораторные испытания и
            готово к отгрузке. На складе всегда в наличии популярные модели
            трансформаторов и комплектующих.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white"
          >
            <Link href="/sklad-gotovoj-produkcii">
              Посмотреть наличие на складе
            </Link>
          </Button>
        </div>
      </InfoSection>
    </>
  );
}
