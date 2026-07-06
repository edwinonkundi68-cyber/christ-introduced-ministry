import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUIStore } from '../../store/useUIStore'
import {
  Menu, X, Sun, Moon, Bell, ChevronDown, Music, Music2
} from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About', path: '/about',
    dropdown: [
      { label: 'About Us', path: '/about' },
      { label: 'Vision & Mission', path: '/vision-mission' },
      { label: 'Leadership', path: '/leadership' },
    ]
  },
  {
    label: 'Media', path: '/sermons',
    dropdown: [
      { label: 'Sermons', path: '/sermons' },
      { label: 'Live Stream', path: '/live' },
      { label: 'TV / Media', path: '/tv-media' },
      { label: 'Digital Library', path: '/digital-library' },
    ]
  },
  {
    label: 'Ministries', path: '/ministries',
    dropdown: [
      { label: 'All Ministries', path: '/ministries' },
      { label: 'Bible School', path: '/bible-school' },
      { label: 'Events', path: '/events' },
    ]
  },
  {
    label: 'Community', path: '/testimonies',
    dropdown: [
      { label: 'Testimonies', path: '/testimonies' },
      { label: 'Prayer Requests', path: '/prayer-requests' },
      { label: 'Blog', path: '/blog' },
      { label: 'Gallery', path: '/gallery' },
    ]
  },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, isMobileMenuOpen, setMobileMenu, toggleMusic, isMusicPlaying } = useUIStore()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--color-church-purple)] flex items-center justify-center">
            <span className="text-white font-bold text-xs">CIM</span>
          </div>
          <span className="font-bold text-white text-sm md:text-base hidden sm:block">
            Christ Introduced Ministry
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--color-church-gold)] ${
                  location.pathname === link.path
                    ? 'text-[var(--color-church-gold)]'
                    : 'text-white/80'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900/95 backdrop-blur-md rounded-xl border border-white/10 py-2 shadow-xl">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-[var(--color-church-gold)] hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            className="text-white/70 hover:text-[var(--color-church-gold)] transition-colors"
            title="Toggle Background Music"
          >
            {isMusicPlaying ? <Music size={18} /> : <Music2 size={18} />}
          </button>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white/70 hover:text-[var(--color-church-gold)] transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Notification Bell */}
          <button className="relative text-white/70 hover:text-[var(--color-church-gold)] transition-colors">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--color-church-red)] rounded-full"></span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenu(!isMobileMenuOpen)}
            className="lg:hidden text-white/70 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className="block py-2 text-white/80 hover:text-[var(--color-church-gold)] font-medium transition-colors"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 flex flex-col gap-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenu(false)}
                      className="block py-1 text-sm text-white/60 hover:text-[var(--color-church-gold)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar