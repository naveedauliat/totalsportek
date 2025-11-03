import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Totalsportek Blogs',
  description: 'Discover innovative sports technology insights, analytics, and solutions at Totalsportek Blogs. Explore cutting-edge tech in athletics, sports performance, and total sport ek innovations.',
  keywords: 'totalsportek, sports technology, innovative sports solutions, total sport ek, sports analytics, tech in athletics, sports performance, athletic technology, sports innovation, totalsportek blogs',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}