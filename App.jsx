import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { Background } from './components/Shared';
import { navItems } from './data/site';
import useReveal from './hooks/useReveal';
import useActiveSection from './hooks/useActiveSection';

const IDS = navItems.map((n) => n.id);

export default function App() {
  useReveal();
  const active = useActiveSection(IDS);

  return (
    <>
      <Background />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
