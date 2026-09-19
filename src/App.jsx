import { useContext, useEffect } from 'react'
import { TweaksProvider, TweaksContext } from '@contexts/TweaksContext'
import { Nav, Footer } from '@components'
import { Hero, AMesa, OCoringa, OApelido, ONobre, Manifesto, Final } from '@sections'
import { useReveal } from '@hooks/useReveal'
import { useScrollTrigger } from '@hooks/useScrollTrigger'
import { useParallax } from '@hooks/useParallax'
import { useButtonHover } from '@hooks/useButtonHover'
import '@styles/globals.css'

const TWEAK_DEFAULTS = {
  accentColor: '#c4912a',
  bgColor: '#1b2446',
  bodySize: 19,
}

function AppContent() {
  const { tweaks } = useContext(TweaksContext)

  // Ativar todos os hooks de animação
  useReveal()
  useScrollTrigger()
  useParallax('.hero', 0.5)
  useButtonHover('button')

  useEffect(() => {
    document.documentElement.style.setProperty('--gold', tweaks.accentColor)
    document.documentElement.style.setProperty('--navy', tweaks.bgColor)
    document.documentElement.style.setProperty('font-size', tweaks.bodySize + 'px')
  }, [tweaks.accentColor, tweaks.bgColor, tweaks.bodySize])

  return (
    <>
      <Nav />
      <Hero />
      <AMesa />
      <OCoringa />
      <OApelido />
      <ONobre />
      <Manifesto />
      <Final />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <TweaksProvider defaults={TWEAK_DEFAULTS}>
      <AppContent />
    </TweaksProvider>
  )
}
