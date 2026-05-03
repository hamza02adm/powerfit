import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Membership } from "@/components/sections/membership";
import { Coaches } from "@/components/sections/coaches";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Membership />
        <Coaches />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
