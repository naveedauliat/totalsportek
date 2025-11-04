

import Link from 'next/link'

export const metadata = {
  title: 'About - Totalsportek Blogs',
  description: 'Discover Totalsportek Blogs, your live source for sports technology insights and real-time analytics. Learn about our innovative solutions for live streaming athletics and total sport ek innovations.',
  keywords: 'about totalsportek, live sports technology, real-time analytics, live stream athletics, innovative sports solutions, total sport ek, tech in sports, live streaming sports',
  alternates: {
    canonical: 'https://totalsportek-blogs.vercel.app/about',
  },
}

export default function About() {
  return (
    <div className="py-12 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Welcome to Totalsportek Blogs, your trusted source for insightful articles, news,
            and stories covering <Link href="/blogs" className="text-blue-600 hover:underline">sports technology</Link>, <Link href="/sports" className="text-blue-600 hover:underline">innovative sports solutions</Link>, and more. <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for inquiries.
          </p>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              We are dedicated to providing high-quality content that informs, 
              educates, and entertains our readers. Our team of passionate writers 
              and contributors work tirelessly to bring you the latest updates and 
              in-depth analysis.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What We Cover</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Technology and Web Development</li>
              <li>Sports News and Analysis</li>
              <li>Lifestyle and Wellness</li>
              <li>Business and Innovation</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Team</h2>
            <p className="text-gray-700">
              Our diverse team brings together expertise from various fields, 
              ensuring that our content is both accurate and engaging. We believe 
              in the power of storytelling and the importance of sharing knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}