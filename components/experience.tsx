export default function Experience() {
  const images = [
    { src: "/spa-oils-argan-bottles-luxury.jpg", alt: "Huiles d'argan" },
    { src: "/moroccan-spa-flowers-rose-petals.jpg", alt: "Fleurs et pétales" },
    { src: "/a1.jpg ", alt: "Serviettes zen" },
    { src: "/hammam-steam-room-traditional-moroccan.jpg", alt: "Hammam traditionnel" },
    { src: "/agadir4.jpg", alt: "Lit de massage" },
    { src: "/agadir3.jpg", alt: "Thé à la menthe" },
    { src: "/agadir7.jpg", alt: "Thé à la menthe" },
    { src: "/agadir8.jpg", alt: "Thé à la menthe" },
    { src: "/agadir11.jpg", alt: "Thé à la menthe" },
    
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">L'Expérience Argan Palace</h3>
          <p className="text-lg text-muted-foreground italic">
            "Le bien-être n'est pas une destination, c'est un voyage vers soi-même"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
