import Hero from '@/components/home/Hero'
import ImpactStats from '@/components/home/ImpactStats'
import VideoPlaceholder from '@/components/home/VideoPlaceholder'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Partners from '@/components/home/Partners'
import ContactPreview from '@/components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <VideoPlaceholder />
      <FeaturedProjects />
      <Partners />
      <ContactPreview />
    </>
  )
}
