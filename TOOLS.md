# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## 🛠️ Service Accounts (Always Available)

### 1Password CLI (`op`)

- **Status**: ✅ Always signed in via service account
- **Vaults**: `theharkco` vault contains GitHub tokens
- **Usage**: `op item get "GitHub Token" --vault "theharkco"`
- **Note**: No signin required - ready to use immediately

### GitHub PAT

- **Location**: Stored in 1password vault `theharkco`
- **Usage**: Retrieve via `op` CLI, then use with `gh auth login --with-token`
- **Note**: Service account authentication available

---

Add whatever helps you do your job. This is your cheat sheet.

### Email (Himalaya)

**Zoho Mail Setup** (configured in `~/.config/himalaya/config.toml`):
- **IMAP:** `imap.zoho.eu:993` (TLS)
- **SMTP:** `smtp.zoho.eu:465` (TLS)
- **Account:** `minihark@zohomail.eu`
- **Password:** Stored in 1Password vault "minihark" under item "Zoho"
- **Auth:** Uses `backend.auth.raw` for inline password (not recommended for sharing)

**Config pattern:**
```toml
[accounts.zoho]
email = "minihark@zohomail.eu"
default = true

backend.type = "imap"
backend.host = "imap.zoho.eu"
backend.port = 993
backend.encryption.type = "tls"
backend.login = "minihark@zohomail.eu"
backend.auth.type = "password"
backend.auth.raw = "<password>"

message.send.backend.type = "smtp"
message.send.backend.host = "smtp.zoho.eu"
message.send.backend.port = 465
message.send.backend.encryption.type = "tls"
message.send.backend.login = "minihark@zohomail.eu"
message.send.backend.auth.type = "password"
message.send.backend.auth.raw = "<password>"
```

**Send email template:**
```bash
cat << 'EOF' | himalaya template send
From: minihark@zohomail.eu
To: recipient@example.com
Subject: Your subject

Message body here!
EOF
```
