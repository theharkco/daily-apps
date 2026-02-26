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

# Deployment (Coolify)
- **Recommended**: Deploy via UI at https://apps.harkco.se
  - Go to dashboard → Create New Resource → GitHub
  - Select "Public repository" option
  - Enter repository URL: `https://github.com/theharkco/<app-name>`
  - Configure build settings (Nixpacks for Next.js)
  - Enable auto-deploy for automatic CI/CD
- **API** (for advanced use):
  - Base endpoint: `https://apps.harkco.se/api/v1/`
  - Token: from 1Password vault `minihark` → `GitHub Token`
  - Create application: `POST /v1/applications` with project_uuid, server_uuid, environment info, git_repository, etc.
  - Note: API requires project and server UUIDs from Coolify dashboard

# Existing Coolify Apps (for reference)
- **XRP Insights**: `t0488scsg0ogkw4884owkkkk` → `https://xrp-insights.apps.harkco.se`
- **XRP Alert Bot**: `pssk8o8o8swg0cc88ogk0wg4` → `https://xrp-alerts.apps.harkco.se`
- **Fraga Kölle**: `bkc848gkccww4k4ws00cw00k` → `https://fragakolle.se`

# Other Periodic Checks
- Email - Any urgent unread messages?
- Calendar - Upcoming events in next 24-48h?
- Weather - Relevant if user might go out?