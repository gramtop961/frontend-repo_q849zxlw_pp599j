import React from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to work with your energy — not against it?</h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/dashboard" className="inline-flex items-center justify-center rounded-lg bg-teal-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-teal-700 transition-colors">
            Launch BrainDash
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-teal-700 px-6 py-3 font-semibold shadow-sm ring-1 ring-teal-200 hover:bg-teal-50 transition-colors">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo
          </a>
        </div>
        <footer className="mt-12 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="hover:text-gray-700">About</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
          <p className="mt-4">© {new Date().getFullYear()} BrainDash. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
