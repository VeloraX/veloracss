# Velora Tracker

This app is the first executable slice of Phase 9.

It provides a small Node 20 ESM service that:

- reads GitHub and Discord credentials from the environment
- exposes a health endpoint for local checks
- reads the live VeloraCSS Team Planning project from GitHub Projects on demand
- accepts GitHub webhook payloads with optional signature verification
- accepts Discord interactions with Ed25519 signature verification
- normalizes incoming project-item state into the canonical tracker shape
- stores mapping and audit state in memory for the first scaffold pass
- exposes Discord command definitions for the tracked-project workflow

## Requirements

- Node 20+
- environment variables provided to the process at runtime

## Configuration

`tracker/.env.example` is the current template for local configuration:

- `PORT`
- `GITHUB_WEBHOOK_SECRET`
- `GITHUB_TOKEN`
- `GITHUB_ORG`
- `GITHUB_PROJECT_NUMBER`
- `DISCORD_PUBLIC_KEY`
- `DISCORD_APPLICATION_ID`
- `DISCORD_BOT_TOKEN`
- `DISCORD_GUILD_ID`
- `DISCORD_OPERATOR_ROLE_IDS` (optional comma-separated role IDs allowed to use dashboard controls; if omitted, Discord admin/mod permissions are used)

The scaffold reads raw process environment variables only. Copying `.env.example` to `.env` is not enough unless your shell or process manager loads that file first.

## Run locally

```bash
cd tracker
npm start
```

For auto-reload during local work:

```bash
cd tracker
npm run dev
```

To inspect the current Discord command payloads without starting the server:

```bash
cd tracker
npm run commands:preview
```

To register the current command set with Discord:

```bash
cd tracker
npm run commands:register
```

Current command names:

- `tracked-project-view`

## Always-on hosting

If you do not want to keep a local terminal and `cloudflared` open, deploy `tracker/` as a small web service.

This repo now includes [render.yaml](../render.yaml), which is a repo-owned Render blueprint for the tracker service.

One-time setup in Render:

1. Create a new Blueprint service from this GitHub repo.
2. Render will read [render.yaml](../render.yaml) and create the `veloracss-tracker` web service from `tracker/`.
3. In the Render service settings, add these secret values:
	- `GITHUB_WEBHOOK_SECRET`
	- `GITHUB_TOKEN`
	- `DISCORD_PUBLIC_KEY`
	- `DISCORD_APPLICATION_ID`
	- `DISCORD_BOT_TOKEN`
	- `DISCORD_GUILD_ID`
	- `DISCORD_OPERATOR_ROLE_IDS` (optional)
4. Deploy the service.
5. Copy the Render service URL and set Discord Interactions URL to:
	- `<render-url>/discord/interactions`
6. Optionally set the GitHub webhook target to:
	- `<render-url>/github/webhook`

After that, every push to GitHub auto-deploys the tracker service. No local `cloudflared` process is needed.

## HTTP endpoints

- `GET /health`: service status, config presence, command names, and in-memory counts
- `GET /discord/commands`: preview the Discord command registry JSON
- `GET /github/project`: preview the live GitHub Project summary JSON for the configured org and project number
- `POST /discord/interactions`: verify Discord signatures and return the live project summary command response
- `GET /mappings`: inspect the current in-memory mapping records
- `GET /audit`: inspect recent in-memory audit entries
- `POST /github/webhook`: accept GitHub webhook payloads and update mapping state

## First live setup

To get the Discord app to show the VeloraCSS Team Planning board, provide:

- `GITHUB_TOKEN` with read access to the private VeloraX project and linked content
- `GITHUB_PROJECT_NUMBER=10`
- `DISCORD_PUBLIC_KEY`
- `DISCORD_APPLICATION_ID`
- `DISCORD_BOT_TOKEN`
- `DISCORD_GUILD_ID`

Then:

```bash
cd tracker
npm run commands:register
npm start
```

After that, use `/tracked-project-view` in the configured Discord guild.

The command now renders a shared dashboard-style Discord message with:

- a board overview embed
- lane embeds for `Todo`, `In progress`, and `Done` when viewing all lanes
- a refresh button
- a status filter select menu
- a `Manage` button that opens a private writer panel for admins, moderators, or configured operator roles
- a link button back to the GitHub Project board

The writer panel currently supports:

- creating draft items from a Discord modal
- changing status for any visible project card
- changing or clearing priority for any visible project card
- editing title, notes, driver, and target date for draft items
- deleting draft items from the GitHub Project board

Readers can still view the shared dashboard without getting write access to GitHub.

## Current limitations

- mapping and audit state resets on process restart
- the shared public dashboard does not auto-refresh itself yet after write actions; use Refresh until message mapping is added
- outbound GitHub Project mutations exist for the first manager-panel slice, but iteration, size, linked issue title edits, and automatic shared-dashboard refresh are still incomplete
- Discord message mapping and loop prevention are not implemented yet
- webhook normalization is intentionally broad until live payload samples are wired in
