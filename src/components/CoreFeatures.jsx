import React from 'react'
import { motion } from 'framer-motion'
import { ListChecks, Mic, Italic, Gauge, LayoutDashboard, HeartPulse, LineChart, Database, Bot, CalendarCheck2, Repeat } from 'lucide-react'

const Section = ({ title, children }) => (
  <div className="rounded-2xl bg-gradient-to-b from-white to-indigo-50/40 p-6 ring-1 ring-gray-100">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <div className="mt-4 grid sm:grid-cols-2 gap-3">{children}</div>
  </div>
)

const Item = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
    <Icon className="h-5 w-5 text-teal-600 mt-1" />
    <div>
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
)

export default function CoreFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Core features</h2>
          <p className="text-gray-600 mt-3">Three levels designed for comfort today and growth tomorrow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <Section title="Level 1: Smart Task List">
              <Item icon={Italic} title="Natural language input" desc="Type how you speak—our AI understands context." />
              <Item icon={Mic} title="Voice capture" desc="Dump tasks hands-free when your brain is racing." />
              <Item icon={Gauge} title="Energy-based sorting" desc="Automatically orders tasks by effort vs. energy." />
              <Item icon={LayoutDashboard} title="Smart daily dashboard" desc="See a gentle, achievable plan for today." />
            </Section>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Section title="Level 2: Life Integration Hub">
              <Item icon={HeartPulse} title="Mood + energy check-ins" desc="Quick prompts help you self-tune your day." />
              <Item icon={LineChart} title="Google Fit sync" desc="Sleep, steps, and heart rate inform your plan." />
              <Item icon={Database} title="Pattern detection" desc="Spot relationships between health and productivity." />
              <Item icon={Repeat} title="Supabase storage" desc="Secure, scalable data storage for your life." />
            </Section>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Section title="Level 3: Personal Productivity Coach (Future)">
              <Item icon={Bot} title="AI coaching" desc="Gentle nudges and compassionate guidance." />
              <Item icon={Repeat} title="Habit tracking" desc="Build repeatable routines at your own pace." />
              <Item icon={CalendarCheck2} title="Calendar integration" desc="See tasks and events in one calming view." />
              <Item icon={Database} title="Edge Functions logic" desc="Smart automations that respect your energy." />
            </Section>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
