import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, StatsBand } from "./components/Bands";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Academy from "./components/Academy";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import { ContactFooter, FloatingWhatsApp, InstagramSection } from "./components/Footer";
import { BOOKING_SERVICES } from "./data";
import { scrollToId } from "./lib";

export default function App() {
  const [service, setService] = useState<string>(BOOKING_SERVICES["Bridal Packages"][1]);

  const choose = (s: string) => {
    setService(s);
    scrollToId("book");
  };

  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-plum-950 font-body text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <StatsBand />
        <Portfolio />
        <Services />
        <Packages onBook={choose} />
        <Academy onEnroll={choose} />
        <Testimonials />
        <Booking service={service} setService={setService} />
        <InstagramSection />
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}
