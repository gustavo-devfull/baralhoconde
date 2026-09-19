import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ONobre.css'

gsap.registerPlugin(ScrollTrigger)

const TRAITS = [
  { s: '♠', t: 'A Astúcia', b: 'Não vence pela força bruta. Sempre pela leitura certa do momento e pelo silêncio calculado.' },
  { s: '♥', t: 'A Virada', b: 'A partida pode mudar em um instante. O Conde é esse instante — inesperado e inevitável.' },
  { s: '♦', t: 'A Elegância', b: 'Aristocrático na postura. Imprevisível na ação. Caminha entre reis sem nunca se tornar banal.' },
  { s: '♣', t: 'A Liberdade', b: 'Não pertence à corte. Circula acima dela. Jamais aceita um destino fixo.' },
]

export function ONobre() {
  useEffect(() => {
    const section = document.querySelector('.s-nobre')

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
    <section className="s-nobre" id="o-nobre">
      <div className="wrap">
        <span className="tag rv" style={{ textAlign: 'center', display: 'block', marginBottom: 48 }}>IV · O Nobre Excêntrico</span>
        <blockquote className="nobre-q rv d1">
          "Como um nobre excêntrico caminhando entre reis<br />
          sem jamais <em>se curvar a eles.</em>"
        </blockquote>
        <div className="traits">
          {TRAITS.map((trait, i) => (
            <div key={i} className={`trait rv d${i + 1}`}>
              <span className="trait-suit">{trait.s}</span>
              <h3>{trait.t}</h3>
              <p>{trait.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
