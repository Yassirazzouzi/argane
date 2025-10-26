import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Experience from "@/components/experience"
import Gallery from "@/components/gallery"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Booking from "@/components/booking"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  )
}
