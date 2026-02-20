'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

export default function FounderMessage() {
  return (
    <Section background="light" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            A Message from Our Founder
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            A Message from The Founder and CEO to ICC-Rwanda
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-48 flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden mx-auto md:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team/diana-uwera.jpeg"
                  alt="Diana Uwera — Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-neutral-700 text-lg leading-relaxed">
                As a philanthropist, my lifelong dream has been simple: to share the little I have with those who need it most. I believe that true happiness is found in lifting others—seeing children in Rwanda receive an education, empowering women especially teen mothers to work and support their families, and ensuring that children with special needs are heard, valued, and seen.
              </p>

              <p className="text-neutral-700 text-lg leading-relaxed">
                My name is Diana Uwera, and this vision is the heart of the International Community Center (ICC). Together, we can create opportunities, restore hope, and transform lives.
              </p>

              <p className="text-neutral-700 text-lg leading-relaxed font-medium">
                I invite you to join ICC and be part of making a difference in someone&apos;s life.
              </p>

              <p className="text-primary font-display font-semibold text-lg mt-6">
                — Diana Uwera, Founder & CEO
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
