'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { people } from '@/data/people'

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-neutral-200" aria-hidden="true">
      <svg className="w-1/3 max-w-[72px] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  )
}

export default function Beneficiaries() {
  return (
    <Section background="white" padding="lg" id="sponsor">
      <SectionHeading
        title="Meet the People We Support"
        subtitle="Each person here has a unique story and a real dream. Your sponsorship can be the difference between hope and opportunity."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person, index) => (
          <motion.article
            key={person.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-neutral-200 flex flex-col"
          >
            {/* Photo */}
            <div className="relative aspect-[4/5] overflow-hidden">
              {person.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={person.photo}
                  alt={person.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <PortraitPlaceholder />
              )}
              <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                Age {person.age}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-semibold text-xl text-neutral-900">{person.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{person.focus}</p>
              <p className="text-body-sm flex-grow mb-6">{person.story}</p>

              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href="/donate"
                  className="flex-1 inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors"
                >
                  Sponsor
                </Link>
                <Link
                  href={`/stories/${person.slug}`}
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                >
                  Their Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
