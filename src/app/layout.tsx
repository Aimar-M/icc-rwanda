import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ICC | International Community Center — Empowering Communities, Transforming Lives',
  description: 'The International Community Center (ICC) is a 501(c)(3) nonprofit empowering refugee and immigrant families in the United States and supporting vulnerable communities in Rwanda through education, vocational training, and sustainable development.',
  keywords: ['ICC', 'International Community Center', 'nonprofit', 'refugee support', 'immigrant empowerment', 'Rwanda', 'community empowerment', 'women empowerment', '501c3'],
  icons: {
    icon: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: '/images/logo.png',
  },
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
