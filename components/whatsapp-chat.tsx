"use client"

import { MessageCircle, X, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const whatsappNumber = "393382878847"
  const defaultMessage = "Ciao! Ho un lavoro da affidarvi."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Torna su"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={20} />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5, opacity: [0, 0.2, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Bubble */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Pop-up di chat */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 mb-2 z-50"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">FBS Arredamenti</h3>
                  <p className="text-sm text-gray-500">Di solito risponde entro 24h</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">
                  👋 Ciao! Come possiamo aiutarti con i tuoi progetti di arredamento?
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  Apri WhatsApp
                </button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsante WhatsApp cliccabile */}
        <a
          href={isOpen ? undefined : whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isOpen) {
              e.preventDefault()
              setIsOpen(false)
            }
          }}
          className="relative block"
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat WhatsApp"
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            <motion.div
              className="absolute inset-0 bg-white rounded-full opacity-0"
              whileTap={{ scale: [0, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </a>

        {/* Effetto Pulse */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full opacity-20 pointer-events-none"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Indicatore online */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  )
}