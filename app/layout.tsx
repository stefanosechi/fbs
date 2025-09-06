"use client";

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const script = document.createElement("script")
    script.id = "Cookiebot"
    script.src = "https://consent.cookiebot.com/uc.js"
    script.setAttribute("data-cbid", "b44d130c-bd98-4390-bf3c-5a30ce3167df")
    script.setAttribute("data-blockingmode", "auto")
    script.type = "text/javascript"
    document.head.appendChild(script)
  }, [])

  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/fbsfavicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Falegnameria Bruno Sechi",
              "image": "https://www.fbsarredamenti.it/logo.jpg", // Assicurati che il file esista
              "url": "https://www.fbsarredamenti.it",
              "telephone": "+39 338 2878847", // Inserisci il numero reale
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Punta Cristallo 8", // Inserisci l'indirizzo reale
                "addressLocality": "Alghero",
                "addressRegion": "SS",
                "postalCode": "07041",
                "addressCountry": "IT"
              },
              "description":
                "Falegnameria artigianale con oltre 30 anni di esperienza in arredamenti su misura ad Alghero, Sassari e nord Sardegna.",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.5571,
                "longitude": 8.3193
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}