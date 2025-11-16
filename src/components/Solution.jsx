import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Brain, Sparkles, Activity } from 'lucide-react'

const solutions = [
  { icon: Brain, title: 'Smart AI categorization', desc: 'Let AI sort tasks by context, effort, and time so you don’t have to.' },
  { icon: Mic, title: 'Voice-based task dumping', desc: 'Capture thoughts quickly with voice, perfect for ADHD brain dumps.' },
  { icon: Sparkles, title: 'Energy-aware recommendations', desc: 'See what’s doable based on your current energy and mood.' },
  { icon: Activity, title: 'IoT health-driven insights', desc: 'Use sleep, steps, and heart rate to inform your daily plan.' },
]

export default function Solution() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A system that adapts to you</h2>
          <p className="text-gray-600 mt-3">BrainDash turns your inputs into a gentle, energy-aware plan you can actually follow.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <s.icon className="h-7 w-7 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
