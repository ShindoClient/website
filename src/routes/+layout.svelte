<script lang="ts">
  import '@fuzzycanary/core/auto'
  import '@shindojs/styles/tailwind.css'
  import { page } from '$app/state'
  import { scrollToHash } from '$lib/scroll'
  import { canonicalUrl } from '$lib/site-config'
  import Footer from '$lib/components/Footer.svelte'
  import NavBar from '$lib/components/NavBar.svelte'
  import { injectAnalytics } from '@vercel/analytics/sveltekit'
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
  import { onMount } from 'svelte'

  let { data, children }: import('./$types').LayoutProps = $props()

  onMount(() => {
    injectAnalytics()
    injectSpeedInsights()

    if (page.url.hash) {
      void scrollToHash(page.url.hash)
    }
  })
</script>

<svelte:head>
  <title>ShindoClient</title>
  <meta content="Download ShindoClient, a modern Minecraft 1.8.9 client with competitive performance, security updates and cross-platform support." name="description" />
  <meta content="minecraft client, pvp client, 1.8.9 client, minecraft mod, shindo client, lunar alternative, feather alternative, labymod alternative, minecraft enhancement" name="keywords" />
  <meta content="MikiDevAHM" name="author" />
  <meta content="index, follow" name="robots" />
  <meta content="#5a3ef7" name="theme-color" />
  <meta content="website" property="og:type" />
  <meta content="ShindoClient — Competitive 1.8.9 Minecraft Client" property="og:title" />
  <meta content="Experience ShindoClient: pro-grade performance tweaks, modular UI and secure authentication for competitive Minecraft." property="og:description" />
  <meta content="/embed.png" property="og:image" />
  <meta content="ShindoClient Showcase" property="og:image:alt" />
  <meta content={canonicalUrl} property="og:url" />
  <meta content="ShindoClient" property="og:site_name" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="@ShindoClient" name="twitter:site" />
  <meta content="ShindoClient — Modern Minecraft Client" name="twitter:title" />
  <meta content="Performance tuned, Modern inspired design and seamless account sync. Elevate your Minecraft PvP with ShindoClient." name="twitter:description" />
  <meta content="/embed.png" name="twitter:image" />
  <meta content="n2_PSPIFSW3FK0lF6RLzFS1Yk-m3fJBrBriWdK449Xk" name="google-site-verification" />
  <meta content="ca-pub-6946729640389049" name="google-adsense-account" />
  <link href={canonicalUrl} rel="canonical" />
  <link href="/logo.png" rel="icon" type="image/png" />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Outfit:wght@500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="relative flex min-h-screen flex-col overflow-hidden">
  <div class="pointer-events-none absolute inset-0 opacity-70 grid-overlay"></div>
  <NavBar clientMeta={data.clientMeta} />
  <main class="flex-1 pt-24 sm:pt-28">
    {@render children()}
  </main>
  <Footer />
</div>
