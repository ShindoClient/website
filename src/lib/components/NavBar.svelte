<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/state'
  import { siteConfig } from '$lib/site-config'
  import { scrollToHash } from '$lib/scroll'
  import type { ClientMeta } from '$lib/api'
  import { onMount } from 'svelte'

  let { clientMeta }: { clientMeta: ClientMeta } = $props()

  const primaryLinks = [
    { label: 'Overview', hash: '#hero' },
    { label: 'Features', hash: '#features' },
    { label: 'Showcase', hash: '#showcase' },
    { label: 'Support', hash: '#support' },
    { label: 'Roadmap', hash: '#roadmap' },
    { label: 'FAQ', hash: '#faq' }
  ] as const

  let menu = $state(false)
  let isScrolled = $state(false)

  const discordHref = $derived(clientMeta?.discord || siteConfig.discordUrl)
  const versionLabel = $derived(clientMeta?.latestversion ? `Version ${clientMeta.latestversion}` : null)

  function close() {
    menu = false
  }

  function toggle() {
    menu = !menu
  }

  async function navigate(hash: string) {
    close()

    if (page.url.pathname !== '/') {
      await goto(`/${hash}`)
    }

    await scrollToHash(hash)
    history.replaceState({}, '', hash)
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<header class:scrolled={isScrolled} class="site-header fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 transition-all duration-500 md:pt-6">
  <nav class:nav-scrolled={isScrolled} class="glass-panel glass-panel--static flex w-full max-w-[1120px] items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-surface-panel/85 via-surface-panel-2/85 to-surface/85 px-5 py-3 shadow-[0_25px_80px_-50px_rgba(127,95,255,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-accent-500/35 md:px-7">
    <a class="flex items-center gap-3 text-sm font-semibold tracking-wide text-white/80 transition-all duration-300 hover:scale-105 hover:text-white" href="/">
      <img alt="ShindoClient logo" class="h-9 w-9 rounded-xl border border-accent-500/30 bg-white/10 p-1.5 shadow-[0_10px_35px_-20px_rgba(127,95,255,0.7)] transition-transform duration-300 hover:rotate-6" src="/logo.png" />
      <div class="flex flex-col leading-tight">
        <span class="font-display text-base uppercase tracking-[0.3em] text-white/70 transition-colors duration-300">ShindoClient</span>
        {#if versionLabel}
          <span class="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
            {versionLabel}
          </span>
        {/if}
      </div>
    </a>

    <div class="hidden items-center gap-1 text-sm font-medium text-white/70 md:flex">
      {#each primaryLinks as item}
        <button class="nav-link rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent-500/10 hover:text-white hover:shadow-[0_10px_40px_-20px_rgba(127,95,255,0.6)]" type="button" onclick={() => navigate(item.hash)}>
          {item.label}
        </button>
      {/each}
      <a class="button-ghost ml-1 border-accent-500/25 bg-accent-500/10 text-xs uppercase tracking-widest hover:border-accent-500/40 hover:bg-accent-500/20" href="/Download">
        Download
      </a>
      <a class="button-primary bg-gradient-to-r from-accent-500 via-accent-600 to-accent-900 text-xs uppercase tracking-widest shadow-[0_20px_60px_-35px_rgba(127,95,255,0.75)]" href="/Discord">
        Discord
      </a>
    </div>

    <button aria-label="Toggle navigation" class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white/80 transition hover:border-white/30 hover:text-white md:hidden" type="button" onclick={toggle}>
      {#if !menu}
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 7h14"></path>
          <path d="M5 12h14"></path>
          <path d="M5 17h14"></path>
        </svg>
      {:else}
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6l12 12"></path>
          <path d="M6 18L18 6"></path>
        </svg>
      {/if}
    </button>
  </nav>

  {#if menu}
    <div class="absolute top-[88px] w-full max-w-[1120px] rounded-3xl border border-white/10 bg-gradient-to-br from-surface-panel/92 via-surface-panel-2/92 to-surface/95 p-4 shadow-xl shadow-black/40 backdrop-blur-2xl md:hidden">
      <div class="flex flex-col gap-2 text-sm font-medium text-white/70">
        {#each primaryLinks as item}
          <button class="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-accent-500/15 hover:text-white" type="button" onclick={() => navigate(item.hash)}>
            {item.label}
          </button>
        {/each}
      </div>
      <div class="mt-4 grid gap-2">
        <a class="button-ghost w-full justify-center border-accent-500/25 bg-accent-500/10 text-xs uppercase tracking-[0.25em] hover:border-accent-500/40 hover:bg-accent-500/20" href="/download" onclick={close}>
          Download
        </a>
        <a class="button-primary w-full justify-center bg-gradient-to-r from-accent-500 via-accent-600 to-accent-900 text-xs uppercase tracking-[0.25em]" href="/discord" onclick={close}>
          Discord
        </a>
      </div>
    </div>
  {/if}
</header>

<style>
  .site-header {
    transform: translateY(0);
    transition:
      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      padding-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .site-header.scrolled {
    padding-top: 0.75rem;
  }

  .nav-scrolled {
    box-shadow: 0 8px 32px -8px rgba(10, 18, 46, 0.6) !important;
    border-color: rgba(127, 95, 255, 0.35) !important;
    background: linear-gradient(90deg, rgba(15, 18, 43, 0.9), rgba(12, 15, 36, 0.9), rgba(5, 6, 17, 0.92)) !important;
  }

  button[type='button'] {
    position: relative;
  }

  button[type='button']::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(127, 95, 255, 0.8), transparent);
    transform: translateX(-50%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button[type='button']:hover::after {
    width: 60%;
  }
</style>
