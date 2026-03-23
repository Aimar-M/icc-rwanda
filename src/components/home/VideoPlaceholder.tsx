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
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="none"
          >
            <source src="https://0cuiankcp5kcjrto.private.blob.vercel-storage.com/INTERVIEW%20%20with%20subs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </Section>
  )
}
