"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, X, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const portfolioProjects = [
  {
    id: 1,
    title: "Ristorante Ginger Sushi - Alghero",
    category: "Attività Commerciali",
    year: "2019",
    location: "Alghero, SS",
    description: "Arredamento completo, infissi, mensole esposizione,piano bar e tavoli.",
    image: "/foto portfolio/gingersushialghero.jpg",
    images: ["/foto portfolio/gingersushialghero.jpg"],
  },
  {
    id: 2,
    title: "Villaggio Roccaruya Vip - Stintino",
    category: "Attività Commerciali",
    year: "2018-2024",
    location: "Stintino, SS",
    description: "Rimodernizzazione affitta camere e impianti esterni.",
    image: "/foto portfolio/Roccaruyavipstintino.jpg",
    images: ["/foto portfolio/Roccaruyavipstintino.jpg"],
  },
  {
    id: 3,
    title: "Appartamento Centro Storico",
    category: "residenziale",
    year: "2023",
    location: "Alghero, SS",
    description: "Ristrutturazione completa con soluzioni salvaspazio per appartamento storico",
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 4,
    title: "Showroom Moda - Porto Torres",
    category: "Attività Commerciali",
    year: "2023",
    location: "Porto Torres, SS",
    description: "Allestimento showroom con espositori e arredi su misura per boutique di lusso",
    image: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  },
  {
    id: 5,
    title: "Casa Vacanze - Costa Smeralda",
    category: "residenziale",
    year: "2022",
    location: "Arzachena, SS",
    description: "Arredamento completo per casa vacanze con stile mediterraneo contemporaneo",
    image: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 6,
    title: "Ristorante Gourmet - Alghero",
    category: "Attività Commerciali",
    year: "2022",
    location: "Alghero, SS",
    description: "Progettazione interni ristorante con cucina professionale e sala elegante",
    image: "/placeholder.svg?height=600&width=800",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  },
]

const categories = ["tutti", "residenziale", "Attività Commerciali"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("tutti")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects =
    selectedCategory === "tutti"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory)

  const selectedProjectData = portfolioProjects.find((p) => p.id === selectedProject)

  const nextImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProjectData.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProjectData.images.length) % selectedProjectData.images.length)
    }
  }

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Scopri i nostri progetti realizzati: ogni lavoro racconta una storia di qualità, passione e attenzione ai
              dettagli.
            </p>
          </motion.div>

          {/* Filtri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-4">
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
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Griglia Progetti */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                onClick={() => {
                  setSelectedProject(project.id)
                  setCurrentImageIndex(0)
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full capitalize">{project.category}</span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Progetto */}
      {selectedProject && selectedProjectData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 btn-circle-white z-10"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>

            {/* Galleria Immagini */}
            <div className="relative aspect-video">
              <img
                src={selectedProjectData.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedProjectData.title} - Immagine ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {selectedProjectData.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 btn-circle-white"
                    aria-label="Immagine precedente"
                  >
                    <ArrowRight size={20} className="rotate-180" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 btn-circle-white"
                    aria-label="Immagine successiva"
                  >
                    <ArrowRight size={20} />
                  </button>

                  {/* Indicatori */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProjectData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Vai all'immagine ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Dettagli Progetto */}
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {selectedProjectData.year}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {selectedProjectData.location}
                </div>
                <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">{selectedProjectData.category}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{selectedProjectData.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{selectedProjectData.description}</p>

              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Richiedi Preventivo Simile
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Realizziamo Anche il Tuo Progetto</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ogni progetto è unico come chi lo vive. Contattaci per trasformare le tue idee in realtà con la nostra
              esperienza e passione.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Inizia il Tuo Progetto
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
