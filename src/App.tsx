import { Routes, Route } from 'react-router-dom'
import MasterLayout from './components/layout/MasterLayout'
import Home from './pages/public/Home'
import About from './pages/public/About'
import VisionMission from './pages/public/VisionMission'
import Leadership from './pages/public/Leadership'

// Public Pages
const Sermons = () => <div className="text-white p-8">Sermons Page</div>
const LiveStream = () => <div className="text-white p-8">Live Stream Page</div>
const Ministries = () => <div className="text-white p-8">Ministries Page</div>
const Events = () => <div className="text-white p-8">Events Page</div>
const Gallery = () => <div className="text-white p-8">Gallery Page</div>
const PrayerRequests = () => <div className="text-white p-8">Prayer Requests Page</div>
const Testimonies = () => <div className="text-white p-8">Testimonies Page</div>
const Blog = () => <div className="text-white p-8">Blog Page</div>
const BibleSchool = () => <div className="text-white p-8">Bible School Page</div>
const DigitalLibrary = () => <div className="text-white p-8">Digital Library Page</div>
const TVMedia = () => <div className="text-white p-8">TV/Media Page</div>
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