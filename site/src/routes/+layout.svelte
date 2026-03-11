<script>
  import '../app.css';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';

  let initVelora;

  function bindVelora() {
    initVelora?.(document);
  }

  onMount(async () => {
    ({ initVelora } = await import('../../../dist/velora.js'));
    bindVelora();
  });

  afterNavigate(() => {
    bindVelora();
  });
</script>

<slot />