import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Check } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "За нас | RS Schildersgroep BV",
  description: "Историята зад RS Schildersgroep BV - бояджийска компания с над 20 години опит в Зутфен и региона. Познайте нашия екип и нашата мисия.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Red Header Section */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-xl md:text-2xl font-medium">
            Гордеем се с нашите майстори, истински професионалисти с любов към работата си и око за детайлите.
          </p>
        </div>
      </section>

      {/* Story and Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Story */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                ИСТОРИЯТА ЗАД RS SCHILDERSGROEP BV
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  RS Schildersgroep е бояджийска компания, която приема прецизността и качеството за даденост, спечелвайки отлична репутация на регионалния пазар. Ние обслужваме голяма клиентела както в жилищния, така и в търговския сектор в регионите Зутфен, Лохем, Ворден, Варнсвелд, Ворст, Еефде и Девентер.
                </p>
                <p>
                  Специализирани в поддръжка на боядисване в малък и голям мащаб, реставрация, ремонт на гниеща дървесина, довършителни работи по стените и остъкляване. Екип от опитни и професионални бояджии с око за детайлите. Ключът към успеха е доверието. Това изисква прозрачен подход, експертни (цветови) съвети и кристално ясна гаранция.
                </p>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-secondary-teal p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white border-b border-white/20 pb-4">
                  <Check size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Екип от квалифицирани и опитни бояджии</span>
                </li>
                <li className="flex items-start gap-3 text-white border-b border-white/20 pb-4">
                  <Check size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Активен от 2003 г.: повече от 19 години опит</span>
                </li>
                <li className="flex items-start gap-3 text-white border-b border-white/20 pb-4">
                  <Check size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Гаранция за бояджийските работи, вие избирате сигурност</span>
                </li>
                <li className="flex items-start gap-3 text-white border-b border-white/20 pb-4">
                  <Check size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Съвременни техники и висококачествени бояджийски материали</span>
                </li>
                <li className="flex items-start gap-3 text-white border-b border-white/20 pb-4">
                  <Check size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Инвестиране в бъдещето и новите таланти</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Постоянна и надеждна точка за контакт: да продължим напред заедно</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Image - Team Photo */}
            <div className="md:col-span-2">
              <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded overflow-hidden">
                <img 
                  src="/images/team-photo.jpg" 
                  alt="RS Schildersgroep Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right Image - Worker in Action */}
            <div className="md:col-span-1">
              <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded overflow-hidden">
                <img 
                  src="/images/worker-action.jpg" 
                  alt="RS Schildersgroep Worker" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Част от RS Schildersgroep BV
          </p>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 2003 */}
            <div className="bg-white p-6 md:p-8 rounded shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                2003: Началото на RS Schildersgroep BV в Zutphen
              </h2>
              <p className="text-gray-700 leading-relaxed">
                През август 2003 г. бояджийската компания Liebrand VOF в Еефде и фирмата за боядисване и тапетиране AW Schooltink във Варнсвелд, двете дългогодишни и доверени имена в региона (Liebrand 1981 и Schooltink 1965), се обединиха. Причината беше възрастта на собствениците и предизвикателството да се осигури приемственост без компромиси. Решението беше намерено бързо: двете компании се обединиха и на 1 август 2003 г. беше създадена RS Schildersgroep BV.
              </p>
            </div>

            {/* 2005 */}
            <div className="bg-white p-6 md:p-8 rounded shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                2005: Придобиване на Nederhoff Schilderwerken BV от Eibergen
              </h2>
              <p className="text-gray-700 leading-relaxed">
                В тясно сътрудничество с предишните собственици, RS Schildersgroep приветства Nederhoff Schilderwerken BV от Eibergen в организацията чрез придобиване.
              </p>
            </div>

            {/* 2006 */}
            <div className="bg-white p-6 md:p-8 rounded shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                2006: Придобиване на Bosheide Painting Works от Voorst
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Van Bosheide Painting and Wallpapering във Ворст, компания с 156 години опит, гарантираше трайно боядисване, остъкляване и тапетиране. След първоначални разговори бързо стана ясно, че основите на неговата компания много приличат на тези на RS Schildersgroep. Г-н Van Bosheide също имаше належащ въпрос: "Ако се пенсионирам, какво ще се случи с моите служители? Те са всички невероятно лоялни служители с много години опит."
              </p>
            </div>

            {/* 2018 */}
            <div className="bg-white p-6 md:p-8 rounded shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                2018: Придобиване на Hasselo Painting от Haarlo
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hasselo Schilderwerken, със седалище в Харло, е част от RS Schildersgroep от 4 юни. Hasselo Schilderwerken е добре познато име в Харло и околността, където развива дейност повече от 27 години. Като RS Schildersgroep BV, ние сме изключително горди с разширяването си в този регион.
              </p>
            </div>

            {/* 2019 */}
            <div className="bg-white p-6 md:p-8 rounded shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                2019: Придобиване на Soer Painting от Лохем
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Повече от 23 години Мартин Соер управлява бояджийската компания М. Soer с голямо удоволствие и всеотдайност. Сега той реши да се оттегли от ежедневното управление на компанията. Той обаче ще го направи с уверението, че компанията му ще поддържа здравословно бъдеще. Придобиването няма да доведе до забележими промени за клиентите. Мартин Соер ще остане активен бояджия и ще донесе своя опит и експертиза в RS Schildersgroep.
              </p>
            </div>

            {/* 2021 */}
            <div className="bg-white p-6 md:p-8 rounded shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                2021: Придобиване на Peters Painting Works от Vorden
              </h2>
              <p className="text-gray-700 leading-relaxed">
                През 2021 г. бояджийската компания Peters Schilderwerken, от предишния собственик Antoon Peters, беше поета.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future and Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8 text-center uppercase">
              БЪДЕЩЕ И ОБРАЗОВАНИЕ: СТРУВА СИ ДА СЕ ИНВЕСТИРА В ТЯХ
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Без квалифицирани, професионални служители нямате бъдеще. RS Schildersgroep инвестира значително време и енергия в обучение. Това включва тясно сътрудничество с програма за обучение на бояджии в Зутфен, специално за млади хора.
              </p>
              <p>
                Младите хора постъпват като чираци; това е началото. От чирак до амбициозен калфа и след това до най-високото звание: майстор-художник. RS Schildersgroep има късмета да има упорити и всеотдадени професионалисти.
              </p>
              <p>
                Хората са наясно с бъдещето си, RS Schildersgroep ги мотивира и им предлага кариера. Повече от просто работа: перспектива и възможности за професионално развитие. Това е от полза както за хората, така и за компанията. Уверени професионалисти, които знаят работата си и могат да предават положителни качества, изграждат доверие при клиентите. Това прави инвестицията в обучение задължителна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <p className="text-xl md:text-2xl font-semibold mb-2">
                Интересувате ли се да научите повече за RS Schildersgroep?
              </p>
              <p className="text-lg opacity-90">
                Ще се радваме да ви разкажем повече.
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

