import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({duration: 3000})
  })

  return (
    <main className="bg-slate-900 h-screen text-gray-300">
      {/*   Navbar    */}
      <div className="height-10">
        <Nav />
      </div>
      <div className=" bg-slate-900 mt-10">

        {/*   Home    */}
        <section id="home" className="flex justify-evenly items-center w-[90%] mx-auto">
          <Home />
        </section>

        {/*   About    */}
        <section id="about" className="flex justify-evenly items-center w-[90%] mx-auto">
          <About />
        </section>

        {/*   Skills    */}
        <section id="skills" className="flex justify-evenly items-center w-[90%] mx-auto pb-20">
          <Skills />
        </section>
        <section>
          {/*   Projects    */}
          
        </section>

        {/*   Contact    */}
        <section id="contact" className="flex justify-evenly items-center w-[90%] mx-auto pb-20">
          <Contact />
        </section>

        {/*   Footer    */}
        <section className="flex justify-evenly items-center w-[90%] mx-auto border-t border-orange-300">
          <Footer />
        </section>
      </div>
    </main>
  )
}

export default App