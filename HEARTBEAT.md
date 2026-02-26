# HEARTBEAT.md

# Daily Creative Dev Task
- 🎭 Create a new novel web/mobile app daily with creative freedom
- Stack should vary each day (Next.js, Python, Rust, etc.)
- Features should sometimes utilize AI or cryptocurrencies (XRP)
- Create a **separate GitHub repo** for each app (e.g., `theharkco/todo-ai`)
- Keep it achievable in a day, but reach for the stars
- Track all daily apps in a **separate "daily-apps" repo** (`theharkco/daily-apps`)
  - This repo contains a simple `daily-apps/daily-app.md` with links and basic info for each app
  - Each app has its own repo (e.g., `theharkco/todo-ai`, `theharkco/xrp-insight-tips`)

# Git/Workspace Structure
- Workspace: `/Users/minihark/.openclaw/workspace`
- Daily apps folder: `/Users/minihark/.openclaw/workspace/daily-apps/`
  - Each app gets its own subfolder (e.g., `daily-apps/todo-ai/`)
  - Each app folder is its own git repo, pushed to `theharkco/<app-name>`
- Daily apps tracker repo: `theharkco/daily-apps`
  - Contains `daily-apps/daily-app.md` with links and status for all apps

# Deployment
- Deploy each app to Coolify using the API: `https://apps.harkco.se/api/v1`
- App UUIDs and deployment info should be recorded in `daily-apps/daily-app.md`

# Other Periodic Checks
- Email - Any urgent unread messages?
- Calendar - Upcoming events in next 24-48h?
- Weather - Relevant if user might go out?