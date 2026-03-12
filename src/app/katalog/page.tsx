import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { ProductCard } from "@/components/ui/ProductCard";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Каталог продукции - ООО Уралэнерго",
  description:
    "Ознакомьтесь с каталогом продукции ООО Уралэнерго: масляные и сухие трансформаторы, подстанции КТП, 2КТП, КТПН.",
  keywords: "каталог, продукция, трансформаторы, подстанции, масляные, сухие, КТП",
};

export default function CatalogPage() {
  const categories = [
    {
      title: "Подстанции КТП 2КТП КТПН",
      description:
        "Комплектные трансформаторные подстанции для электроснабжения промышленных и гражданских объектов. Напряжение до 10 кВ, быстрая установка и монтаж.",
      href: "/podstancii-ktp-2ktp-ktpn",
      features: ["Напряжение до 10 кВ", "Быстрый монтаж", "Полная комплектация"],
    },
    {
      title: "Трансформаторы масляные",
      description:
        "Масляные силовые трансформаторы различных мощностей для распределительных сетей. Надежность и долговечность в эксплуатации.",
      href: "/transformatory-maslyanye",
      features: ["Мощность до 2500 кВА", "Надежность", "Долгий срок службы"],
    },
    {
      title: "Трансформаторы ТМГ",
      description:
        "Герметичные масляные трансформаторы серии ТМГ с расширенным функционалом и минимальным обслуживанием.",
      href: "/transformator-tmg",
      features: ["Герметичный бак", "Без обслуживания", "Энергоэффективность"],
    },
    {
      title: "Трансформаторы сухие",
      description:
        "Сухие силовые трансформаторы для помещений с повышенными требованиями к пожарной безопасности.",
      href: "/transformatory-suhie",
      features: ["Без масла", "Пожаробезопасность", "Экологичность"],
    },
    {
      title: "Трансформатор ТМГ 1000/10/0,4",
      description:
        "Герметичный масляный трансформатор мощностью 1000 кВА для распределительных сетей.",
      href: "/trasformator-tmg-1000",
      features: ["1000 кВА", "10/0,4 кВ", "Герметичный"],
    },
    {
      title: "Трансформатор ТМГ 630/10/0,4",
      description:
        "Герметичный масляный трансформатор мощностью 630 кВА с улучшенными характеристиками.",
      href: "/trasformator-tmg-tmg-12-630_10_0-4-uhl1-d_ur-11",
      features: ["630 кВА", "10/0,4 кВ", "УХЛ1"],
    },
    {
      title: "Трансформатор ТМГ 25/10/0,4",
      description:
        "Компактный герметичный трансформатор для небольших объектов.",
      href: "/trasformator-tmg-25-10-0-4",
      features: ["25 кВА", "10/0,4 кВ", "Y/Zн-11"],
    },
    {
      title: "Трансформатор ТМГ 100/10/0,4 кВ",
      description:
        "Герметичный трансформатор мощностью 100 кВА для распределительных сетей.",
      href: "/transformator-tmg-11-100/10/0-4-kv",
      features: ["100 кВА", "10/0,4 кВ", "Компактный"],
    },
  ];

  return (
    <>
      <HeroSection
        title="Каталог продукции"
        subtitle="ООО Уралэнерго"
        description="Широкий ассортимент трансформаторов, подстанций и электротехнического оборудования"
        showContact={false}
      />

      <InfoSection title="Категории продукции">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </InfoSection>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Нужна помощь с выбором?
              </h2>
              <p className="text-white/90 mb-6">
                Наши специалисты помогут подобрать оптимальное оборудование для
                ваших задач. Оставьте заявку, и мы свяжемся с вами в ближайшее
                время.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
