import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSectionAnimation(sectionSelector) {
  useEffect(() => {
    const section = document.querySelector(sectionSelector)
    if (!section) return

    const elements = section.querySelectorAll('.rv')

    elements.forEach((el, index) => {
      const delay = index * 0.15

      gsap.fromTo(
        el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 55%',
            scrub: false,
            markers: false,
          },
          delay: delay,
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [sectionSelector])
}
