'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import Button from '../Button'

export default function ContactPreview() {
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
            We'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <LocationIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Our Location</h4>
                <p className="text-neutral-600">
                  Kamonyi District,<br />
                  Southern Province, Rwanda
                </p>
              </div>
            </div>

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

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
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
