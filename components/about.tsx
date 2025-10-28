export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🎥 Vidéo de présentation */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <video
              src="/vid1.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="w-150 h-150 object-cover"
            />
          </div>

          {/* 🧴 Texte de présentation */}
          <div className="space-y-6">
            <h3 className="font-serif text-4xl font-bold text-foreground">
              L’Art du Bien-Être Marocain
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis plus de 15 ans, Argan Palace incarne l'excellence du bien-être marocain.
              Notre philosophie repose sur trois piliers : le respect de la tradition,
              l'utilisation de produits naturels purs et l'accueil chaleureux.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque soin est une invitation au voyage, une expérience sensorielle complète
              où l'huile d'argan, l'eau de rose et les essences naturelles se conjuguent
              pour votre détente absolue.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-serif text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-serif text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
