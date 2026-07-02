import AnimateOnScroll from '@/components/ui/animate-on-scroll'

export default function TeaGarden() {
  return (
    <section className="relative overflow-hidden bg-tea-charcoal">
      {/* Curved top transition */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 lg:h-24 bg-tea-cream rounded-b-[100%]" />

      <div className="relative pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <AnimateOnScroll variant="fade-left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=800&q=80)' }}
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-4 sm:right-4 sm:-bottom-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl max-w-[200px] sm:max-w-[240px]">
                  <p className="font-heading text-2xl sm:text-3xl text-tea-crimson">85+</p>
                  <p className="font-body text-xs sm:text-sm text-tea-olive mt-1">Years of tea craftsmanship & heritage</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <AnimateOnScroll variant="fade-right">
              <div>
                <span className="text-tea-gold font-body text-xs uppercase tracking-[0.25em] font-semibold">Our Heritage</span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 leading-tight">
                  From the Garden<br />
                  <span className="text-tea-gold">to Your Cup</span>
                </h2>
                <div className="w-14 h-0.5 bg-tea-gold mb-6" />
                <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Nestled in the misty highlands of Sylhet, our tea gardens span across generations of meticulous leaf cultivation. We work directly with family-owned estates that have perfected the art of orthodox tea making for over eight decades.
                </p>
                <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                  Every leaf is hand-plucked at peak maturity, withered on native bamboo racks, and rolled with a patience that mass production simply cannot replicate. The result is a cup that carries the memory of its mountain home.
                </p>
                <a href="#" className="inline-flex items-center gap-2 bg-tea-gold text-tea-charcoal font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-tea-gold-light transition-all duration-300">
                  Visit Our Garden
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-24 bg-white rounded-t-[100%]" />
    </section>
  )
}
