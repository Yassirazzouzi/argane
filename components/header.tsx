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
          <div className="flex items-center">
            <h1 className="font-serif text-lg md:text-2xl font-bold text-primary">Argan Palace</h1>
          </div>

          {/* Desktop Navigation */}
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

          <div className="hidden md:flex gap-4">
            <Button variant="outline" size="sm">
              Appeler
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Réserver
            </Button>
          </div>

          <button
            className="md:hidden text-2xl p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
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
            <div className="px-4 pt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Appeler
              </Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Réserver
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
