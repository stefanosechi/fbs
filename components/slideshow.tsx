"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Slide {
  id: number
  image: string
  title: string
  subtitle?: string
  link: string
}

interface SlideshowProps {
  slides: Slide[]
  autoPlay?: boolean
  interval?: number
}

export function Slideshow({ slides, autoPlay = true, interval = 5000 }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h2>
              {slides[currentSlide].subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl mb-8"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              )}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <Link
                  href={slides[currentSlide].link}
                  className="btn-circle-white"
                  aria-label={`Vai a ${slides[currentSlide].title}`}
                >
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn-circle-white"
        aria-label="Slide precedente"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn-circle-white"
        aria-label="Slide successiva"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
