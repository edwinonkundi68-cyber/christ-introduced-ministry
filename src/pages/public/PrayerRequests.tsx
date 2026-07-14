import { useState } from 'react'
import { Heart, Send, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  request: z.string().min(10, 'Please describe your prayer request'),
  isAnonymous: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

const PrayerRequests = () => {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-church-red)]/20 via-black to-[var(--color-church-purple)]/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Prayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-church-red)] to-[var(--color-church-gold)]">Requests</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Share your prayer request and let our community pray with you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 max-w-2xl mx-auto px-4 w-full">
        {submitted ? (
          <div className="glass border border-[var(--color-church-gold)]/30 rounded-2xl p-12 text-center flex flex-col items-center gap-4">
            <CheckCircle size={48} className="text-[var(--color-church-gold)]" />
            <h2 className="text-2xl font-bold text-white">Prayer Request Submitted!</h2>
            <p className="text-white/60">Our prayer team will be interceding for you. God bless you!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 glass border border-white/20 text-white px-6 py-2.5 rounded-full text-sm hover:border-[var(--color-church-gold)]/50 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="glass border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-[var(--color-church-red)]" />
              <h2 className="text-white font-bold text-xl">Share Your Request</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-white/60 text-sm">Your Name</label>
                <input
                  {...register('name')}
                  placeholder="Enter your name"
                  className="glass border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-church-purple)]/50 bg-transparent"
                />
                {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-white/60 text-sm">Email Address</label>
                <input
                  {...register('email')}
                  placeholder="Enter your email"
                  type="email"
                  className="glass border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-church-purple)]/50 bg-transparent"
                />
                {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
              </div>

              {/* Prayer Request */}
              <div className="flex flex-col gap-1">
                <label className="text-white/60 text-sm">Prayer Request</label>
                <textarea
                  {...register('request')}
                  placeholder="Share your prayer request here..."
                  rows={5}
                  className="glass border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-church-purple)]/50 bg-transparent resize-none"
                />
                {errors.request && <span className="text-red-400 text-xs">{errors.request.message}</span>}
              </div>

              {/* Anonymous */}
              <div className="flex items-center gap-2">
                <input
                  {...register('isAnonymous')}
                  type="checkbox"
                  id="anonymous"
                  className="w-4 h-4 accent-[var(--color-church-purple)]"
                />
                <label htmlFor="anonymous" className="text-white/60 text-sm">
                  Submit anonymously
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[var(--color-church-purple)] hover:bg-[var(--color-church-purple-light)] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 mt-2"
              >
                <Send size={16} />
                Submit Prayer Request
              </button>
            </form>
          </div>
        )}
      </section>

    </div>
  )
}

export default PrayerRequests