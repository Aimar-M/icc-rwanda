import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { people, getPerson } from '@/data/people'

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const person = getPerson(params.slug)
  if (!person) return { title: 'Story Not Found | ICC' }
  return {
    title: `${person.name}'s Story | ICC — International Community Center`,
    description: person.story,
  }
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const person = getPerson(params.slug)
  if (!person) notFound()

  return (
    <article className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container-custom max-w-5xl">
        {/* Back link */}
        <Link
          href="/#sponsor"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back to all stories
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg md:sticky md:top-28">
            {person.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={person.photo} alt={person.name} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-200" aria-hidden="true">
                <svg className="w-1/3 max-w-[96px] text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
            <span className="absolute top-4 left-4 bg-accent text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Age {person.age}
            </span>
          </div>

          {/* Story */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{person.focus}</p>
            <h1 className="heading-1 text-neutral-900 mb-3">{person.name}</h1>
            <p className="flex items-center gap-2 text-neutral-500 mb-8">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {person.location}
            </p>

            <div className="space-y-5">
              {person.fullStory.map((paragraph, i) => (
                <p key={i} className="text-body leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <h2 className="font-display font-semibold text-xl text-neutral-900 mb-2">
                Sponsor {person.name.split(' ')[0]}
              </h2>
              <p className="text-body-sm mb-5">
                Your support covers training, materials, and care — and changes the course of a life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-6 py-3 transition-colors"
                >
                  Sponsor Now
                </Link>
                <Link
                  href="/#sponsor"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg px-6 py-3 transition-colors"
                >
                  Meet Others
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
