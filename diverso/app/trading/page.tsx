import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Check, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Търговски | RS Schildersgroep BV",
  description: "RS Schildersgroep BV е вашият постоянен партньор за боядисване на бизнес сгради, паметници и офиси. Научете повече за нашите услуги и предимства.",
};

export default function TradingPage() {
  const organizations = [
    "Здравни заведения",
    "Образователни институции",
    "Жилищни асоциации",
    "Асоциация на собствениците",
    "Културни институции",
    "МСП",
    "Управители на имоти",
    "Търговия на дребно",
    "Правителство",
  ];

  const projects = [
    {
      title: "Пожарна станция – Зютфен",
      service: "ИНТЕРИОРНО БОЯДИСВАНЕ",
      description: "По поръчка на пожарната служба в Зютфен извършихме всички интериорни бояджийски работи: офиси, приемни, спални, коридори и врати. С елегантен завършек и свежа, издръжлива цветова схема, целият интериор получи модерен вид. В допълнение към боядисването и мазилките, ние също така боядисахме целия асансьор на това място в модерен антрацитен цвят.",
      image: "/images/projects/fire-station-zutphen.jpg",
      imagePosition: "right" as const,
    },
    {
      title: "GGNet - Уорнсвелд",
      service: "ВЪТРЕШНО, ВЪНШНО БОЯДИСВАНЕ И СТЪКЛАРСКИ УСЛУГИ",
      description: "В сътрудничество с Dijkhof Bouw извършихме цялостни бояджийски работи. Вътрешно: целеви ремонти, сканиране и боядисване на гладки стени, нов уплътнител и избелени тавани за свеж, единен вид. Външно: ремонт на гниеща дървесина и боядисване. Накрая: подмяна на остъкляването. Инсталирани са над 150 стъкла с специални покрития за допълнителен комфорт и изолация.",
      image: "/images/projects/ggnet-warnsveld.jpg",
      imagePosition: "left" as const,
    },
    {
      title: "Музей Мор – Горсел",
      service: "ИНТЕРИОРНО БОЯДИСВАНЕ",
      description: "RS Schildersgroep е дългогодишен партньор на Музей Мор в Горсел. Ние извършваме тапетиране и боядисване няколко пъти годишно. Това изисква гъвкавост и прецизност, тъй като изложбите се сменят често. Ние гарантираме, че работата винаги е завършена навреме, между демонтажа и монтажа на изложбите, и че цветовата схема винаги е правилна.",
      image: "/images/projects/museum-more-gorssel.jpg",
      imagePosition: "right" as const,
    },
    {
      title: "VVE де Ваарден – Зютфен",
      service: "ВЪНШНО БОЯДИСВАНЕ И СТЪКЛАРСКИ УСЛУГИ",
      description: "За VVE De Waarden в Зютфен извършихме цялостното външно боядисване на четири жилищни блока, реновация на прозорци, рамки за прозорци, рамки за врати и врати. Също така извършихме устойчив ремонт на фасадните облицовки. Важно е да се отбележи, че включвахме само външни работи. Освен това извършихме основна поддръжка за всички блокове и подменихме остъкляването с енергийно ефективни HR++ прозорци за по-добър комфорт и намалени енергийни разходи.",
      image: "/images/projects/vve-de-waarden-zutphen.jpg",
      imagePosition: "left" as const,
    },
    {
      title: "Landal GreenParks - Doetinchem",
      service: "БОЯДИСВАНЕ И ПОДДРЪЖКА",
      description: "За Landal GreenParks в Doetinchem извършихме редовна поддръжка и боядисване на различни сгради в парка. Работата включваше както интериорно, така и екстериорно боядисване, с акцент върху качеството и издръжливостта.",
      image: "/images/projects/landal-greenparks-doetinchem.jpg",
      imagePosition: "right" as const,
    },
  ];

  return (
    <>
      <Header />

      {/* Red Header Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-xl md:text-2xl font-medium">
            „Изпълнението на обещаното, доверието и ясната комуникация са основата за дългосрочна връзка."
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6 uppercase leading-tight">
                ВАШИЯТ ПОСТОЯНЕН ПАРТНЬОР ЗА БОЯДИСВАНЕ НА (БИЗНЕС) СГРАДИ, ПАМЕТНИЦИ И ОФИСИ
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                <p>
                  Търсите ли надежден партньор, който мисли заедно с вас, грижи се за всичко и осигурява безпроблемно обслужване? RS Schildersgroep е вашата единствена точка за контакт за целия пакет: боядисване, ремонт на гниеща дървесина, остъкляване, шпакловане и довършителни работи по стените. Работим за здравни заведения, училища/образователни институции, изпълнители и мениджъри на имоти, които ценят ясната комуникация, спазването на графици и безупречните резултати.
                </p>
                <p>
                  Започваме с проучване и превръщаме вашите желания в персонализиран план. Предпочитате повече контрол? Ако желаете, можем да ви предоставим многогодишен план за поддръжка (МЈОР) с приоритети и сценарии, така че да знаете точно какво е необходимо, кога и какво означава това за вашия бюджет и персонал.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-red-dark text-white px-8 py-4 font-semibold transition-colors"
              >
                Свържете се с нас <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right Column - Features List */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Екип от квалифицирани и опитни бояджии</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Повече от 20 години опит в големи проекти</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Ефективно планиране на вашите бизнес операции</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Професионални и експертни съвети (за цветове) на място</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Гаранция за бояджийските работи, вие избирате сигурност</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Пълна грижа; едно лице за контакт</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-800">Боядисване, гниене на дърво, мазилка и остъкляване</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark text-center mb-12">
            За какви видове организации работи RS Schildersgroep BV?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {organizations.map((org, index) => (
              <div key={index} className="flex items-center gap-3">
                <ArrowRight size={20} className="text-gray-600 flex-shrink-0" />
                <span className="text-gray-800">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark text-center mb-16 uppercase">
            ОТКРИЙТЕ ПРЕКРАСНИТЕ ПРОЕКТИ, КОИТО СМЕ ЗАВЪРШИЛИ
          </h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  project.imagePosition === "right" ? "" : "lg:flex-row-reverse"
                }`}
              >
                {project.imagePosition === "left" && (
                  <div className="order-2 lg:order-1">
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className={`order-1 ${project.imagePosition === "left" ? "lg:order-2" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold uppercase mb-4 text-sm">
                    {project.service}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {project.imagePosition === "right" && (
                  <div className="order-2">
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <p className="text-xl md:text-2xl font-semibold mb-2">
                Любопитни ли сте за възможностите за вашия (бизнес) имот?
              </p>
              <p className="text-lg opacity-90">
                Открийте нашия опит: ние сме тук, за да ви помогнем.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 bg-white text-primary px-6 py-3 border-2 border-dashed border-white">
                <Phone size={24} />
                <a 
                  href="tel:0575540147" 
                  className="font-bold text-xl hover:underline"
                >
                  0575 - 540 147
                </a>
              </div>
              <Link 
                href="/contact"
                className="bg-secondary-teal hover:bg-secondary-teal-dark text-white px-8 py-3 font-semibold transition-colors uppercase"
              >
                СВЪРЖЕТЕ СЕ С НАС
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

