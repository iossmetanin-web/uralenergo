// Site Configuration
export const siteConfig = {
  name: "ООО Уралэнерго",
  description: "Трансформаторы и Электротехническое Оборудование в Екатеринбурге",
  url: "https://uralenergo.ru",
  
  contacts: {
    phones: ["+7 (343) 383-56-58", "+7 (922) 608-07-37"],
    email: "ural-energy@internet.ru",
    address: "г. Екатеринбург, ул. Артинская, 31/1",
    whatsapp: "+79226080737"
  },
  
  navigation: [
    { title: "Главная", href: "/" },
    { title: "О компании", href: "/about" },
    { 
      title: "Каталог", 
      href: "/katalog",
      children: [
        { title: "Подстанции КТП 2КТП КТПН", href: "/podstancii-ktp-2ktp-ktpn" },
        { title: "Трансформаторы масляные", href: "/transformatory-maslyanye" },
        { title: "Трансформаторы ТМГ", href: "/transformator-tmg" },
        { title: "Трансформаторы сухие", href: "/transformatory-suhie" },
        { title: "Склад готовой продукции", href: "/sklad-gotovoj-produkcii" }
      ]
    },
    { title: "Услуги", href: "/services" },
    { title: "Оплата и доставка", href: "/oplata-i-dostavka" },
    { title: "О производстве", href: "/o-proizvodstve" },
    { title: "Контакты", href: "/contacts" }
  ],
  
  // Design colors from reference site
  colors: {
    primary: "#003366",
    primaryLight: "#0073e6",
    accent: "#00aaff",
    accentDark: "#005bb5",
    background: "#f0f0f0",
    white: "#ffffff"
  }
};

export type SiteConfig = typeof siteConfig;
