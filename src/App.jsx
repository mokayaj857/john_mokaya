import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { About, Hero, Skills, Projects, Contact } from "./sections";
import { ThemeProvider } from "./components/theme-provider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
    })
  },{})
  
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <section className="section">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </section>
        <section className="bg-primary">
          <Contact />
          <Footer />
        </section>
      </Router>
    </ThemeProvider>
  );
};

export default App;