import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-xl tracking-tight text-gray-900" style={{ letterSpacing: '-0.02em' }}>
          BrainDash
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#aiot" className="hover:text-gray-900">AI + IoT</a>
        </nav>
        <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-teal-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">
          Get Started
        </a>
      </div>
    </header>
  )
}
