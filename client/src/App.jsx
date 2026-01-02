import { useState, useEffect } from "react";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import ProBonoPage from "./components/ProBonoPage";
import Footer from "./components/Footer";

export default function App() {
  const [view, setView] = useState("home");

  useEffect(() => window.scrollTo(0, 0), [view]);

  return (
    <div className="antialiased bg-neutral-950 text-neutral-200 cursor-none">
      <Cursor />
      <Navbar currentView={view} onViewChange={setView} />

      <main>
        {view === "home" ? (
          <>
            <Hero />
            <Philosophy />
            <Services />
            <About />
            <Contact onOpenProBono={() => setView("pro-bono")} />
          </>
        ) : (
          <ProBonoPage onBack={() => setView("home")} />
        )}
      </main>

      <Footer />
    </div>
  );
}
