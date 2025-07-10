"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { blogPosts, type BlogPost } from "../data"

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
        <div className="container mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">{post.title}</h1>
            <time dateTime={post.date} className="block mb-6 text-gray-500">
              {new Date(post.date).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </motion.div>

          <article className="max-w-5xl mx-auto">
            <img src={post.image} alt={post.title} className="w-full max-h-40 object-cover mb-6 rounded-lg" />
            <div className="prose max-w-none text-gray-700 text-center">
              <p>{post.content}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
