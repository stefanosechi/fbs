import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Falegnameria Bruno Sechi - Arredamenti su Misura ad Alghero e Sassari",
  description:
    "Realizziamo arredamenti su misura  per cucine, soggiorni, camere, uffici e bagni. Falegnameria artigianale di qualità.",
  keywords: "falegnameria, arredamenti su misura, cucine, soggiorni, camere, uffici, bagni",
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
