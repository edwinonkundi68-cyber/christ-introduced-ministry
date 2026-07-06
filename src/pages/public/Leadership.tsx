import { Mail, Phone } from 'lucide-react'

const leaders = [
  { name: 'Pastor John Doe', role: 'Senior Pastor', initials: 'JD', bio: 'Pastor John has been leading Christ Introduced Ministry for over 12 years with a passion for the Word of God and soul winning.' },
  { name: 'Pastor Mary Doe', role: 'Co-Pastor', initials: 'MD', bio: 'Pastor Mary oversees the womens ministry and discipleship programs, bringing warmth and wisdom to the congregation.' },
  { name: 'Elder James Smith', role: 'Lead Elder', initials: 'JS', bio: 'Elder James provides spiritual oversight and governance, ensuring the church remains grounded in Biblical truth.' },
  { name: 'Deacon Peter Kamau', role: 'Head Deacon', initials: 'PK', bio: 'Deacon Peter coordinates church operations, outreach programs, and community service initiatives.' },
  { name: 'Pastor Ruth Wanjiku', role: 'Youth Pastor', initials: 'RW', bio: 'Pastor Ruth leads the vibrant youth ministry, discipling the next generation of Christ-centered leaders.' },
  { name: 'Minister David Ochieng', role: 'Worship Leader', initials: 'DO', bio: 'Minister David leads the worship team in creating an atmosphere of praise and encounter with God.' },
]

const Leadership = () => {
  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-blue)]/20 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-blue-light)] to-[var(--color-church-gold)]">Leadership</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Meet the dedicated servants of God who shepherd and serve our congregation.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader) => (
            <div key={leader.name} className="glass border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--color-church-purple)]/40 transition-all hover:scale-[1.02]">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-church-purple)] to-[var(--color-church-blue)] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">{leader.initials}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{leader.name}</h3>
                  <p className="text-[var(--color-church-gold)] text-sm">{leader.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/50 text-sm leading-relaxed">{leader.bio}</p>

              {/* Contact */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <button className="flex items-center gap-1 text-white/40 hover:text-[var(--color-church-purple-light)] text-xs transition-colors">
                  <Mail size={14} />
                  Email
                </button>
                <button className="flex items-center gap-1 text-white/40 hover:text-[var(--color-church-purple-light)] text-xs transition-colors">
                  <Phone size={14} />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Leadership