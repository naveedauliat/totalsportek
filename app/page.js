import Link from 'next/link'

export const metadata = {
  title: 'Home - Totalsportek Blogs',
  description: 'Experience live sports technology insights and real-time analytics at Totalsportek Blogs. Discover innovative solutions for live streaming athletics, total sport ek innovations, and cutting-edge tech in sports performance.',
  keywords: 'totalsportek, live sports technology, real-time analytics, live stream athletics, innovative sports solutions, total sport ek, tech in sports, live streaming sports',
  alternates: {
    canonical: 'https://totalsportek-blogs.vercel.app/',
  },
}

export default function Home() {
  const featuredPosts = [
    { 
      id: 1, 
      title: 'Getting Started with Next.js', 
      excerpt: 'Learn the basics of Next.js and React', 
      category: 'Tech' 
    },
    { 
      id: 2, 
      title: 'Top 10 Sports Moments of 2024', 
      excerpt: 'Relive the greatest sporting achievements', 
      category: 'Sports' 
    },
    { 
      id: 3, 
      title: 'Web Development Best Practices', 
      excerpt: 'Tips for building modern web applications', 
      category: 'Tech' 
    },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Totalsportek Blogs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing stories, insights, and articles about <Link href="/sports" className="text-blue-600 hover:underline">sports technology</Link>, <Link href="/blogs" className="text-blue-600 hover:underline">innovative sports solutions</Link>, and more at Totalsportek
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

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <span className="text-sm text-blue-600 font-semibold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href="/blogs"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
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
