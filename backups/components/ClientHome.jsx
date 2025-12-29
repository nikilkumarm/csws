"use client";

import { useState } from "react";
import WelcomeModal from "./WelcomeModal";
import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import PremiumServices from "./PremiumServices";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

export default function ClientHome() {
  const [entered, setEntered] = useState(true); 
  // set false if modal should show

  return (
    <>
      {!entered && <WelcomeModal onEnter={() => setEntered(true)} />}

      <main className="relative z-0">
        <Hero />
        <WelcomeSection />
        <PremiumServices />
        <Portfolio />
        <Testimonials />
      </main>
    </>
  );
}
