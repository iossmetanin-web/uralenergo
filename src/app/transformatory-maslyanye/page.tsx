import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Droplets, Shield, Gauge, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Трансформаторы масляные - ООО Уралэнерго",
  description:
    "Масляные силовые трансформаторы от производителя. Широкий ассортимент, доставка по России.",
  keywords: "трансформаторы масляные, силовые трансформаторы, ТМГ, ТМ",
};

export default function OilTransformersPage() {
  const features = [
    {
      icon: Droplets,
      title: "Масляное охлаждение",
      description: "Эффективный отвод тепла для стабильной работы",
    },
    {
      icon: Shield,
      title: "Надёжность",
      description: "Проверенная конструкция и качественные материалы",
    },
    {
      icon: Gauge,
      title: "Мощность до 2500 кВА",
      description: "Широкий диапазон мощностей для любых задач",
    },
    {
      icon: Thermometer,
      title: "Климатическое исполнение",
      description: "Работа в различных климатических условиях",
    },
  ];

  const models = [
    { name: "ТМГ-25/10/0,4", power: "25 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-63/10/0,4", power: "63 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-100/10/0,4", power: "100 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-160/10/0,4", power: "160 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-250/10/0,4", power: "250 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-400/10/0,4", power: "400 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-630/10/0,4", power: "630 кВА", voltage: "10/0,4 кВ" },
    { name: "ТМГ-1000/10/0,4", power: "1000 кВА", voltage: "10/0,4 кВ" },
  ];

  return (
    <>
      <HeroSection
        title="Трансформаторы масляные"
        subtitle="Каталог продукции"
        description="Масляные силовые трансформаторы для распределительных сетей и промышленных предприятий"
        primaryButton={{ text: "Заказать", href: "#contact" }}
        showContact={false}
      />

      <InfoSection title="Преимущества масляных трансформаторов">
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

      <InfoSection title="Модельный ряд" bgColor="gray">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#003366] text-white">
              <tr>
                <th className="px-6 py-4 text-left">Модель</th>
                <th className="px-6 py-4 text-left">Мощность</th>
                <th className="px-6 py-4 text-left">Напряжение</th>
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

      <InfoSection title="Описание">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Масляные трансформаторы — это наиболее распространённый тип силовых
              трансформаторов, используемых в распределительных сетях. Масло
              выполняет функции охлаждающей среды и изолятора.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Мы предлагаем масляные трансформаторы серии ТМГ различных мощностей.
              Все трансформаторы соответствуют требованиям ГОСТ и проходят
              тщательные испытания перед отгрузкой.
            </p>
          </div>
        </div>
      </InfoSection>

      <section id="contact" className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Закажите масляный трансформатор
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
