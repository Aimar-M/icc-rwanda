import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ProjectsGrid from '@/components/projects/ProjectsGrid'

export const metadata: Metadata = {
  title: 'Our Projects | ICC Rwanda',
  description: 'Explore ICC Rwanda\'s programs: vocational training, counseling, education, women\'s cooperatives, clean energy initiatives, and community healthcare support.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Comprehensive programs designed to empower, educate, and uplift communities across Rwanda."
        backgroundImage="/images/backgrounds/counselling.jpeg"
      />
      <ProjectsGrid />
    </>
  )
}
