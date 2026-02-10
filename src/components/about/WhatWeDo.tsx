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
            The International Community Center (ICC) is a 501(c)(3) nonprofit organization
            founded in 2014 by Diana Uwera in Arizona, USA. What began as a response to the
            challenges faced by refugee and immigrant families in the United States has grown
            into an organization with a dual mission: empowering newcomers to thrive in
            America and uplifting vulnerable communities in Rwanda and across Africa.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In the United States, ICC provides essential resources to refugee and immigrant
            families, including language training, job placement assistance, legal support,
            and cultural integration programs. We help families build the skills and
            connections they need to achieve self-sufficiency and contribute to their new
            communities with dignity.
          </p>

          <p className="text-lg leading-relaxed">
            In Rwanda, our programs focus on supporting children with special needs,
            advancing education for underprivileged youth, and fostering economic
            independence for women. Through vocational training, mental health counseling,
            cooperative businesses, and community health initiatives in the Kamonyi District
            and beyond, we create pathways to independence and dignity for those who need it
            most.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
