'use client'

import { motion } from 'framer-motion'

export default function MessageToWorld() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000')] bg-cover bg-center opacity-10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            A Message to the World
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            "Together, we can rewrite the stories of those who have been
            <span className="text-accent"> forgotten</span> and give them the
            <span className="text-accent"> future</span> they deserve."
          </h2>

          <p className="text-xl text-white/80 leading-relaxed mb-6">
            Across the globe — from refugee families rebuilding their lives in the
            United States to teen mothers, women caring for children with disabilities,
            and families living in poverty in Rwanda — millions face overwhelming
            challenges every day. But within each of them lies incredible potential
            waiting to be unlocked.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            Your support—whether through donations, partnerships, or spreading
            awareness—creates ripples of change that transform not just individual
            lives, but entire communities. Join us in building a more equitable world,
            one empowered life at a time.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <span className="text-white/60 text-sm">— The ICC Team</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
