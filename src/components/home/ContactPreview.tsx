'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../Section'
import Button from '../Button'

const locations = [
  {
    name: 'Rwanda Office',
    address: ['Kamonyi District,', 'Southern Province, Rwanda'],
    phone: '+250 784 220 336',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.94!2d29.9278!3d-2.0299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c31c2a4f8a7a1d%3A0x8d4c8a8b8c8d8e8f!2sKamonyi%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus',
    mapTitle: 'ICC Rwanda Office - Kamonyi, Rwanda',
  },
  {
    name: 'USA Headquarters',
    address: ['4625 E Broadway Blvd, Suite 201A,', 'Tucson, Arizona 85711'],
    phone: '+1 (520) 839-5364',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.5!2d-110.9419!3d32.2217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d670b81b06b8f1%3A0x9b4a22e45f7b3c8d!2s4625%20E%20Broadway%20Blvd%20%23201A%2C%20Tucson%2C%20AZ%2085711!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus',
    mapTitle: 'ICC USA Headquarters - Tucson, Arizona',
  },
]

export default function ContactPreview() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % locations.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const location = locations[activeIndex]

  return (
    <Section background="light" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-neutral-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-body mb-8">
            Have questions about our work or want to learn more about how you can help?
            We&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.name} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <LocationIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{loc.name}</h4>
                  <p className="text-neutral-600">
                    {loc.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < loc.address.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <a
                    href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
                    className="text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <EmailIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Email Us</h4>
                <a href="mailto:info@icommunitycenter.org" className="text-primary hover:text-primary-dark transition-colors">
                  info@icommunitycenter.org
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Right: Auto-scrolling Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Location tabs */}
          <div className="flex gap-2 mb-4">
            {locations.map((loc, index) => (
              <button
                key={loc.name}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.mapTitle}
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-primary'
                    : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`View ${locations[index].name}`}
              />
            ))}
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full -z-10" />
        </motion.div>
      </div>
    </Section>
  )
}

// Icons
function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
