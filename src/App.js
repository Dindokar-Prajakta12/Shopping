import React from 'react'
import Header from './components/header/Header'
import './App.css'
import Hero from './components/Hero/Hero'
import Slider from './components/Slider/Slider'
import Virtual from './components/Virtual/Virtual'
import Proo from './components/Proo/Proo'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Proo/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
