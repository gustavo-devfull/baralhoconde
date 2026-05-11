import { useState, useEffect } from 'react'
import './Nav.css'

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={isScrolled ? 's' : ''}>
      <span className="nb">Conde</span>
      <div className="nl">
        <a href="#a-mesa">A Mesa</a>
        <a href="#o-coringa">O Coringa</a>
        <a href="#o-baralho">O Baralho</a>
      </div>
      <button className="nc">Comprar</button>
    </nav>
  )
}
