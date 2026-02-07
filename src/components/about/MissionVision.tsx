'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

export default function MissionVision() {
  return (
    <Section background="light" padding="lg">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <MissionIcon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="heading-3 text-neutral-900 mb-4">Our Mission</h3>
          <p className="text-body leading-relaxed">
            To empower teen mothers, women with children who have disabilities, and
            underprivileged communities in Rwanda through comprehensive support programs
            that include vocational training, mental health services, education, and
            sustainable economic initiatives. We aim to break cycles of poverty and
            create opportunities for self-sufficiency and dignity.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <VisionIcon className="w-7 h-7 text-accent" />
          </div>
          <h3 className="heading-3 text-neutral-900 mb-4">Our Vision</h3>
          <p className="text-body leading-relaxed">
            A Rwanda where every teen mother, every woman caring for children with
            disabilities, and every member of underprivileged communities has the
            resources, skills, and support they need to lead fulfilling, independent
            lives. We envision thriving communities where vulnerability is met with
            opportunity, and where every individual can contribute to society with pride.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}

function MissionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function VisionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}
