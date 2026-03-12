import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfoSection } from "@/components/ui/InfoSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты - ООО Уралэнерго",
  description:
    "Свяжитесь с ООО Уралэнерго. Телефоны, email, адрес. г. Екатеринбург, ул. Артинская, 31/1",
  keywords: "контакты, телефон, адрес, Екатеринбург, Уралэнерго",
};

export default function ContactsPage() {
  return (
    <>
      <HeroSection
        title="Контакты"
        subtitle="Свяжитесь с нами"
        description="Мы всегда готовы ответить на ваши вопросы и помочь с выбором оборудования"
        showContact={false}
      />

      <InfoSection title="Наши контакты">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-4">
                Телефоны
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+73433835658"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#0073e6] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#0073e6]" />
                  <span className="text-lg">+7 (343) 383-56-58</span>
                </a>
                <a
                  href="tel:+79226080737"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#0073e6] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#0073e6]" />
                  <span className="text-lg">+7 (922) 608-07-37</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Email</h3>
              <a
                href="mailto:ural-energy@internet.ru"
                className="flex items-center gap-3 text-gray-600 hover:text-[#0073e6] transition-colors"
              >
                <Mail className="h-5 w-5 text-[#0073e6]" />
                <span className="text-lg">ural-energy@internet.ru</span>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Адрес</h3>
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-[#0073e6] mt-1" />
                <div>
                  <span className="text-lg">
                    г. Екатеринбург, ул. Артинская, 31/1
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-4">
                Режим работы
              </h3>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="h-5 w-5 text-[#0073e6]" />
                <div>
                  <span className="text-lg">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </InfoSection>

      {/* Map placeholder */}
      <InfoSection title="Как нас найти" bgColor="gray">
        <div className="bg-white rounded-xl shadow-lg p-4 h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-[#0073e6] mx-auto mb-4" />
            <p className="text-gray-600 text-lg">г. Екатеринбург, ул. Артинская, 31/1</p>
          </div>
        </div>
      </InfoSection>
    </>
  );
}
