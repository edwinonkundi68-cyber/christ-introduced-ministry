import { useState } from 'react'
import { BookOpen, Download, Search } from 'lucide-react'

const resources = [
  { id: 1, title: 'Understanding Grace', type: 'PDF', author: 'Pastor John', size: '2.4 MB', category: 'Books' },
  { id: 2, title: 'Prayer & Fasting Guide', type: 'PDF', author: 'Pastor Mary', size: '1.1 MB', category: 'Guides' },
  { id: 3, title: 'Bible Study — Psalms', type: 'PDF', author: 'Elder James', size: '3.2 MB', category: 'Bible Study' },
  { id: 4, title: 'Foundations of Faith', type: 'PDF', author: 'Pastor John', size: '4.5 MB', category: 'Books' },
  { id: 5, title: 'Youth Discipleship Manual', type: 'PDF', author: 'Pastor Ruth', size: '2.8 MB', category: 'Guides' },
  { id: 6, title: 'Worship & Praise Notes', type: 'PDF', author: 'Minister David', size: '1.6 MB', category: 'Bible Study' },
]

const categories = ['All', 'Books', 'Guides', 'Bible Study']

const DigitalLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = resources.filter((r) => {
    const matchCategory = activeCategory === 'All' || r.category === activeCategory
    const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-gold)]/10 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-gold)] to-[var(--color-church-purple-light)]">Library</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Download free books, guides, and Bible study materials.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-8 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-church-purple)]/50 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
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

      {/* Resources Grid */}
      <section className="pb-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <div
              key={resource.id}
              className="glass border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--color-church-gold)]/30 transition-all hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-church-gold)]/20 flex items-center justify-center">
                <BookOpen size={22} className="text-[var(--color-church-gold)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[var(--color-church-purple-light)]">{resource.category}</span>
                <h3 className="text-white font-semibold">{resource.title}</h3>
                <p className="text-white/50 text-sm">{resource.author}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white/30 text-xs">{resource.type} • {resource.size}</span>
                <button className="flex items-center gap-1.5 text-sm text-[var(--color-church-gold)] hover:text-white transition-colors">
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default DigitalLibrary