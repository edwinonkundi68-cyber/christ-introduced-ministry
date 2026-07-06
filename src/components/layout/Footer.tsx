import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Column 1 — About Church */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-church-purple)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">CIM</span>
            </div>
            <span className="font-bold text-white text-sm">Christ Introduced Ministry</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Spreading the Gospel of Jesus Christ through worship, discipleship, and community outreach.
          </p>
          {/* Social Media */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <a href="#" className="text-white/60 hover:text-[var(--color-church-gold)] transition-colors text-xs border border-white/20 rounded px-2 py-1">
              Facebook
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--color-church-gold)] transition-colors text-xs border border-white/20 rounded px-2 py-1">
              YouTube
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--color-church-gold)] transition-colors text-xs border border-white/20 rounded px-2 py-1">
              TikTok
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--color-church-gold)] transition-colors text-xs border border-white/20 rounded px-2 py-1">
              Instagram
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[var(--color-church-gold)] font-semibold text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Sermons', path: '/sermons' },
              { label: 'Live Stream', path: '/live' },
              { label: 'Ministries', path: '/ministries' },
              { label: 'Events', path: '/events' },
              { label: 'Blog', path: '/blog' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/60 hover:text-[var(--color-church-gold)] text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — Ministries */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[var(--color-church-gold)] font-semibold text-sm uppercase tracking-wider">
            Ministries
          </h3>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Bible School', path: '/bible-school' },
              { label: 'Digital Library', path: '/digital-library' },
              { label: 'TV / Media', path: '/tv-media' },
              { label: 'Prayer Requests', path: '/prayer-requests' },
              { label: 'Testimonies', path: '/testimonies' },
              { label: 'Membership', path: '/membership' },
              { label: 'Give / Donate', path: '/donate' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/60 hover:text-[var(--color-church-gold)] text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4 — Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[var(--color-church-gold)] font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin size={16} className="mt-0.5 text-[var(--color-church-purple-light)] shrink-0" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Phone size={16} className="text-[var(--color-church-purple-light)] shrink-0" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Mail size={16} className="text-[var(--color-church-purple-light)] shrink-0" />
              <span>info@christintroduced.org</span>
            </div>
          </div>

          {/* Service Times */}
          <div className="mt-2">
            <h4 className="text-white/80 font-medium text-sm mb-2">Service Times</h4>
            <div className="flex flex-col gap-1 text-white/60 text-sm">
              <span>Sunday: 8:00 AM & 10:30 AM</span>
              <span>Wednesday: 6:00 PM</span>
              <span>Friday: 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2026 Christ Introduced Ministry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/faq" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer