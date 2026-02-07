'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

export default function WhatWeDo() {
  return (
    <Section background="white" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-neutral-900 mb-6">What We Do</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-lg max-w-none text-neutral-600"
        >
          <p className="text-lg leading-relaxed mb-6">
            ICC Rwanda (International Community Center — Rwanda) is a nonprofit organization
            dedicated to empowering the most vulnerable members of Rwandan society. Founded
            with a vision of creating lasting change, we focus on teen mothers, women with
            children who have disabilities, and underprivileged communities in the Kamonyi
            District of Rwanda's Southern Province.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Our approach combines immediate support with long-term empowerment strategies.
            Through vocational training, mental health counseling, education programs, and
            economic initiatives, we help individuals gain the skills and confidence they
            need to build sustainable livelihoods and contribute to their communities.
          </p>

          <p className="text-lg leading-relaxed">
            We believe that every person deserves the opportunity to thrive. By addressing
            the interconnected challenges of poverty, lack of education, and limited
            economic opportunities, we create pathways to independence and dignity for
            those who need it most.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
