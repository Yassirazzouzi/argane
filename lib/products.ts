export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  duration: string
  icon?: string
}

// Source of truth for all spa services
export const PRODUCTS: Product[] = [
  {
    id: "massage",
    name: "Massage Relaxant",
    description: "Massage traditionnel marocain relaxant",
    duration: "60 minutes",
    priceInCents: 7999, // $79.99
  },
  {
    id: "hammam",
    name: "Hammam Traditionnel",
    description: "Expérience hammam authentique avec gommage",
    duration: "90 minutes",
    priceInCents: 9999, // $99.99
  },
  {
    id: "rituel",
    name: "Rituel Argan Visage",
    description: "Soin du visage premium à l'huile d'argan",
    duration: "60 minutes",
    priceInCents: 8999, // $89.99
  },
  {
    id: "gommage",
    name: "Gommage Sucre & Miel",
    description: "Exfoliation douce avec sucre et miel naturel",
    duration: "45 minutes",
    priceInCents: 5999, // $59.99
  },
  {
    id: "massage-pierre",
    name: "Massage Pierres Chaudes",
    description: "Massage thérapeutique avec pierres volcaniques",
    duration: "75 minutes",
    priceInCents: 8999, // $89.99
  },
  {
    id: "soin-corps",
    name: "Soin Complet du Corps",
    description: "Hydratation intensive avec produits naturels",
    duration: "90 minutes",
    priceInCents: 10999, // $109.99
  },
  {
    id: "rituel-argan",
    name: "Rituel Argan Complet",
    description: "Soin visage et corps à l'huile d'argan pure",
    duration: "120 minutes",
    priceInCents: 14999, // $149.99
  },
  {
    id: "complet",
    name: "Soin Complet Luxe",
    description: "Expérience spa complète: hammam, massage et soin visage",
    duration: "180 minutes",
    priceInCents: 24999, // $249.99
  },
]
