import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection, FeatureCard } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Factory, Users, Award, Shield, Zap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "О компании - ООО Уралэнерго",
  description:
    "Узнайте больше о компании ООО Уралэнерго - лидере в производстве и доставке трансформаторов и электротехнического оборудования.",
  keywords: "о компании, ООО Уралэнерго, трансформаторы, электротехника, надежность, качество",
};

export default function AboutPage() {
  const advantages = [
    {
      icon: Factory,
      title: "Собственное производство",
      description:
        "Завод-изготовитель с полной технологической базой для производства электротехнического оборудования",
    },
    {
      icon: Users,
      title: "Опытная команда",
      description:
        "Квалифицированные специалисты с многолетним опытом в сфере энергетики",
    },
    {
      icon: Award,
      title: "Репутация",
      description:
        "Проверенный поставщик с безупречной репутацией на рынке электротехники",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description:
        "Всё оборудование сертифицировано и соответствует стандартам ГОСТ",
    },
    {
      icon: Zap,
      title: "До 110 кВ",
      description:
        "Работаем с объектами напряжением до 110 тысяч вольт",
    },
    {
      icon: CheckCircle,
      title: "Полный цикл",
      description:
        "От проектирования до пусконаладки — все услуги в одном месте",
    },
  ];

  const productionTypes = [
    "Силовые трансформаторы",
    "Комплектные трансформаторные подстанции (КТП)",
    "Распределительные устройства высокого и низкого напряжения",
    "Шкафы автоматики и другую электротехническую продукцию",
  ];

  return (
    <>
      <HeroSection
        title="О компании"
        subtitle="ООО Уралэнерго"
        description="Надёжный партнёр в электротехнических решениях"
        showContact={false}
      />

      {/* About Content */}
      <InfoSection title="Кто мы">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Наша команда специализируется на изготовлении оборудования для сетей
              мощностью до 110 тысяч вольт и предоставляет комплексные услуги в
              сфере энергетики.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ООО &quot;Урал Энерго&quot; — это не просто поставщик, а проверенный
              завод-изготовитель с опытом, репутацией и технологической базой. Мы
              работаем с объектами напряжением до 110 кВ, предлагая как серийные,
              так и индивидуальные инженерные решения.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Каждое оборудование выпускается по всем требованиям ГОСТ, ТУ и
              отраслевым стандартам. Благодаря постоянному внедрению новых
              технологий мы производим дополнительные линейки энергосберегающих
              трансформаторов, в медном и алюминиевом исполнении.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Сотрудничество с командой ООО &quot;Урал Энерго&quot; — для Вас всегда низкие
              цены, гарантия надежности и долговечности оборудования. В каждом
              сделанном нами продукте — сила уральского духа.
            </p>
          </div>
        </div>
      </InfoSection>

      {/* Advantages */}
      <InfoSection title="Наши преимущества" bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </InfoSection>

      {/* What we produce */}
      <InfoSection title="Что мы производим">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg mb-6">
              Мы специализируемся на производстве широкого спектра
              электротехнического оборудования:
            </p>
            <ul className="space-y-3">
              {productionTypes.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#0073e6] rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InfoSection>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Готовы начать сотрудничество?
              </h2>
              <p className="text-white/90 mb-6">
                Свяжитесь с нами для обсуждения вашего проекта. Мы предложим
                оптимальные решения для ваших задач.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
