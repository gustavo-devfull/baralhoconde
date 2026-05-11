import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useParallax(selector = '.hero', speed = 0.5) {
  useEffect(() => {
    const element = document.querySelector(selector)
    if (!element) return

    gsap.to(element, {
      y: (window.innerHeight) * speed,
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [selector, speed])
}

export function useParallaxMulti(elements) {
  useEffect(() => {
    elements.forEach(({ selector, speed = 0.3 }) => {
      const el = document.querySelector(selector)
      if (!el) return

      gsap.to(el, {
        y: window.innerHeight * speed,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [elements])
}
