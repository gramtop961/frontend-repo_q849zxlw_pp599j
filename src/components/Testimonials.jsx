import React from 'react'
import { motion } from 'framer-motion'

const quotes = [
  'This feels like a task manager that finally gets me.',
  'As someone with ADHD, dumping tasks by voice is a game changer.',
  'The gentle vibe makes me want to actually open my to-do list.'
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What people are saying</h2>
          <p className="text-gray-600 mt-3">Early testers share how BrainDash feels different.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 text-gray-700">
              “{q}”
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
