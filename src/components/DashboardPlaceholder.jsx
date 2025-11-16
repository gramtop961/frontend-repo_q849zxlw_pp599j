import React from 'react'

export default function DashboardPlaceholder() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-teal-50">
      <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm ring-1 ring-gray-100 text-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">BrainDash Dashboard</h1>
        <p className="mt-3 text-gray-600">Coming soon. This will be your cozy, energy-aware daily view.</p>
        <a href="/" className="mt-6 inline-block text-teal-700 font-medium hover:text-teal-800">← Back to landing</a>
      </div>
    </div>
  )
}
