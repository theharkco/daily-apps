# Daily Creative Dev App Tracker

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

## 2026-03-03 - AI Journal Assistant
- 🎯 **App**: AI-powered journal entry generator from daily notes
- 🛠️ **Stack**: Next.js 16.1.6 (Turbopack), TypeScript, Tailwind CSS v4, OpenAI API
- 📦 **Status**: ✅ Running locally, ready for deployment
- 🎨 **Features**:
  - AI transformation of casual notes into well-written journal entries
  - Key point extraction from daily thoughts
  - Journal browser to view and manage past entries
  - Export entries as markdown files
  - Responsive design with calming UI
- 🚀 **Deployment**: Ready for Coolify deployment via GitHub
- 📝 **Setup**:
  - Create `.env.local` with `OPENAI_API_KEY`
  - Run `npm run dev` for local development
  - Deploy via GitHub repository: https://github.com/minihark/ai-journal
  - URL: https://ai-journal.apps.harkco.se (pending deployment)
- 📁 **Repo**: https://github.com/minihark/ai-journal

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
  - Initial example prices shown immediately, then updated from API
- 🚀 **Deployment**: Successfully deployed via Coolify API using Dockerfile
- 📝 **Key Decisions**:
  - Used SvelteKit with static export for simplicity
  - Deployed via nginx for fast, reliable static site delivery
  - CoinGecko API (free, no key required) for live price data
  - Initial render shows example prices for immediate display, then updated from API

## Repo Status
| App Name | Repo | Status |
|----------|------|--------|
| XRP Insights | https://github.com/theharkco/xrp-insight-tips | ✅ Deployed |
| Todo AI | https://github.com/theharkco/todo-ai | ✅ Deployed |
| XRP Alert Bot | https://github.com/theharkco/xrp-alert-bot | ✅ Running |
| Fråga Kölle | https://github.com/theharkco/fraga-kolle | ✅ Deployed |
| Crypto Portfolio Tracker | https://github.com/minihark/crypto-portfolio-tracker | ✅ Running |
| AI Journal Assistant | https://github.com/minihark/ai-journal | 🚧 In Progress |