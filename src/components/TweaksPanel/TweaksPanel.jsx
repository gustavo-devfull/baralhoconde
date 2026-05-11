import { useState } from 'react'
import { useTweaks } from '@hooks/useTweaks'
import './TweaksPanel.css'

export function TweaksPanel() {
  const { tweaks, updateTweak } = useTweaks()
  const [isOpen, setIsOpen] = useState(false)

  const accentOptions = ['#c4912a', '#b8891f', '#d4a840', '#9f7820']
  const bgOptions = ['#1b2446', '#141c38', '#1a1e3a', '#0f1625']

  return (
    <>
      <button
        className="tweaks-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Tweaks"
      >
        ⚙️
      </button>

      {isOpen && (
        <div className="tweaks-panel">
          <div className="tweaks-header">
            <h3>Tweaks</h3>
            <button
              className="tweaks-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="tweaks-body">
            {/* Cores */}
            <div className="tweaks-section">
              <h4>Cores</h4>

              <div className="tweak-item">
                <label>Dourado</label>
                <div className="color-options">
                  {accentOptions.map(color => (
                    <button
                      key={color}
                      className={`color-swatch ${tweaks.accentColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => updateTweak('accentColor', color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="tweak-item">
                <label>Fundo Navy</label>
                <div className="color-options">
                  {bgOptions.map(color => (
                    <button
                      key={color}
                      className={`color-swatch ${tweaks.bgColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => updateTweak('bgColor', color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Tipografia */}
            <div className="tweaks-section">
              <h4>Tipografia</h4>

              <div className="tweak-item">
                <label>
                  Corpo: <span className="value">{tweaks.bodySize}px</span>
                </label>
                <input
                  type="range"
                  className="slider"
                  min="15"
                  max="24"
                  step="1"
                  value={tweaks.bodySize}
                  onChange={e => updateTweak('bodySize', parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
