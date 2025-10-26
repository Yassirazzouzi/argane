export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-serif text-xl font-bold mb-4"></h4>
            <p className="text-background/80 text-sm leading-relaxed">
              Votre destination de bien-être marocain authentique depuis 2009.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Navigation</h5>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#hero" className="hover:text-background transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Soins
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-background transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Légal</h5>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Suivez-nous</h5>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-background transition-colors">
                f
              </a>
              <a href="#" className="hover:text-background transition-colors">
                📷
              </a>
              <a href="#" className="hover:text-background transition-colors">
                𝕏
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
          <p>&copy; 2025 Argan Palace. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
