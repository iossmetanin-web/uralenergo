# ООО Уралэнерго — Трансформаторы и Электротехническое Оборудование

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)

Многостраничный сайт компании ООО "Уралэнерго" — производителя трансформаторов и электротехнического оборудования в Екатеринбурге.

## 🌐 Демо

Сайт доступен для просмотра в Preview Panel.

## 📋 Описание

Современный многостраничный сайт с адаптивным дизайном, созданный на основе:
- **Контент:** [всетрансформаторы.рф](https://всетрансформаторы.рф/)
- **Дизайн:** [transformer.pr-t.ru/about](https://transformer.pr-t.ru/about)

## 🚀 Технологии

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## 📄 Страницы (12 шт.)

| Страница | URL | Описание |
|----------|-----|----------|
| Главная | `/` | Hero, каталог, преимущества |
| О компании | `/about` | Информация о компании |
| Контакты | `/contacts` | Контактные данные, форма |
| Каталог | `/katalog` | Каталог продукции |
| Услуги | `/services` | Перечень услуг |
| Трансформаторы масляные | `/transformatory-maslyanye` | Масляные трансформаторы |
| Трансформаторы сухие | `/transformatory-suhie` | Сухие трансформаторы |
| Трансформаторы ТМГ | `/transformator-tmg` | Герметичные трансформаторы |
| Подстанции КТП | `/podstancii-ktp-2ktp-ktpn` | Комплектные подстанции |
| О производстве | `/o-proizvodstve` | Производственные мощности |
| Оплата и доставка | `/oplata-i-dostavka` | Условия оплаты и доставки |
| Склад | `/sklad-gotovoj-produkcii` | Наличие на складе |

## 🎨 Дизайн

Цветовая схема:
- Primary: `#003366` (тёмно-синий)
- Primary Light: `#0073e6` (синий)
- Accent: `#00aaff` (голубой)

## 🛠️ Установка и запуск

\`\`\`bash
# Клонирование репозитория
git clone https://github.com/iossmetanin-web/uralenergo.git
cd uralenergo

# Установка зависимостей
bun install

# Запуск в режиме разработки
bun run dev

# Сборка для продакшена
bun run build
\`\`\`

## 📞 Контакты

**ООО "Уралэнерго"**
- 📞 Телефон: +7 (343) 383-56-58, +7 (922) 608-07-37
- 📧 Email: ural-energy@internet.ru
- 📍 Адрес: г. Екатеринбург, ул. Артинская, 31/1
- 🕐 Режим работы: Пн-Пт 9:00 - 18:00

## 📁 Структура проекта

\`\`\`
src/
├── app/                    # Страницы (App Router)
│   ├── page.tsx           # Главная
│   ├── about/             # О компании
│   ├── contacts/          # Контакты
│   ├── katalog/           # Каталог
│   ├── services/          # Услуги
│   └── ...
├── components/
│   ├── layout/            # Header, Footer, Layout
│   └── ui/                # UI компоненты
└── lib/
    └── site-config.ts     # Конфигурация сайта
\`\`\`

## 📜 Лицензия

MIT License

---

© 2024-2026 ООО Уралэнерго. Все права защищены.
