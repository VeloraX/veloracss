<script>
  import { onMount } from 'svelte';

  import SiteShell from '$lib/SiteShell.svelte';

  const PROJECT_ENDPOINT = 'https://veloracss.spiritbocs.workers.dev/github/project';
  const HEALTH_ENDPOINT = 'https://veloracss.spiritbocs.workers.dev/health';
  const statusFilters = ['all', 'todo', 'in_progress', 'done'];

  let projectView = null;
  let healthView = null;
  let selectedStatus = 'all';
  let selectedItemId = null;
  let projectError = '';
  let healthError = '';
  let isRefreshing = false;
  let isLoadingProject = true;
  let isLoadingHealth = true;

  onMount(() => {
    refreshAll();
  });

  async function refreshAll() {
    isRefreshing = true;
    await Promise.all([loadProject(selectedStatus), loadHealth()]);
    isRefreshing = false;
  }

  async function handleStatusChange(status) {
    if (status === selectedStatus && projectView) {
      return;
    }

    selectedStatus = status;
    await loadProject(status);
  }

  async function loadProject(status) {
    isLoadingProject = true;
    projectError = '';

    try {
      const response = await fetch(`${PROJECT_ENDPOINT}?status=${status}&limit=24`);

      if (!response.ok) {
        throw new Error(`Project feed returned ${response.status}.`);
      }

      projectView = await response.json();
    } catch (error) {
      projectError = error.message;
      projectView = null;
    } finally {
      isLoadingProject = false;
    }
  }

  async function loadHealth() {
    isLoadingHealth = true;
    healthError = '';

    try {
      const response = await fetch(HEALTH_ENDPOINT);

      if (!response.ok) {
        throw new Error(`Health check returned ${response.status}.`);
      }

      healthView = await response.json();
    } catch (error) {
      healthError = error.message;
      healthView = null;
    } finally {
      isLoadingHealth = false;
    }
  }

  function selectItem(itemId) {
    selectedItemId = itemId;
  }

  function formatStatusLabel(status) {
    switch (status) {
      case 'todo':
        return 'Todo';
      case 'in_progress':
        return 'In progress';
      case 'done':
        return 'Done';
      default:
        return 'All items';
    }
  }

  function formatDate(value) {
    if (!value) {
      return null;
    }

    try {
      return new Intl.DateTimeFormat(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(new Date(`${value}T00:00:00`));
    } catch {
      return value;
    }
  }

  function summarizeCommands(commands) {
    return Array.isArray(commands) && commands.length > 0 ? commands.join(' · ') : 'Unavailable';
  }

  function getItemMeta(item) {
    const parts = [];

    if (item.priority) {
      parts.push({ label: item.priority, kind: 'priority' });
    }

    if (item.driver) {
      parts.push({ label: item.driver, kind: 'default' });
    }

    if (item.targetDate) {
      parts.push({ label: formatDate(item.targetDate), kind: 'default' });
    } else if (item.iteration) {
      parts.push({ label: item.iteration, kind: 'default' });
    }

    if (item.size) {
      parts.push({ label: item.size, kind: 'default' });
    }

    return parts;
  }

  $: lanes = projectView?.lanes ?? [];
  $: visibleItems = projectView?.items ?? [];
  $: statusCounts = projectView?.statusCounts ?? { Todo: 0, 'In progress': 0, Done: 0, Other: 0 };
  $: if (visibleItems.length === 0) {
    selectedItemId = null;
  } else if (!visibleItems.some((item) => item.id === selectedItemId)) {
    selectedItemId = visibleItems[0].id;
  }
  $: selectedItem = visibleItems.find((item) => item.id === selectedItemId) ?? null;
  $: serviceReady = Boolean(healthView?.config?.githubProjectReadReady && healthView?.config?.discordApplicationId);
</script>

<SiteShell
  title="Velora Tracker"
  shellVariant="app"
  footerCopy="Public tracker page for the live Velora planning board, sourced from the same Worker that powers the Discord control surface."
>
  <section class="tracker-page">
    <section class="tracker-hero">
      <article class="tracker-hero-panel">
        <span class="tracker-kicker">Live planning surface</span>
        <div class="vel-stack-sm">
          <h1 class="tracker-title">A full-width view of the board, not a cramped chat embed.</h1>
          <p class="tracker-lead">This page reads the live tracker Worker directly, expands with the browser window, and keeps the GitHub Project board, public site, and Discord control plane aligned around the same planning data.</p>
        </div>

        <div class="tracker-hero-meta">
          <span class="tracker-meta-chip">GitHub Project 10</span>
          <span class="tracker-meta-chip">Discord-linked tracker runtime</span>
          <span class="tracker-meta-chip">Full-width responsive shell</span>
        </div>

        <div class="tracker-hero-actions">
          <a class="tracker-link-button tracker-link-button-primary" href={projectView?.url ?? 'https://github.com/orgs/VeloraX/projects/10'} target="_blank" rel="noreferrer">Open GitHub board</a>
          <a class="tracker-link-button" href="https://veloracss.spiritbocs.workers.dev/health" target="_blank" rel="noreferrer">Open live health endpoint</a>
          <button class="tracker-refresh-button" type="button" on:click={refreshAll} disabled={isRefreshing}>
            {isRefreshing ? 'Refreshing...' : 'Refresh data'}
          </button>
        </div>
      </article>

      <aside class="tracker-hero-aside">
        <article class="tracker-status-rail">
          <h2 class="tracker-status-rail-title">Board pulse</h2>

          <div class="tracker-status-rail-list">
            <div class="tracker-status-row">
              <span class="tracker-status-dot" data-status="Todo"></span>
              <span>Todo</span>
              <span class="tracker-status-value">{statusCounts.Todo}</span>
            </div>
            <div class="tracker-status-row">
              <span class="tracker-status-dot" data-status="In progress"></span>
              <span>In progress</span>
              <span class="tracker-status-value">{statusCounts['In progress']}</span>
            </div>
            <div class="tracker-status-row">
              <span class="tracker-status-dot" data-status="Done"></span>
              <span>Done</span>
              <span class="tracker-status-value">{statusCounts.Done}</span>
            </div>
          </div>
        </article>

        <article class="tracker-health-panel">
          <div>
            <h2 class="tracker-panel-title">Runtime status</h2>
            <p class="tracker-health-copy">The public page and Discord board are both reading from the same Worker runtime and persisted tracker state.</p>
          </div>

          {#if isLoadingHealth}
            <div class="tracker-skeleton"></div>
          {:else if healthError}
            <p class="tracker-alert-copy">{healthError}</p>
          {:else}
            <div class="tracker-health-grid">
              <div class="tracker-health-row">
                <span class="tracker-health-label">Service</span>
                <span class="tracker-health-value">{serviceReady ? 'Ready' : 'Degraded'}</span>
              </div>
              <div class="tracker-health-row">
                <span class="tracker-health-label">Commands</span>
                <span class="tracker-health-value">{summarizeCommands(healthView?.commands)}</span>
              </div>
              <div class="tracker-health-row">
                <span class="tracker-health-label">Storage</span>
                <span class="tracker-health-value">{healthView?.config?.storageMode ?? 'Unknown'}</span>
              </div>
              <div class="tracker-health-row">
                <span class="tracker-health-label">Tracked items</span>
                <span class="tracker-health-value">{healthView?.state?.mappingCount ?? 0}</span>
              </div>
            </div>
          {/if}
        </article>
      </aside>
    </section>

    {#if projectError}
      <article class="tracker-alert">
        <h2 class="tracker-panel-title">Live project feed unavailable</h2>
        <p class="tracker-alert-copy">{projectError}</p>
      </article>
    {/if}

    <section class="tracker-summary-grid" aria-label="Tracker summary cards">
      <article class="tracker-summary-card">
        <span class="tracker-summary-label">Project</span>
        <span class="tracker-summary-value">{projectView?.title ?? 'VeloraCSS Team Planning'}</span>
        <p class="tracker-summary-copy">The public view is sourced from the live GitHub Project read endpoint, not a static snapshot.</p>
      </article>

      <article class="tracker-summary-card">
        <span class="tracker-summary-label">Visible list</span>
        <span class="tracker-summary-value">{projectView?.matchingCount ?? 0}</span>
        <p class="tracker-summary-copy">Current filter: {formatStatusLabel(selectedStatus)}.</p>
      </article>

      <article class="tracker-summary-card">
        <span class="tracker-summary-label">Total tracked cards</span>
        <span class="tracker-summary-value">{projectView?.totalCount ?? 0}</span>
        <p class="tracker-summary-copy">Board totals stay visible even when the detail list is filtered down.</p>
      </article>

      <article class="tracker-summary-card">
        <span class="tracker-summary-label">Discord surface</span>
        <span class="tracker-summary-value">{serviceReady ? 'Linked' : 'Needs attention'}</span>
        <p class="tracker-summary-copy">The same tracker Worker powers both the web page and the Discord control plane.</p>
      </article>
    </section>

    <section class="tracker-board-panel">
      <div class="tracker-panel-head">
        <div>
          <h2 class="tracker-panel-title">Board snapshot</h2>
          <p class="tracker-panel-copy">The lane board stays visible at full width and reflows naturally with the browser instead of compressing into a chat column.</p>
        </div>

        <div class="tracker-filter-row" aria-label="Status filters">
          {#each statusFilters as status}
            <button
              class:tracker-filter-button-active={selectedStatus === status}
              class="tracker-filter-button"
              type="button"
              on:click={() => handleStatusChange(status)}
            >
              {formatStatusLabel(status)}
            </button>
          {/each}
        </div>
      </div>

      <div class="tracker-board-grid">
        {#each lanes as lane}
          <article class="tracker-lane">
            <div class="tracker-lane-head">
              <h3 class="tracker-lane-title">{lane.label}</h3>
              <span class="tracker-lane-count">{lane.count}</span>
            </div>

            <div class="tracker-lane-cards">
              {#each lane.items as item}
                <div class="tracker-lane-card">
                  <h4 class="tracker-lane-card-title">
                    {#if item.url}
                      <a class="tracker-lane-card-link" href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                    {:else}
                      {item.title}
                    {/if}
                  </h4>

                  <div class="tracker-lane-card-meta">
                    {#each getItemMeta(item) as meta}
                      <span class:tracker-badge-priority={meta.kind === 'priority'} class="tracker-badge">{meta.label}</span>
                    {/each}
                  </div>
                </div>
              {/each}

              {#if lane.count > lane.items.length}
                <p class="tracker-summary-copy">+{lane.count - lane.items.length} more in {lane.label.toLowerCase()}</p>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="tracker-main-grid">
      <article class="tracker-list-panel">
        <div class="tracker-panel-head">
          <div>
            <h2 class="tracker-panel-title">Current slice</h2>
            <p class="tracker-panel-copy">Choose a card to inspect its notes, driver, and timing details without leaving the page.</p>
          </div>
        </div>

        {#if isLoadingProject}
          <div class="tracker-loading-grid">
            <div class="tracker-skeleton"></div>
            <div class="tracker-skeleton"></div>
            <div class="tracker-skeleton"></div>
            <div class="tracker-skeleton"></div>
          </div>
        {:else if visibleItems.length === 0}
          <div class="tracker-empty">
            <p class="tracker-empty-copy">No cards matched the {formatStatusLabel(selectedStatus).toLowerCase()} filter.</p>
          </div>
        {:else}
          <div class="tracker-items-grid">
            {#each visibleItems as item}
              <button
                class:tracker-item-card-active={selectedItem?.id === item.id}
                class="tracker-item-card"
                type="button"
                on:click={() => selectItem(item.id)}
              >
                <span class="tracker-item-card-status">{item.status ?? 'Unsorted'}</span>
                <h3 class="tracker-item-card-title">{item.title}</h3>

                <div class="tracker-item-card-meta">
                  {#each getItemMeta(item) as meta}
                    <span class:tracker-badge-priority={meta.kind === 'priority'} class="tracker-badge">{meta.label}</span>
                  {/each}
                </div>

                <p class="tracker-item-card-notes">{item.notes ?? 'No notes attached to this item yet.'}</p>
              </button>
            {/each}
          </div>
        {/if}
      </article>

      <aside class="tracker-detail-panel">
        {#if selectedItem}
          <div class="tracker-detail-head">
            <span class="tracker-detail-status">{selectedItem.status ?? 'Unsorted'}</span>
            <h2 class="tracker-detail-title">{selectedItem.title}</h2>
            <div class="tracker-detail-meta">
              {#each getItemMeta(selectedItem) as meta}
                <span class:tracker-badge-priority={meta.kind === 'priority'} class="tracker-badge">{meta.label}</span>
              {/each}
            </div>
          </div>

          <p class="tracker-detail-notes">{selectedItem.notes ?? 'This project card does not have notes yet. Use the tracker manager surface in Discord or GitHub to add more operating context.'}</p>

          {#if selectedItem.url}
            <a class="tracker-detail-link" href={selectedItem.url} target="_blank" rel="noreferrer">Open linked GitHub item</a>
          {/if}
        {:else}
          <div class="tracker-empty">
            <p class="tracker-empty-copy">Select a card from the current slice to inspect its details here.</p>
          </div>
        {/if}
      </aside>
    </section>
  </section>
</SiteShell>