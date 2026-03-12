import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Package, Clock, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Склад готовой продукции - ООО Уралэнерго",
  description:
    "Сухие и масляные трансформаторы ТМГ, КТП на складе. Быстрая отгрузка, наличие на складе.",
  keywords: "склад, наличие, трансформаторы, ТМГ, КТП, отгрузка",
};

export default function WarehousePage() {
  const inStock = [
    { name: "ТМГ-63/10/0,4", quantity: "3 шт.", status: "В наличии" },
    { name: "ТМГ-100/10/0,4", quantity: "5 шт.", status: "В наличии" },
    { name: "ТМГ-160/10/0,4", quantity: "2 шт.", status: "В наличии" },
    { name: "ТМГ-250/10/0,4", quantity: "4 шт.", status: "В наличии" },
    { name: "ТМГ-400/10/0,4", quantity: "2 шт.", status: "В наличии" },
    { name: "ТМГ-630/10/0,4", quantity: "3 шт.", status: "В наличии" },
    { name: "ТМГ-1000/10/0,4", quantity: "1 шт.", status: "Под заказ" },
    { name: "КТП-250/10/0,4", quantity: "2 шт.", status: "В наличии" },
    { name: "КТП-400/10/0,4", quantity: "1 шт.", status: "В наличии" },
    { name: "КТП-630/10/0,4", quantity: "2 шт.", status: "Под заказ" },
  ];

  const advantages = [
    {
      icon: Package,
      title: "Широкая номенклатура",
      description: "Популярные модели всегда в наличии на складе",
    },
    {
      icon: Clock,
      title: "Быстрая отгрузка",
      description: "Отгрузка в течение 1-3 дней после оплаты",
    },
    {
      icon: CheckCircle,
      title: "Готовность к эксплуатации",
      description: "Всё оборудование испытано и готово к работе",
    },
  ];

  return (
    <>
      <HeroSection
        title="Склад готовой продукции"
        subtitle="Наличие на складе"
        description="Популярные модели трансформаторов и подстанций всегда в наличии для быстрой отгрузки"
        primaryButton={{ text: "Заказать", href: "#contact" }}
        showContact={false}
      />

      <InfoSection title="Преимущества">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Наличие на складе" bgColor="gray">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-[#003366] text-white">
              <tr>
                <th className="px-6 py-4 text-left">Наименование</th>
                <th className="px-6 py-4 text-center">Количество</th>
                <th className="px-6 py-4 text-center">Статус</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {inStock.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-[#003366]">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-center">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        item.status === "В наличии"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/contacts">
                        Запросить
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          * Уточняйте актуальное наличие у менеджера. Информация обновляется
          ежедневно.
        </p>
      </InfoSection>

      <InfoSection title="Информация">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Всё оборудование на складе прошло заводские испытания и готово к
              отгрузке. По каждому изделию предоставляется полный комплект
              документации: паспорт, сертификат соответствия, руководство по
              эксплуатации.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Не нашли нужную модель? Свяжитесь с нами — изготовим оборудование
              по вашим требованиям в кратчайшие сроки.
            </p>
          </div>
        </div>
      </InfoSection>

      <section id="contact" className="py-16 bg-gradient-to-r from-[#003366] to-[#0073e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Уточнить наличие
              </h2>
              <p className="text-white/90 mb-6">
                Оставьте заявку, и менеджер свяжется с вами для уточнения
                актуального наличия и цен.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
