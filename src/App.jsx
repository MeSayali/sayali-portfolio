import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "./lib/useLenis";

import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useLenis(reduceMotion);

  return (
    <div className={highContrast ? "high-contrast" : ""} style={{ background: "#0A0E14", minHeight: "100vh" }}>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} reduceMotion={reduceMotion} />}
      </AnimatePresence>

      <Nav
        reduceMotion={reduceMotion}
        setReduceMotion={setReduceMotion}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />
      <Hero reduceMotion={reduceMotion} />
      <About reduceMotion={reduceMotion} />
      <Education reduceMotion={reduceMotion} />
      <Experience reduceMotion={reduceMotion} />
      <Projects reduceMotion={reduceMotion} />
      <Skills reduceMotion={reduceMotion} />
      <Achievements reduceMotion={reduceMotion} />
      <CodingProfiles reduceMotion={reduceMotion} />
      <Contact reduceMotion={reduceMotion} />
      <Footer />
    </div>
  );
}
