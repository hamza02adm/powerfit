import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Classes } from "@/components/sections/classes";
import { Pricing } from "@/components/sections/pricing";
import { Trainers } from "@/components/sections/trainers";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Pricing />
        <Trainers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
