'use client'

import data from '@/data/data.json'
import type { Product } from '@/data/types'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

export default function TeaProducts() {
  const allProducts: Product[] = data.products.newArrivals
  const featured = allProducts.slice(0, 8)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tea-cream">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fade-up">
          <div className="text-center mb-12">
            <span className="text-tea-crimson font-body text-xs uppercase tracking-[0.25em] font-semibold">Our Selection</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tea-charcoal mt-3 mb-3">Premium Tea Collection</h2>
            <div className="w-14 h-0.5 bg-tea-gold mx-auto" />
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <AnimateOnScroll key={product.id} variant="fade-up" delay={i * 80}>
              <a href="#" className="group block bg-white rounded-2xl overflow-hidden border border-tea-border/50 shadow-sm hover:shadow-lg transition-all duration-400">
                <div className="relative aspect-4/5 overflow-hidden bg-tea-light">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] font-body font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                      product.badge === 'PREMIUM'
                        ? 'bg-tea-charcoal text-tea-gold'
                        : product.badge === 'SALE'
                        ? 'bg-tea-crimson text-white'
                        : 'bg-tea-gold text-tea-charcoal'
                    }`}>
                      {product.badge}
                    </span>
                  )}
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
