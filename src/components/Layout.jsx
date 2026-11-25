import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useLayoutEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section:not(.no-reveal)'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    sections.forEach((section, index) => {
      section.classList.add('reveal')
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.92
      if (inView) {
        section.style.transitionDelay = `${Math.min(index, 4) * 80}ms`
        requestAnimationFrame(() => section.classList.add('is-visible'))
      } else {
        section.style.transitionDelay = '0ms'
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-background text-text overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-[76px] lg:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
