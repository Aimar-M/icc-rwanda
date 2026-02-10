'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import SectionHeading from '../SectionHeading'

const impactStats = [
  {
    number: '100+',
    label: 'Women Empowered',
    description: 'Women empowered through vocational training and cooperative businesses',
    icon: WomenIcon,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    number: '120+',
    label: 'Students Supported',
    description: 'Students receiving quality education and IT skills training',
    icon: EducationIcon,
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    number: '500+',
    label: 'Healthcare — Mutuelle',
    description: 'Community members supported with health insurance enrollment and medical care',
    icon: HeartIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    number: '100+',
    label: 'Small Businesses Supported',
    description: 'Entrepreneurs supported with capital to start and grow their businesses',
    icon: BusinessIcon,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
]

export default function OurImpact() {
  return (
    <Section background="light" padding="lg">
      <SectionHeading
        title="Our Impact"
        subtitle="Measurable change in the lives of individuals and communities across our programs."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>

            <div className={`text-4xl font-display font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>

            <h4 className="font-semibold text-neutral-900 mb-2">
              {stat.label}
            </h4>

            <p className="text-sm text-neutral-500">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function WomenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function EducationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}

function BusinessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
