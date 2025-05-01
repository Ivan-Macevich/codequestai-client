import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactForm } from "@/components/landing/ContactForm";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}