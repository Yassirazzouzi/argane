"use client"

import { useCallback, useState } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutProps {
  productId: string
  bookingData: {
    name: string
    email: string
    phone: string
    date: string
    time: string
  }
  onSuccess?: () => void
}

export default function Checkout({ productId, bookingData, onSuccess }: CheckoutProps) {
  const [error, setError] = useState<string | null>(null)

  const startCheckoutSessionForProduct = useCallback(async () => {
    try {
      setError(null)
      const clientSecret = await startCheckoutSession(productId, bookingData)
      return clientSecret
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue"
      setError(errorMessage)
      throw err
    }
  }, [productId, bookingData])

  return (
    <div id="checkout" className="w-full">
      {error && <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>}
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret: startCheckoutSessionForProduct }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
