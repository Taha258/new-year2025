'use client'

import { useState, useEffect } from 'react'
import { calculatePakistanTimeLeft } from '@/utils/dateUtils'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function EnhancedCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const updateTimeLeft = () => {
      setTimeLeft(calculatePakistanTimeLeft())
    }

    updateTimeLeft()
    const timer = setInterval(updateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative z-10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-12">
            Countdown to 2025 in Pakistan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg transform rotate-1 group-hover:rotate-3 transition-transform" />
                <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-lg text-center transform -rotate-1 group-hover:-rotate-3 transition-transform">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">{unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}