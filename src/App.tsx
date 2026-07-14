import { Routes, Route } from 'react-router-dom'
import MasterLayout from './components/layout/MasterLayout'
import Home from './pages/public/Home'
import About from './pages/public/About'
import VisionMission from './pages/public/VisionMission'
import Leadership from './pages/public/Leadership'
import Sermons from './pages/public/Sermons'
import LiveStream from './pages/public/LiveStream'
import TVMedia from './pages/public/TVMedia'
import DigitalLibrary from './pages/public/DigitalLibrary'
import Ministries from './pages/public/Ministries'
import Events from './pages/public/Events'
import Gallery from './pages/public/Gallery'
import PrayerRequests from './pages/public/PrayerRequests'
import Testimonies from './pages/public/Testimonies'
import Blog from './pages/public/Blog'

// Public Pages
const BibleSchool = () => <div className="text-white p-8">Bible School Page</div>
const Donate = () => <div className="text-white p-8">Donate Page</div>
const Membership = () => <div className="text-white p-8">Membership Page</div>
const Contact = () => <div className="text-white p-8">Contact Page</div>
const FAQ = () => <div className="text-white p-8">FAQ Page</div>
const Privacy = () => <div className="text-white p-8">Privacy Policy Page</div>
const Terms = () => <div className="text-white p-8">Terms & Conditions Page</div>

// Admin Pages
const AdminLogin = () => <div className="text-white p-8">Admin Login</div>
const AdminDashboard = () => <div className="text-white p-8">Admin Dashboard</div>
const VideoCMS = () => <div className="text-white p-8">Video CMS</div>

function App() {
  return (
    <Routes>
      {/* All public routes wrapped in MasterLayout */}
      <Route element={<MasterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/live" element={<LiveStream />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/prayer-requests" element={<PrayerRequests />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bible-school" element={<BibleSchool />} />
        <Route path="/digital-library" element={<DigitalLibrary />} />
        <Route path="/tv-media" element={<TVMedia />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      {/* Admin routes — no MasterLayout */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/videos" element={<VideoCMS />} />
    </Routes>
  )
}

export default App