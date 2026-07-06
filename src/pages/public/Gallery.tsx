import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const photos = [
  { id: 1, title: 'Sunday Service', category: 'Services', color: 'from-purple-500/30 to-blue-500/30' },
  { id: 2, title: 'Youth Conference', category: 'Events', color: 'from-yellow-500/30 to-orange-500/30' },
  { id: 3, title: 'Worship Team', category: 'Worship', color: 'from-pink-500/30 to-purple-500/30' },
  { id: 4, title: 'Outreach Kibera', category: 'Outreach', color: 'from-green-500/30 to-teal-500/30' },
  { id: 5, title: 'Women Retreat', category: 'Events', color: 'from-rose-500/30 to-pink-500/30' },
  { id: 6, title: 'Bible School Graduation', category: 'Education', color: 'from-blue-500/30 to-cyan-500/30' },
  { id: 7, title: 'Christmas Service', category: 'Services', color: 'from-red-500/30 to-yellow-500/30' },
  { id: 8, title: 'Men of Valor Meeting', category: 'Ministries', color: 'from-gray-500/30 to-blue-500/30' },
  { id: 9, title: 'Children Ministry', category: 'Ministries', color: 'from-yellow-400/30 to-green-500/30' },
]

const categories = ['All', 'Services', 'Events', 'Worship', 'Outreach', 'Ministries', 'Education']

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxId, setLightboxId] = useState<number | null>(null)

  const filtered = photos.filter((p) =>
    activeCategory === 'All' || p.category === activeCategory
  )

  const lightboxPhoto = photos.find((p) => p.id === lightboxId)

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-[var(--color-church-gold)]">Gallery</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Moments captured from our services, events, and community life.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 max-w-7xl mx-auto px-4 w-full">
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
      </section>

      {/* Photo Grid */}
      <section className="pb-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxId(photo.id)}
              className="relative aspect-square glass border border-white/10 rounded-2xl overflow-hidden cursor-pointer group hover:border-white/30 transition-all"
            >
              <div className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                <span className="text-white/20 text-xs text-center px-2">{photo.title}</span>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                <ZoomIn size={24} className="text-white" />
                <span className="text-white text-xs font-medium">{photo.title}</span>
                <span className="text-white/50 text-xs">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxId && lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxId(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxId(null)}
          >
            <X size={28} />
          </button>
          <div className="w-full max-w-2xl aspect-video glass border border-white/10 rounded-2xl overflow-hidden">
            <div className={`w-full h-full bg-gradient-to-br ${lightboxPhoto.color} flex items-center justify-center`}>
              <div className="text-center">
                <p className="text-white font-semibold text-xl">{lightboxPhoto.title}</p>
                <p className="text-white/50 text-sm mt-2">{lightboxPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery