import { createContext, useState, useCallback } from 'react'

export const TweaksContext = createContext()

export function TweaksProvider({ children, defaults = {} }) {
  const [tweaks, setTweaks] = useState(defaults)

  const updateTweak = useCallback((key, value) => {
    setTweaks(prev => ({ ...prev, [key]: value }))
  }, [])

  const updateTweaks = useCallback((updates) => {
    setTweaks(prev => ({ ...prev, ...updates }))
  }, [])

  const resetTweaks = useCallback(() => {
    setTweaks(defaults)
  }, [defaults])

  return (
    <TweaksContext.Provider value={{ tweaks, updateTweak, updateTweaks, resetTweaks }}>
      {children}
    </TweaksContext.Provider>
  )
}
