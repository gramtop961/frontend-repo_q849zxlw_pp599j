import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import CoreFeatures from './components/CoreFeatures'
import HowItWorks from './components/HowItWorks'
import AIoTDifferentiator from './components/AIoTDifferentiator'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div id="problem"><Problem /></div>
        <div id="solution"><Solution /></div>
        <div id="features"><CoreFeatures /></div>
        <div id="how"><HowItWorks /></div>
        <div id="aiot"><AIoTDifferentiator /></div>
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}

export default App
