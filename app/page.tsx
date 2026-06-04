import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <SectionDivider />
        <Process />
        <About />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}