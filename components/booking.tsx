"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Checkout from "./checkout"
import { PRODUCTS } from "@/lib/products"

export default function Booking() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  })

  const [showPayment, setShowPayment] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    alert("Reservation confirmé ! Votre réservation est enregistrée.")
    setFormData({ service: "", date: "", time: "", name: "", email: "", phone: "" })
    setShowPayment(false)
  }

  const selectedService = PRODUCTS.find((p) => p.id === formData.service)
  const servicePrice = selectedService ? (selectedService.priceInCents / 100).toFixed(2) : "0.00"

  return (
    <section id="booking" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Réservation en Ligne</h3>
          <p className="text-lg text-muted-foreground">Réservez votre soin en quelques clics</p>
        </div>

        <Card className="p-8 md:p-12">
          {!showPayment ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Soin souhaité</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionnez un soin</option>
                      {PRODUCTS.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} - ${(product.priceInCents / 100).toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Heure</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {selectedService && (
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{selectedService.name}</span>
                      <span className="text-primary font-bold text-lg">${servicePrice}</span>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Reserver 
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
  <p className="text-sm text-muted-foreground">Préférez un contact direct ?</p>
  <div className="flex flex-col sm:flex-row gap-4">
    
    {/* Bouton Appeler */}
    <a href="tel:+212668325820" className="flex-1">
      <Button variant="outline" className="w-full bg-transparent">
        📞 Appeler : +212 6 68 32 58 20
      </Button>
    </a>

    {/* Bouton WhatsApp */}
    <a
      href="https://wa.me/212668325820?text=Bonjour%2C%20je%20souhaite%20prendre%20un%20rendez-vous"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1"
    >
      <Button variant="outline" className="w-full bg-transparent">
        💬 WhatsApp
      </Button>
    </a>
  </div>
</div>

            </>
          ) : (
            <>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Résumé de votre réservation</h4>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>
                    <strong>Soin:</strong> {selectedService?.name}
                  </p>
                  <p>
                    <strong>Date:</strong> {formData.date}
                  </p>
                  <p>
                    <strong>Heure:</strong> {formData.time}
                  </p>
                  <p>
                    <strong>Nom:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                </div>
              </div>

              <Checkout productId={formData.service} bookingData={formData} onSuccess={handlePaymentSuccess} />

              <Button onClick={() => setShowPayment(false)} variant="outline" className="w-full mt-6">
                Retour au formulaire
              </Button>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}
