import React from 'react'

// components import 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';

// style file import 
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
    </>
  )
}

export default App;