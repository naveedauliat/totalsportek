'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LatestNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        const data = await response.json()
        setNews(data.slice(0, 6)) // Show only 6 latest news items
      } catch (err) {
        setError(err.message)
        // Set mock data if API fails
        setNews([
          {
            id: '1',
            title: 'Championship Finals Preview: Teams Battle for Glory',
            description: 'The biggest sporting event of the year kicks off with intense rivalries and high stakes.',
            url: '#',
            source: 'Sports Central',
            publishedAt: new Date().toISOString(),
            imageUrl: null
          },
          {
            id: '2',
            title: 'Record-Breaking Performance Shatters Expectations',
            description: 'Athletes push boundaries with unprecedented achievements in multiple disciplines.',
            url: '#',
            source: 'Athletic News',
            publishedAt: new Date().toISOString(),
            imageUrl: null
          },
          {
            id: '3',
            title: 'Olympic Qualifiers Heat Up Competition',
            description: 'Countries intensify preparations as qualification rounds reach critical stages.',
            url: '#',
            source: 'Olympic Update',
            publishedAt: new Date().toISOString(),
            imageUrl: null
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Sports News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-6 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error && news.length === 0) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Sports News</h2>
          <p className="text-gray-600">Unable to load latest news. Please try again later.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Sports News</h2>
          <Link
            href="/sports"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All News →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border-l-4 border-blue-600"
            >
              <img
                src={`/featured-post-${((news.indexOf(item) % 3) + 1)}.jpg`}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600">
                    {item.source}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
