import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact - Totalsportek Blogs',
  description: 'Get in touch with Totalsportek Blogs for live sports technology insights and real-time analytics. Contact us about innovative solutions for live streaming athletics and total sport ek innovations.',
  keywords: 'contact totalsportek, live sports technology, real-time analytics, live stream athletics, innovative sports solutions, total sport ek, tech in sports, live streaming sports',
  alternates: {
    canonical: 'https://totalsportek.stopwatch.lol/contact',
  },
  openGraph: {
    title: 'Contact - Totalsportek Blogs',
    description: 'Get in touch with Totalsportek Blogs for live sports technology insights and real-time analytics. Contact us about innovative solutions for live streaming athletics and total sport ek innovations.',
    url: 'https://totalsportek.stopwatch.lol/contact',
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
    title: 'Contact - Totalsportek Blogs',
    description: 'Get in touch with Totalsportek Blogs for live sports technology insights and real-time analytics. Contact us about innovative solutions for live streaming athletics and total sport ek innovations.',
    images: ['https://totalsportek.stopwatch.lol/og-image.jpg'],
  },
}

export default function Contact() {
  return <ContactForm />
}
