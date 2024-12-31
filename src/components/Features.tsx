import { Sparkles, Calendar, Users } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-yellow-400" />,
    title: "New Beginnings",
    description: "Start fresh with renewed energy and purpose."
  },
  {
    icon: <Calendar className="h-6 w-6 text-yellow-400" />,
    title: "Year-long Planning",
    description: "Set goals and create a roadmap for your success."
  },
  {
    icon: <Users className="h-6 w-6 text-yellow-400" />,
    title: "Community Celebrations",
    description: "Join others in welcoming the new year with joy."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Embrace the New Year
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

