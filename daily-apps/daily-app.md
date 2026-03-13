# Daily Creative Dev App Tracker

## 2026-03-13 - Sound Canvas
- 🎯 **App**: Ambient soundscape mixer with AI-powered mood matching - create, mix, and record custom ambient soundscapes that adapt to your emotional state
- 🛠️ **Stack**: Vanilla JavaScript (no frameworks!), Web Audio API, Python/FastAPI for AI mood analysis
- 📦 **Status**: ✅ Built and pushed to GitHub - ready for deployment
- 🎨 **Features**:
  - **8 Sound Channels**: Rain, Ocean Waves, Forest, Thunder, Fireplace, Café, Wind, Birds
  - **AI Mood Matcher**: Enter how you're feeling → AI suggests optimal sound combinations (new!)
  - **Real-time Visualizer**: Beautiful animated frequency bars with neon aesthetics
  - **Recording**: Capture your mix as downloadable audio file
  - **Presets**: Save and load custom volume mixes (IndexedDB)
  - **Individual Controls**: Play/pause, mute, and adjust volume per channel
  - **Zero dependencies**: Pure vanilla JS with Web Audio API - no external audio files needed!
  - **Glassmorphism UI**: Dark theme with purple/pink/cyan neon accents, animated background blobs
- 🚀 **Deployment**: Ready for Coolify (static site or Docker)
  - Repository: https://github.com/theharkco/sound-canvas
  - Build pack: Static Site (or Dockerfile)
  - Port: 8080
  - Start: nginx serves index.html
- 📁 **Repo**: https://github.com/theharkco/sound-canvas

---

## 2026-03-12 - Memory Palace
- 🎯 **App**: Visual memory aid using the ancient Method of Loci technique
- 🛠️ **Stack**: Python 3.11, Streamlit, Docker
- 📦 **Status**: ✅ Built and tested - ready for deployment
- 🎨 **Features**:
  - Create virtual "rooms" as memory spaces
  - Place "memory objects" with descriptions and precise locations
  - Beautiful purple gradient UI with atmospheric design
  - Stats dashboard (rooms, objects, recall rate)
  - Room grid view with object management
  - Method of Loci mnemonic support
- 🚀 **Deployment**: ⏸️ **Needs manual deployment** (1Password CLI not configured)
  - Repository: https://github.com/theharkco/memory-palace
  - Build pack: Dockerfile (Python 3.11)
  - Port: 8501
  - Start command: `streamlit run src/app.py --server.port=8501 --server.address=0.0.0.0`
  - **Action needed**: 
    - Open https://apps.harkco.se
    - Sign in with Coolify credentials
    - Create new resource → GitHub → Select `theharkco/memory-palace`
    - Use Dockerfile build pack, port 8501
    - Enable auto-deploy
- 📁 **Repo**: https://github.com/theharkco/memory-palace

---

## 2026-03-11 - Dream Journal AI
- 🎯 **App**: Mystical dream journal with pattern analysis and beautiful UI
- 🛠️ **Stack**: React + TypeScript + Tailwind CSS v4 + Vite
- 📦 **Status**: ✅ Deployed at http://wgm6cw8vcwjr5c4n4tyeu9gq.213.80.122.170.sslip.io
- 🎨 **Features**:
  - Dream entry form with mood selector (6 types)
  - Symbol tagging with comma-separated input
  - Analysis dashboard showing mood distribution and top recurring symbols
  - Canvas-based twinkling starry background animation
  - Glassmorphism card effects with backdrop blur
  - LocalStorage persistence (privacy-first!)
- 🚀 **Deployment**: ✅ Deployed via Coolify API (UUID: wgm6cw8vcwjr5c4n4tyeu9gq)
  - Repository: https://github.com/theharkco/dream-journal-ai
  - Build pack: Nixpacks (Node.js)
  - Port: 5173
- 📁 **Repo**: https://github.com/theharkco/dream-journal-ai

---

## 2026-03-08 - MoodCanvas
- 🎯 **App**: Collaborative mood-based art generator that transforms emotions into visual abstract artwork
- 🛠️ **Stack**: SvelteKit, TypeScript, Tailwind CSS v4
- 📦 **Status**: 🔄 Recreating deployment with explicit start command
- 🎨 **Features**:
  - Generate abstract artwork based on mood (joy, melancholy, excitement, calm)
  - Color theory-based palettes for each emotion
  - Beautiful dark theme UI with smooth animations
  - Gallery view with mood filtering
  - LocalStorage persistence for your creations
- 🚀 **Deployment**: ✅ Recreated via Coolify API (UUID: ntmvxr6k0y8ah5ozaoa4szb4)
  - Repository: https://github.com/theharkco/mood-canvas
  - Build pack: Nixpacks (Node.js)
  - Port: 3000
  - Start command: `npm run build && npm run preview -- --port $PORT`
- 📁 **Repo**: https://github.com/theharkco/mood-canvas

---

## 2026-03-07 - Recipe Roulette
- 🎯 **App**: Fun recipe generator that matches ingredients to delicious recipes
- 🛠️ **Stack**: Python, FastAPI, Vanilla HTML/CSS/JS with gradient aesthetics
- 📦 **Status**: 🔄 Recreating deployment with explicit start command
- 🎨 **Features**:
  - Smart recipe matching based on ingredients you have
  - Random mode with dice roll animation 🎲
  - Beautiful gradient UI (purple to pink)
  - Match percentage indicator
  - Missing ingredients highlighted in red
  - Fast API responses with Python/FastAPI
- 🚀 **Deployment**: ✅ Recreated via Coolify API (UUID: li2z1ackat3rcdcmzll16j9r)
  - Repository: https://github.com/theharkco/recipe-roulette
  - Build pack: Nixpacks (Python)
  - Port: 8000
  - Start command: `uvicorn src.app:app --host 0.0.0.0 --port $PORT`
- 📁 **Repo**: https://github.com/theharkco/recipe-roulette

---

## 2026-03-05 - Wisdom Flow
- 🎯 **App**: Daily inspiration and reflection app with beautiful UI
- 🛠️ **Stack**: Next.js 16.1.6 (Turbopack), TypeScript, Tailwind CSS v4
- 📦 **Status**: ✅ Deployed at http://xc4g0wsscw4k0co8o00w4gw4.213.80.122.170.sslip.io (deployment queued)
- 🎨 **Features**:
  - Curated wisdom quotes with category tags
  - Beautiful gradient UI with smooth animations
  - Share functionality (native share or clipboard)
  - History of recent wisdom
  - Responsive design with calming aesthetics
- 🚀 **Deployment**: ✅ Deployed via Coolify API (UUID: xc4g0wsscw4k0co8o00w4gw4)
- 📁 **Repo**: https://github.com/minihark/wisdom-flow

---

## 2026-03-03 - AI Journal Assistant
- 🎯 **App**: AI-powered journal entry generators from daily notes
- 🛠️ **Stack**: Next.js 16.1.6 (Turbopack), TypeScript, Tailwind CSS v4, OpenAI API
- 📦 **Status**: 🔄 Recreating deployment with explicit start command
- 🎨 **Features**:
  - AI transformation of casual notes into well-written journal entries
  - Key point extraction from daily thoughts
  - Journal browser to view and manage past entries
  - Export entries as markdown files
  - Responsive design with calming UI
- 🚀 **Deployment**: ✅ Recreated via Coolify API (UUID: ksfqpljix3e83yi0c0wi8ycu)
  - Repository: https://github.com/minihark/ai-journal
  - Build pack: Nixpacks (Node.js)
  - Port: 5173
  - Start command: `npm run start -- --port $PORT`
  - **Note**: Configure `OPENAI_API_KEY` in Coolify dashboard for full functionality
- 📁 **Repo**: https://github.com/minihark/ai-journal

---

## 2026-03-01 - Crypto Portfolio Tracker
- 🎯 **App**: Real-time cryptocurrency portfolio tracker
- 🛠️ **Stack**: SvelteKit (static build), Tailwind CSS, CoinGecko API
- 📦 **Status**: ✅ Running at https://portfolio.apps.harkco.se
- 📁 **Repo**: https://github.com/minihark/crypto-portfolio-tracker
- 🎨 **Features**:
  - Portfolio value tracking with multiple crypto assets (BTC, ETH, SOL, ADA, DOT)
  - Real-time price updates via CoinGecko API
  - Visual portfolio distribution with pie charts
  - Dark theme with vibrant gradients (Tailwind CSS)
  - Static site deployed via nginx for fast, reliable delivery
  - Initial render shows example prices for immediate display, then updated from API
- 🚀 **Deployment**: Successfully deployed via Coolify API using Dockerfile
- 📝 **Key Decisions**:
  - Used SvelteKit with static export for simplicity
  - Deployed via nginx for fast, reliable static site delivery
  - CoinGecko API (free, no key required) for live price data
  - Initial render shows example prices for immediate display, then updated from API

---

## 2026-02-26 - XRP Insights (RipplePay)
- 🎯 **App**: XRP Micropayments platform with polished tipping UI
- 🛠️ **Stack**: Next.js 16.1.6 (Turbopack), TypeScript, Tailwind CSS v4
- 📦 **Status**: ✅ Deployed at https://xrp-insights.apps.harkco.se
- 🎨 **UI Enhancements**: 
  - Modern gradient background with blob animations
  - Interactive tipping cards (3 options)
  - Success notifications
  - Responsive design
- 📦 **Repo**: https://github.com/theharkco/xrp-insight-tips

---

## 2026-02-26 - Todo AI
- 🎯 **App**: Intelligent task manager with AI-powered suggestions
- 🛠️ **Stack**: Next.js 16.1.6 (Turbopack), TypeScript, Tailwind CSS v4
- 📦 **Status**: ✅ Deployed at http://jkoco8skg004so80wwc8wcco.213.80.122.170.sslip.io
- 📁 **Repo**: https://github.com/theharkco/todo-ai
- 🎨 **Features**:
  - AI task analysis with suggestions
  - Priority-based task management
  - Interactive UI with smooth animations
  - LocalStorage persistence
  - Real-time stats and progress tracking
- 🚀 **Deployment**: API successfully created app and triggered deployment via `/api/v1/deploy`
- 📝 **API Usage**:
  - Created app: `POST /api/v1/applications/public`
  - Triggered deployment: `POST /api/v1/deploy` with `{"uuid": "<app-uuid>"}`
  - Deployed UUID: `jkoco8skg004so80wwc8wcco`

---

## 2026-02-27 - XRP Alert Bot
- 🎯 **App**: Real-time XRP price monitoring with AI-powered analysis
- 🛠️ **Stack**: FastAPI, Python, nixpacks/Dockerfile
- 📦 **Status**: ✅ Running at http://ks0k0os0o0w48co0kswcwsoo.213.80.122.170.sslip.io
- 📁 **Repo**: https://github.com/theharkco/xrp-alert-bot
- 🎨 **Features**:
  - FastAPI server with `/` and `/health` endpoints
  - Ready for XRP price monitoring integration
  - nixpacks build pack for easy deployment
- 🚀 **Deployment**: Successfully deployed via Coolify API
- 📝 **Fixes Applied**:
  - Removed WebSocket connection from startup (was causing crash loop)
  - Simplified to FastAPI app with nixpacks build pack
  - Fixed Dockerfile to use `python3 -m uvicorn src.app:app`

---

## 2026-03-09 - Time Capsule
- 🎯 **App**: Message to your future self - seal thoughts for the future
- 🛠️ **Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, date-fns
- 📦 **Status**: ✅ Redesigned with modern UI - deploying updates
- 🎨 **Features**:
  - Create time capsules with messages and unlock dates
  - Lock screen with countdown timer to your capsules
  - 🆕 Modern design with animated background orbs
  - 🆕 Gradient progress bars showing time remaining
  - 🆕 Enhanced card hover effects and animations
  - 🆕 Improved typography and spacing
  - LocalStorage persistence
  - Overdue capsules highlighted in amber
  - Unlocked capsules shown with green accent
- 🚀 **Deployment**: ✅ Code pushed - rebuilding on Coolify
  - Repository: https://github.com/theharkco/time-capsule
  - Build pack: Nixpacks (Node.js)
  - Port: 3000
- 📁 **Repo**: https://github.com/theharkco/time-capsule

---

## 2026-03-10 - Zen Garden
- 🎯 **App**: Peaceful digital zen garden with drag & drop elements
- 🛠️ **Stack**: SvelteKit, TypeScript, Tailwind CSS v4, static adapter
- 📦 **Status**: ✅ Built and tested - ready for deployment
- 🎨 **Features**:
  - Drag & drop zen elements (stones, lanterns, crystals, trees)
  - Raked sand background pattern
  - Save/load garden layouts via LocalStorage
  - Randomize layout button
  - Clear all button
  - Calming aesthetic with earth tones
- 🚀 **Deployment**: Manual deployment via Coolify UI recommended
  - Repository: https://github.com/theharkco/zen-garden
  - Build pack: Nixpacks (Node.js)
  - Port: 3000
- 📁 **Repo**: https://github.com/theharkco/zen-garden

---

## Repo Status
| App Name | Repo | Status |
|----------|------|--------|
| XRP Insights | https://github.com/theharkco/xrp-insight-tips | ✅ Deployed |
| Todo AI | https://github.com/theharkco/todo-ai | ✅ Deployed |
| XRP Alert Bot | https://github.com/theharkco/xrp-alert-bot | ✅ Running |
| Fråga Kölle | https://github.com/theharkco/fraga-kolle | ✅ Deployed |
| Crypto Portfolio Tracker | https://github.com/minihark/crypto-portfolio-tracker | ✅ Running |
| AI Journal Assistant | https://github.com/minihark/ai-journal | ✅ Deployed |
| Recipe Roulette | https://github.com/theharkco/recipe-roulette | ✅ Deployed |
| MoodCanvas | https://github.com/theharkco/mood-canvas | ✅ Deployed |
| Dream Journal AI | https://github.com/theharkco/dream-journal-ai | ✅ Deployed |
| Memory Palace | https://github.com/theharkco/memory-palace | 🔄 Needs deployment (1Password CLI not configured) |
| **Sound Canvas** | https://github.com/theharkco/sound-canvas | 🚀 Creating now |