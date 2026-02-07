import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import MapSection from '@/components/contact/MapSection'

export const metadata: Metadata = {
  title: 'Contact Us | ICC Rwanda',
  description: 'Get in touch with ICC Rwanda. Contact us for inquiries about our programs, volunteering, or partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to learn more about our work or how you can help."
        backgroundImage="/images/backgrounds/community.jpeg"
      />

      <Section background="white" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactInfo />
          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8">
            <h3 className="heading-4 text-neutral-900 mb-6">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      <MapSection />
    </>
  )
}
