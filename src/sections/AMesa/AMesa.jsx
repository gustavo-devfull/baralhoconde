import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CardCarousel } from '@/components/CardCarousel'
import card1 from '@/assets/cards/card1.jpg'
import card2 from '@/assets/cards/card2.jpg'
import card3 from '@/assets/cards/card3.jpg'
import cardConde from '@/assets/cards/cardConde.jpg'
import './AMesa.css'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [card1, card2, card3, cardConde]

export function AMesa() {
  useEffect(() => {
    const section = document.querySelector('.s-mesa')

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
    <section className="s-mesa" id="a-mesa">
      <div className="wrap">
        <div className="mesa-grid">
          <div className="rv">
            <CardCarousel cards={CARDS} />
          </div>
          <div>
            <span className="tag rv">I · A Mesa</span>
            <div className="mesa-text">
              <h2 className="rv d1">Dizem que toda mesa de cartas<br />guarda uma história.</h2>
              <p className="rv d2">
                Entre copos de vinho, fumaça de cigarros e noites longas nas colônias
                italianas do interior do Brasil, existia sempre uma carta diferente das outras.
              </p>
              <p className="rv d3">
                Ninguém a comandava. Ninguém a temia.<br />
                Ela apenas aparecia — e mudava tudo.
              </p>
              <div className="rule l rv d4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
