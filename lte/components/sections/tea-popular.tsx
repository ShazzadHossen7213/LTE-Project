'use client'

import data from '@/data/data.json'
import type { Product } from '@/data/types'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

export default function TeaPopular() {
  const allProducts: Product[] = data.products.newArrivals
  const popular = allProducts.filter((p) => p.badge === 'POPULAR' || p.badge === 'PREMIUM').slice(0, 4)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-tea-crimson font-body text-xs uppercase tracking-[0.25em] font-semibold">Customer Favourites</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tea-charcoal mt-3 mb-2">Most Popular</h2>
              <div className="w-14 h-0.5 bg-tea-gold" />
            </div>
            <a href="#" className="font-body text-sm font-semibold text-tea-crimson hover:text-tea-crimson/80 transition-colors inline-flex items-center gap-1 shrink-0">
              View All <span aria-hidden="true">→</span>
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map((product, i) => (
            <AnimateOnScroll key={product.id} variant="scale-in" delay={i * 100}>
              <a href="#" className="group block bg-tea-cream rounded-2xl overflow-hidden border border-tea-border/50 shadow-sm hover:shadow-lg transition-all duration-400">
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  {product.badge === 'PREMIUM' && (
                    <span className="absolute top-3 left-3 bg-tea-charcoal text-tea-gold text-[10px] font-body font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      Premium
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-heading text-base sm:text-lg text-tea-charcoal mb-1.5 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-heading text-lg text-tea-crimson">
                      ৳{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="font-body text-sm text-tea-muted line-through">
                        ৳{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button className="w-full py-2.5 rounded-full bg-white text-tea-charcoal font-body text-sm font-semibold border border-tea-border hover:bg-tea-gold hover:text-tea-charcoal hover:border-tea-gold transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
