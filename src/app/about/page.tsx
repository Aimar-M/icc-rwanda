import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import WhatWeDo from '@/components/about/WhatWeDo'
import MissionVision from '@/components/about/MissionVision'
import OurTeam from '@/components/about/OurTeam'
import OurImpact from '@/components/about/OurImpact'
import MessageToWorld from '@/components/about/MessageToWorld'

export const metadata: Metadata = {
  title: 'About Us | ICC Rwanda',
  description: 'Learn about ICC Rwanda\'s mission to empower teen mothers, women with children with disabilities, and underprivileged communities in Rwanda.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About ICC Rwanda"
        subtitle="Empowering communities and transforming lives through sustainable programs."
        backgroundImage="/images/backgrounds/mothers.jpeg"
      />
      <WhatWeDo />
      <MissionVision />
      <OurTeam />
      <OurImpact />
      <MessageToWorld />
    </>
  )
}
