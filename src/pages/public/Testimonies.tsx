import { Star, Quote } from 'lucide-react'

const testimonies = [
  { id: 1, name: 'Grace Wanjiru', role: 'Member since 2019', testimony: 'Christ Introduced Ministry changed my life. I came broken and lost, but through the Word and the community here, I found healing, purpose, and a deeper relationship with God.', rating: 5 },
  { id: 2, name: 'Peter Kamau', role: 'Youth Member', testimony: 'The youth ministry gave me direction when I had none. I now serve as a youth leader and I can confidently say this church is life-changing.', rating: 5 },
  { id: 3, name: 'Mary Ochieng', role: 'Women of Grace', testimony: 'I was diagnosed with a serious illness and the prayer team stood with me faithfully. Today I am completely healed. To God be the glory!', rating: 5 },
  { id: 4, name: 'John Mutua', role: 'New Member', testimony: 'I visited CIM for the first time just three months ago and I have never felt more at home in a church. The love here is genuine and the Word is deep.', rating: 5 },
  { id: 5, name: 'Faith Akinyi', role: 'Bible School Student', testimony: 'Enrolling in the Bible School has transformed how I read and understand Scripture. My faith has grown tremendously in just one semester.', rating: 5 },
  { id: 6, name: 'David Otieno', role: 'Worship Team', testimony: 'Serving in the worship ministry has been one of the greatest privileges of my life. The atmosphere of worship at CIM is unlike anything I have experienced.', rating: 5 },
]

const Testimonies = () => {
  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-gold)]/10 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Testi<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-gold)] to-[var(--color-church-purple-light)]">monies</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real stories of God's faithfulness in the lives of our members.
          </p>
        </div>
      </section>

      {/* Testimonies Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonies.map((t) => (
            <div key={t.id} className="glass border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--color-church-gold)]/30 transition-all">
              <Quote size={24} className="text-[var(--color-church-gold)]/40" />
              <p className="text-white/70 text-sm leading-relaxed italic">{t.testimony}</p>
              <div className="flex items-center gap-1 mt-auto">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-[var(--color-church-gold)] fill-[var(--color-church-gold)]" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-church-purple)] to-[var(--color-church-blue)] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Testimony CTA */}
      <section className="py-16 max-w-3xl mx-auto px-4 w-full text-center">
        <div className="glass border border-[var(--color-church-gold)]/20 rounded-2xl p-10 flex flex-col items-center gap-4">
          <Star size={36} className="text-[var(--color-church-gold)]" />
          <h2 className="text-2xl font-bold text-white">Share Your Testimony</h2>
          <p className="text-white/60 text-sm">Has God done something amazing in your life? We would love to hear your story.</p>
          <button className="mt-2 bg-[var(--color-church-gold)] hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
            Share Your Story
          </button>
        </div>
      </section>

    </div>
  )
}

export default Testimonies