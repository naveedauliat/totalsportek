import Link from 'next/link'
import FixturesSection from '@/components/FixturesSection'

export const metadata = {
  title: 'Sports News - Totalsportek Blogs',
  description: 'Experience live sports news and real-time highlights at Totalsportek Blogs. Stay updated with live streaming athletics, innovative sports solutions, and cutting-edge tech in sports performance.',
  keywords: 'live sports news, totalsportek, live sports technology, real-time athletic performance, live sports highlights, innovative sports solutions, total sport ek, live streaming sports analytics',
  alternates: {
    canonical: 'https://totalsportek.stopwatch.lol/sports',
  },
  openGraph: {
    title: 'Sports News - Totalsportek Blogs',
    description: 'Experience live sports news and real-time highlights at Totalsportek Blogs. Stay updated with live streaming athletics, innovative sports solutions, and cutting-edge tech in sports performance.',
    url: 'https://totalsportek.stopwatch.lol/sports',
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
    title: 'Sports News - Totalsportek Blogs',
    description: 'Experience live sports news and real-time highlights at Totalsportek Blogs. Stay updated with live streaming athletics, innovative sports solutions, and cutting-edge tech in sports performance.',
    images: ['https://totalsportek.stopwatch.lol/og-image.jpg'],
  },
}

export default function Sports() {
  const sportsNews = [
    {
      id: 1,
      title: 'Championship Finals Preview',
      sport: 'Football',
      date: '2024-01-20'
    },
    {
      id: 2,
      title: 'Record Breaking Performance',
      sport: 'Basketball',
      date: '2024-01-18'
    },
    {
      id: 3,
      title: 'Olympic Qualifiers Update',
      sport: 'Athletics',
      date: '2024-01-15'
    },
    {
      id: 4,
      title: 'Transfer News and Rumors',
      sport: 'Football',
      date: '2024-01-12'
    },
  ]

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sports News</h1>
        <p className="text-gray-600 mb-8">
          Stay updated with the latest <Link href="/blogs" className="text-green-600 hover:underline">sports technology</Link> news and highlights at Totalsportek. Learn more <Link href="/about" className="text-green-600 hover:underline">about us</Link>.
        </p>

        {/* Live Fixtures Section */}
        <FixturesSection />

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Sports Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sportsNews.map(news => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border-l-4 border-green-600"
              >
                <img
                  src={`/featured-post-${news.id % 3 + 1}.jpg`}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {news.sport}
                    </span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Discover the latest developments in {news.sport.toLowerCase()} with Totalsportek's comprehensive coverage of sports technology and performance analytics.
                  </p>
                  <button className="text-green-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
