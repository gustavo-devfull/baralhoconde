import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Final.css'

gsap.registerPlugin(ScrollTrigger)

export function Final() {
  useEffect(() => {
    const section = document.querySelector('.s-final')

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
    <section className="s-final" id="final">
      <p className="f-orn rv">♠ ♥ ♦ ♣</p>
      <h2 className="f-h rv d1">
        Que o Conde esteja<br />
        sempre a <em>seu favor.</em>
      </h2>
      <p className="f-sub rv d2">Baralho Conde · Memória Ítalo-Brasileira</p>
      <div className="f-btns rv d3">
        <button className="btn-p">Conheça o Baralho</button>
        <button className="btn-s">Nossa História</button>
      </div>
    </section>
  )
}
