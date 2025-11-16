import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Clock, Zap } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: 'Rigid lists, real lives',
    desc: 'Traditional to-do apps expect consistency. Humans have fluctuating energy, mood, and health.'
  },
  {
    icon: Clock,
    title: 'Chaos happens',
    desc: 'Schedules shift, plans break, and deadlines collide. Your system should adapt—not punish.'
  },
  {
    icon: Zap,
    title: 'Energy matters',
    desc: 'The right task at the wrong energy level feels impossible. Matching effort to energy is everything.'
  }
]

export default function Problem() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The problem we solve</h2>
            <p className="text-gray-600 text-lg">People with ADHD or chaotic schedules struggle with rigid tools. Energy, mood, and health fluctuate. Your task manager should meet you where you are.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <p.icon className="h-6 w-6 text-teal-600" />
                <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
