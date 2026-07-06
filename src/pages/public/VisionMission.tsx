import { Target, Eye, Star } from 'lucide-react'

const VisionMission = () => {
  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-gold)]/10 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-gold)] to-[var(--color-church-purple-light)]">Mission</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The God-given purpose and direction that drives everything we do.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="glass border border-[var(--color-church-gold)]/30 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-church-gold)]/20 flex items-center justify-center">
              <Eye size={28} className="text-[var(--color-church-gold)]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-white/60 leading-relaxed">
              To be a global community of transformed believers who reflect the character of Christ and impact every sphere of society with the Kingdom of God.
            </p>
          </div>

          {/* Mission */}
          <div className="glass border border-[var(--color-church-purple)]/30 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-church-purple)]/20 flex items-center justify-center">
              <Target size={28} className="text-[var(--color-church-purple-light)]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-white/60 leading-relaxed">
              To introduce people to Jesus Christ through preaching, teaching, worship, and service — making disciples who make disciples across Kenya and the world.
            </p>
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Strategic <span className="text-[var(--color-church-gold)]">Goals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '01', title: 'Evangelism', desc: 'Reach the unreached through crusades, media outreach, and personal evangelism.' },
              { number: '02', title: 'Discipleship', desc: 'Establish Bible schools and mentorship programs to grow mature believers.' },
              { number: '03', title: 'Community Impact', desc: 'Transform communities through social programs, youth empowerment, and leadership development.' },
            ].map((goal) => (
              <div key={goal.number} className="glass border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[var(--color-church-purple)]/40 transition-all">
                <span className="text-4xl font-bold text-[var(--color-church-purple)]/30">{goal.number}</span>
                <h3 className="text-white font-semibold text-lg">{goal.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture */}
        <div className="mt-16 glass border border-[var(--color-church-gold)]/20 rounded-2xl p-8 text-center">
          <Star size={32} className="text-[var(--color-church-gold)] mx-auto mb-4" />
          <blockquote className="text-white/80 text-xl italic leading-relaxed max-w-3xl mx-auto">
            "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
          </blockquote>
          <p className="text-[var(--color-church-gold)] mt-4 font-semibold">Matthew 28:19</p>
        </div>
      </section>

    </div>
  )
}

export default VisionMission