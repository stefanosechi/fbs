"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ufficiImages = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Ufficio direzionale", category: "direzionale" },
  { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Ufficio operativo", category: "operativo" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Home office", category: "home-office" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Sala riunioni", category: "meeting" },
  { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "Studio professionale", category: "home-office" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Ufficio moderno", category: "operativo" },
]

const categories = ["tutte", "direzionale", "operativo", "home-office", "meeting"]

export default function UfficiPage() {
  const [selectedCategory, setSelectedCategory] = useState("tutte")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "tutte" ? ufficiImages : ufficiImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image src="/uffici-1.jpg" alt="Uffici su misura" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Uffici su Misura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Spazi di lavoro che ispirano produttività e professionalità
          </motion.p>
        </div>
      </section>

      {/* Descrizione */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ambienti di Lavoro su Misura</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Un ufficio ben progettato è fondamentale per la produttività e il benessere lavorativo. Realizziamo
                spazi professionali che combinano funzionalità ed estetica, dall'home office al grande ufficio
                aziendale, con soluzioni ergonomiche e di design.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Ergonomia Avanzata",
                  description:
                    "Postazioni di lavoro studiate per garantire comfort e salute durante le lunghe giornate",
                },
                {
                  title: "Organizzazione Ottimale",
                  description: "Sistemi di archiviazione e contenimento per mantenere ordine ed efficienza",
                },
                {
                  title: "Design Professionale",
                  description: "Ambienti che riflettono la tua immagine aziendale con stile e personalità",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galleria */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">I Nostri Uffici</h2>

            {/* Filtri */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors capitalize ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {category === "home-office" ? "Home Office" : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Griglia immagini */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Fullscreen */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 btn-circle-white"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>
          <div className="max-w-4xl max-h-full">
            <img
              src={ufficiImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
              alt={ufficiImages.find((img) => img.id === selectedImage)?.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Crea il Tuo Ufficio Ideale</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come possiamo progettare il tuo spazio di lavoro perfetto.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Richiedi Preventivo Gratuito
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
