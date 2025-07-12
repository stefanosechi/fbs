"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Users, Clock, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const timeline = [
  {
    year: "1990",
    title: "Fondazione",
    description: "Nasce Falegnameria Bruno Sechi ad Alghero dalla passione per il legno e l'artigianato di qualità di Bruno",
  },
  {
    year: "2008",
    title: "Primo Showroom",
    description: "Apertura del primo showroom per esporre le nostre creazioni",
  },
  {
    year: "2015",
    title: "Espansione",
    description: "Ampliamento del laboratorio e introduzione di nuove tecnologie",
  },
  {
    year: "2020",
    title: "Innovazione Digitale",
    description: "Social Network e sito web rinnovati per raggiungere un pubblico più ampio",
  },
  {
    year: "2024",
    title: "Oggi",
    description: "Oltre 1000 progetti realizzati nel Nord Sardegna",
  },
]

const values = [
  {
    icon: Award,
    title: "Qualità",
    description: "Utilizziamo solo materiali di prima scelta e tecniche artigianali tradizionali",
  },
  {
    icon: Users,
    title: "Personalizzazione",
    description: "Ogni progetto è unico e studiato sulle specifiche esigenze del cliente",
  },
  {
    icon: Clock,
    title: "Puntualità",
    description: "Rispettiamo sempre i tempi concordati per la consegna e l'installazione",
  },
  {
    icon: Wrench,
    title: "Assistenza",
    description: "Offriamo supporto completo dalla progettazione al post-vendita",
  },
]

export default function ChiSiamoPage() {
  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/Cucina-Legno-Moderna.jpg"
          alt="Il nostro laboratorio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Chi Siamo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            La passione per il legno che si tramanda da generazioni
          </motion.p>
        </div>
      </section>

      {/* Storia */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">La Nostra Storia</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Falegnameria Bruno Sechi nasce dalla passione di una famiglia per l'arte del legno. Da oltre 30 anni realizziamo
                arredamento per interni ed esterni su misura, ad Alghero,Sassari e Nord Sardegna, unendo tradizione artigianale e innovazione tecnologica, per creare spazi unici che
                rispecchiano la personalità di chi li vive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">La Nostra Filosofia</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Crediamo che ogni spazio abbia un'anima e meriti un arredamento che la rispecchi. Per questo, ogni
                  nostro progetto inizia dall'ascolto: comprendiamo le esigenze, i gusti e lo stile di vita dei nostri
                  clienti per creare soluzioni uniche e funzionali.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  La qualità è il nostro marchio di fabbrica: selezioniamo personalmente ogni materiale e curiamo ogni
                  dettaglio della lavorazione, dall'ideazione all'installazione finale.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src="/ideazionefoto.jpg"
                  alt="Il nostro team al lavoro"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Nostro Percorso</h2>
            <p className="text-lg text-gray-600">Oltre 20 anni di crescita e innovazione continua</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-black">{item.year}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-black rounded-full flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Valori</h2>
            <p className="text-lg text-gray-600">Principi che guidano ogni nostro progetto</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="btn-circle mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Nostro Team</h2>
            <p className="text-lg text-gray-600">Professionisti appassionati al tuo servizio</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Bruno Sechi",
                role: "Fondatore & Maestro Falegname",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Andrea Sechi",
                role: "Falegname Specializzato",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Antonio Sechi",
                role: "Falename Specializzato",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Iniziamo Insieme il Tuo Progetto</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come possiamo trasformare i tuoi spazi con la nostra
              esperienza e passione.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Contattaci Ora
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
