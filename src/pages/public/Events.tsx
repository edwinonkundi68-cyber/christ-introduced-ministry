import { Clock, MapPin, ArrowRight } from 'lucide-react'

const events = [
  { id: 1, title: 'Sunday Service', date: 'July 13, 2026', time: '8:00 AM & 10:30 AM', location: 'Main Auditorium', category: 'Service', description: 'Join us for our weekly Sunday service filled with worship, prayer, and the Word.' },
  { id: 2, title: 'Bible Study', date: 'July 9, 2026', time: '6:00 PM', location: 'Hall B', category: 'Study', description: 'Mid-week Bible study focusing on the book of Romans.' },
  { id: 3, title: 'Youth Conference', date: 'July 19, 2026', time: '10:00 AM', location: 'Youth Center', category: 'Conference', description: 'A powerful conference for young people ages 13-35.' },
  { id: 4, title: 'Women of Grace Retreat', date: 'July 26, 2026', time: '9:00 AM', location: 'Karen, Nairobi', category: 'Retreat', description: 'A day of refreshing for the women of our congregation.' },
  { id: 5, title: 'Evangelism Outreach', date: 'August 2, 2026', time: '8:00 AM', location: 'Kibera, Nairobi', category: 'Outreach', description: 'Community outreach program bringing the Gospel to Kibera.' },
  { id: 6, title: 'Annual Thanksgiving', date: 'August 16, 2026', time: '9:00 AM', location: 'Main Auditorium', category: 'Service', description: 'Our annual thanksgiving service celebrating God\'s faithfulness.' },
]

const categoryColors: Record<string, string> = {
  Service: 'bg-[var(--color-church-purple)]/20 text-[var(--color-church-purple-light)]',
  Study: 'bg-[var(--color-church-blue)]/20 text-[var(--color-church-blue-light)]',
  Conference: 'bg-[var(--color-church-gold)]/20 text-[var(--color-church-gold)]',
  Retreat: 'bg-pink-500/20 text-pink-400',
  Outreach: 'bg-[var(--color-church-red)]/20 text-red-400',
}

const Events = () => {
  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-gold)]/10 via-black to-[var(--color-church-blue)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-gold)] to-[var(--color-church-blue-light)]">Events</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay connected with what God is doing in our community.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="glass border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:border-[var(--color-church-gold)]/30 transition-all cursor-pointer"
            >
              {/* Date Box */}
              <div className="glass border border-[var(--color-church-purple)]/30 rounded-xl p-4 text-center min-w-[80px] flex flex-col items-center justify-center">
                <span className="text-[var(--color-church-gold)] font-bold text-2xl">
                  {event.date.split(' ')[1].replace(',', '')}
                </span>
                <span className="text-white/50 text-sm">{event.date.split(' ')[0]}</span>
                <span className="text-white/30 text-xs">{event.date.split(' ')[2]}</span>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[event.category] || 'bg-white/10 text-white/50'}`}>
                    {event.category}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <div className="flex items-center gap-1 text-white/40 text-xs">
                    <Clock size={12} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/40 text-xs">
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center">
                <button className="flex items-center gap-1 text-sm text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] transition-colors whitespace-nowrap">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Events