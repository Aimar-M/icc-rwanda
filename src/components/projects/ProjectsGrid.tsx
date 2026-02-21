'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'teen-mothers',
    title: 'Teen Mothers Vocational Training Center',
    description: 'A dedicated center where teen mothers learn valuable vocational skills including sewing, crafts, and entrepreneurship. Our comprehensive program combines practical training with business education, helping young mothers build sustainable livelihoods and economic independence.',
    impact: 'Over 30 teen mothers have completed our vocational training program and started their own micro-businesses.',
    sdgTags: ['SDG 1: No Poverty', 'SDG 5: Gender Equality'],
    icon: SewingIcon,
    color: 'bg-gradient-to-br from-accent to-accent-dark',
    image: '/images/programs/women-empowerment.jpeg',
  },
  {
    id: 'counseling',
    title: 'Counseling & Therapy',
    description: 'Mental health support is crucial for teen mothers dealing with trauma, stigma, and the challenges of early parenthood. Our trained counselors provide individual and group therapy sessions, helping young mothers process their experiences and build emotional resilience.',
    impact: 'Providing regular counseling sessions to 30+ teen mothers, with measurable improvements in mental health outcomes.',
    sdgTags: ['SDG 3: Good Health', 'SDG 10: Reduced Inequalities'],
    icon: HeartIcon,
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    image: '/images/backgrounds/counselling.jpeg',
  },
  {
    id: 'it-skills',
    title: 'Basic IT Skills Program',
    description: 'Digital literacy opens doors to new opportunities. Our IT program teaches basic computer skills, internet navigation, and essential software applications. We also provide laptops to participants, ensuring they can continue practicing and learning beyond our classes.',
    impact: '120+ students supported with IT skills training and laptops provided to program graduates.',
    sdgTags: ['SDG 4: Quality Education', 'SDG 8: Decent Work'],
    icon: ComputerIcon,
    color: 'bg-gradient-to-br from-primary to-primary-dark',
    image: '/images/programs/education.jpeg',
  },
  {
    id: 'cooperative',
    title: "Nyamirambo Women's Cooperative",
    description: 'Women in Nyamirambo who care for children with disabilities face unique challenges. Through our cooperative program, these resilient women run their own businesses together, creating products, sharing resources, and supporting each other while caring for their families.',
    impact: '100+ women empowered through cooperative businesses, supporting each other while caring for their families.',
    sdgTags: ['SDG 8: Decent Work', 'SDG 10: Reduced Inequalities'],
    icon: CooperativeIcon,
    color: 'bg-gradient-to-br from-success to-success-dark',
    image: '/images/programs/disabilities.jpeg',
  },
  {
    id: 'clean-stoves',
    title: 'Climate Action: Clean Stoves',
    description: 'In partnership with Sepha Rwanda, we distribute clean cooking stoves to families in our communities. These efficient stoves reduce harmful smoke exposure, decrease deforestation by using less firewood, and improve overall health outcomes for families.',
    impact: 'Distributed clean stoves to 50+ families, reducing indoor air pollution and environmental impact.',
    sdgTags: ['SDG 7: Clean Energy', 'SDG 13: Climate Action'],
    icon: StoveIcon,
    color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    image: '/images/backgrounds/students.jpeg',
  },
  {
    id: 'women-entrepreneurs',
    title: 'End Poverty: Women Entrepreneurs Program',
    description: 'Many women in our communities rely on street vending to support their families but face barriers to growing their businesses. Our program provides funding, business training, and ongoing support to help women entrepreneurs transition from street vending to established market spaces, building sustainable livelihoods.',
    impact: '100+ small businesses supported, helping women entrepreneurs transition from street vending to established market spaces.',
    sdgTags: ['SDG 1: No Poverty', 'SDG 8: Decent Work'],
    icon: BusinessIcon,
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
    image: '/images/programs/hawkers.jpeg',
  },
  {
    id: 'medical-care',
    title: 'Medical Care: Mutuelle de Santé',
    description: "Access to healthcare is a fundamental right. We support community members in enrolling for Rwanda's community health insurance program (Mutuelle de Santé), covering enrollment fees for those who cannot afford it and helping families access the medical care they need.",
    impact: '500+ community members supported with Mutuelle de Santé health insurance enrollment and medical care access.',
    sdgTags: ['SDG 3: Good Health', 'SDG 1: No Poverty'],
    icon: MedicalIcon,
    color: 'bg-gradient-to-br from-red-500 to-red-600',
    image: '/images/backgrounds/mothers.jpeg',
  },
]

const usPrograms = [
  {
    id: 'language-training',
    title: 'Language Training',
    description: 'Helping refugee and immigrant families develop English proficiency and communication skills for daily life and employment.',
    icon: LanguageIcon,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 'job-placement',
    title: 'Job Placement',
    description: 'Connecting newcomers with employment opportunities through resume support, interview preparation, and employer partnerships.',
    icon: JobIcon,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    id: 'legal-assistance',
    title: 'Legal Assistance',
    description: 'Providing guidance on immigration processes, advocacy, and legal resources to help families navigate their new environment.',
    icon: LegalIcon,
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    id: 'cultural-integration',
    title: 'Cultural Integration',
    description: 'Offering community programs, workshops, and support networks to help families adapt and build connections in their new home.',
    icon: CultureIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
]

export default function ProjectsGrid() {
  return (
    <Section background="light" padding="lg">
      <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-16">
        At the International Community Center, we provide safe shelter, support, and hope to individuals and families experiencing homelessness and domestic violence, helping them rebuild their lives with dignity and care.
      </p>

      {/* Rwanda Programs */}
      <div className="mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-3 text-neutral-900 text-center mb-10"
        >
          Our Programs in Rwanda
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* US Programs */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-3 text-neutral-900 text-center mb-10"
        >
          Our Programs in the United States
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${program.bgColor} flex items-center justify-center mb-4`}>
                <program.icon className={`w-6 h-6 ${program.color}`} />
              </div>
              <h4 className="font-display font-semibold text-lg text-neutral-900 mb-2">
                {program.title}
              </h4>
              <p className="text-sm text-neutral-500">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// Icons
function SewingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function ComputerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function CooperativeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function StoveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  )
}

function BusinessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function MedicalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
    </svg>
  )
}

// US Program Icons
function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  )
}

function JobIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LegalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  )
}

function CultureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}
