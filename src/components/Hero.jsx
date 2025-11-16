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
        {/* gentle veil to keep content legible */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />

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
              className="inline-block rounded-full bg-teal-50 text-teal-700 px-4 py-1 text-sm font-medium ring-1 ring-teal-200/60"
            >
              Powered by Gemini AI + IoT energy data
            </motion.span>

            {/* Heading with subtle brain graphic behind */}
            <div className="relative flex items-center justify-center">
              {/* brain graphic */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-6 hidden sm:block"
              >
                <svg
                  className="mx-auto h-[260px] w-[420px] md:h-[320px] md:w-[520px] opacity-60"
                  viewBox="0 0 520 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bd-stroke" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.55" />
                    </linearGradient>
                    <radialGradient id="bd-glow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#c7d2fe" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* soft glow */}
                  <ellipse cx="260" cy="180" rx="240" ry="140" fill="url(#bd-glow)" />

                  {/* abstract brain outline */}
                  <path
                    d="M184 86c-28 0-50 22-50 50v6c-16 2-28 16-28 32v44c0 26 20 46 46 46h18v18c0 20 16 36 36 36h50c20 0 36-16 36-36v-10h12c32 0 58-26 58-58v-18c0-18-14-32-32-32h-6v-20c0-39-31-70-70-70h-42z"
                    stroke="url(#bd-stroke)"
                    strokeWidth="2.2"
                    fill="none"
                    className="drop-shadow-[0_6px_24px_rgba(20,184,166,0.25)]"
                  />

                  {/* internal neural lines */}
                  <path d="M150 190c26-18 60-28 96-28 30 0 59 7 83 20" stroke="url(#bd-stroke)" strokeWidth="1.6" opacity="0.7" />
                  <path d="M174 156c18-14 40-22 66-22 26 0 48 6 66 18" stroke="url(#bd-stroke)" strokeWidth="1.3" opacity="0.6" />
                  <path d="M168 230c22 10 48 16 78 16 34 0 64-7 88-20" stroke="url(#bd-stroke)" strokeWidth="1.4" opacity="0.65" />

                  {/* connection nodes */}
                  {[
                    [204, 150],
                    [260, 162],
                    [312, 150],
                    [226, 188],
                    [286, 192],
                    [336, 178],
                    [242, 222],
                    [298, 220],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r={3.2} fill="#14b8a6" opacity="0.8" />
                  ))}
                </svg>
              </motion.div>

              <div className="relative">
                <motion.h1
                  custom={2}
                  variants={fadeUp}
                  className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-700"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Finally, a task manager that understands your energy.
                </motion.h1>
              </div>
            </div>

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
