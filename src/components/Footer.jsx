import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="hover:text-gray-700">About</a>
        <span>·</span>
        <a href="#" className="hover:text-gray-700">Privacy</a>
        <span>·</span>
        <a href="#" className="hover:text-gray-700">Contact</a>
      </div>
      <p className="mt-3">© {new Date().getFullYear()} BrainDash. All rights reserved.</p>
    </footer>
  )
}
