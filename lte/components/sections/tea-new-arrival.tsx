'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import data from '@/data/data.json'
import type { Product } from '@/data/types'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

export default function TeaNewArrival() {
  const allProducts: Product[] = data.products.newArrivals
  const newItems = allProducts.filter((p) => p.badge === 'NEW').slice(0, 8)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tea-cream">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-tea-crimson font-body text-xs uppercase tracking-[0.25em] font-semibold">Fresh Arrivals</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tea-charcoal mt-3 mb-2">New Arrivals</h2>
              <div className="w-14 h-0.5 bg-tea-gold" />
            </div>
            <a href="#" className="font-body text-sm font-semibold text-tea-crimson hover:text-tea-crimson/80 transition-colors inline-flex items-center gap-1 shrink-0">
              View All <span aria-hidden="true">→</span>
            </a>
          </div>
        </AnimateOnScroll>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            540: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
          className="pb-14 tea-testimonials-pagination"
        >
          {newItems.map((product) => (
            <SwiperSlide key={product.id}>
              <a href="#" className="group block bg-white rounded-2xl overflow-hidden border border-tea-border/50 shadow-sm hover:shadow-lg transition-all duration-400">
                <div className="relative aspect-square overflow-hidden bg-tea-light">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <span className="absolute top-3 left-3 bg-tea-crimson text-white text-[10px] font-body font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    New
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-heading text-base sm:text-lg text-tea-charcoal mb-1.5 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-lg text-tea-crimson">
                      ৳{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="font-body text-sm text-tea-muted line-through">
                        ৳{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
