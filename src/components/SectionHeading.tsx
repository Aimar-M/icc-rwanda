interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      <h2 className={`heading-2 mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
