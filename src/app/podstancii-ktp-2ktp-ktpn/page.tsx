import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Building2, Zap, Settings, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Подстанции КТП 2КТП КТПН - ООО Уралэнерго",
  description:
    "Комплектные трансформаторные подстанции КТП, 2КТП, КТПН от производителя.",
  keywords: "КТП, 2КТП, КТПН, подстанции, трансформаторные подстанции",
};

export default function SubstationsPage() {
  const types = [
    {
      icon: Building2,
      title: "КТП — Комплектная трансформаторная подстанция",
      description:
        "Однотрансформаторная подстанция в бетонном или металлическом корпусе",
    },
    {
      icon: Zap,
      title: "2КТП — Двухтрансформаторная подстанция",
      description:
        "Подстанция с двумя трансформаторами для обеспечения резервирования",
    },
    {
      icon: Settings,
      title: "КТПН — Подстанция наружной установки",
      description:
        "Компактная подстанция для установки на открытом воздухе",
    },
  ];

  const advantages = [
    "Напряжение до 10 кВ",
    "Мощность трансформаторов от 25 до 2500 кВА",
    "Быстрый монтаж и ввод в эксплуатацию",
    "Полная заводская готовность",
    "Возможность индивидуальной комплектации",
    "Срок службы более 25 лет",
  ];

  return (
    <>
      <HeroSection
        title="Подстанции КТП 2КТП КТПН"
        subtitle="Каталог продукции"
        description="Комплектные трансформаторные подстанции для электроснабжения промышленных и гражданских объектов"
        primaryButton={{ text: "Заказать", href: "#contact" }}
        showContact={false}
      />

      <InfoSection title="Типы подстанций">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <type.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Преимущества" bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex items-center gap-3"
            >
              <span className="w-3 h-3 bg-[#00aaff] rounded-full flex-shrink-0" />
              <span className="text-gray-700">{adv}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Описание">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Комплектные трансформаторные подстанции (КТП) — это готовые к
              эксплуатации устройства для приёма, преобразования и распределения
              электроэнергии. Они изготавливаются в заводских условиях и
              поставляются в полностью собранном виде или блоками.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Подстанции КТП применяются для электроснабжения:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Промышленных предприятий</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Жилых комплексов и микрорайонов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Торговых и офисных центров</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Объектов инфраструктуры</span>
              </li>
            </ul>
          </div>
        </div>
      </InfoSection>

      <section id="contact" className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Закажите подстанцию КТП
              </h2>
              <p className="text-white/90 mb-6">
                Оставьте заявку, и наши специалисты подберут оптимальную
                комплектацию для вашего объекта.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
