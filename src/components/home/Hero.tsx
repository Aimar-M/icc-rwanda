'use client'

import { motion } from 'framer-motion'
import Button from '../Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/students.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 via-transparent to-primary-dark/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
          >
            International Community Center — Rwanda
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-1 text-white mb-6"
          >
            Empowering Communities,{' '}
            <span className="text-accent">Transforming Lives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Supporting teen mothers, women with children with disabilities, and
            underprivileged communities in Rwanda through education, vocational
            training, and sustainable development programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="accent" size="lg" href="/projects">
              Our Projects
            </Button>
            <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
