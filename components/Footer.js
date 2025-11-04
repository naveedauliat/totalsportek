import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Totalsportek Blogs</h3>
            <p className="text-gray-400">
              Your source for live sports technology insights and real-time analytics.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="/blogs" className="block text-gray-400 hover:text-white">
                Blogs
              </Link>
              <Link href="/sports" className="block text-gray-400 hover:text-white">
                Sports
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Totalsportek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}