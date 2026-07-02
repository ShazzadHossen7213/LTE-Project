import TeaHero from '@/components/sections/tea-hero'
import TeaProducts from '@/components/sections/tea-products'
import TeaPopular from '@/components/sections/tea-popular'
import TeaNewArrival from '@/components/sections/tea-new-arrival'
import TeaGarden from '@/components/sections/tea-garden'
import TeaTestimonials from '@/components/sections/tea-testimonials'
import TeaNewsletter from '@/components/sections/tea-newsletter'
import TeaFooter from '@/components/sections/tea-footer'

export default function Home() {
  return (
    <main>
      <TeaHero />
      <TeaProducts />
      <TeaPopular />
      <TeaNewArrival />
      <TeaGarden />
      <TeaTestimonials />
      <TeaNewsletter />
      <TeaFooter />
    </main>
  )
}
