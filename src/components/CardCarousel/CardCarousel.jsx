import { useEffect, useState } from 'react'
import gsap from 'gsap'
import './CardCarousel.css'

export function CardCarousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const cardElement = document.querySelector('.card-carousel-inner')
    if (!cardElement) return

    const nextSlide = () => {
      setCurrentIndex(prev => (prev + 1) % cards.length)
    }

    const getDuration = (index) => {
      return index === 3 ? 6000 : 2000
    }

    const timer = setTimeout(nextSlide, getDuration(currentIndex))

    gsap.to(cardElement, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(cardElement, {
          opacity: 1,
          duration: 0.3,
        })
      },
    })

    return () => clearTimeout(timer)
  }, [currentIndex, cards.length])

  return (
    <div className="card-carousel">
      <div className="card-carousel-inner">
        <img src={cards[currentIndex]} alt={`Card ${currentIndex + 1}`} />
      </div>
      <div className="carousel-indicators">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
