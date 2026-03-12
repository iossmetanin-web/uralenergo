import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Lock, Gauge, Zap, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Трансформаторы ТМГ - ООО Уралэнерго",
  description:
    "Герметичные масляные трансформаторы ТМГ от производителя. Без обслуживания, энергоэффективность.",
  keywords: "трансформаторы ТМГ, герметичные трансформаторы, ТМГ-630, ТМГ-1000",
};

export default function TMGTransformersPage() {
  const features = [
    {
      icon: Lock,
      title: "Герметичный бак",
      description: "Полная герметичность исключает контакт масла с воздухом",
    },
    {
      icon: Gauge,
      title: "Без обслуживания",
      description: "Не требует доливки и замены масла в течение всего срока службы",
    },
    {
      icon: Zap,
      title: "Энергоэффективность",
      description: "Сниженные потери холостого хода и короткого замыкания",
    },
    {
      icon: Settings,
      title: "Компактность",
      description: "Оптимальные габариты для установки в ограниченных пространствах",
    },
  ];

  const models = [
    { name: "ТМГ-16/10/0,4", power: "16 кВА", voltage: "10/0,4 кВ", weight: "450 кг" },
    { name: "ТМГ-25/10/0,4", power: "25 кВА", voltage: "10/0,4 кВ", weight: "520 кг" },
    { name: "ТМГ-63/10/0,4", power: "63 кВА", voltage: "10/0,4 кВ", weight: "750 кг" },
    { name: "ТМГ-100/10/0,4", power: "100 кВА", voltage: "10/0,4 кВ", weight: "950 кг" },
    { name: "ТМГ-160/10/0,4", power: "160 кВА", voltage: "10/0,4 кВ", weight: "1350 кг" },
    { name: "ТМГ-250/10/0,4", power: "250 кВА", voltage: "10/0,4 кВ", weight: "1700 кг" },
    { name: "ТМГ-400/10/0,4", power: "400 кВА", voltage: "10/0,4 кВ", weight: "2150 кг" },
    { name: "ТМГ-630/10/0,4", power: "630 кВА", voltage: "10/0,4 кВ", weight: "2900 кг" },
    { name: "ТМГ-1000/10/0,4", power: "1000 кВА", voltage: "10/0,4 кВ", weight: "4200 кг" },
  ];

  return (
    <>
      <HeroSection
        title="Трансформаторы ТМГ"
        subtitle="Каталог продукции"
        description="Герметичные масляные трансформаторы с минимальным обслуживанием и высокой энергоэффективностью"
        primaryButton={{ text: "Заказать", href: "#contact" }}
        showContact={false}
      />

      <InfoSection title="Преимущества ТМГ">
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

      <InfoSection title="Модельный ряд ТМГ" bgColor="gray">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-[#003366] text-white">
              <tr>
                <th className="px-6 py-4 text-left">Модель</th>
                <th className="px-6 py-4 text-left">Мощность</th>
                <th className="px-6 py-4 text-left">Напряжение</th>
                <th className="px-6 py-4 text-left">Масса</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-[#003366]">
                    {model.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{model.power}</td>
                  <td className="px-6 py-4 text-gray-600">{model.voltage}</td>
                  <td className="px-6 py-4 text-gray-600">{model.weight}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/contacts">
                        Запросить цену
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InfoSection>

      <InfoSection title="Описание серии ТМГ">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Трансформаторы ТМГ (трансформатор масляный герметичный) — это
              современное решение для распределительных сетей. Герметичный бак
              полностью исключает контакт трансформаторного масла с атмосферным
              воздухом.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Преимущества герметичного исполнения:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Отсутствие окисления масла и увлажнения изоляции
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Увеличенный срок службы (25+ лет)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Минимальные эксплуатационные затраты
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Экологическая безопасность
                </span>
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
                Закажите трансформатор ТМГ
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
