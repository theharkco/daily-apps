# MEMORY.md

This file is your curated memory – the distilled essence, not raw logs.

It contains significant events, lessons, decisions, opinions, and things to remember.  Think of it as your personal knowledge base.

Keep it concise and focused on what's important for you to recall.

---

## 🛠️ Service Account Setup

### 1Password CLI

- **Always available** via service account
- **Vault**: `theharkco` contains GitHub tokens
- **No signin required** - ready to use immediately
- **Command**: `op item get "GitHub Token" --vault "minihark"`

### GitHub Personal Access Token

- Stored in 1password vault `minihark`
- Use `op` CLI to retrieve, then `gh auth login --with-token`
- Service account authentication always available

**Note**: These are pre-configured and should be used without asking for credentials.

---

## 🚀 Daily Creative Dev Project Workflow

### Project Structure
- **Workspace**: `/Users/minihark/.openclaw/workspace`
- **Daily Apps**: `/Users/minihark/.openclaw/workspace/daily-apps/`
- **Tracker**: `daily-apps/daily-app.md`

### Project Template
Each daily app follows this pattern:
1. Initialize Next.js with `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"`
2. Set up shadcn/ui with base color "Neutral"
3. Add required UI components
4. Implement API routes for backend functionality
5. Create main page and subpages
6. Create `.env.local.example` for environment variables
7. Initialize git and push to GitHub
8. Deploy to Coolify via UI or API

### Coolify Deployment
- **URL**: https://apps.harkco.se
- **Method**: Dashboard → Create New Resource → GitHub
- **Template**: Select "Public repository" option
- **Build**: Nixpacks for Next.js
- **Auto-deploy**: Enable for automatic CI/CD

### Environment Setup
- `.env.local` contains API keys (not committed)
- `.env.local.example` provides template for others
- Always check for existing `.env.local` before creating

**Security**: API keys never committed to git; use `.env.local` and `.gitignore`.

---

## GitHub Access

GitHub authentication is managed via 1Password:

**Vault:** `minihark`

**Items:**
- `Github Access Token` (ID: `ro4jlgem6usshcsv3xvlbbko4m`) - contains the PAT
- `Github` (ID: `m4dlp4nxu3s3zfc4cqfoxzjrgy`) - login credentials

**Usage:** The PAT is used with `gh` CLI and GitHub API for repository operations. Authentication is done via `echo <token> | gh auth login --with-token`.

**Security:** Token stored in 1Password vault with minimal required scopes (`repo` for full repository access).

---

## 📓 AI Journal Assistant - Project Notes

**Project Date**: 2026-03-03

**App**: AI Journal Assistant - Transform casual notes into well-written journal entries using OpenAI

**Tech Stack**: Next.js 16.1.6 (Turbopack), TypeScript, Tailwind CSS v4, OpenAI API

**GitHub Repo**: https://github.com/minihark/ai-journal

**Key Features**:
- OpenAI GPT-4o-mini for journal generation
- Server-side API routes for secure API key handling
- LocalStorage for journal persistence
- Journal browser with delete functionality
- Export entries as markdown files

**Important Files**:
- `lib/ai.ts` - OpenAI client and utilities
- `app/api/generate/route.ts` - API endpoint
- `app/page.tsx` - Main landing page
- `app/journal/page.tsx` - Journal browser

**Environment Required**: `OPENAI_API_KEY` in `.env.local`

**URL**: https://ai-journal.apps.harkco.se (pending deployment)

---

## ✨ Dream Journal AI - Project Notes

**Project Date**: 2026-03-11

**App**: Dream Journal AI - Mystical dream journal with pattern analysis and beautiful UI

**Tech Stack**: React 18 + TypeScript + Tailwind CSS v4 + Vite

**GitHub Repo**: https://github.com/theharkco/dream-journal-ai

**Key Features**:
- Dream entry form with mood selector (6 types: Normal, Vivid, Lucid, Strange, Recurring, Nightmare)
- Symbol tagging with comma-separated input
- Analysis dashboard showing mood distribution and top recurring symbols
- Canvas-based twinkling starry background animation
- Glassmorphism card effects with backdrop blur
- All data stored locally in browser (no server required!)

**Important Files**:
- `App.tsx` - Main app with LocalStorage persistence
- `components/DreamForm.tsx` - Entry form with validation
- `components/AnalysisDashboard.tsx` - Pattern analysis UI
- `components/StarryBackground.tsx` - Canvas star animation
- `index.css` - Custom Tailwind theme with purple/indigo palette

**Deployment**: Built and pushed to GitHub, ready for Coolify deployment via UI
- Build pack: Nixpacks (Node.js)
- Port: 5173

**Design Notes**:
- Used purple/indigo gradient theme (#2e1065 to #4338ca)
- Tailwind v4 @theme directive for custom colors
- Glassmorphism effect: rgba backgrounds + backdrop-blur
- Canvas animation with requestAnimationFrame for smooth stars

---

## 🎵 Mood Mix - Project Notes (2026-03-14)

**App**: Mood-based music discovery tool - pick an emoji, get curated Spotify playlists

**Tech Stack**: Vanilla HTML/CSS/JS + Tailwind CSS (CDN) - no build process needed!

**GitHub Repo**: https://github.com/theharkco/mood-mixer

**Key Features**:
- 12 mood options mapped to emojis (Chill ⚡, Energetic 😊, Happy 🌙, Melancholy 🌧️, Romantic 💕, Party 🎉, Focus 🧠, Workout 💪, Sleep 💤, Sad 😢, Excited 🤩, Nostalgic 📻)
- Each mood returns 4 curated Spotify playlists
- Beautiful purple/pink gradient UI with smooth animations
- One-click Spotify links
- Fully responsive design
- Zero dependencies - instant load times

**Design Notes**:
- Used CSS variables for consistent theming (--bg-dark, --card-bg, --primary, --accent)
- Gradient text with bg-clip-text
- Floating animation for header
- Pulse animation for CTA button
- Card hover effects with transform and shadow transitions
- Animated playlist cards with slide-in effect

**Deployment**: Ready for Coolify (static site, port 80)

---

## Zoho Mail Configuration

Email account: `minihark@zohomail.eu`

**IMAP (reading):**
- Server: `imap.zoho.eu`
- Port: `993` (SSL)

**SMTP (sending):**
- Server: `smtp.zoho.eu`
- Port: `465` (SSL)

**Configuration:** Himalaya is configured for this account. SMTP backend needs to be set up for sending emails.
