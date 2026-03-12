import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection, FeatureCard } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Factory, Cog, Award, Users, FileCheck, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "О производстве - ООО Уралэнерго",
  description:
    "Информация о производстве ООО Уралэнерго. Собственный завод, современное оборудование, контроль качества.",
  keywords: "производство, завод, изготовление трансформаторов, Екатеринбург",
};

export default function ProductionPage() {
  const advantages = [
    {
      icon: Factory,
      title: "Собственный завод",
      description:
        "Полный цикл производства на собственной производственной базе",
    },
    {
      icon: Cog,
      title: "Современное оборудование",
      description:
        "Высокотехнологичное оборудование для производства трансформаторов",
    },
    {
      icon: Award,
      title: "Сертификация",
      description:
        "Все изделия сертифицированы и соответствуют стандартам ГОСТ",
    },
    {
      icon: Users,
      title: "Квалифицированные кадры",
      description:
        "Опытные специалисты с многолетним стажем работы",
    },
    {
      icon: FileCheck,
      title: "Контроль качества",
      description:
        "Многоступенчатый контроль на всех этапах производства",
    },
    {
      icon: FlaskConical,
      title: "Испытательная лаборатория",
      description:
        "Собственная лаборатория для проведения испытаний",
    },
  ];

  const capabilities = [
    "Проектирование трансформаторов по индивидуальным требованиям",
    "Изготовление трансформаторов мощностью до 2500 кВА",
    "Производство комплектных трансформаторных подстанций",
    "Изготовление распределительных устройств",
    "Производство шкафов автоматики",
  ];

  return (
    <>
      <HeroSection
        title="О производстве"
        subtitle="ООО Уралэнерго"
        description="Собственный завод-изготовитель с полной технологической базой"
        showContact={false}
      />

      <InfoSection title="Производственные возможности">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Что мы производим" bgColor="gray">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <ul className="space-y-3">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="Контроль качества">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Каждое изделие проходит строгий контроль качества на всех этапах
              производства. Мы гарантируем соответствие продукции всем
              требованиям ГОСТ и технических условий.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Собственная испытательная лаборатория позволяет проводить полный
              комплекс приёмо-сдаточных и типовых испытаний.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Все трансформаторы и подстанции проходят испытания перед отгрузкой
              заказчику. По результатам испытаний выдаются протоколы и
              сертификаты соответствия.
            </p>
          </div>
        </div>
      </InfoSection>

      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Хотите посетить производство?
              </h2>
              <p className="text-white/90 mb-6">
                Приглашаем вас на экскурсию по нашему заводу. Вы сможете оценить
                производственные мощности и качество продукции.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
