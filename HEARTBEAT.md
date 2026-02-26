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
- Deploy each app to Coolify via the UI at https://apps.harkco.se
- **Manual process required**: Go to the Coolify dashboard → Create New Resource → GitHub
- App UUIDs and deployment info should be recorded in `daily-apps/daily-app.md`

# API Notes (from existing deployments)
- Coolify API requires authentication via Bearer token from 1Password vault `minihark`
- Token: `8q4mewZbfvyEWCl77ogltSpCvget8pk6pypVF4TX9a0a92cb`
- Base endpoint: `https://apps.harkco.se/api/v1/`
- Existing apps:
  - XRP Insights: `t0488scsg0ogkw4884owkkkk` → `https://xrp-insights.apps.harkco.se`
  - XRP Alert Bot: `pssk8o8o8swg0cc88ogk0wg4` → `https://xrp-alerts.apps.harkco.se`
  - Fraga Kölle: `bkc848gkccww4k4ws00cw00k` → `https://fragakolle.se`
- The API endpoints I tried (`/api/v1/applications`, `/api/v1/deployments`) returned "Not found"
- Manual deployment via UI is the reliable method

# Other Periodic Checks
- Email - Any urgent unread messages?
- Calendar - Upcoming events in next 24-48h?
- Weather - Relevant if user might go out?