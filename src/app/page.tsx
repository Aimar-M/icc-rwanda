import Hero from '@/components/home/Hero'
import VideoPlaceholder from '@/components/home/VideoPlaceholder'
import ImpactStats from '@/components/home/ImpactStats'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Partners from '@/components/home/Partners'
import ContactPreview from '@/components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <VideoPlaceholder />
      <ImpactStats />
      <FeaturedProjects />
      <Partners />
      <ContactPreview />
    </>
  )
}
