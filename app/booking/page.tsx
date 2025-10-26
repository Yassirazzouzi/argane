"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Booking from "@/components/booking"

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Réservez Votre Soin</h1>
            <p className="text-lg text-muted-foreground">
              Sélectionnez vos soins préférés et confirmez votre réservation
            </p>
          </div>
         
        </div>
      </main>
      <Footer />
    </>
  )
}
