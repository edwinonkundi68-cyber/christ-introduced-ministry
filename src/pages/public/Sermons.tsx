import { useState } from 'react'
import { Play, Search, Filter } from 'lucide-react'

const sermons = [
  { id: 1, title: 'Walking in Faith', speaker: 'Pastor John', date: 'June 29, 2026', duration: '45 min', category: 'Christ Introduced', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'The Power of Prayer', speaker: 'Pastor Mary', date: 'June 22, 2026', duration: '52 min', category: 'Ministries', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 3, title: 'Grace and Truth', speaker: 'Pastor John', date: 'June 15, 2026', duration: '48 min', category: 'General', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 4, title: 'Living by the Spirit', speaker: 'Elder James', date: 'June 8, 2026', duration: '55 min', category: 'Christ Introduced', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 5, title: 'The Great Commission', speaker: 'Pastor John', date: 'June 1, 2026', duration: '50 min', category: 'General', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 6, title: 'Strength in Worship', speaker: 'Minister David', date: 'May 25, 2026', duration: '42 min', category: 'Ministries', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const categories = ['All', 'Christ Introduced', 'Ministries', 'General']

const Sermons = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = sermons.filter((s) => {
    const matchCategory = activeCategory === 'All' || s.category === activeCategory
    const matchSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-blue)]/20 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Sermon <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-blue-light)] to-[var(--color-church-gold)]">Library</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Watch and listen to powerful messages from our pastors and ministers.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-8 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search sermons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-church-purple)]/50 bg-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={16} className="text-white/40" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--color-church-purple)] text-white'
                    : 'glass border border-white/10 text-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="pb-16 max-w-7xl mx-auto px-4 w-full">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/40">
            <Play size={48} className="mx-auto mb-4" />
            <p>No sermons found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sermon) => (
              <div
                key={sermon.id}
                className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-church-purple)]/50 transition-all hover:scale-[1.02] cursor-pointer"
                onMouseEnter={() => setHoveredId(sermon.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Thumbnail / Video Preview on Hover */}
                <div className="relative w-full h-44 bg-gradient-to-br from-[var(--color-church-purple)]/30 to-[var(--color-church-blue)]/30 overflow-hidden">
                  {hoveredId === sermon.id ? (
                    <iframe
                      src={`${sermon.videoUrl}?autoplay=1&mute=1&controls=0`}
                      className="w-full h-full"
                      allow="autoplay"
                      title={sermon.title}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-church-purple)]/50 transition-all">
                        <Play size={22} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-xs text-[var(--color-church-purple-light)] font-medium">
                    {sermon.category}
                  </span>
                  <h3 className="text-white font-semibold">{sermon.title}</h3>
                  <p className="text-white/50 text-sm">{sermon.speaker}</p>
                  <div className="flex items-center justify-between text-white/40 text-xs">
                    <span>{sermon.date}</span>
                    <span>{sermon.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}

export default Sermons