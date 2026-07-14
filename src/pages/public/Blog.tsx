import { useState } from 'react'
import { ArrowRight, Clock, User, Search } from 'lucide-react'

const posts = [
  { id: 1, title: 'Walking in the Spirit: A Daily Guide', author: 'Pastor John', date: 'July 6, 2026', readTime: '5 min read', category: 'Discipleship', excerpt: 'Learning to walk in the Spirit is not a one-time event but a daily choice. In this post, we explore practical ways to stay connected to God throughout your day.' },
  { id: 2, title: 'The Power of Corporate Prayer', author: 'Pastor Mary', date: 'July 1, 2026', readTime: '4 min read', category: 'Prayer', excerpt: 'When believers come together in prayer, something powerful happens. Scripture promises that where two or three gather in His name, He is there among them.' },
  { id: 3, title: 'Understanding Grace: More Than Forgiveness', author: 'Elder James', date: 'June 25, 2026', readTime: '7 min read', category: 'Theology', excerpt: 'Grace is one of the most misunderstood concepts in Christianity. It is far more than just forgiveness — it is the empowering presence of God in our lives.' },
  { id: 4, title: 'Raising Godly Children in a Digital Age', author: 'Pastor Ruth', date: 'June 20, 2026', readTime: '6 min read', category: 'Family', excerpt: 'In a world saturated with screens and social media, how do we raise children who love God and live by His Word? Here are practical principles for Christian parents.' },
  { id: 5, title: 'Worship Beyond Sunday', author: 'Minister David', date: 'June 15, 2026', readTime: '3 min read', category: 'Worship', excerpt: 'True worship is not confined to Sunday mornings. It is a lifestyle of surrender, gratitude, and devotion that transforms every area of our lives.' },
  { id: 6, title: 'Finding Purpose in Your Calling', author: 'Pastor John', date: 'June 10, 2026', readTime: '5 min read', category: 'Discipleship', excerpt: 'Every believer has been called and gifted by God for a specific purpose. The journey of discovering that purpose is one of the most exciting adventures in the Christian life.' },
]

const categories = ['All', 'Discipleship', 'Prayer', 'Theology', 'Family', 'Worship']

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-blue)]/20 via-black to-[var(--color-church-gold)]/10" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-blue-light)] to-[var(--color-church-gold)]">Blog</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Insights, devotions, and teachings from our pastoral team.
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
              placeholder="Search posts..."
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

      {/* Blog Grid */}
      <section className="pb-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <div key={post.id} className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-church-blue)]/40 transition-all hover:scale-[1.02] cursor-pointer flex flex-col">
              {/* Thumbnail */}
              <div className="w-full h-40 bg-gradient-to-br from-[var(--color-church-blue)]/20 to-[var(--color-church-purple)]/20 flex items-center justify-center">
                <span className="text-white/20 text-xs px-4 text-center">{post.category}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="text-xs text-[var(--color-church-blue-light)] font-medium">{post.category}</span>
                <h3 className="text-white font-bold leading-snug">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-white/30 text-xs mt-auto pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <User size={11} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={11} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button className="flex items-center gap-1 text-sm text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] transition-colors">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Blog