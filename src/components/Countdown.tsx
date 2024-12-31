'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date('2025-01-01T00:00:00').getTime()
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 } // Countdown reached zero
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Countdown to 2025
        </h2>
        <div className="flex justify-center space-x-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-700 rounded-lg p-4 w-24 text-center">
              <div className="text-3xl font-bold text-yellow-400">{value}</div>
              <div className="text-sm uppercase text-gray-400">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
