import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sophie Martin",
    location: "Paris, France",
    rating: 5,
    text: "Une expérience magique ! Le hammam était parfait et le massage relaxant m'a complètement détendue. Je reviens l'année prochaine !",
  },
  {
    name: "Ahmed Bennani",
    location: "Agadir, Maroc",
    rating: 5,
    text: "Enfin un vrai spa marocain authentique ! Les produits sont de qualité exceptionnelle et l'équipe est très professionnelle.",
  },
  {
    name: "Emma Johnson",
    location: "Londres, UK",
    rating: 5,
    text: "Meilleur soin du visage que j'ai jamais eu. L'huile d'argan est incroyable et les thérapeutes vraiment compétentes.",
  },
  {
    name: "Fatima Alaoui",
    location: "Casablanca, Maroc",
    rating: 5,
    text: "Un havre de paix en plein cœur de la ville. Je recommande vivement pour tous les touristes et locaux.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Avis de nos Clients</h3>
          <p className="text-lg text-muted-foreground">Découvrez ce que nos clients pensent de leur expérience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
