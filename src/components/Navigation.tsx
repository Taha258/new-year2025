import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl">
            Global NYE
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-white hover:text-indigo-300 transition">
              Events
            </Link>
            <Link href="#" className="text-white hover:text-indigo-300 transition">
              Time Zones
            </Link>
            <Link href="#" className="text-white hover:text-indigo-300 transition">
              Schedule
            </Link>
          </div>
          <button className="text-white hover:text-indigo-300 transition">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

