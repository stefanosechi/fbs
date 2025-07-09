"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    slug: "benvenuti-al-nostro-blog",
    title: "Benvenuti al nostro Blog",
    date: "2024-06-01",
    excerpt: "Scopri le ultime novità, consigli e tendenze nel mondo dell'arredamento e del design.",
    image: "/blog/blog-welcome.jpg",
  },
  {
    id: 2,
    slug: "come-scegliere-la-cucina-perfetta",
    title: "Come scegliere la cucina perfetta",
    date: "2024-05-15",
    excerpt: "Guida pratica per scegliere la cucina che si adatta alle tue esigenze e al tuo stile di vita.",
    image: "/blog/blog-cucina.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="page-content">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Benvenuti nel nostro blog dove condividiamo idee, consigli e novità sul mondo dell'arredamento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: post.id * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
