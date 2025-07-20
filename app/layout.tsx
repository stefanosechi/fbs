import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("../components/header").then(mod => mod.Header), { ssr: false })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Falegnameria Bruno Sechi - Arredamenti su Misura ad Alghero e Sassari",
  description:"Realizziamo arredamenti su misura per cucine, soggiorni, camere, uffici e bagni ad Alghero, Sassari e nel nord Sardegna. Falegnameria artigianale di qualità con oltre 30 anni di esperienza.",
  generator: ""
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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