'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const paths = [
  {
    title: 'Sponsor a Specific Person',
    description:
      'Walk alongside one woman or student. Cover their training, materials, and care — and follow their journey.',
    primary: { label: 'Meet the People', href: '#sponsor' },
    icon: PersonIcon,
    accent: 'bg-accent/10 text-accent',
  },
  {
    title: 'Give a General Gift',
    description:
      'Support the program as a whole. Your gift goes where it is needed most across our work in the US and Rwanda.',
    primary: { label: 'Donate Now', href: '/donate' },
    icon: HeartIcon,
    accent: 'bg-primary/10 text-primary',
  },
]

export default function SupportMission() {
  return (
    <section className="bg-gradient-hero py-20 md:py-28" id="support">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="heading-2 text-white mb-4">Support Our Mission</h2>
          <p className="text-lg text-white/80">
            Two ways to change a life. Choose the one that speaks to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col text-center items-center shadow-lg"
            >
              <div className={`w-16 h-16 rounded-2xl ${path.accent} flex items-center justify-center mb-6`}>
                <path.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-xl text-neutral-900 mb-3">{path.title}</h3>
              <p className="text-body-sm flex-grow mb-6">{path.description}</p>
              <Link
                href={path.primary.href}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg px-6 py-3 transition-colors w-full"
              >
                {path.primary.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}
