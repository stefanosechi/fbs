"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  ChefHat,
  Sofa,
  Bed,
  Briefcase,
  Bath,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
/* Removed imports of missing components to fix build errors */
// import { AnimatedStats } from "@/components/animated-stats"
// import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { useState, useRef, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    text: "Professionalità e attenzione ai dettagli eccezionali. La nostra cucina è esattamente come l'avevamo immaginata.",
    author: "Marco R.",
    project: "Cucina su misura",
  },
  {
    id: 2,
    text: "Qualità artigianale di altissimo livello. Consigliano sempre la soluzione migliore per ogni esigenza.",
    author: "Laura M.",
    project: "Soggiorno completo",
  },
  {
    id: 3,
    text: "Tempi rispettati e risultato finale oltre le aspettative. Veri professionisti del settore.",
    author: "Giuseppe T.",
    project: "Camera matrimoniale",
  },
  {
    id: 4,
    text: "Servizio impeccabile dall'inizio alla fine. Il team è sempre disponibile e competente.",
    author: "Anna S.",
    project: "Ufficio completo",
  },
  {
    id: 5,
    text: "Materiali di prima qualità e lavorazione artigianale superba. Consigliatissimi!",
    author: "Roberto F.",
    project: "Bagno su misura",
  },
  {
    id: 6,
    text: "Hanno trasformato completamente la nostra casa. Risultato oltre ogni aspettativa.",
    author: "Giulia P.",
    project: "Casa completa",
  },
  {
  id: 7,
  text: "Abbiamo commissionato un mobile su misura per il nostro salotto ad Alghero: risultato impeccabile, vero lavoro di falegnameria artigianale.",
  author: "Silvia C.",
  project: "Mobile soggiorno",
},
{
  id: 8,
  text: "Grazie alla falegnameria Bruno Sechi abbiamo finalmente una cucina su misura perfetta per il nostro appartamento.",
  author: "Franco D.",
  project: "Cucina su misura",
},
{
  id: 9,
  text: "Servizio eccellente e attenzione ai dettagli. Il mobile è bellissimo.",
  author: "Luisa M.",
  project: "Mobile ingresso",
},
{
  id: 10,
  text: "Abbiamo arredato tutta la zona notte con mobili in legno realizzati su misura: qualità e precisione.",
  author: "Davide R.",
  project: "Zona notte completa",
},
{
  id: 11,
  text: "Professionisti seri e capaci. Il bancone in legno per il nostro locale ad Alghero è stato molto apprezzato dai clienti.",
  author: "Marta G.",
  project: "Bancone bar",
},
{
  id: 12,
  text: "Avevamo bisogno di una libreria su misura per uno studio. Realizzazione veloce, materiali ottimi.",
  author: "Andrea L.",
  project: "Libreria artigianale",
},
{
  id: 13,
  text: "La nostra casa vacanze ha preso vita grazie ai mobili in legno su misura realizzati da Bruno Sechi. Lavoro impeccabile.",
  author: "Elena B.",
  project: "Arredo casa vacanze",
},
{
  id: 14,
  text: "Qualita' Ottima.",
  author: "Luca S.",
  project: "Parete soggiorno",
},
{
  id: 15,
  text: "Consiglio vivamente questa falegnameria ad Alghero. Armadio a muro perfetto e consegnato nei tempi stabiliti.",
  author: "Serena F.",
  project: "Armadio a muro",
},
{
  id: 16,
  text: "Il nostro nuovo bagno a Sassari ha un mobile lavabo su misura unico, in legno massello: bellissimo e funzionale.",
  author: "Giorgio N.",
  project: "Mobile bagno",
},
{
  id: 17,
  text: "Falegnameria Bruno Sechi ha saputo interpretare esattamente lo stile che cercavamo per la nostra libreria.",
  author: "Francesca V.",
  project: "Libreria su misura",
},
{
  id: 18,
  text: "Abbiamo arredato una casa storica con mobili su misura in legno: risultato eccezionale.",
  author: "Nicola P.",
  project: "Arredi in legno",
},
{
  id: 19,
  text: "Cercavamo una falegnameria artigianale ad Alghero e abbiamo trovato il meglio. Tavolo da pranzo solido e bellissimo.",
  author: "Chiara Z.",
  project: "Tavolo da pranzo",
},
{
  id: 20,
  text: "Esperienza ottima: il team ha progettato e realizzato un mobile contenitore su misura perfetto per il nostro negozio.",
  author: "Valerio E.",
  project: "Mobile negozio",
},

]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return // Non fare scroll se l'utente sta interagendo

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const isMobile = window.innerWidth < 768
        const cardWidth = isMobile ? 280 : 384
        const gap = isMobile ? 16 : 32
        const scrollAmount = cardWidth + gap
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth

        // Se siamo alla fine, torna all'inizio
        if (scrollRef.current.scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
          setCurrentTestimonial(0)
        } else {
          // Altrimenti vai alla prossima card
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }
      }
    }, 4000) // Cambia card ogni 4 secondi

    return () => clearInterval(interval)
  }, [isHovered, testimonials.length])

  const nextTestimonial = () => {
    if (scrollRef.current) {
      // Responsive scroll amount
      const isMobile = window.innerWidth < 768
      const cardWidth = isMobile ? 280 : 384 // w-70 mobile, w-96 desktop
      const gap = isMobile ? 16 : 32 // gap-4 mobile, gap-8 desktop
      const scrollAmount = cardWidth + gap
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const prevTestimonial = () => {
    if (scrollRef.current) {
      // Responsive scroll amount
      const isMobile = window.innerWidth < 768
      const cardWidth = isMobile ? 280 : 384 // w-70 mobile, w-96 desktop
      const gap = isMobile ? 16 : 32 // gap-4 mobile, gap-8 desktop
      const scrollAmount = cardWidth + gap
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section Semplificata */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Immagine di sfondo */}
        <div className="absolute inset-0">
          <Image
            src="/hero-falegnameria.jpg"
            alt="FBS Arredamenti - Arredamento in legno su misura di qualità"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay gradiente più leggero */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/15" />
        </div>

        {/* Contenuto Hero */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Arredamenti
            <br />
            <span className="text-white/90">su Misura</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Da oltre 30 anni realizziamo arredamenti ad Alghero e nel nord Sardegna. Unendo tradizione artigianale e innovazione
            tecnologica per creare spazi unici.
          </motion.p>

          {/* CTA Button Rimpicciolito */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center mb-16"
          >
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Richiedi Preventivo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Animazione migliorata - Particelle fluttuanti */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Particelle decorative */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Linee decorative animate */}
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-px bg-white/40"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="w-2 h-2 border border-white/40 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="w-12 h-px bg-white/40"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Scroll hint migliorato */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/60 text-sm font-medium">Scorri per scoprire</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/50 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Numeri Animati */}
      {/* <AnimatedStats /> */}

      {/* Introduzione */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Perché Scegliere FBS Arredamenti</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Ogni arredo che realizziamo è un progetto unico, studiato nei minimi dettagli per ottimizzare spazi e
              funzionalità. Utilizziamo solo materiali di prima qualità e tecnologie all'avanguardia per garantire
              durata e bellezza nel tempo.
            </p>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Scopri la nostra storia
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Settori con Foto Reali */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Settori</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ogni ambiente della tua casa merita un arredamento pensato su misura
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cucine", href: "/cucine", image: "/foto cucine moderne/cucinamoderna2.jpg", icon: ChefHat },
              { title: "Soggiorni", href: "/soggiorni", image: "/foto soggiorni/soggiorno5.jpg", icon: Sofa },
              { title: "Camere", href: "/camere", image: "/foto camere matrimoniali/cameramatrimoniale1.jpg", icon: Bed },
              { title: "Uffici", href: "/uffici", image: "/foto uffici/ufficio1.jpg", icon: Briefcase },
              { title: "Bagni", href: "/bagni", image: "/foto bagni classici/bagnoclassico2.jpg", icon: Bath },
              {
                title: "Portfolio",
                href: "/portfolio",
                image: "/foto soggiorni/soggiorno9.jpg",
                icon: ArrowRight,
              },
            ].map((sector, index) => {
              const IconComponent = sector.icon
              return (
                  <motion.div
                    key={sector.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      window.location.href = sector.href
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={sector.image || "/placeholder.svg"}
                        alt={sector.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent size={24} className="text-gray-600" />
                        <h3 className="text-xl font-semibold">{sector.title}</h3>
                      </div>
                      <Link href={sector.href} className="btn-circle" aria-label={`Vai a ${sector.title}`}>
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonianze a Scroll Automatico */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cosa Dicono i Nostri Clienti</h2>
            <p className="text-lg text-gray-600">Oltre 1000 clienti soddisfatti ci hanno scelto</p>
          </motion.div>

          <div className="relative">
            {/* Controlli di navigazione */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={prevTestimonial}
                className="btn-circle hover:bg-gray-100 transition-colors"
                aria-label="Testimonianza precedente"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="btn-circle hover:bg-gray-100 transition-colors"
                aria-label="Testimonianza successiva"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Container scroll orizzontale centrato con auto-scroll */}
            <div className="flex justify-center">
              <div
                ref={scrollRef}
                className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-4 max-w-full"
                style={{
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 md:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-70 md:w-96"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm md:text-lg font-bold text-gray-600">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</p>
                        <p className="text-xs md:text-sm text-gray-500">{testimonial.project}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">"{testimonial.text}"</p>

                    {/* Stelle di valutazione */}
                    <div className="flex gap-1 mt-3 md:mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Indicatori di posizione */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    if (scrollRef.current) {
                      const isMobile = window.innerWidth < 768
                      const cardWidth = isMobile ? 280 : 384 // w-70 mobile, w-96 desktop
                      const gap = isMobile ? 16 : 32 // gap-4 mobile, gap-8 desktop
                      scrollRef.current.scrollTo({
                        left: index * (cardWidth + gap),
                        behavior: "smooth",
                      })
                      setCurrentTestimonial(index)
                    }
                  }}
                  aria-label={`Vai alla testimonianza ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vieni a Trovarci</h2>
            <p className="text-lg text-gray-600">
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7802222420946!2d8.197901974977803!3d40.63472857140541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12dceb1a84cc2afb%3A0x9bae1ecbb6bdf5c8!2sFalegnameria%20Bruno%20Sechi%20Alghero!5e0!3m2!1snl!2snl!4v1751058308273!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "white(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FBS Arredamenti - Via Punta Cristallo 8, Alghero (Sassari)"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-2">
                <strong>Via Punta Cristallo 8, 07041 Alghero (SS)</strong>
              </p>
              <p className="text-sm text-gray-500">Lun-Ven: 8:00-18:00 | Sab: 9:00-13:00 | Dom: Chiuso</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto a Realizzare il Tuo Progetto?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come possiamo trasformare i tuoi spazi con arredamenti su
              misura di qualità superiore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
              >
                Richiedi Preventivo
                <ArrowRight size={20} />
              </Link>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/393382878847"
                  className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="tel:+393382878847"
                  className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Telefono"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="mailto:sechibruno.fe@libero.it"
                  className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Chat */}
      {/* <WhatsAppChat /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
