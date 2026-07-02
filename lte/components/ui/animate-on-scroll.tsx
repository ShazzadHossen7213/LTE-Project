'use client'

import { useRef, useEffect, useState, type ReactNode } from 'react'

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'stagger'

interface Props {
  children: ReactNode
  variant?: AnimationVariant
  className?: string
  delay?: number
  once?: boolean
}

export default function AnimateOnScroll({ children, variant = 'fade-up', className = '', delay = 0, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const animClass = variant === 'stagger'
    ? `anim-stagger ${visible ? 'anim-active' : ''}`
    : visible
      ? `anim-${variant}`
      : 'anim-hidden'

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
