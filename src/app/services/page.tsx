import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection, FeatureCard } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Wrench, Truck, FileCheck, Settings, Search, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги - ООО Уралэнерго",
  description:
    "Услуги ООО Уралэнерго: обслуживание трансформаторов, доставка оборудования, пусконаладочные работы.",
  keywords: "услуги, обслуживание, доставка, монтаж, пусконаладка, трансформаторы",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Ремонт и ревизия",
      description:
        "Профессиональный ремонт и ревизия трансформаторов и электротехнического оборудования",
    },
    {
      icon: Truck,
      title: "Доставка",
      description:
        "Доставка оборудования по всей России транспортными компаниями",
    },
    {
      icon: FileCheck,
      title: "Сертификация",
      description:
        "Всё оборудование сертифицировано и соответствует стандартам",
    },
    {
      icon: Settings,
      title: "Пусконаладка",
      description:
        "Полный комплекс пусконаладочных работ на объекте заказчика",
    },
    {
      icon: Search,
      title: "Диагностика",
      description:
        "Диагностика состояния оборудования и рекомендации по эксплуатации",
    },
    {
      icon: Hammer,
      title: "Проектирование",
      description:
        "Разработка индивидуальных решений под требования заказчика",
    },
  ];

  return (
    <>
      <HeroSection
        title="Услуги"
        subtitle="ООО Уралэнерго"
        description="Комплексные услуги в сфере энергетики: от консультации до пусконаладки"
        showContact={false}
      />

      <InfoSection title="Наши услуги">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeatureCard key={index} {...service} />
          ))}
        </div>
      </InfoSection>

      {/* Service Details */}
      <InfoSection title="Подробнее об услугах" bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                Ремонт и ревизия оборудования
              </h3>
              <p className="text-gray-600">
                Выполняем капитальный и текущий ремонт трансформаторов всех типов.
                Проводим ревизию оборудования с заменой изношенных компонентов.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                Доставка по России
              </h3>
              <p className="text-gray-600">
                Организуем доставку оборудования в любую точку страны. Работаем с
                проверенными транспортными компаниями, гарантируем сохранность
                груза.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                Пусконаладочные работы
              </h3>
              <p className="text-gray-600">
                Выполняем полный комплекс пусконаладочных работ: испытания,
                настройка, ввод в эксплуатацию. Предоставляем гарантию на
                выполненные работы.
              </p>
            </div>
          </div>
        </div>
      </InfoSection>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Нужна консультация?
              </h2>
              <p className="text-white/90 mb-6">
                Свяжитесь с нами для обсуждения вашего проекта. Мы предложим
                оптимальные решения.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
