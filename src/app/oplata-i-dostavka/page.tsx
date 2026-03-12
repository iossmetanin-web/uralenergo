import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Truck, CreditCard, Package, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Оплата и Доставка - ООО Уралэнерго",
  description:
    "Условия оплаты и доставки трансформаторов и электротехнического оборудования от ООО Уралэнерго.",
  keywords: "оплата, доставка, трансформаторы, условия, Екатеринбург",
};

export default function DeliveryPage() {
  const deliveryOptions = [
    {
      icon: Truck,
      title: "Автомобильный транспорт",
      description:
        "Доставка автотранспортом по Екатеринбургу и Свердловской области",
    },
    {
      icon: Package,
      title: "Транспортные компании",
      description:
        "Отправка транспортными компаниями в любой регион России",
    },
    {
      icon: MapPin,
      title: "Самовывоз",
      description:
        "Возможность самовывоза со склада в Екатеринбурге",
    },
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Безналичный расчёт",
      description: "Оплата по счёту для юридических лиц",
    },
    {
      icon: Shield,
      title: "Безопасная сделка",
      description: "Работа по договору с гарантией исполнения обязательств",
    },
  ];

  const terms = [
    "Отгрузка в течение 3-5 рабочих дней после поступления оплаты",
    "Доставка по Екатеринбургу — бесплатно при заказе от 100 000 руб.",
    "Стоимость доставки по регионам рассчитывается индивидуально",
    "Возможна отсрочка платежа для постоянных клиентов",
    "Гарантийное и постгарантийное обслуживание",
  ];

  return (
    <>
      <HeroSection
        title="Оплата и Доставка"
        subtitle="Условия сотрудничества"
        description="Гибкие условия оплаты и оперативная доставка по всей России"
        showContact={false}
      />

      <InfoSection title="Способы доставки">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <option.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Способы оплаты" bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center flex-shrink-0">
                <option.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#003366] mb-1">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Условия">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <ul className="space-y-3">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InfoSection>

      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Остались вопросы?
              </h2>
              <p className="text-white/90 mb-6">
                Свяжитесь с нами для уточнения условий доставки и оплаты.
                Менеджеры ответят на все ваши вопросы.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
