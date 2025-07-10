"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type BlogPost = {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
     slug: "falegnameria-bruno-sechi-arredamenti-su-misura-alghero",
  title: "Falegnameria Bruno Sechi: 30 anni di arredamenti su misura ad Alghero",
  date: "2015-07-10",
  excerpt: "Dal cuore di Alghero, da oltre trent'anni realizziamo arredamenti artigianali su misura, unendo tradizione, qualità e passione.",
  image: "/blog/logofbs.svg",
  content: `
  Da oltre trent'anni, la Falegnameria Bruno Sechi rappresenta un punto di riferimento per chi cerca arredamenti su misura ad Alghero. Fondata su valori di artigianalità, attenzione ai dettagli e materiali di alta qualità, la nostra falegnameria realizza cucine, mobili, scale e soluzioni d’arredo personalizzate per ogni ambiente.

Ogni progetto nasce dall’ascolto del cliente, dalla progettazione su misura e dalla cura nella realizzazione, con uno sguardo sempre attento al design e alla funzionalità. Che si tratti di ristrutturare casa o di arredare un nuovo spazio, accompagniamo i nostri clienti passo dopo passo, con passione e competenza.

Contattaci per un sopralluogo gratuito o visita il nostro laboratorio per scoprire da vicino la qualità delle nostre realizzazioni.
`
}
]

export default function BlogPostPage() {
  const params = useParams()
  const { slug } = params

  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug)
    setPost(foundPost || null)
  }, [slug])

  if (!post) {
    return <div className="container mx-auto px-4 py-16 text-center">Post non trovato.</div>
  }

  return (
    <div className="page-content">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <time dateTime={post.date} className="block mb-4 text-gray-500">
              {new Date(post.date).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </motion.div>

          <article>
            <img src={post.image} alt={post.title} className="w-full max-h-96 object-cover mb-6 rounded" />
            <div className="prose max-w-none text-gray-700">
              <p>{post.content}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
