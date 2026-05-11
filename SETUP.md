# 🎴 Baralho Conde - Setup Vite + React + GSAP

## ✅ Estrutura Criada

```
src/
├── components/        # Componentes reutilizáveis (Nav, TweaksPanel, etc)
├── sections/          # Seções do site (Hero, AMesa, OCoringa, etc)
├── hooks/             # Custom hooks (useTweaks, useGSAPAnimations)
├── contexts/          # Context API (TweaksContext)
├── styles/            # Estilos globais e tokens
│   ├── globals.css    # Reset + layout utilities
│   └── tokens.css     # Design tokens (colors, spacing, fonts)
└── utils/             # Funções auxiliares
```

## 📦 Dependências Instaladas

- **React 19.2.5** — UI library
- **Vite 8.0.10** — Build tool
- **GSAP 3.12.2** — Animation library (com ScrollTrigger)

## 🚀 Comandos Disponíveis

```bash
npm run dev      # Inicia servidor dev (http://localhost:5173)
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # ESLint
```

## 📁 Arquivos Originais

Os arquivos HTML e JSX originais estão em `_legacy/`:
- `_legacy/project/Baralho Conde.html` — Design original
- `_legacy/project/tweaks-panel.jsx` — Painel de tweaks

## 🔗 Aliases Configurados

```javascript
@              → src/
@components    → src/components
@sections      → src/sections
@hooks         → src/hooks
@styles        → src/styles
@contexts      → src/contexts
@utils         → src/utils
```

Use no imports:
```javascript
import { Nav } from '@components/Nav'
import { TweaksProvider } from '@contexts/TweaksContext'
import '@styles/globals.css'
```

## 📝 Próximos Passos

1. Criar componentes em `src/components/`
2. Criar seções em `src/sections/`
3. Migrar tweaks-panel.jsx para React moderno
4. Implementar animações GSAP
5. Integrar com TweaksContext

## 🎨 Design Tokens Disponíveis

CSS Variables já configuradas em `src/styles/tokens.css`:
- Cores: `--navy`, `--gold`, `--cream`, `--text`, `--dim`
- Fonts: `--H` (Cinzel), `--D` (Cinzel Decorative), `--B` (Crimson Pro)
- Spacing: `--spacing-xs` até `--spacing-3xl`
- Transitions: `--transition-fast`, `--transition-normal`, `--transition-slow`
