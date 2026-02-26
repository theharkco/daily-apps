# GitHub PAT Creation Instructions

## Creating a Personal Access Token (PAT) on GitHub

1. Go to GitHub.com and sign in to your account
2. Click on your profile picture in the top right corner
3. Select "Settings" from the dropdown menu
4. In the left sidebar, click "Developer settings"
5. In the left sidebar, click "Personal access tokens"
6. Click "Tokens (classic)" tab
7. Click "Generate new token (classic)"
8. Give your token a descriptive name (e.g., "OpenClaw-Access")
9. Select the scopes/permissions you need:
   - For basic repo access: `repo` scope
   - For CI/CD: `workflow` scope
   - For read-only access: `public_repo` scope
10. Click "Generate token"
11. Copy the generated token - you'll only see it once!

## Storing in 1Password

Once you've created your token:
1. Open 1Password
2. Create a new password item
3. Set the title to "GitHub PAT"
4. Paste your token into the password field
5. Save it securely

## Using with OpenClaw

When using OpenClaw with GitHub, you can reference this token for authentication.