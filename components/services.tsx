"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    category: "Massages",
    items: [
      { name: "Massage Relaxant", duration: "60 min", price: "80€" },
      { name: "Massage Thérapeutique", duration: "90 min", price: "120€" },
      { name: "Massage Argan Complet", duration: "120 min", price: "160€" },
    ],
  },
  {
    category: "Hammam",
    items: [
      { name: "Hammam Traditionnel", duration: "45 min", price: "50€" },
      { name: "Hammam + Gommage", duration: "75 min", price: "85€" },
      { name: "Hammam Rituel Complet", duration: "120 min", price: "140€" },
    ],
  },
  {
    category: "Rituels",
    items: [
      { name: "Rituel Argan Visage", duration: "60 min", price: "75€" },
      { name: "Rituel Corps Complet", duration: "90 min", price: "110€" },
      { name: "Rituel Mariée", duration: "180 min", price: "250€" },
    ],
  },
  {
    category: "Soins Visage & Corps",
    items: [
      { name: "Soin Visage Argan", duration: "45 min", price: "65€" },
      { name: "Soin Corps Hydratant", duration: "60 min", price: "75€" },
      { name: "Soin Complet Luxe", duration: "120 min", price: "150€" },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Nos Soins et Rituels
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Découvrez notre collection exclusive de soins traditionnels marocains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((category) => (
            <div key={category.category} className="space-y-3 md:space-y-4">
              <h4 className="font-serif text-lg md:text-xl font-bold text-primary">{category.category}</h4>
              <div className="space-y-2 md:space-y-3">
                {category.items.map((item) => (
                  <Card
                    key={item.name}
                    className="p-3 md:p-4 hover:shadow-lg transition-shadow group flex flex-col h-full"
                  >
                    <div className="flex-1">
                      <h5 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h5>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.duration}</p>
                      <p className="font-serif text-base md:text-lg font-bold text-primary mt-2">{item.price}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12 px-4">
          <Link href="/booking" className="w-full sm:w-auto">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold w-full sm:w-auto">
              Réserver Maintenant
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
