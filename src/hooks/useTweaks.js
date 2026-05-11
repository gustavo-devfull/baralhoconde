import { useContext } from 'react'
import { TweaksContext } from '@contexts/TweaksContext'

export function useTweaks() {
  const context = useContext(TweaksContext)
  if (!context) {
    throw new Error('useTweaks must be used within TweaksProvider')
  }
  return context
}
