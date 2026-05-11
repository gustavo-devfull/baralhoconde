import { useEffect } from 'react'
import gsap from 'gsap'
import './Hero.css'

export function Hero() {
  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .fromTo('.hero-pre',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        0.4
      )
      .fromTo('.hero-h',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        0.7
      )
      .fromTo('.hero-vr',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        1
      )
      .fromTo('.hero-sub',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        1.2
      )
      .fromTo('.hero-dn',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
        1.8
      )

    // Pulsação contínua da seta
    gsap.to('.hero-dn-bar', {
      scaleY: 0.65,
      opacity: 0.3,
      duration: 2.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-c">
        <p className="hero-pre">Baralho Conde · Memória Ítalo-Brasileira</p>
        <h1 className="hero-h">O Conde</h1>
        <div className="hero-vr"></div>
        <p className="hero-sub">A carta que foge às regras</p>
      </div>
      <div className="hero-dn">
        <div className="hero-dn-bar"></div>
        <span className="hero-dn-t">Descubra</span>
      </div>
    </section>
  )
}
