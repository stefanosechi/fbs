import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle, ChefHat, Sofa, Bed, Briefcase, Bath, Instagram, MessageCircleIcon } from "lucide-react"
import { WhatsAppChat } from "./whatsapp-chat"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrizione */}
          <div className="md:col-span-2">
            <img
            src="/fbslogowhite.svg"
             alt="FBS Arredamenti Logo"
             className="mb-4 w-40 h-auto"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Da oltre 30 anni Falegnameria Bruno Sechi realizza arredamenti su misura, di alta qualità, ad Alghero,Sassari e nord Sardegna,
              unendo tradizione artigianale e innovazione per creare spazi unici.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/393382878847"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircleIcon size={18} />
              </a>
              <a
                href="tel:+393382878847"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Telefono"
              >
                <Phone size={18} className="text-black" />
              </a>
              <a
                href="mailto:sechibruno.fe@libero.it"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} className="text-black" />
              </a>
            </div>
          </div>

          {/* Links Rapidi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-gray-300 hover:text-white transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-300 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Settori */}
          <div>
            <h4 className="text-lg font-semibold mb-4">I Nostri Settori</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cucine"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ChefHat size={16} />
                  Cucine
                </Link>
              </li>
              <li>
                <Link
                  href="/soggiorni"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Sofa size={16} />
                  Soggiorni
                </Link>
              </li>
              <li>
                <Link
                  href="/camere"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Bed size={16} />
                  Camere
                </Link>
              </li>
              <li>
                <Link
                  href="/uffici"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Briefcase size={16} />
                  Uffici
                </Link>
              </li>
              <li>
                <Link
                  href="/bagni"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Bath size={16} />
                  Bagni
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contatti - Allineati a sinistra come originale */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-gray-400" />
              <div>
                <p className="text-white font-medium">Falegnameria</p>
                <p className="text-gray-300 text-sm">Via Punta Cristallo 8, Alghero (SS)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-400" />
              <div>
                <p className="text-white font-medium">Telefono</p>
                <p className="text-gray-300 text-sm">+39 3382878847</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-300 text-sm">sechibruno.fe@libero.it</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2024 FBS Arredamenti su Misura. Tutti i diritti riservati.</p>
              <p>P.IVA: 01209380904 | Via Punta Cristallo 8, 07041 Alghero (SS)</p>
            </div>
            <div className="text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/cookie" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
