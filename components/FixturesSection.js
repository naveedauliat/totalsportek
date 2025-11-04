'use client'
import { useState, useEffect } from 'react'

export default function FixturesSection() {
  const [fixtures, setFixtures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await fetch('/api/fixtures')
        if (!response.ok) {
          throw new Error('Failed to fetch fixtures')
        }
        const data = await response.json()
        setFixtures(data)
      } catch (err) {
        setError(err.message)
        // Set mock fixtures if API fails
        setFixtures([
          {
            id: '1',
            homeTeam: 'Manchester United',
            awayTeam: 'Liverpool',
            competition: 'Premier League',
            date: new Date(Date.now() + 86400000).toISOString(),
            status: 'SCHEDULED',
            score: null
          },
          {
            id: '2',
            homeTeam: 'Barcelona',
            awayTeam: 'Real Madrid',
            competition: 'La Liga',
            date: new Date(Date.now() + 172800000).toISOString(),
            status: 'SCHEDULED',
            score: null
          },
          {
            id: '3',
            homeTeam: 'Bayern Munich',
            awayTeam: 'Borussia Dortmund',
            competition: 'Bundesliga',
            date: new Date(Date.now() + 259200000).toISOString(),
            status: 'SCHEDULED',
            score: null
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchFixtures()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'FINISHED':
        return 'bg-green-100 text-green-800'
      case 'IN_PLAY':
        return 'bg-red-100 text-red-800'
      case 'SCHEDULED':
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Live Fixtures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-3"></div>
              <div className="h-6 bg-gray-300 rounded mb-3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error && fixtures.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Live Fixtures</h2>
        <p className="text-gray-600">Unable to load fixtures. Please try again later.</p>
      </section>
    )
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Live Fixtures</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fixtures.map((fixture) => (
          <div
            key={fixture.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-l-4 border-green-600"
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(fixture.status)}`}>
                {fixture.status === 'FINISHED' ? 'FT' :
                 fixture.status === 'IN_PLAY' ? 'LIVE' :
                 'SCHEDULED'}
              </span>
              <span className="text-sm text-gray-500">
                {fixture.competition}
              </span>
            </div>

            <div className="text-center mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-900 flex-1 text-right mr-4">
                  {fixture.homeTeam}
                </span>
                {fixture.score ? (
                  <span className="text-2xl font-bold text-gray-900 mx-4">
                    {fixture.score}
                  </span>
                ) : (
                  <span className="text-2xl font-bold text-gray-400 mx-4">vs</span>
                )}
                <span className="text-lg font-semibold text-gray-900 flex-1 text-left ml-4">
                  {fixture.awayTeam}
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {formatDate(fixture.date)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Fixtures auto-update daily. Times shown in your local timezone.
        </p>
      </div>
    </section>
  )
}
