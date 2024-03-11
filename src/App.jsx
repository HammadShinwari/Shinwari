import React from 'react'

// components import 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

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
    </>
  )
}

export default App;