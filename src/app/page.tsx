import Hero from '@/components/home/Hero'
import ImpactStats from '@/components/home/ImpactStats'
import VideoPlaceholder from '@/components/home/VideoPlaceholder'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Beneficiaries from '@/components/Beneficiaries'
import Partners from '@/components/home/Partners'
import SupportMission from '@/components/SupportMission'
import ContactPreview from '@/components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <VideoPlaceholder />
      <FeaturedProjects />
      <Beneficiaries />
      <Partners />
      <SupportMission />
      <ContactPreview />
    </>
  )
}
