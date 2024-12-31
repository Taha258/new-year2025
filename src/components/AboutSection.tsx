import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="relative px-4 py-16 bg-gradient-to-r from-indigo-900 to-purple-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Celebrate New Year&apos;s Eve Globally
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join us in a worldwide celebration as we count down to 2025. Experience the magic of New Years Eve across different time zones, cultures, and traditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Explore Events
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 opacity-20 transform -skew-y-6"></div>
    </section>
  )
}

