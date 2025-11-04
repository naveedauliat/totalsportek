

import Link from 'next/link'

export const metadata = {
  title: 'Privacy - Totalsportek Blogs',
  description: 'Read Totalsportek Blogs privacy policy for live sports technology insights and real-time analytics. Learn about our data practices for innovative solutions in live streaming athletics.',
  keywords: 'privacy totalsportek, live sports technology, real-time analytics, live stream athletics, innovative sports solutions, total sport ek, tech in sports, live streaming sports',
  alternates: {
    canonical: 'https://totalsportek-blogs.vercel.app/privacy',
  },
}

export default function Privacy() {
  return (
    <div className="py-12 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2024</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us, including when 
              you create an account, subscribe to our newsletter, or contact us for support.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to provide, maintain, and improve our 
              services, to communicate with you, and to protect our users.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. Information Sharing
            </h2>
            <p className="text-gray-700">
              We do not share your personal information with third parties except as 
              described in this policy or with your consent.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Data Security
            </h2>
            <p className="text-gray-700">
              We take reasonable measures to help protect your personal information from 
              loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              5. Your Rights
            </h2>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal information 
              at any time.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              6. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>
              through our contact page or learn more <Link href="/about" className="text-blue-600 hover:underline">about us</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}