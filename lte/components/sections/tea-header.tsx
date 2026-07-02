'use client'

import { useState, useEffect, useMemo } from 'react'
import { IoSearch, IoBagOutline, IoPersonOutline, IoMenu, IoClose } from 'react-icons/io5'
import data from '@/data/data.json'
import type { Product } from '@/data/types'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#', hasDropdown: true },
  { label: 'Collections', href: '#', hasDropdown: true },
  { label: 'Our Story', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function TeaHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const suggestions = useMemo(() => {
    const q = searchQuery.trim()
    if (!q) return []
    const lower = q.toLowerCase()
    const all = data.products.newArrivals as Product[]
    return all.filter((p: Product) => p.name.toLowerCase().includes(lower)).slice(0, 5)
  }, [searchQuery])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-tea-charcoal'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 -ml-2 ${scrolled ? 'text-tea-charcoal' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <a href="#" className={`font-heading text-2xl lg:text-3xl tracking-wide shrink-0 ${
              scrolled ? 'text-tea-charcoal' : 'text-white'
            }`}>
              <span className="text-tea-gold">London</span>{' '}
              <span className={scrolled ? 'text-tea-charcoal' : 'text-white'}>Tea Exchange</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    scrolled
                      ? 'text-tea-olive hover:text-tea-crimson'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <span className="ml-1">▾</span>}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-3 lg:gap-5">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-1.5 transition-colors ${scrolled ? 'text-tea-olive hover:text-tea-crimson' : 'text-white/85 hover:text-white'}`}
                aria-label="Search"
              >
                <IoSearch className="w-5 h-5" />
              </button>
              <a href="#" className={`p-1.5 hidden sm:block transition-colors ${scrolled ? 'text-tea-olive hover:text-tea-crimson' : 'text-white/85 hover:text-white'}`} aria-label="Account">
                <IoPersonOutline className="w-5 h-5" />
              </a>
              <a href="#" className={`p-1.5 relative transition-colors ${scrolled ? 'text-tea-olive hover:text-tea-crimson' : 'text-white/85 hover:text-white'}`} aria-label="Cart">
                <IoBagOutline className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-tea-crimson text-white text-[9px] font-body font-bold rounded-full flex items-center justify-center">0</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-tea-border bg-white">
            <div className="max-w-3xl mx-auto px-4 py-4 relative">
              <div className="flex items-center gap-3">
                <IoSearch className="w-5 h-5 text-tea-muted shrink-0" />
                <input
                  type="text"
                  placeholder="Search teas, collections, blends..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-tea-olive font-body text-sm placeholder:text-tea-muted outline-none py-1"
                  autoFocus
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery('') }} className="text-tea-muted hover:text-tea-olive text-sm font-body">Cancel</button>
              </div>
              {suggestions.length > 0 && (
                <div className="absolute left-4 right-4 top-full mt-1 bg-white border border-tea-border rounded-xl shadow-lg overflow-hidden z-50">
                  {suggestions.map((p) => (
                    <a key={p.id} href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-tea-cream transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-tea-light bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${p.image})` }} />
                      <div>
                        <p className="font-body text-sm text-tea-charcoal">{p.name}</p>
                        <p className="font-body text-xs text-tea-muted">৳{p.price.toLocaleString()}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl animate-slide-in">
            <div className="p-6 border-b border-tea-border">
              <span className="font-heading text-xl text-tea-charcoal">Menu</span>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl font-body text-sm text-tea-olive hover:bg-tea-cream hover:text-tea-crimson transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <span className="float-right text-tea-muted">▾</span>}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
