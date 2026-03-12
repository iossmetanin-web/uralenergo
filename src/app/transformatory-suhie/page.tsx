import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Flame, Wind, Leaf, Volume2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Трансформаторы сухие - ООО Уралэнерго",
  description:
    "Сухие силовые трансформаторы для помещений с повышенными требованиями пожарной безопасности.",
  keywords: "трансформаторы сухие, ТСЛ, ТСЗ, пожаробезопасные трансформаторы",
};

export default function DryTransformersPage() {
  const features = [
    {
      icon: Flame,
      title: "Пожаробезопасность",
      description: "Отсутствие масла исключает риск возгорания",
    },
    {
      icon: Wind,
      title: "Естественное охлаждение",
      description: "Воздушное охлаждение без необходимости обслуживания",
    },
    {
      icon: Leaf,
      title: "Экологичность",
      description: "Безопасны для окружающей среды при утилизации",
    },
    {
      icon: Volume2,
      title: "Низкий уровень шума",
      description: "Комфортная эксплуатация в жилых зонах",
    },
  ];

  const applications = [
    "Жилые и административные здания",
    "Медицинские учреждения",
    "Торговые центры",
    "Промышленные предприятия",
    "Объекты с повышенными требованиями пожарной безопасности",
    "Подземные сооружения и метро",
  ];

  return (
    <>
      <HeroSection
        title="Трансформаторы сухие"
        subtitle="Каталог продукции"
        description="Сухие силовые трансформаторы для помещений с повышенными требованиями безопасности"
        primaryButton={{ text: "Заказать", href: "#contact" }}
        showContact={false}
      />

      <InfoSection title="Преимущества сухих трансформаторов">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Области применения" bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4"
            >
              <span className="w-3 h-3 bg-[#00aaff] rounded-full flex-shrink-0" />
              <span className="text-gray-700">{app}</span>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Описание">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Сухие трансформаторы — это силовые трансформаторы с воздушным
              охлаждением, которые не содержат масла. Они идеально подходят для
              установки в помещениях с повышенными требованиями к пожарной
              безопасности и экологии.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Основные типы сухих трансформаторов:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>ТСЛ</strong> — трансформаторы с литой изоляцией
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>ТСЗ</strong> — трансформаторы сухие защищённые
                </span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed">
              Все сухие трансформаторы соответствуют требованиям ГОСТ и
              проходят испытания на заводе-изготовителе.
            </p>
          </div>
        </div>
      </InfoSection>

      <section id="contact" className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Закажите сухой трансформатор
              </h2>
              <p className="text-white/90 mb-6">
                Оставьте заявку, и наши специалисты подберут оптимальную модель
                для ваших задач.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
