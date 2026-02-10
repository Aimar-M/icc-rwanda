'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import SectionHeading from '../SectionHeading'

const partners = [
  {
    name: 'Government of Rwanda — Kamonyi District',
    description: 'Local government partnership ensuring our programs align with national development goals and community needs.',
    logo: '/images/partners/govt-rwanda.png',
  },
]

export default function Partners() {
  return (
    <Section background="white" padding="lg">
      <SectionHeading
        title="Our Partners"
        subtitle="Working together with trusted organizations to maximize our impact and reach more communities."
      />

      <div className="flex justify-center max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="w-40 h-32 mx-auto mb-6 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-200 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="font-display font-semibold text-xl text-neutral-900 mb-3">
              {partner.name}
            </h3>

            <p className="text-body-sm">
              {partner.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
