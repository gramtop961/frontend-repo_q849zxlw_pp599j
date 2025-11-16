import React from 'react'
import { motion } from 'framer-motion'
import { Watch, ArrowRightLeft, Brain, Gauge } from 'lucide-react'

export default function AIoTDifferentiator() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why AI + IoT matters</h2>
          <p className="text-gray-600 mt-3">Wearables inform your energy. BrainDash turns that into smarter, kinder scheduling.</p>
        </div>
        <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-teal-50 to-rose-50" />
          <div className="relative grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/70 p-6 ring-1 ring-white/60">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Watch className="h-5 w-5" />
                </div>
                <p className="font-semibold text-gray-900">Wearable</p>
              </div>
              <p className="mt-2 text-sm text-gray-700">Sleep, steps, heart rate</p>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRightLeft className="h-6 w-6 text-gray-400" />
            </div>
            <div className="rounded-xl bg-white/70 p-6 ring-1 ring-white/60">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Brain className="h-5 w-5" />
                </div>
                <p className="font-semibold text-gray-900">BrainDash</p>
              </div>
              <p className="mt-2 text-sm text-gray-700">Real-time, energy-aware prioritization</p>
            </div>
          </div>
          <div className="relative mt-6 flex items-center justify-center text-teal-700 text-sm font-medium">
            <Gauge className="h-4 w-4 mr-2" /> Energy-aware productivity = kinder planning
          </div>
        </div>
      </div>
    </section>
  )
}
