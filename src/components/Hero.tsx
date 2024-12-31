'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section className="relative pt-32 pb-16 px-4">
      <div className="container mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-8 animate-pulse text-center">
          Global New Year
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-300 mb-12">
          Celebrate the arrival of 2025 across different time zones!
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Sign up for updates"
            className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-md hover:opacity-90 transition flex items-center"
          >
            <Sparkles className="mr-2" size={18} />
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}

