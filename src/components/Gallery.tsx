'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

interface GalleryItem {
  /** Caption shown on hover and in the lightbox. */
  label: string
}

// TODO(content): Replace these placeholders with real photos.
// Add a `src` to each item and render it in place of the placeholder graphic.
const items: GalleryItem[] = [
  { label: 'Photo 1' },
  { label: 'Photo 2' },
  { label: 'Photo 3' },
  { label: 'Photo 4' },
  { label: 'Photo 5' },
  { label: 'Photo 6' },
  { label: 'Photo 7' },
  { label: 'Photo 8' },
  { label: 'Photo 9' },
]

function PlaceholderGraphic({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-neutral-200 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-1/4 max-w-[64px] text-neutral-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  )
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    []
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, next, prev])

  return (
    <Section background="light" padding="lg" id="gallery">
      <SectionHeading
        title="Moments of Impact"
        subtitle="A glimpse into the communities, families, and changemakers at the heart of our work in the United States and Rwanda."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((item, index) => (
          <motion.button
            key={item.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
            }`}
            aria-label={`View ${item.label}`}
          >
            <PlaceholderGraphic className="h-full w-full aspect-square transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-3 left-4 right-4 text-left text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center"
            >
              <PlaceholderGraphic className="w-[80vw] max-w-2xl aspect-[4/3] rounded-xl shadow-2xl" />
              <figcaption className="mt-4 text-center text-white/80 text-sm">
                {items[activeIndex].label}
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
