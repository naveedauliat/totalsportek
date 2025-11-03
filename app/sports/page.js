import Link from 'next/link'

export const metadata = {
  title: 'Sports News - Totalsportek Blogs',
  description: 'Stay updated with the latest sports news, highlights, and technology insights at Totalsportek. Explore innovative sports solutions and athletic performance.',
  keywords: 'sports news, totalsportek, sports technology, athletic performance, sports highlights, innovative sports solutions, total sport ek, sports analytics',
  canonical: 'https://totalsportek.com/sports'
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

        <div className="space-y-6">
          {sportsNews.map(news => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-l-4 border-green-600"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {news.sport}
                </span>
                <span className="text-sm text-gray-500">{news.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {news.title}
              </h2>
              <button className="text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
