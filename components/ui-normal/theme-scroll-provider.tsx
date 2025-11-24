'use client'

import { useEffect, useState } from 'react'

export function ThemeScrollProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = (scrollPosition / scrollHeight) * 100

      if (scrollPercentage >= 50 && !isDark) {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      } else if (scrollPercentage < 50 && isDark) {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      }

      const opacity = Math.min((scrollPercentage - 40) / 20, 1)
      document.documentElement.style.setProperty('--theme-transition-progress', opacity.toString())
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDark])

  return <>{children}</>
}
