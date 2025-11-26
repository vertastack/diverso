import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-white">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                Diverso
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Schildersbedrijf gevestigd in Zutphen, gespecialiseerd in schilderwerk,
                restauratie, reparatie van rottend hout, stucwerk,
                afwerkingswerk aan muren en glaszetten. Meer dan 20
                jaar ervaring, uw betrouwbare partner en aanspreekpunt voor de beste
                schildersdiensten: samen vooruit.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary-teal-dark transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary-teal-dark transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary-teal-dark transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                MENU
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/maintenance-plan"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Meerjarenonderhoudsplan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/references"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Referenties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trading"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Zakelijk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Over ons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                ONZE DIENSTEN
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/interior"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Binnen Schilderwerk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/exterior"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Buiten Schilderwerk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/wood-repair"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Houtrot reparatie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/glazing"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Glaszetten
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/kozijnen"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Kunststof Kozijnen Plaatsen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/stucwerk"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Decoratief Stucwerk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                CONTACTGEGEVENS
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/90">
                  <strong>RS Painting Group</strong>
                </p>
                <p className="text-white/70">
                  Extended Ooyerhoekseweg 16
                  <br />
                  7207 BJ Zutphen
                </p>
                <p className="text-white/70">
                  Tel.:{" "}
                  <a
                    href="tel:0575540147"
                    className="hover:text-white transition-colors"
                  >
                    0575 - 540 147
                  </a>
                </p>
                <p className="text-white/70">
                  E-mail:{" "}
                  <a
                    href="mailto:info@rsschildersgroep.nl"
                    className="hover:text-white transition-colors"
                  >
                    info@rsschildersgroep.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 text-sm text-white/60">
            <span>© Auteursrecht</span>
            <span>■</span>
            <span>Diverso - Realisatie door■ Effectief</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
