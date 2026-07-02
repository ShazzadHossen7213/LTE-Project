'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { IoChevronForward } from 'react-icons/io5'

const slides = [
  {
    title: 'Rare Leaves,',
    titleAccent: 'Extraordinary Stories',
    subtitle: 'Purveyor of direct trade, organic teas from off the beaten path',
    cta: 'Explore Collection',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1600&q=80',
  },
  {
    title: 'Handpicked From',
    titleAccent: 'Mountain Gardens',
    subtitle: 'Single-origin teas sourced directly from remote estates in Sylhet and Darjeeling',
    cta: 'Shop Single Origins',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1600&q=80',
  },
  {
    title: 'Crafted For',
    titleAccent: 'Life&rsquo;s Quiet Moments',
    subtitle: 'Discover our curated selection of premium loose-leaf blends and rare botanicals',
    cta: 'Discover Blends',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1600&q=80',
  },
]

export default function TeaHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[550px] max-h-[900px] bg-tea-charcoal overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full hero-slider"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-tea-charcoal/95 via-tea-charcoal/70 to-transparent z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="relative z-20 px-6 md:px-16 lg:px-24 max-w-3xl anim-fade-up">
                <span className="inline-block w-16 h-0.5 bg-tea-gold mb-6" />
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-2 tracking-wide">
                  {slide.title}
                </h1>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-tea-gold leading-tight mb-4 tracking-wide">
                  {slide.titleAccent}
                </h1>
                <p className="font-body text-base md:text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
                  {slide.subtitle}
                </p>
                <button className="group inline-flex items-center gap-2 bg-tea-gold text-tea-charcoal font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-tea-gold-light transition-all duration-300">
                  {slide.cta}
                  <IoChevronForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
