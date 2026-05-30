import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Gallery | ICC — International Community Center',
  description:
    'Moments of impact from the International Community Center — communities, families, and changemakers across the United States and Rwanda.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments of impact from our work in the United States and Rwanda."
        backgroundImage="/images/backgrounds/community.jpeg"
      />
      <Gallery />
    </>
  )
}
