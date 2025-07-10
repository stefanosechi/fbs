"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
    servizio: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui implementeresti l'invio del form
    console.log("Form inviato:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contattaci</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Siamo qui per trasformare le tue idee in realtà. Contattaci per una consulenza gratuita.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-8">Richiedi un Preventivo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="servizio" className="block text-sm font-medium mb-2">
                      Servizio di Interesse
                    </label>
                    <select
                      id="servizio"
                      name="servizio"
                      value={formData.servizio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="cucine">Cucine</option>
                      <option value="soggiorni">Soggiorni</option>
                      <option value="camere">Camere</option>
                      <option value="uffici">Uffici</option>
                      <option value="bagni">Bagni</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    rows={6}
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Descrivi il tuo progetto..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Invia Richiesta
                </button>
              </form>
            </motion.div>

            {/* Info Contatti */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-8">Informazioni di Contatto</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="btn-circle flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefono</h3>
                      <p className="text-gray-600">+39 3382878847</p>
                      <p className="text-sm text-gray-500">Lun-Ven 8:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="btn-circle flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">sechibruno.fe@libero.it</p>
                      <p className="text-sm text-gray-500">Risposta entro 72h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="btn-circle flex-shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-gray-600">+39 3382878847</p>
                      <p className="text-sm text-gray-500">Disponibile 5/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="btn-circle flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Falegnameria</h3>
                      <p className="text-gray-600">Via Punta Cristallo 8</p>
                      <p className="text-gray-600">07041 Alghero (SS)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="btn-circle flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Orari</h3>
                      <p className="text-gray-600">Lun-Ven: 8:00-18:00</p>
                      <p className="text-gray-600">Sab: 9:00-13:00</p>
                      <p className="text-gray-600">Dom: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contatti Rapidi */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Contatti Rapidi</h3>
                <div className="flex gap-4">
                  <a href="https://wa.me/393382878847" className="btn-circle" aria-label="WhatsApp">
                    <MessageCircle size={20} />
                  </a>
                  <a href="tel:+393382878847" className="btn-circle" aria-label="Telefono">
                    <Phone size={20} />
                  </a>
                  <a href="mailto:sechibruno.fe@libero.it" className="btn-circle" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
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
    </div>
  )
}
