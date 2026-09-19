import { useEffect } from 'react'

export function useReveal(selector = '.rv', threshold = 0.3) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold }
    )

    document.querySelectorAll(selector).forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [selector, threshold])
}
