import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import WhatWeDo from '@/components/about/WhatWeDo'
import MissionVision from '@/components/about/MissionVision'
import OurTeam from '@/components/about/OurTeam'
import FounderMessage from '@/components/about/FounderMessage'
import OurImpact from '@/components/about/OurImpact'
import MessageToWorld from '@/components/about/MessageToWorld'

export const metadata: Metadata = {
  title: 'About Us | ICC — International Community Center',
  description: 'Learn about the International Community Center\'s mission to empower refugee and immigrant families in the US and support vulnerable communities in Rwanda.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About ICC"
        subtitle="Founded in 2014, empowering communities and transforming lives in the United States and Rwanda."
        backgroundImage="/images/backgrounds/mothers.jpeg"
      />
      <WhatWeDo />
      <MissionVision />
      <OurTeam />
      <FounderMessage />
      <OurImpact />
      <MessageToWorld />
    </>
  )
}
