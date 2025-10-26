import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-12 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up space-y-4 md:space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Évadez-vous vers la sérénité marocaine
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Découvrez l'essence du bien-être traditionnel marocain. Nos rituels ancestraux combinés à des produits
              naturels d'exception vous transportent vers une oasis de détente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                Découvrir nos soins
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
              >
                Réserver maintenant
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-64 sm:h-80 md:h-full animate-fade-in">
            <img
              src="/moroccan-hammam-spa-luxury-relaxation.jpg"
              alt="Hammam marocain luxe"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
