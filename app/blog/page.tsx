"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { blogPosts } from "./data"

export default function BlogPage() {
  return (
    <div className="page-content">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-600">Scopri i nostri articoli e novità</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <time dateTime={post.date} className="block mb-4 text-gray-500">
                      {new Date(post.date).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <p className="text-gray-700">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
