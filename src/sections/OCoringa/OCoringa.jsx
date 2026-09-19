import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './OCoringa.css'

gsap.registerPlugin(ScrollTrigger)

export function OCoringa() {
  useEffect(() => {
    const section = document.querySelector('.s-coringa')

    gsap.fromTo(
      section,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top 100%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])
  return (
    <section className="s-coringa" id="o-coringa">
      <div className="wrap-s">
        <span className="tag rv" style={{ textAlign: 'center' }}>II · O Coringa</span>
        <div className="coringa-lines">
          <span className="cl rv">Uma carta sem reino.</span>
          <span className="cl rv d1">Sem exército.</span>
          <span className="cl rv d2">Sem regras.</span>
          <span className="cg"></span>
          <span className="crev rv d3">O Coringa.</span>
        </div>
        <div className="rule c rv d4"></div>
        <p className="coringa-body rv d4">
          Enquanto reis comandavam, damas influenciavam e valetes serviam,<br />
          ele atravessava o jogo livremente — mudando destinos sem pedir permissão.
        </p>
      </div>
    </section>
  )
}
