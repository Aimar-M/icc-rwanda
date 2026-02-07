'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

export default function MapSection() {
  return (
    <Section background="light" padding="md">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.94!2d29.9278!3d-2.0299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c31c2a4f8a7a1d%3A0x8d4c8a8b8c8d8e8f!2sKamonyi%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICC Rwanda Location - Kamonyi, Rwanda"
              className="absolute inset-0"
            />
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <p className="text-sm text-neutral-600">
            <span className="font-medium">Kamonyi District</span>, Southern Province, Rwanda
          </p>
          <span className="hidden sm:block text-neutral-300">|</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=-2.0299,29.9278"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
          >
            <DirectionsIcon className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </Section>
  )
}

function DirectionsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  )
}
