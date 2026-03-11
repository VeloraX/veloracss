# Tracker Sync Spec

This document defines how the Discord tracker app and GitHub Projects should stay synchronized for Velora work.

## Goal

Provide a bidirectional project-tracking experience where:

- GitHub Projects remains the canonical task record.
- Discord acts as the fast operational interface.
- The tracker app brokers all synchronization between both systems.

## Core Model

The system has three roles:

- GitHub Projects: source of truth for task state.
- Discord tracker app: interaction surface for users working in Discord.
- Sync broker: the application service that maps, writes, audits, and prevents loops.

Discord should not directly mirror raw GitHub payloads, and GitHub should not be edited by arbitrary Discord chat. All changes must pass through explicit app logic.

## Canonical Entities

Each tracked item needs a stable internal mapping record with at least:

- GitHub project ID
- GitHub project item ID
- GitHub content ID when present
- Discord guild ID
- Discord channel ID
- Discord message ID
- Discord thread ID when used
- Last synced field snapshot hash
- Last sync origin
- Last sync timestamp
- Last processed event ID

## Authority Rules

GitHub is authoritative for:

- final task title
- official project status
- priority
- iteration or target date
- archival or deletion state

Discord is allowed to initiate writeback for:

- status changes through app controls
- priority changes through app controls
- notes updates
- assignment or driver changes when supported
- task creation through explicit slash commands or modals

The app must reject freeform messages as state updates unless a command or structured interaction triggered them.

## Required Synced Fields

Minimum sync contract:

- title
- status
- priority
- driver or owner
- notes
- target date or iteration when used
- source links between GitHub item and Discord surface

Recommended later:

- labels
- milestone
- sub-issue progress summary

## Event Flow

### GitHub to Discord

1. GitHub webhook event arrives.
2. The app verifies signature and normalizes the payload.
3. The app resolves the project item and finds the Discord mapping record.
4. The app compares the normalized field snapshot against the last synced snapshot.
5. If meaningful fields changed, the app updates the Discord message, embed, thread title, or controls.
6. The app stores the new snapshot hash, event ID, and sync origin as `github`.

### Discord to GitHub

1. User invokes a slash command, button, select menu, or modal in Discord.
2. The app validates permission and resolves the mapped project item.
3. The app converts the interaction into a GitHub Projects field mutation.
4. The app writes to GitHub Projects.
5. The app updates local sync metadata with origin `discord`.
6. When the GitHub webhook comes back, the app recognizes the write as already applied and avoids a loop.

## Loop Prevention

Bidirectional sync will break without loop prevention.

The app must store:

- last write origin
- last write timestamp
- last outgoing mutation fingerprint
- last processed GitHub event ID

When GitHub emits a webhook for a change initiated by Discord, the app must compare the event payload to the recorded outgoing mutation. If they match within the expected window, the event is acknowledged without producing another Discord write.

## Conflict Handling

Conflicts happen when both systems change the same item near the same time.

Default policy:

- protected fields use GitHub-wins
- note-like fields use last-write-wins
- unresolved collisions are logged and flagged for manual review

The app should emit an audit message or internal alert when a conflict is detected repeatedly on the same item.

## Discord UX Model

Recommended Discord surfaces:

- slash command to create a tracked item
- message embed per tracked item
- select menu for status
- select menu for priority
- button to open detailed modal for notes
- optional thread per item for discussion that does not automatically mutate state

Thread discussion should be linked to the item but not treated as structured project data unless explicitly submitted through the app.

## GitHub Project UX Model

GitHub remains where users can:

- review complete board state
- perform bulk edits
- manage views and planning windows
- inspect the official historical status trail

The Discord tracker app complements this by reducing friction for day-to-day updates.

## Permissions

The app needs:

- GitHub webhook access and project mutation capability
- Discord bot permissions for messages, threads, interactions, and editing tracked messages
- role-based authorization for who can create, edit, and complete tracked items from Discord

At minimum, Discord writeback should be restricted to trusted roles.

## Observability

The app should keep:

- structured audit logs for every outbound write
- event processing logs for GitHub webhooks and Discord interactions
- a dead-letter or retry queue for failed sync operations
- an admin view for unmapped items and conflict resolution

## MVP Scope

MVP should include:

- item creation from Discord
- status sync both directions
- priority sync both directions
- notes sync both directions
- mapped Discord message updates from GitHub changes
- loop prevention and basic audit logging

MVP should not include:

- syncing arbitrary discussion text
- AI summarization as authoritative task state
- multi-board aggregation

## Build Order

1. Define canonical field contract and mapping schema.
2. Implement GitHub webhook ingestion.
3. Implement Discord interaction commands and controls.
4. Add outbound writes to GitHub Projects.
5. Add loop prevention and audit logging.
6. Add admin tooling for remap and conflict review.

## Decision Summary

- Yes, GitHub Projects and the Discord tracker app should reflect each other.
- No, they should not independently act as separate sources of truth.
- The tracker app should be the sync broker, with GitHub Projects as the canonical project record.
