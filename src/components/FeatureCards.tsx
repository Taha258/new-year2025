import { Bell, Clock, Globe } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Live updates",
    description: "Stay informed with real-time updates from around the world",
    gradient: "from-indigo-500 to-blue-600",
    href: "#"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Global Schedule",
    description: "Track New Year celebrations across different time zones",
    gradient: "from-purple-500 to-pink-600",
    href: "#"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Virtual Celebrations",
    description: "Join online events and connect with people worldwide",
    gradient: "from-pink-500 to-red-600",
    href: "#"
  }
]

export default function FeatureCards() {
  return (
    <section className="px-4 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group relative p-[1px] rounded-xl overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} group-hover:opacity-75 transition`} />
              <div className="relative bg-gray-900 p-6 h-full rounded-xl">
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

