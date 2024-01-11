import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <main className="bg-slate-900 h-screen text-gray-300">
      {/*   Navbar    */}
        <Nav />
      <div className=" bg-slate-900 mt-18">

        {/*   Home    */}
        <section className="h-screen flex justify-evenly items-center w-[90%] mx-auto pt-40 pb-20">
          <Home />
        </section>

        {/*   About    */}
        <section className="flex justify-evenly items-center w-[90%] mx-auto pb-20">
          <About />
        </section>

        {/*   Skills    */}
        <section className="flex justify-evenly items-center w-[90%] mx-auto pb-20">
          <Skills />
        </section>
        <section>
          {/*   Projects    */}
          
        </section>

        {/*   Contact    */}
        <section className="flex justify-evenly items-center w-[90%] mx-auto pb-20">
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