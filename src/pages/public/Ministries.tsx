import { useState } from 'react'
import { ArrowRight, Users } from 'lucide-react'

const ministries = [
  {
    id: 1,
    name: 'Christ Introduced',
    description: 'Our flagship evangelism ministry dedicated to introducing people to Jesus Christ through outreach, crusades, and media.',
    members: 150,
    leader: 'Pastor John Doe',
    color: 'purple',
  },
  {
    id: 2,
    name: 'Youth Ministry',
    description: 'Empowering the next generation of leaders through discipleship, mentorship, and youth-focused programs.',
    members: 200,
    leader: 'Pastor Ruth Wanjiku',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Women of Grace',
    description: 'A community of women growing together in faith, supporting one another through prayer and fellowship.',
    members: 180,
    leader: 'Pastor Mary Doe',
    color: 'gold',
  },
  {
    id: 4,
    name: 'Men of Valor',
    description: 'Building strong, Christ-centered men through accountability, Bible study, and community service.',
    members: 120,
    leader: 'Elder James Smith',
    color: 'red',
  },
  {
    id: 5,
    name: 'Worship Ministry',
    description: 'Leading the congregation into the presence of God through anointed praise and worship.',
    members: 60,
    leader: 'Minister David Ochieng',
    color: 'blue',
  },
  {
    id: 6,
    name: 'Children Ministry',
    description: 'Nurturing children in the Word of God through fun, interactive, and Bible-based programs.',
    members: 90,
    leader: 'Deacon Peter Kamau',
    color: 'gold',
  },
]

const colorMap: Record<string, string> = {
  purple: 'from-[var(--color-church-purple)]/30 to-[var(--color-church-purple)]/10 border-[var(--color-church-purple)]/30',
  blue: 'from-[var(--color-church-blue)]/30 to-[var(--color-church-blue)]/10 border-[var(--color-church-blue)]/30',
  gold: 'from-[var(--color-church-gold)]/20 to-[var(--color-church-gold)]/5 border-[var(--color-church-gold)]/30',
  red: 'from-[var(--color-church-red)]/20 to-[var(--color-church-red)]/5 border-[var(--color-church-red)]/30',
}

const Ministries = () => {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-purple)]/20 via-black to-[var(--color-church-gold)]/10" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-purple-light)] to-[var(--color-church-gold)]">Ministries</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover the different ministries where you can serve, grow, and connect.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              onClick={() => setSelected(selected === ministry.id ? null : ministry.id)}
              className={`glass border rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all hover:scale-[1.02] bg-gradient-to-br ${colorMap[ministry.color]}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Users size={22} className="text-white/70" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-lg">{ministry.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{ministry.description}</p>
              </div>

              {/* Expanded Info */}
              {selected === ministry.id && (
                <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">Leader</span>
                    <span className="text-white/80">{ministry.leader}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">Members</span>
                    <span className="text-white/80">{ministry.members}+</span>
                  </div>
                  <button className="mt-2 flex items-center gap-1 text-sm text-[var(--color-church-gold)] hover:text-white transition-colors">
                    Join this Ministry <ArrowRight size={14} />
                  </button>
                </div>
              )}

              {selected !== ministry.id && (
                <div className="flex items-center gap-1 text-white/30 text-xs mt-auto">
                  <Users size={12} />
                  <span>{ministry.members}+ members</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Ministries