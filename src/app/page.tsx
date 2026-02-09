import Hero from '@/components/home/Hero'
import ImpactStats from '@/components/home/ImpactStats'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Partners from '@/components/home/Partners'
import ContactPreview from '@/components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FeaturedProjects />
      <Partners />
      <ContactPreview />
    </>
  )
}
