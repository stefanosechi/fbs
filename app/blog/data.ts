export type BlogPost = {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
  "id": 1,
  "slug": "falegnameria-bruno-sechi-arredamenti-su-misura-alghero",
  "title": "Falegnameria Bruno Sechi: 30 anni di arredamenti su misura ad Alghero",
  "date": "2015-07-10",
  "excerpt": "Scopri la storia e l’artigianalità della Falegnameria Bruno Sechi, punto di riferimento per arredamenti su misura ad Alghero da oltre 30 anni.",
  "image": "/hero-falegnameria.jpg",
  "content": "Da oltre trent'anni, la Falegnameria Bruno Sechi rappresenta un punto di riferimento per chi cerca arredamenti su misura ad Alghero. Fondata su valori di artigianalità, attenzione ai dettagli e materiali di alta qualità, la nostra falegnameria realizza cucine, mobili, scale e soluzioni d’arredo personalizzate per ogni ambiente.\n\nOgni progetto nasce dall’ascolto del cliente, dalla progettazione su misura e dalla cura nella realizzazione, con uno sguardo sempre attento al design e alla funzionalità. Che si tratti di ristrutturare casa o di arredare un nuovo spazio, accompagniamo i nostri clienti passo dopo passo, con passione e competenza.\n\nContattaci per un sopralluogo gratuito o visita il nostro laboratorio per scoprire da vicino la qualità delle nostre realizzazioni."
}
]
