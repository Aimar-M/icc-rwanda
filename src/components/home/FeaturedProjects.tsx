'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '../Section'
import SectionHeading from '../SectionHeading'

const projects = [
  {
    id: 'teen-mothers',
    title: 'Teen Mothers Vocational Training',
    description: 'Empowering young mothers with practical skills in sewing, crafts, and entrepreneurship to build independent futures and break cycles of poverty.',
    icon: SewingIcon,
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'cooperative',
    title: "Nyamirambo Women's Cooperative",
    description: 'Supporting women with children who have disabilities to run successful cooperative businesses, creating sustainable income and community support.',
    icon: CooperativeIcon,
    color: 'bg-success/10 text-success',
  },
  {
    id: 'clean-stoves',
    title: 'Clean Stoves Initiative',
    description: 'Partnering with Sepha Rwanda to distribute clean cooking stoves, reducing environmental impact and improving health outcomes for families.',
    icon: StoveIcon,
    color: 'bg-primary/10 text-primary',
  },
]

export default function FeaturedProjects() {
  return (
    <Section background="light" padding="lg">
      <SectionHeading
        title="Featured Projects"
        subtitle="Discover how we're making a difference in communities across the United States and Rwanda through sustainable, impactful programs."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/projects#${project.id}`}>
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7" />
                </div>

                <h3 className="heading-4 text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-body-sm flex-grow mb-6">
                  {project.description}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
        >
          View All Projects
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </Section>
  )
}

// Icons
function SewingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  )
}

function CooperativeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function StoveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  )
}
