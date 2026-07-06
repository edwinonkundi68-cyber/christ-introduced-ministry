import { useState } from 'react'
import { Play, Tv, Radio, Headphones } from 'lucide-react'

const mediaContent = [
  { id: 1, title: 'CIM TV — Morning Devotion', type: 'TV', duration: '30 min', date: 'July 6, 2026' },
  { id: 2, title: 'Praise & Worship Session', type: 'Audio', duration: '45 min', date: 'July 5, 2026' },
  { id: 3, title: 'Evening Prayer Broadcast', type: 'TV', duration: '1 hr', date: 'July 4, 2026' },
  { id: 4, title: 'Bible Study — Romans', type: 'Audio', duration: '55 min', date: 'July 3, 2026' },
  { id: 5, title: 'Sunday Highlights Reel', type: 'TV', duration: '20 min', date: 'July 1, 2026' },
  { id: 6, title: 'Prophetic Declarations', type: 'Audio', duration: '15 min', date: 'June 30, 2026' },
]

const types = ['All', 'TV', 'Audio']

const TVMedia = () => {
  const [activeType, setActiveType] = useState('All')

  const filtered = mediaContent.filter((m) =>
    activeType === 'All' || m.type === activeType
  )

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-blue)]/20 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            TV / <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-blue-light)] to-[var(--color-church-gold)]">Media</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Watch and listen to CIM broadcasts, devotions, and media content.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center gap-3">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeType === type
                  ? 'bg-[var(--color-church-purple)] text-white'
                  : 'glass border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid */}
      <section className="pb-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-church-blue)]/40 transition-all hover:scale-[1.02] cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-full h-40 bg-gradient-to-br from-[var(--color-church-blue)]/20 to-[var(--color-church-purple)]/20 flex items-center justify-center">
                {item.type === 'TV' ? (
                  <Tv size={36} className="text-white/30" />
                ) : (
                  <Headphones size={36} className="text-white/30" />
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.type === 'TV'
                      ? 'bg-[var(--color-church-blue)]/20 text-[var(--color-church-blue-light)]'
                      : 'bg-[var(--color-church-purple)]/20 text-[var(--color-church-purple-light)]'
                  }`}>
                    {item.type === 'TV' ? '📺 TV' : '🎧 Audio'}
                  </span>
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <div className="flex items-center justify-between text-white/40 text-xs">
                  <span>{item.date}</span>
                  <span>{item.duration}</span>
                </div>
                <button className="mt-2 flex items-center gap-2 text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] text-sm transition-colors">
                  <Play size={14} />
                  {item.type === 'TV' ? 'Watch Now' : 'Listen Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default TVMedia