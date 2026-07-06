import { Link } from 'react-router-dom'
import { useUIStore } from '../../store/useUIStore'
import { Play, Heart, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

// Animated Counter Component
const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const step = Math.ceil(target / 100)
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) {
          clearInterval(timer)
          return target
        }
        return prev + step
      })
    }, 20)
    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-4xl md:text-5xl font-bold text-[var(--color-church-gold)]">
        {count.toLocaleString()}+
      </span>
      <span className="text-white/60 text-sm uppercase tracking-wider">{label}</span>
    </div>
  )
}

const Home = () => {
  const { setPrayerModal } = useUIStore()

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-purple)]/20 via-black to-[var(--color-church-blue)]/20" />

        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-church-purple)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-church-blue)]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-church-gold)]/5 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="glass px-4 py-2 rounded-full text-sm text-[var(--color-church-gold)] border border-[var(--color-church-gold)]/30">
            ✝ Welcome to Christ Introduced Ministry
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Discover Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-purple-light)] to-[var(--color-church-gold)]">
              Purpose
            </span>{' '}
            In Christ
          </h1>

          {/* Subheading */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Join a community of believers growing in faith, love, and purpose. 
            Experience the transforming power of God's Word every week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              to="/live"
              className="flex items-center gap-2 bg-[var(--color-church-purple)] hover:bg-[var(--color-church-purple-light)] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              <Play size={18} />
              Watch Live
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 glass border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all hover:border-[var(--color-church-gold)]/50 hover:text-[var(--color-church-gold)]"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
            <button
              onClick={() => setPrayerModal(true)}
              className="flex items-center gap-2 text-white/70 hover:text-[var(--color-church-red)] transition-colors"
            >
              <Heart size={18} />
              Prayer Request
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs">Scroll down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Animated Counter Section */}
      <section className="py-16 glass border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter target={5000} label="Members" />
          <Counter target={12} label="Years" />
          <Counter target={500} label="Sermons" />
          <Counter target={20} label="Ministries" />
        </div>
      </section>

      {/* Latest Sermons Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Latest <span className="text-[var(--color-church-gold)]">Sermons</span>
          </h2>
          <Link
            to="/sermons"
            className="flex items-center gap-1 text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] text-sm transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Walking in Faith', speaker: 'Pastor John', date: 'June 29, 2026', duration: '45 min' },
            { title: 'The Power of Prayer', speaker: 'Pastor Mary', date: 'June 22, 2026', duration: '52 min' },
            { title: 'Grace and Truth', speaker: 'Pastor John', date: 'June 15, 2026', duration: '48 min' },
          ].map((sermon) => (
            <div key={sermon.title} className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-church-purple)]/50 transition-all hover:scale-[1.02] cursor-pointer">
              {/* Thumbnail placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-[var(--color-church-purple)]/30 to-[var(--color-church-blue)]/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={20} className="text-white ml-1" />
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
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
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Upcoming <span className="text-[var(--color-church-gold)]">Events</span>
            </h2>
            <Link
              to="/events"
              className="flex items-center gap-1 text-[var(--color-church-purple-light)] hover:text-[var(--color-church-gold)] text-sm transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Sunday Service', date: 'July 13, 2026', time: '8:00 AM', location: 'Main Auditorium' },
              { title: 'Bible Study', date: 'July 9, 2026', time: '6:00 PM', location: 'Hall B' },
              { title: 'Youth Conference', date: 'July 19, 2026', time: '10:00 AM', location: 'Youth Center' },
            ].map((event) => (
              <div key={event.title} className="glass border border-white/10 rounded-2xl p-6 hover:border-[var(--color-church-gold)]/30 transition-all hover:scale-[1.02] cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="glass border border-[var(--color-church-purple)]/30 rounded-xl p-3 text-center min-w-[60px]">
                    <span className="text-[var(--color-church-gold)] font-bold text-lg block">
                      {event.date.split(' ')[1].replace(',', '')}
                    </span>
                    <span className="text-white/50 text-xs">{event.date.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-semibold">{event.title}</h3>
                    <p className="text-white/50 text-sm">{event.time}</p>
                    <p className="text-white/40 text-xs">{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 w-full text-center">
        <div className="glass border border-[var(--color-church-purple)]/30 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-purple)]/10 to-[var(--color-church-blue)]/10" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <Heart size={40} className="text-[var(--color-church-red)]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Prayer?
            </h2>
            <p className="text-white/60 max-w-xl">
              We believe in the power of prayer. Share your prayer request with our community and let us pray with you.
            </p>
            <button
              onClick={() => setPrayerModal(true)}
              className="mt-4 bg-[var(--color-church-red)] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              Submit Prayer Request
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home