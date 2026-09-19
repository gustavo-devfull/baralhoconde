import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Manifesto.css'

gsap.registerPlugin(ScrollTrigger)

export function Manifesto() {
  useEffect(() => {
    const section = document.querySelector('.s-manifesto')

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
    <section className="s-manifesto" id="o-baralho">
      <div className="mf-c">
        <span className="tag rv" style={{ textAlign: 'center' }}>V · O Baralho</span>
        <h2 className="rv d1">Uma memória oral<br />transformada em símbolo.</h2>
        <div className="rule c rv d2"></div>
        <p className="rv d2">
          O Baralho Conde nasce dessa <strong>memória oral ítalo-brasileira</strong> e
          transforma tradição em símbolo. Mais do que um jogo, ele carrega a ideia
          de que uma única carta pode mudar tudo.
        </p>
        <p className="rv d3">
          Porque às vezes a partida não é vencida pela força. Nem pela autoridade.
          Mas pela habilidade de <strong>surpreender no momento exato.</strong>
        </p>
        <p className="rv d4" style={{ fontStyle: 'italic', color: 'var(--dim)' }}>
          E quando isso acontece — o Conde entra em cena.
        </p>
      </div>
    </section>
  )
}
