import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import EngineeringFocus from './components/EngineeringFocus';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('jm-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jm-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Floating Pill Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single-Column Document Flow */}
      <main className="container">
        <Hero />
        <Projects />
        <EngineeringFocus />
        <Bio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
