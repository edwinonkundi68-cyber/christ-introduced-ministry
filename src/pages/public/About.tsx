import { ArrowRight, Users, Heart, BookOpen, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-purple)]/20 via-black to-[var(--color-church-blue)]/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-church-purple)]/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-purple-light)] to-[var(--color-church-gold)]">Us</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Learn about our story, our faith, and the people behind Christ Introduced Ministry.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white">
              Our <span className="text-[var(--color-church-gold)]">Story</span>
            </h2>
            <p className="text-white/60 leading-relaxed">
              Christ Introduced Ministry was founded with a simple but powerful vision — to introduce people to Jesus Christ and help them grow in their faith journey. What started as a small gathering of believers has grown into a thriving community of thousands.
            </p>
            <p className="text-white/60 leading-relaxed">
              Over the years, God has been faithful in expanding our reach through media, missions, and ministry. We believe every person deserves to encounter the love of Christ, and that is the heartbeat of everything we do.
            </p>
            <Link
              to="/vision-mission"
              className="flex items-center gap-2 text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] transition-colors w-fit"
            >
              Read our Vision & Mission <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image placeholder */}
          <div className="w-full h-80 glass border border-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white/30">
              <Users size={48} className="mx-auto mb-2" />
              <p className="text-sm">Church Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core <span className="text-[var(--color-church-gold)]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Word of God', desc: 'We are a Bible-based church. The Scripture is our foundation for faith and practice.' },
              { icon: Heart, title: 'Love & Community', desc: 'We cultivate a culture of love, belonging, and genuine Christian fellowship.' },
              { icon: Globe, title: 'Outreach', desc: 'We are committed to spreading the Gospel beyond our walls into the nations.' },
              { icon: Users, title: 'Discipleship', desc: 'We invest in growing believers into mature, fruitful followers of Jesus Christ.' },
            ].map((value) => (
              <div key={value.title} className="glass border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--color-church-purple)]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-church-purple)]/20 flex items-center justify-center">
                  <value.icon size={24} className="text-[var(--color-church-purple-light)]" />
                </div>
                <h3 className="text-white font-semibold">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">
            Our <span className="text-[var(--color-church-gold)]">Leadership</span>
          </h2>
          <Link
            to="/leadership"
            className="flex items-center gap-1 text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] text-sm transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Pastor John Doe', role: 'Senior Pastor', initials: 'JD' },
            { name: 'Pastor Mary Doe', role: 'Co-Pastor', initials: 'MD' },
            { name: 'Elder James Smith', role: 'Lead Elder', initials: 'JS' },
          ].map((leader) => (
            <div key={leader.name} className="glass border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 text-center hover:border-[var(--color-church-gold)]/30 transition-all">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-church-purple)] to-[var(--color-church-blue)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">{leader.initials}</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{leader.name}</h3>
                <p className="text-[var(--color-church-gold)] text-sm">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About