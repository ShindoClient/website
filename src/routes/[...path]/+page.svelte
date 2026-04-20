<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/state'
  import { onMount } from 'svelte'

  onMount(() => {
    const pathname = page.url.pathname.toLowerCase()

    if (pathname === '/download') {
      void goto('/download', { replaceState: true })
      return
    }

    if (pathname === '/discord') {
      void goto('/discord', { replaceState: true })
      return
    }

    void goto('/404', { replaceState: true })
  })
</script>
