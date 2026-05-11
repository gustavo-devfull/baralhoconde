import { useEffect } from 'react'
import gsap from 'gsap'

export function useButtonHover(selector = 'button') {
  useEffect(() => {
    const buttons = document.querySelectorAll(selector)

    buttons.forEach(button => {
      const tl = gsap.timeline({ paused: true })

      tl.to(button, { scale: 1.05, duration: 0.2, ease: 'power2.out' }, 0)
        .to(button, { boxShadow: '0 8px 24px rgba(196, 145, 42, 0.3)', duration: 0.2 }, 0)

      button.addEventListener('mouseenter', () => tl.play())
      button.addEventListener('mouseleave', () => tl.reverse())

      return () => {
        button.removeEventListener('mouseenter', () => tl.play())
        button.removeEventListener('mouseleave', () => tl.reverse())
      }
    })
  }, [selector])
}
