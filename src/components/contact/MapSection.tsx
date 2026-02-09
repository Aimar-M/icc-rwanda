'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../Section'

const locations = [
  {
    name: 'Rwanda Office',
    label: 'Kamonyi District',
    sublabel: 'Southern Province, Rwanda',
    phone: '+250 784 220 336',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.94!2d29.9278!3d-2.0299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c31c2a4f8a7a1d%3A0x8d4c8a8b8c8d8e8f!2sKamonyi%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=-2.0299,29.9278',
    mapTitle: 'ICC Rwanda Office - Kamonyi, Rwanda',
  },
  {
    name: 'USA Headquarters',
    label: '4625 E Broadway Blvd, Suite 201A',
    sublabel: 'Tucson, Arizona 85711',
    phone: '+1 (520) 839-5364',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.5!2d-110.9419!3d32.2217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d670b81b06b8f1%3A0x9b4a22e45f7b3c8d!2s4625%20E%20Broadway%20Blvd%20%23201A%2C%20Tucson%2C%20AZ%2085711!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=4625+E+Broadway+Blvd+Suite+201A,+Tucson,+AZ+85711',
    mapTitle: 'ICC USA Headquarters - Tucson, Arizona',
  },
]

export default function MapSection() {
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
    <Section background="light" padding="md">
      <div className="max-w-5xl mx-auto">
        {/* Location tabs */}
        <div className="flex justify-center gap-3 mb-6">
          {locations.map((loc, index) => (
            <button
              key={loc.name}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Map card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[400px]">
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
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-neutral-600">
                  <span className="font-medium">{location.label}</span>,{' '}
                  {location.sublabel}
                </p>
                {location.phone && (
                  <p className="text-sm text-neutral-600 mt-1">
                    Phone:{' '}
                    <a
                      href={`tel:${location.phone.replace(/[^+\d]/g, '')}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {location.phone}
                    </a>
                  </p>
                )}
              </div>
              <span className="hidden sm:block text-neutral-300">|</span>
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
              >
                <DirectionsIcon className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
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
      </div>
    </Section>
  )
}

function DirectionsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  )
}
