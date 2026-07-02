'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { IoStar, IoStarOutline } from 'react-icons/io5'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const testimonials = [
  {
    name: 'Eleanor Vance',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    text: 'The Sylhet Imperial Noir is unlike any black tea I have ever tasted. Deep, malty, with a natural sweetness — it has become my morning ritual. Exceptional quality.',
  },
  {
    name: 'Rajesh Mehta',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: 'As someone who grew up on tea estates in Assam, I have high standards. London Tea Exchange exceeds them with every blend. The attention to origin and craft is remarkable.',
  },
  {
    name: 'Clara Johansson',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 4,
    text: 'I ordered the Tea Book Collection for a friend, but ended up keeping it for myself. The presentation is stunning, and each tea is beautifully distinct. Perfect for gifting.',
  },
  {
    name: 'Kenji Tanaka',
    location: 'Tokyo, Japan',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    text: 'The Dragon Well Longjing is the finest I have found outside of Hangzhou. The chestnut notes are perfectly preserved. Truly a world-class purveyor of rare teas.',
  },
]

export default function TeaTestimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fade-up">
          <div className="text-center mb-12">
            <span className="text-tea-crimson font-body text-xs uppercase tracking-[0.25em] font-semibold">Client Voices</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tea-charcoal mt-3 mb-3">What Tea Lovers Say</h2>
            <div className="w-14 h-0.5 bg-tea-gold mx-auto" />
          </div>
        </AnimateOnScroll>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-14 tea-testimonials-pagination"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="bg-tea-cream rounded-2xl p-6 sm:p-8 border border-tea-border/50 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-tea-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                <p className="font-body text-tea-olive/80 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    i < t.rating ? (
                      <IoStar key={i} className="w-3.5 h-3.5 text-tea-gold" />
                    ) : (
                      <IoStarOutline key={i} className="w-3.5 h-3.5 text-tea-border" />
                    )
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${t.avatar})` }} />
                  <div>
                    <p className="font-heading text-sm text-tea-charcoal">{t.name}</p>
                    <p className="font-body text-xs text-tea-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
