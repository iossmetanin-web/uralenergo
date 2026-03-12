import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, Shield, Factory, Truck, Award, Zap, Wrench, FileCheck } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "ООО Уралэнерго - Трансформаторы и Электротехническое Оборудование в Екатеринбурге",
  description: "ООО Уралэнерго предлагает трансформаторы и электротехническое оборудование, соответствующее международным стандартам. Доставка и комплексные решения.",
  keywords: "трансформаторы, электротехническое оборудование, Екатеринбург, обслуживание, доставка, подстанции, КТП, ТМГ, ТМ",
};

export default function HomePage() {
  const products = [
    {
      title: "Подстанции КТП 2КТП КТПН",
      description: "Комплектные трансформаторные подстанции для электроснабжения промышленных и гражданских объектов. Напряжение до 10 кВ.",
      image: "/images/products/ktp.png",
      href: "/podstancii-ktp-2ktp-ktpn"
    },
    {
      title: "Трансформаторы масляные",
      description: "Масляные силовые трансформаторы для распределительных сетей и промышленных предприятий. Мощность до 2500 кВА.",
      image: "/images/products/transformers.png",
      href: "/transformatory-maslyanye"
    },
    {
      title: "Трансформаторы ТМГ",
      description: "Герметичные масляные трансформаторы серии ТМГ с расширенным функционалом. Без обслуживания, энергоэффективность.",
      image: "/images/products/transformer_tmg.png",
      href: "/transformator-tmg"
    },
    {
      title: "Трансформаторы сухие",
      description: "Сухие силовые трансформаторы для помещений с повышенными требованиями пожарной безопасности.",
      image: "/images/products/transformer_tsl.png",
      href: "/transformatory-suhie"
    }
  ];

  const features = [
    {
      icon: Factory,
      title: "Собственное производство",
      description: "Завод-изготовитель с полной технологической базой для производства трансформаторов и электротехнического оборудования"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Всё оборудование сертифицировано и соответствует стандартам ГОСТ и отраслевым техническим условиям"
    },
    {
      icon: Truck,
      title: "Доставка по России",
      description: "Доставим оборудование в любую точку страны транспортными компаниями с гарантией сохранности груза"
    },
    {
      icon: Wrench,
      title: "Сервисное обслуживание",
      description: "Полный цикл услуг: от проектирования и изготовления до монтажа и пусконаладочных работ"
    },
    {
      icon: Award,
      title: "Опыт и репутация",
      description: "Проверенный завод-изготовитель с опытом работы и безупречной репутацией на рынке электротехники"
    },
    {
      icon: Zap,
      title: "Напряжение до 110 кВ",
      description: "Работаем с объектами напряжением до 110 кВ, предлагаем серийные и индивидуальные инженерные решения"
    }
  ];

  const productionTypes = [
    "Силовые трансформаторы",
    "Комплектные трансформаторные подстанции (КТП)",
    "Распределительные устройства высокого и низкого напряжения",
    "Шкафы автоматики и другую электротехническую продукцию"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory.jpg"
            alt="Производство трансформаторов"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/85 to-[#0073e6]/70" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#00aaff]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#00aaff] text-sm font-medium mb-6">
              🏭 Производство трансформаторов с 2010 года
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ваш Партнёр в Электротехнических Решениях
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Мы понимаем, что надёжность электроэнергетических систем — это основа для успешного функционирования бизнеса. 
              Сотрудничество с командой «Урал Энерго» — гарантия высокого качества работ, надёжность и долговечность оборудования.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#003366] hover:bg-gray-100 shadow-xl">
                <Link href="/katalog">
                  Перейти в каталог
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/about">О компании</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#00aaff] text-white hover:bg-[#005bb5] shadow-lg">
                <a href="tel:+73433835658">
                  <Phone className="mr-2 h-5 w-5" />
                  +7 (343) 383-56-58
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/70 text-sm">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm">клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">110 кВ</div>
                <div className="text-white/70 text-sm">напряжение</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#0073e6] font-semibold text-sm uppercase tracking-wider">Каталог продукции</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mt-3 mb-4">Наше оборудование</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ООО «УралЭнерго» предлагает широкий ассортимент трансформаторов и подстанций, 
              которые отвечают самым высоким стандартам качества и безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link key={index} href={product.href} className="group">
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium flex items-center gap-2">
                        Подробнее <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#0073e6] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white shadow-lg shadow-[#0073e6]/30">
              <Link href="/katalog">
                Весь каталог продукции
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#0073e6] font-semibold text-sm uppercase tracking-wider">О компании</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mt-3 mb-6">
                Надёжный партнёр в электротехнических решениях
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Наша команда специализируется на изготовлении оборудования для сетей мощностью до 110 тысяч вольт 
                и предоставляет комплексные услуги в сфере энергетики.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ООО «Урал Энерго» — это не просто поставщик, а проверенный завод-изготовитель с опытом, 
                репутацией и технологической базой. Мы работаем с объектами напряжением до 110 кВ, 
                предлагая как серийные, так и индивидуальные инженерные решения.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Каждое оборудование выпускается по всем требованиям ГОСТ, ТУ и отраслевым стандартам. 
                Благодаря постоянному внедрению новых технологий мы производим дополнительные линейки 
                энергосберегающих трансформаторов, в медном и алюминиевом исполнении.
              </p>
              
              <div className="space-y-3 mb-8">
                {productionTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#0073e6] rounded-full" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-[#0073e6] hover:bg-[#005bb5] text-white">
                <Link href="/about">
                  Узнать больше о компании
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/production1.jpg"
                    alt="Производство трансформаторов"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">15+</div>
                    <div className="text-sm opacity-90">лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#0073e6] font-semibold text-sm uppercase tracking-wider">Преимущества</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mt-3 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Сотрудничество с командой ООО «Урал Энерго» — для Вас всегда низкие цены, 
              гарантия надежности и долговечности оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#0073e6]/30">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0073e6] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aaff]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Выбирайте стабильность и качество уже сегодня!
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Всё оборудование сертифицировано, проходит лабораторные испытания и готово к отгрузке. 
                На складе всегда в наличии популярные модели трансформаторов и комплектующих.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-8 w-8 text-[#00aaff]" />
                    <div>
                      <div className="text-sm text-white/70">Телефон</div>
                      <div className="font-bold">+7 (343) 383-56-58</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-8 w-8 text-[#00aaff]" />
                    <div>
                      <div className="text-sm text-white/70">Email</div>
                      <div className="font-bold text-sm">ural-energy@internet.ru</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="h-6 w-6 text-[#00aaff]" />
                <span>г. Екатеринбург, ул. Артинская, 31/1</span>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/production2.jpg"
                  alt="Склад готовой продукции"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-[#0073e6] font-semibold text-sm uppercase tracking-wider">Склад</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mt-3 mb-6">
                Склад готовой продукции
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Всё оборудование сертифицировано, проходит лабораторные испытания и готово к отгрузке. 
                На складе всегда в наличии популярные модели трансформаторов и комплектующих.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                По каждому изделию предоставляется полный комплект документации: паспорт, 
                сертификат соответствия, руководство по эксплуатации.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white shadow-lg">
                <Link href="/sklad-gotovoj-produkcii">
                  Посмотреть наличие на складе
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
