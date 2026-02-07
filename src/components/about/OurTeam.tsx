'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import SectionHeading from '../SectionHeading'

const teamMembers = [
  {
    name: 'Diana Uwera',
    role: 'Founder & CEO',
    image: '/images/team/diana-uwera.jpeg',
  },
  {
    name: 'Laurence',
    role: 'Executive Director',
    image: '/images/team/laurence.jpeg',
  },
  {
    name: 'Safari',
    role: 'Head of Education Department',
    image: '/images/team/safari.jpeg',
  },
]

export default function OurTeam() {
  return (
    <Section background="white" padding="lg">
      <SectionHeading
        title="Our Team"
        subtitle="Meet the dedicated individuals leading ICC Rwanda's mission to transform lives."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-neutral-50 rounded-2xl p-6 h-full flex flex-col">
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
