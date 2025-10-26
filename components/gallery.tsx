"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const galleryImages = [
  { id: 1, title: "Salle de Massage Relaxante", image: "/gallery-massage.jpg" },
  { id: 2, title: "Hammam Traditionnel", image: "/agadir5.jpg" },
  { id: 3, title: "Rituel Argan Premium", image: "/gallery-argan.jpg" },
  { id: 4, title: "Soin du Visage Luxe", image: "/gallery-facial.jpg" },
  { id: 5, title: "Espace Détente", image: "/gallery-relaxation.jpg" },
  { id: 6, title: "Piscine Chauffée", image: "/gallery-pool.jpg" },
  { id: 7, title: "Agadir 1", image: "/agadir1.jpg" },
  { id: 8, title: "Agadir 2", image: "/agadir11.jpg" },
  { id: 9, title: "Agadir 3", image: "/agadir3.jpg" },
  { id: 10, title: "Agadir 4", image: "/agadir4.jpg" },
  { id: 11, title: "Agadir 5", image: "/agadir5.jpg" },
  { id: 12, title: "Agadir 6", image: "/agadir6.jpg" },
]

export default function Gallery() {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="gallery" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
            Galerie Argan Palace
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez l'atmosphère luxueuse et sereine de notre spa
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 sm:px-8 md:px-16 lg:px-20">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselPrevious className="left-0 md:left-2 h-10 w-10 md:h-12 md:w-12 z-10" />
            <CarouselContent className="gap-6">
              {galleryImages.map((image, index) => {
                const isCenter = index === current
                const isAdjacent =
                  index === (current - 1 + galleryImages.length) % galleryImages.length ||
                  index === (current + 1) % galleryImages.length

                return (
                  <CarouselItem
                    key={image.id}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 transition-all duration-500"
                  >
                    <div
                      className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
                        isCenter
                          ? "h-64 sm:h-80 md:h-96 lg:h-[28rem] scale-100 z-20 shadow-2xl"
                          : isAdjacent
                          ? "h-56 sm:h-72 md:h-80 scale-95 opacity-80"
                          : "h-48 sm:h-64 md:h-72 scale-90 opacity-60 blur-sm"
                      }`}
                    >
                      <Image
                        src={image.image}
                        alt={image.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <h3 className="text-white font-serif text-lg md:text-xl font-bold p-6">
                            {image.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselNext className="right-0 md:right-2 h-10 w-10 md:h-12 md:w-12 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
