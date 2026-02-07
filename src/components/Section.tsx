'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'primary' | 'dark' | 'gradient'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'md',
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const backgrounds = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    primary: 'bg-primary text-white',
    dark: 'bg-neutral-900 text-white',
    gradient: 'bg-gradient-hero text-white',
  }

  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  }

  return (
    <section
      ref={ref}
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-custom"
      >
        {children}
      </motion.div>
    </section>
  )
}
