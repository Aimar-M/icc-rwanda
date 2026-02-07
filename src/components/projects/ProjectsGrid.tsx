'use client'

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
    impact: '60+ students trained in basic IT skills, with laptops provided to program graduates.',
    sdgTags: ['SDG 4: Quality Education', 'SDG 8: Decent Work'],
    icon: ComputerIcon,
    color: 'bg-gradient-to-br from-primary to-primary-dark',
    image: '/images/programs/education.jpeg',
  },
  {
    id: 'cooperative',
    title: "Nyamirambo Women's Cooperative",
    description: 'Women in Nyamirambo who care for children with disabilities face unique challenges. Through our cooperative program, these resilient women run their own businesses together, creating products, sharing resources, and supporting each other while caring for their families.',
    impact: '20+ women with children with disabilities now running successful cooperative businesses together.',
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
    id: 'hawkers',
    title: 'End Poverty: Hawkers Program',
    description: 'Street vendors (hawkers) are vital to local economies but often lack the capital to grow their businesses. Our program provides funding, business training, and ongoing support to help hawkers increase their income and achieve financial stability.',
    impact: '25+ hawkers have received funding and support, with average income increases of 40%.',
    sdgTags: ['SDG 1: No Poverty', 'SDG 8: Decent Work'],
    icon: BusinessIcon,
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
    image: '/images/programs/hawkers.jpeg',
  },
  {
    id: 'medical-care',
    title: 'Medical Care: Mutuelle de Santé',
    description: "Access to healthcare is a fundamental right. We support community members in enrolling for Rwanda's community health insurance program (Mutuelle de Santé), covering enrollment fees for those who cannot afford it and helping families access the medical care they need.",
    impact: '100+ community members supported with health insurance enrollment and medical care access.',
    sdgTags: ['SDG 3: Good Health', 'SDG 1: No Poverty'],
    icon: MedicalIcon,
    color: 'bg-gradient-to-br from-red-500 to-red-600',
    image: '/images/backgrounds/mothers.jpeg',
  },
]

export default function ProjectsGrid() {
  return (
    <Section background="light" padding="lg">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={index}
          />
        ))}
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
