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
  openGraph: {
    title: 'Totalsportek Blogs',
    description: 'Discover innovative sports technology insights, analytics, and solutions at Totalsportek Blogs. Explore cutting-edge tech in athletics, sports performance, and total sport ek innovations.',
    url: 'https://totalsportek.stopwatch.lol',
    siteName: 'Totalsportek Blogs',
    images: [
      {
        url: 'https://totalsportek.stopwatch.lol/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Totalsportek Blogs - Live Sports Technology',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Totalsportek Blogs',
    description: 'Discover innovative sports technology insights, analytics, and solutions at Totalsportek Blogs. Explore cutting-edge tech in athletics, sports performance, and total sport ek innovations.',
    images: ['https://totalsportek.stopwatch.lol/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BE8E0SMJGS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BE8E0SMJGS');
            `,
          }}
        />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="c+AOAwm4irUYx0afNWNcBw" async></script>
      </head>
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
