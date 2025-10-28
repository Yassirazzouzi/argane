
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Soins", href: "#services" },
    { label: "Galerie", href: "#experience" },
    { label: "Avis", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
         
          <div className="flex items-start gap-2">
              <img
                src="/spa8.png"
                alt="Logo Argan Palace"
                className="w-50 h-20  object-contain"
              />
            
          </div>

          {/* 🧭 Navigation Desktop */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ☎️ Boutons Desktop */}
          <div className="hidden md:flex gap-4">
            <a href="tel:+212668325820">
              <Button variant="outline" size="sm" className="bg-transparent">
                Appeler
              </Button>
            </a>

            <a
              href="https://wa.me/212668325820?text=Bonjour%2C%20je%20souhaite%20prendre%20un%20rendez-vous"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="bg-transparent">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* 📱 Menu Mobile */}
          <button
            className="md:hidden text-2xl p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* 📜 Navigation Mobile */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a href="tel:+212668325820" className="w-full block">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Appeler
              </Button>
            </a>

            <a
              href="https://wa.me/212668325820?text=Bonjour%2C%20je%20souhaite%20prendre%20un%20rendez-vous"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                WhatsApp
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
