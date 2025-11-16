import React from 'react'
import { motion } from 'framer-motion'
import { Wearable, Watch, Database, BrainCircuit, ArrowRight } from 'lucide-react'

export default function FlowDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-700">
      <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-sm ring-1 ring-gray-100">
        <Watch className="h-5 w-5 text-indigo-600" /> Wearable
      </div>
      <ArrowRight className="hidden md:block h-5 w-5 text-gray-400" />
      <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-sm ring-1 ring-gray-100">
        <Database className="h-5 w-5 text-teal-600" /> Google Fit
      </div>
      <ArrowRight className="hidden md:block h-5 w-5 text-gray-400" />
      <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-sm ring-1 ring-gray-100">
        <BrainCircuit className="h-5 w-5 text-rose-600" /> BrainDash
      </div>
    </div>
  )
}
