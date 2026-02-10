import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ProjectsGrid from '@/components/projects/ProjectsGrid'

export const metadata: Metadata = {
  title: 'Our Projects | ICC — International Community Center',
  description: 'Explore ICC\'s programs: refugee and immigrant support in the US, vocational training, counseling, education, women\'s cooperatives, clean energy, and healthcare in Rwanda.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Comprehensive programs designed to empower, educate, and uplift communities in the United States and Rwanda."
        backgroundImage="/images/backgrounds/counselling.jpeg"
      />
      <ProjectsGrid />
    </>
  )
}
