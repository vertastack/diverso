import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";
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

      <Footer />
    </>
  );
}

