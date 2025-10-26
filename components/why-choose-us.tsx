const reasons = [
  {
    icon: "🍃",
    title: "Produits Naturels",
    description: "Huile d'argan pure, sans additifs chimiques, directement du Maroc",
  },
  {
    icon: "👥",
    title: "Thérapeutes Qualifiés",
    description: "Équipe expérimentée formée aux techniques traditionnelles marocaines",
  },
  {
    icon: "🚚",
    title: "Navette Gratuite",
    description: "Service de transport gratuit depuis votre hôtel ou résidence",
  },
  {
    icon: "✨",
    title: "Atmosphère Authentique",
    description: "Décor oriental traditionnel pour une immersion totale",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Pourquoi nous choisir</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full text-3xl">{reason.icon}</div>
              </div>
              <h4 className="font-semibold text-lg text-foreground">{reason.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
