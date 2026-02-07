'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

export default function VideoPlaceholder() {
  return (
    <Section background="white" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video bg-neutral-100 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Video placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/20 flex flex-col items-center justify-center">
            {/* Play button */}
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="mt-6 text-neutral-600 font-medium">
              Video Coming Soon
            </p>
            <p className="text-sm text-neutral-500 mt-2">
              Watch our story and see the impact of your support
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-24 h-24 border-2 border-accent/30 rounded-tl-2xl" />
          <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-primary/30 rounded-br-2xl" />
        </motion.div>
      </div>
    </Section>
  )
}
