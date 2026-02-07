'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  impact: string
  sdgTags: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
  index: number
  image?: string
}

export default function ProjectCard({
  id,
  title,
  description,
  impact,
  sdgTags,
  icon: Icon,
  color,
  index,
  image,
}: ProjectCardProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image area */}
      <div className={`h-48 ${color} relative overflow-hidden`}>
        {image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-20 h-20 text-white/30" />
            </div>
          </>
        )}
        {/* SDG Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {sdgTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="heading-4 text-neutral-900 mb-3">
          {title}
        </h3>

        <p className="text-body-sm mb-4">
          {description}
        </p>

        {/* Impact highlight */}
        <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
            <ImpactIcon className="w-5 h-5 text-success" />
          </div>
          <div>
            <span className="text-xs font-semibold text-success uppercase tracking-wider">
              Impact
            </span>
            <p className="text-sm text-neutral-700 mt-1">
              {impact}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ImpactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}
