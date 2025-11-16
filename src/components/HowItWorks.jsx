import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Mic, Brain, Gauge, LayoutDashboard, Activity } from 'lucide-react'

const steps = [
  { icon: Smartphone, title: 'Open the app' },
  { icon: Mic, title: 'Dump tasks (text/voice)' },
  { icon: Brain, title: 'AI organizes them' },
  { icon: Gauge, title: 'Log mood/energy' },
  { icon: LayoutDashboard, title: 'Dashboard adapts' },
  { icon: Activity, title: 'IoT improves recs' }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How it works</h2>
          <p className="text-gray-600 mt-3">A gentle, 6-step flow that adapts in real time.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-800">{i + 1}. {s.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
