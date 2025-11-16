import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center"
          >
            <motion.span
              custom={1}
              variants={fadeUp}
              className="inline-block rounded-full bg-teal-50 text-teal-700 px-4 py-1 text-sm font-medium"
            >
              Powered by Gemini AI + IoT energy data
            </motion.span>
            <motion.h1
              custom={2}
              variants={fadeUp}
              className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
              style={{ letterSpacing: '-0.02em' }}
            >
              Finally, a task manager that understands your energy.
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              BrainDash prioritizes your to-dos based on how you actually feel — not how you should feel.
            </motion.p>
            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-teal-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-lg bg-white text-teal-700 px-6 py-3 font-semibold shadow-sm ring-1 ring-teal-200 hover:bg-teal-50 transition-colors"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Try a Demo
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
