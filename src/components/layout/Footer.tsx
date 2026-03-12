import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#003366] font-bold text-lg">УЭ</span>
              </div>
              <div>
                <div className="font-bold text-lg">Уралэнерго</div>
                <div className="text-sm text-gray-300">Надежные решения</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              ООО «УралЭнерго» — надёжный завод-изготовитель трансформаторов и электротехнического оборудования с опытом и репутацией.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock className="h-4 w-4" />
              Пн-Пт: 9:00 - 18:00
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Catalog links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/transformatory-maslyanye" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Трансформаторы масляные
                </Link>
              </li>
              <li>
                <Link href="/transformatory-suhie" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Трансформаторы сухие
                </Link>
              </li>
              <li>
                <Link href="/transformator-tmg" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Трансформаторы ТМГ
                </Link>
              </li>
              <li>
                <Link href="/podstancii-ktp-2ktp-ktpn" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Подстанции КТП
                </Link>
              </li>
              <li>
                <Link href="/sklad-gotovoj-produkcii" className="text-gray-300 hover:text-[#00aaff] transition-colors">
                  Склад готовой продукции
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              {siteConfig.contacts.phones.map((phone, i) => (
                <li key={i}>
                  <a href={`tel:${phone}`} className="flex items-center gap-2 text-gray-300 hover:text-[#00aaff] transition-colors">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.contacts.email}`} className="flex items-center gap-2 text-gray-300 hover:text-[#00aaff] transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                  {siteConfig.contacts.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} ООО Уралэнерго. Все права защищены.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/politika-konfidencialnosti" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/user/agreement" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
