'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have a question or feedback about <Link href="/blogs" className="text-blue-600 hover:underline">sports technology</Link>? We&apos;d love to hear from you! Check our <Link href="/privacy" className="text-blue-600 hover:underline">privacy policy</Link> or return to <Link href="/" className="text-blue-600 hover:underline">home</Link>.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>

          {submitted && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Thank you! Your message has been sent.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
