interface TimeUnitProps {
    value: number
    unit: string
  }
  
  export function TimeUnit({ value, unit }: TimeUnitProps) {
    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg transform rotate-1 group-hover:rotate-3 transition-transform" />
        <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-lg text-center transform -rotate-1 group-hover:-rotate-3 transition-transform">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
          <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">{unit}</div>
        </div>
      </div>
    )
  }