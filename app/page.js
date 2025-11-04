import Link from 'next/link'
import LatestNews from '@/components/LatestNews'

export const metadata = {
  title: 'Home - Totalsportek Blogs',
  description: 'Experience live sports technology insights and real-time analytics at Totalsportek Blogs. Discover innovative solutions for live streaming athletics, total sport ek innovations, and cutting-edge tech in sports performance.',
  keywords: 'totalsportek, live sports technology, real-time analytics, live stream athletics, innovative sports solutions, total sport ek, tech in sports, live streaming sports',
  alternates: {
    canonical: 'https://totalsportek.stopwatch.lol/',
  },
  openGraph: {
    title: 'Home - Totalsportek Blogs',
    description: 'Experience live sports technology insights and real-time analytics at Totalsportek Blogs. Discover innovative solutions for live streaming athletics, total sport ek innovations, and cutting-edge tech in sports performance.',
    url: 'https://totalsportek.stopwatch.lol/',
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
    title: 'Home - Totalsportek Blogs',
    description: 'Experience live sports technology insights and real-time analytics at Totalsportek Blogs. Discover innovative solutions for live streaming athletics, total sport ek innovations, and cutting-edge tech in sports performance.',
    images: ['https://totalsportek.stopwatch.lol/og-image.jpg'],
  },
}

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of Next.js and React',
      category: 'Tech',
      image: '/featured-post-1.jpg'
    },
    {
      id: 2,
      title: 'Top 10 Sports Moments of 2024',
      excerpt: 'Relive the greatest sporting achievements',
      category: 'Sports',
      image: '/featured-post-2.jpg'
    },
    {
      id: 3,
      title: 'Web Development Best Practices',
      excerpt: 'Tips for building modern web applications',
      category: 'Tech',
      image: '/featured-post-3.jpg'
    },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <img
            src="/sports-hero.jpg"
            alt="Sports Technology Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Totalsportek Blogs
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing stories, insights, and articles about <Link href="/sports" className="text-blue-300 hover:underline">sports technology</Link>, <Link href="/blogs" className="text-blue-300 hover:underline">innovative sports solutions</Link>, and more at Totalsportek
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/blogs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Read Blogs
            </Link>
            <Link
              href="/contact"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <LatestNews />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href="/blogs"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="flex gap-4 justify-center">
            <Link
              href="/sports"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Sports News
            </Link>
            <Link
              href="/about"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
