"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, ChevronDown, ChefHat, Sofa, Bed, Briefcase, Bath, FileText, MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSettoriOpen, setMobileSettoriOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const settori = [
    { name: "Cucine", href: "/cucine", icon: ChefHat },
    { name: "Soggiorni", href: "/soggiorni", icon: Sofa },
    { name: "Camere", href: "/camere", icon: Bed },
    { name: "Uffici", href: "/uffici", icon: Briefcase },
    { name: "Bagni", href: "/bagni", icon: Bath },
  ]

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false)
    setMobileSettoriOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          isScrolled
            ? "backdrop-blur-lg bg-white/70 shadow-2xl border-b border-white/10"
            : "backdrop-blur-sm bg-white/80 border-b border-gray-200/20"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(6px) saturate(180%)" : "blur(4px) saturate(150%)",
          WebkitBackdropFilter: isScrolled ? "blur(6px) saturate(180%)" : "blur(4px) saturate(150%)",
        }}
      >
        {/* Overlay gradiente per migliorare il contrasto */}
        <div
          className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
            isScrolled
              ? "bg-gradient-to-b from-white/30 via-white/15 to-transparent opacity-100"
              : "bg-gradient-to-b from-white/20 via-white/10 to-transparent opacity-80"
          }`}
        />

        {/* Effetto shimmer potenziato */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/" className="flex items-center">
  <img src="/logofbs.svg" alt="FBS Arredamenti Logo" className="h-10 w-auto" />
</Link>

            </motion.div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700/95 hover:text-black transition-all duration-300 font-medium">
                Home
              </Link>
              <Link
                href="/chi-siamo"
                className="text-gray-700/95 hover:text-black transition-all duration-300 font-medium"
              >
                Chi Siamo
              </Link>

              {/* Dropdown Settori Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("settori")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-2 text-gray-700/95 hover:text-black transition-all duration-300 font-medium">
                  Settori
                  <motion.div
                    animate={{ rotate: activeDropdown === "settori" ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown size={16} className="text-gray-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeDropdown === "settori" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 rounded-xl shadow-2xl border border-gray-200/50 py-2"
                      style={{
                        backdropFilter: "blur(8px) saturate(120%)",
                        WebkitBackdropFilter: "blur(8px) saturate(120%)",
                      }}
                    >
                      {settori.map((settore, index) => {
                        const IconComponent = settore.icon
                        return (
                          <motion.div
                            key={settore.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={settore.href}
                              className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-100/80 hover:text-black transition-all duration-300 rounded-lg mx-2"
                            >
                              <IconComponent size={18} className="text-gray-600" />
                              {settore.name}
                            </Link>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                className="text-gray-700/95 hover:text-black transition-all duration-300 font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/contatti"
                className="text-gray-700/95 hover:text-black transition-all duration-300 font-medium"
              >
                Contatti
              </Link>
              <Link
                href="/blog"
                className="text-gray-700/95 hover:text-black transition-all duration-300 font-medium"
              >
                Blog
              </Link>
            </nav>

            {/* CTA Desktop - Uniformati */}
            <div className="flex items-center gap-3">
              <motion.a
                href="tel:+393382878847"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={16} />
                Chiamaci
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contatti"
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <FileText size={16} />
                  Preventivo
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/" className="flex items-center">
                <img src="/logofbs.svg" alt="FBS Arredamenti Logo" className="h-8 w-auto" />
              </Link>
            </motion.div>

            <div className="flex items-center gap-2">
              {/* CTA Mobile - Phone + WhatsApp */}
              <motion.a
                href="tel:+393382878847"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Telefono"
              >
                <Phone size={18} />
              </motion.a>

              <motion.a
                href="https://wa.me/393382878847"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </motion.a>

              {/* Menu Toggle */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Menu"
              >
                <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden backdrop-blur-3xl bg-white/80 border-t border-white/30"
              style={{
                backdropFilter: "blur(35px) saturate(200%)",
                WebkitBackdropFilter: "blur(35px) saturate(200%)",
              }}
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="/"
                      onClick={handleMobileMenuClose}
                      className="block text-lg font-medium text-gray-700/95 hover:text-black transition-colors"
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Link
                      href="/chi-siamo"
                      onClick={handleMobileMenuClose}
                      className="block text-lg font-medium text-gray-700/95 hover:text-black transition-colors"
                    >
                      Chi Siamo
                    </Link>
                  </motion.div>

                  {/* Settori Mobile Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <button
                      onClick={() => setMobileSettoriOpen(!mobileSettoriOpen)}
                      className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-black transition-colors"
                    >
                      Settori
                      <motion.div
                        animate={{ rotate: mobileSettoriOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown size={20} className="text-gray-600" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileSettoriOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-4 space-y-3 overflow-hidden"
                        >
                          {settori.map((settore, index) => {
                            const IconComponent = settore.icon
                            return (
                              <motion.div
                                key={settore.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={settore.href}
                                  onClick={handleMobileMenuClose}
                                  className="flex items-center gap-3 text-gray-600/95 hover:text-black transition-colors py-2"
                                >
                                  <IconComponent size={18} className="text-gray-500" />
                                  {settore.name}
                                </Link>
                              </motion.div>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/portfolio"
                      onClick={handleMobileMenuClose}
                      className="block text-lg font-medium text-gray-700/95 hover:text-black transition-colors"
                    >
                      Portfolio
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="/contatti"
                      onClick={handleMobileMenuClose}
                      className="block text-lg font-medium text-gray-700/95 hover:text-black transition-colors"
                    >
                      Contatti
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/blog"
                      onClick={handleMobileMenuClose}
                      className="block text-lg font-medium text-gray-700/95 hover:text-black transition-colors"
                    >
                      Blog
                    </Link>
                  </motion.div>
                  
                </nav>

                {/* CTA Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-white/30"
                >
                  <Link
                    href="/contatti"
                    onClick={handleMobileMenuClose}
                    className="block w-full bg-black text-white text-center py-3 rounded-full hover:bg-black transition-colors font-medium shadow-lg mb-4"
                  >
                    Richiedi Preventivo Gratuito
                  </Link>
                  <a
                    href="tel:+393382878847"
                    className="block w-full bg-black text-white text-center py-3 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-lg"
                  >
                    Chiamaci Ora
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
