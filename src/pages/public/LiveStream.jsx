import { useState } from 'react'
import { Radio, Bell, MessageCircle, Send, Users } from 'lucide-react'

const chatMessages = [
  { id: 1, name: 'Grace W.', message: 'Amen! This message is powerful 🙏', time: '10:32 AM' },
  { id: 2, name: 'Peter K.', message: 'Watching from Mombasa. God bless!', time: '10:33 AM' },
  { id: 3, name: 'Mary N.', message: 'The worship was amazing today', time: '10:35 AM' },
  { id: 4, name: 'John O.', message: 'Hallelujah! 🔥🔥🔥', time: '10:36 AM' },
  { id: 5, name: 'Faith M.', message: 'Joining from Kisumu 🙌', time: '10:38 AM' },
]

const LiveStream = () => {
  const [isLive] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState(chatMessages)
  const [notifyEnabled, setNotifyEnabled] = useState(false)

  const handleSendMessage = () => {
    if (!chatInput.trim()) return
    setMessages([...messages, {
      id: messages.length + 1,
      name: 'You',
      message: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    setChatInput('')
  }

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-red)]/20 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-white/30'}`} />
            <span className={`text-sm font-semibold ${isLive ? 'text-red-400' : 'text-white/40'}`}>
              {isLive ? 'LIVE NOW' : 'OFFLINE'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-red)] to-[var(--color-church-gold)]">Stream</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join us live every Sunday at 8:00 AM & 10:30 AM EAT
          </p>
        </div>
      </section>

      {/* Stream + Chat */}
      <section className="py-8 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Video Player */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative w-full aspect-video glass border border-white/10 rounded-2xl overflow-hidden">
              {isLive ? (
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID&autoplay=1"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Live Stream"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <Radio size={48} className="text-white/20" />
                  <p className="text-white/40 font-medium">No Live Stream Currently</p>
                  <p className="text-white/30 text-sm">Join us Sunday at 8:00 AM & 10:30 AM</p>

                  {/* Notify Button */}
                  <button
                    onClick={() => setNotifyEnabled(!notifyEnabled)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                      notifyEnabled
                        ? 'bg-[var(--color-church-gold)] text-black'
                        : 'glass border border-white/20 text-white hover:border-[var(--color-church-gold)]/50'
                    }`}
                  >
                    <Bell size={16} />
                    {notifyEnabled ? 'Notifications On ✓' : 'Notify Me When Live'}
                  </button>
                </div>
              )}
            </div>

            {/* Stream Info */}
            <div className="glass border border-white/10 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">Sunday Service</h3>
                <p className="text-white/50 text-sm">Christ Introduced Ministry</p>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Users size={16} />
                <span>1,243 watching</span>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          <div className="flex flex-col glass border border-white/10 rounded-2xl overflow-hidden h-[500px]">
            {/* Chat Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <MessageCircle size={16} className="text-[var(--color-church-purple-light)]" />
              <span className="text-white font-medium text-sm">Live Chat</span>
              <span className="ml-auto text-white/30 text-xs">Simulation</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-church-purple-light)] text-xs font-medium">
                      {msg.name}
                    </span>
                    <span className="text-white/20 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-white/70 text-sm">{msg.message}</p>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-white/10">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-church-purple)]/50"
              />
              <button
                onClick={handleSendMessage}
                className="w-8 h-8 rounded-xl bg-[var(--color-church-purple)] flex items-center justify-center hover:bg-[var(--color-church-purple-light)] transition-colors"
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Streams */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-2xl font-bold text-white mb-6">
          Previous <span className="text-[var(--color-church-gold)]">Streams</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Sunday Service — June 29', views: '2.4K views', date: 'June 29, 2026' },
            { title: 'Sunday Service — June 22', views: '1.8K views', date: 'June 22, 2026' },
            { title: 'Friday Service — June 20', views: '1.2K views', date: 'June 20, 2026' },
          ].map((stream) => (
            <div key={stream.title} className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-church-red)]/30 transition-all hover:scale-[1.02] cursor-pointer">
              <div className="w-full h-36 bg-gradient-to-br from-[var(--color-church-red)]/20 to-[var(--color-church-purple)]/20 flex items-center justify-center">
                <Radio size={32} className="text-white/30" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium text-sm">{stream.title}</h3>
                <div className="flex items-center justify-between mt-2 text-white/40 text-xs">
                  <span>{stream.views}</span>
                  <span>{stream.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default LiveStream