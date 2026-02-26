# GitHub Credentials Management Guide

## Creating a Personal Access Token (PAT)

1. Visit https://github.com/settings/tokens
2. Sign in to your GitHub account
3. Click "Generate new token (classic)"
4. Give it a descriptive name like "OpenClaw-Access"
5. Select appropriate scopes:
   - `repo` for full repository access
   - `workflow` if you need to manage GitHub Actions
6. Click "Generate token"
7. Copy the token immediately - you won't see it again!

## Storing Securely

For OpenClaw, you can:
1. Save the token in your local environment variables
2. Store it in a secure password manager like 1Password or Bitwarden
3. Keep it in a secure file with restricted permissions

## Using with OpenClaw

When using OpenClaw with GitHub:
- Set the token as an environment variable
- Or reference it in your OpenClaw configuration files

## Security Best Practices

- Never commit PATs to version control
- Use the minimal required permissions
- Rotate tokens periodically
- Revoke tokens when no longer needed

## Alternative: GitHub App Authentication

For better security, consider creating a GitHub App instead of using a PAT:
1. Go to GitHub Settings → Developer settings → GitHub Apps
2. Create a new app with appropriate permissions
3. Use the app's credentials instead of PATs

This approach provides better security and can be scoped more precisely.