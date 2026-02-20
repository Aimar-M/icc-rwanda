import Link from 'next/link'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const programs = [
  { name: 'Teen Mothers Support', href: '/projects#teen-mothers' },
  { name: 'Women Cooperative', href: '/projects#cooperative' },
  { name: 'Clean Stoves Initiative', href: '/projects#clean-stoves' },
  { name: 'Education Programs', href: '/projects#education' },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587930629676', icon: FacebookIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCMwDJZkuXUEZXPNPpq7OtTQ', icon: YouTubeIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/hope-through-icc/', icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white rounded-lg px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpeg"
                alt="ICC - International Community Center"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Empowering refugee and immigrant families in the United States and
              vulnerable communities in Rwanda through education, integration, and
              sustainable development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  <span className="font-medium text-neutral-300">USA Headquarters</span><br />
                  Arizona, United States
                </span>
              </li>
              <li className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  <span className="font-medium text-neutral-300">Rwanda Office</span><br />
                  Kamonyi District,<br />
                  Southern Province, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@icommunitycenter.org" className="text-neutral-400 hover:text-accent transition-colors">
                  info@icommunitycenter.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+15208395364" className="text-neutral-400 hover:text-accent transition-colors">
                  +1 (520) 839-5364
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+250784220336" className="text-neutral-400 hover:text-accent transition-colors">
                  +250 784 220 336
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} International Community Center (ICC). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-neutral-500 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Icon Components
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
