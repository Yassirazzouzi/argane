export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nous Contacter
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-2xl">📍</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Localisation</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Boulevard de la Corniche
                  <br />
                  80000 Agadir, Maroc
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-2xl">☎</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Téléphone</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  +212 5 28 84 00 00
                  <br />
                  +212 6 12 34 56 78
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-2xl">✉</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  info@arganpalace.ma
                  <br />
                  reservations@arganpalace.ma
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-2xl">🕐</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Horaires</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Lundi - Dimanche
                  <br />
                  09:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/agadir-morocco-map-location-corniche.jpg"
              alt="Localisation Argan Palace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
