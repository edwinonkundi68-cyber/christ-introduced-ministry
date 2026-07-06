import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const MasterLayout = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MasterLayout