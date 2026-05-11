import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(selector = '.rv', threshold = 0.1) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    elements.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          markers: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [selector, threshold])
}

export function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (!nav) return

    const handleScroll = () => {
      if (window.scrollY > 70) {
        nav.classList.add('s')
      } else {
        nav.classList.remove('s')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export function useHeroAnimation() {
  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .to('.hero-pre', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.4)
      .to('.hero-h', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.7, '<')
      .to('.hero-vr', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 1, '<')
      .to('.hero-sub', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 1.2, '<')
      .to('.hero-dn', { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 1.8, '<')

    gsap.to('.hero-dn-bar', {
      scaleY: 0.65,
      opacity: 0.3,
      duration: 2.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })
  }, [])
}
