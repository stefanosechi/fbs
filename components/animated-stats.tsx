"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatItemProps {
  end: number
  label: string
  suffix?: string
  duration?: number
}

function StatItem({ end, label, suffix = "", duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-black mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </motion.div>
  )
}

export function AnimatedStats() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">I Nostri Numeri</h2>
          <p className="text-gray-600">Oltre 20 anni di esperienza al vostro servizio</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatItem end={1000} label="Progetti Completati" suffix="+" />
          <StatItem end={500} label="Abitazioni Arredate" suffix="+" />
          <StatItem end={1000} label="Clienti Soddisfatti" suffix="+" />
          <StatItem end={100} label="Soluzioni Smart Home" suffix="+" />
        </div>
      </div>
    </section>
  )
}
