import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { title: "Главная", href: "/" },
    { title: "О компании", href: "/about" },
    { title: "Каталог", href: "/katalog" },
    { title: "Услуги", href: "/services" },
    { title: "Контакты", href: "/contacts" }
  ];

  const catalogLinks = [
    { title: "Подстанции КТП 2КТП КТПН", href: "/podstancii-ktp-2ktp-ktpn" },
    { title: "Трансформаторы масляные", href: "/transformatory-maslyanye" },
    { title: "Трансформаторы ТМГ", href: "/transformator-tmg" },
    { title: "Трансформаторы сухие", href: "/transformatory-suhie" },
    { title: "Склад готовой продукции", href: "/sklad-gotovoj-produkcii" }
  ];

  const serviceLinks = [
    { title: "Ремонт и ревизия", href: "/services" },
    { title: "Доставка", href: "/oplata-i-dostavka" },
    { title: "О производстве", href: "/o-proizvodstve" },
    { title: "Документы", href: "/dokumenty" },
    { title: "Отзывы", href: "/reviews" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#003366] to-[#001a33] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14 bg-white rounded-lg p-1.5 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Уралэнерго"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-xl group-hover:text-[#00aaff] transition-colors">УРАЛЭНЕРГО</div>
                <div className="text-xs text-gray-400">Трансформаторы и оборудование</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              ООО «УралЭнерго» — надёжный завод-изготовитель трансформаторов и электротехнического оборудования. 
              Работаем с объектами напряжением до 110 кВ.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="h-4 w-4 text-[#00aaff]" />
              <span>Пн-Пт: 9:00 - 18:00</span>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Навигация</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00aaff] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#0073e6] rounded-full group-hover:w-2 transition-all" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Каталог</h3>
            <ul className="space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00aaff] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#0073e6] rounded-full group-hover:w-2 transition-all" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+73433835658" className="flex items-start gap-3 text-gray-400 hover:text-[#00aaff] transition-colors group">
                  <Phone className="h-5 w-5 text-[#00aaff] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium group-hover:text-[#00aaff]">+7 (343) 383-56-58</div>
                    <div className="text-xs text-gray-500">Отдел продаж</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+79226080737" className="flex items-start gap-3 text-gray-400 hover:text-[#00aaff] transition-colors group">
                  <Phone className="h-5 w-5 text-[#00aaff] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium group-hover:text-[#00aaff]">+7 (922) 608-07-37</div>
                    <div className="text-xs text-gray-500">WhatsApp</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:ural-energy@internet.ru" className="flex items-start gap-3 text-gray-400 hover:text-[#00aaff] transition-colors">
                  <Mail className="h-5 w-5 text-[#00aaff] mt-0.5 flex-shrink-0" />
                  <span>ural-energy@internet.ru</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-[#00aaff] mt-0.5 flex-shrink-0" />
                  <span>г. Екатеринбург, ул. Артинская, 31/1</span>
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00aaff] rounded-lg flex items-center justify-center transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © {currentYear} ООО «Уралэнерго». Все права защищены.
            </div>
            <div className="flex items-center gap-6">
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
