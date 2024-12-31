'use client'

import { useState, useEffect } from 'react'

export default function NewYearMessage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-6xl md:text-8xl font-bold mb-4 text-yellow-400 animate-pulse">
        Happy New Year 2025!
      </h1>
      <p className="text-2xl md:text-3xl mb-8 text-gray-300">
        May this year bring you joy, success, and new adventures!
      </p>
    </div>
  )
}

