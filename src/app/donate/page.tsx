import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import DonateWidget from '@/components/donate/DonateWidget'

export const metadata: Metadata = {
  title: 'Donate | ICC — International Community Center',
  description:
    'Support refugee and immigrant families in the US and vulnerable communities in Rwanda. Make a one-time or monthly donation to the International Community Center.',
}

const impacts = [
  { amount: '$20', text: 'Provides learning materials for a student' },
  { amount: '$45', text: 'Supports counseling for a teen mother' },
  { amount: '$100', text: 'Covers health insurance for a family' },
  { amount: '$150', text: 'Funds startup capital for a woman entrepreneur' },
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Your gift empowers refugee and immigrant families in the United States and transforms lives in Rwanda."
        backgroundImage="/images/backgrounds/community.jpeg"
      />

      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="heading-3 text-neutral-900 mb-4">Give with confidence</h2>
          <p className="text-body">
            ICC is a registered 501(c)(3) nonprofit — your donation is tax-deductible in the
            United States. Choose a sponsorship level or enter your own amount, give once or
            monthly, and pay securely with card, Apple Pay, Google Pay, or PayPal.
          </p>
        </div>

        <DonateWidget />

        {/* Impact strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          {impacts.map((i) => (
            <div
              key={i.amount}
              className="bg-white rounded-2xl border border-neutral-200 p-5 text-center"
            >
              <div className="font-display font-bold text-2xl text-primary mb-1">{i.amount}</div>
              <p className="text-xs text-neutral-500 leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 max-w-xl mx-auto mt-10">
          Prefer another way to give? Email us at{' '}
          <a href="mailto:info@icommunitycenter.org" className="text-primary hover:underline">
            info@icommunitycenter.org
          </a>{' '}
          to arrange a bank transfer or discuss partnership giving.
        </p>
      </Section>
    </>
  )
}
