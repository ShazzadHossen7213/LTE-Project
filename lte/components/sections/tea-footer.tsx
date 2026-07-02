import { IoLogoInstagram, IoLogoFacebook, IoLogoPinterest, IoLogoYoutube } from 'react-icons/io5'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <IoLogoInstagram className="w-5 h-5" />,
  facebook: <IoLogoFacebook className="w-5 h-5" />,
  pinterest: <IoLogoPinterest className="w-5 h-5" />,
  youtube: <IoLogoYoutube className="w-5 h-5" />,
}

const footerLinks = {
  Teas: ['Black Tea', 'Green Tea', 'Oolong', 'White Tea', 'Herbal Infusions', 'Matcha'],
  Collections: ['Tea Books', 'Royal Collection', 'Classic Selection', 'Gift Sets', 'Limited Edition'],
  Support: ['Shipping Info', 'Returns & Exchanges', 'Tea Care Guide', 'Size Guide', 'FAQ', 'Contact Us'],
}

export default function TeaFooter() {
  return (
    <footer className="bg-tea-charcoal">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <AnimateOnScroll variant="fade-left" className="lg:col-span-2">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl text-tea-gold tracking-wide">
                London <span className="text-white">Tea Exchange</span>
              </h3>
              <p className="font-body text-xs text-tea-gold/60 uppercase tracking-widest mt-2 mb-4">Purveyor of rare, organic teas since 1938</p>
              <p className="font-body text-sm text-white/50 leading-relaxed max-w-sm mb-6">
                Sourcing the world&rsquo;s finest single-origin teas directly from family-owned gardens. Every leaf tells a story of place, patience, and purpose.
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(socialIcons).map(([platform, icon]) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-tea-gold hover:text-tea-charcoal hover:border-tea-gold transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, items], colIdx) => (
            <AnimateOnScroll key={heading} variant="fade-up" delay={colIdx * 100}>
              <div>
                <h4 className="font-body text-xs text-tea-gold uppercase tracking-[0.2em] font-semibold mb-5">{heading}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <AnimateOnScroll variant="fade-up">
        <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/30">&copy; {new Date().getFullYear()} London Tea Exchange. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  )
}
