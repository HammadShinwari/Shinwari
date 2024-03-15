import React from 'react'

// components import 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import End from './components/End';

// style file import 
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <End />
    </>
  )
}

export default App;