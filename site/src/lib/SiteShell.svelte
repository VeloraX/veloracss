<script>
  import { page } from '$app/state';
  import { docsCards, siteNavigation } from './content.js';

  export let title = 'VeloraCSS';
  export let footerCopy = 'Sharper default geometry, frozen 0.1 surface, and public docs now started.';

  function isCurrent(href) {
    if (href === '/') {
      return page.url.pathname === '/';
    }

    return page.url.pathname.startsWith(href);
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="site-body site-root">
  <div class="site-shell">
    <div class="site-frame vel-shell vel-stack-lg">
      <header class="site-nav">
        <nav class="vel-navbar" aria-label="Primary">
          <a class="vel-navbar-brand" href="/">
            <span class="vel-navbar-mark">V</span>
            <span>VeloraCSS</span>
          </a>

          <div class="vel-navbar-nav">
            {#each siteNavigation as item}
              <a class="vel-navbar-link" href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>{item.label}</a>
            {/each}
          </div>

          <div class="vel-navbar-actions">
            <a class="vel-button vel-button-ghost" href="/docs#families">API</a>
            <a class="vel-button vel-button-primary" href="/docs">Start with docs</a>
          </div>
        </nav>
      </header>

      <main class="site-layout-main vel-stack-lg">
        <slot />
      </main>

      <footer class="site-footer">
        <div class="site-footer-panel">
          <div class="vel-stack-xs">
            <p class="vel-text-sm vel-text-primary vel-font-medium">VeloraCSS</p>
            <p class="vel-body vel-text-muted">{footerCopy}</p>
          </div>
          <div class="site-link-row">
            {#each docsCards as card}
              <a class="vel-button vel-button-ghost" href={card.href}>{card.eyebrow}</a>
            {/each}
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>