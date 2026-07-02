'use client'

import AnimateOnScroll from '@/components/ui/animate-on-scroll'
import { IoArrowForward, IoLeafOutline } from 'react-icons/io5'

export default function TeaNewsletter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tea-cream">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll variant="fade-up">
          <div className="bg-tea-charcoal rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tea-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-tea-crimson/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <IoLeafOutline className="w-8 h-8 mx-auto text-tea-gold mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-3">Join the Tea Circle</h2>
            <p className="font-body text-white/60 text-sm sm:text-base max-w-md mx-auto mb-8">
              Be the first to know about new arrivals, limited harvests, and exclusive blends delivered to your door.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3.5 text-white font-body text-sm placeholder:text-white/40 outline-none focus:border-tea-gold/60 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-tea-gold text-tea-charcoal font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-tea-gold-light transition-colors inline-flex items-center gap-2 justify-center shrink-0"
              >
                Subscribe <IoArrowForward className="w-4 h-4" />
              </button>
            </form>
            <p className="font-body text-xs text-white/30 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
