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

## GitHub Access

GitHub authentication is managed via 1Password:

**Vault:** `minihark`

**Items:**
- `Github Access Token` (ID: `ro4jlgem6usshcsv3xvlbbko4m`) - contains the PAT
- `Github` (ID: `m4dlp4nxu3s3zfc4cqfoxzjrgy`) - login credentials

**Usage:** The PAT is used with `gh` CLI and GitHub API for repository operations. Authentication is done via `echo <token> | gh auth login --with-token`.

**Security:** Token stored in 1Password vault with minimal required scopes (`repo` for full repository access).

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
