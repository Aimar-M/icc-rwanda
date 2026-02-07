import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ICC Rwanda | Empowering Communities, Transforming Lives',
  description: 'International Community Center Rwanda - A nonprofit organization empowering teen mothers, women with children with disabilities, and underprivileged communities in Rwanda.',
  keywords: ['ICC Rwanda', 'nonprofit', 'Rwanda', 'teen mothers', 'community empowerment', 'women empowerment'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
