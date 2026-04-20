<script lang="ts">
  import { page } from '$app/state'
  import type { ClientMeta, DevRoadmap } from '$lib/api'
  import { canonicalUrl } from '$lib/site-config'
  import { reveal } from '$lib/reveal'
  import { scrollToHash } from '$lib/scroll'
  import {
    ArrowUpRight,
    Check,
    Download,
    GlobeLock,
    MonitorSmartphone,
    Music,
    RadioTower,
    ShieldCheck,
    Sparkles,
    UserRoundPen
  } from 'lucide-svelte'
  import { onMount } from 'svelte'
  import { cubicOut, expoOut } from 'svelte/easing'
  import { fade, slide } from 'svelte/transition'

  let { data }: import('./$types').PageProps = $props()

  const clientMeta = $derived(data.clientMeta as ClientMeta)
  const devRoadmap = $derived(data.devRoadmap as DevRoadmap)
  const downloadUrl = $derived(clientMeta.updatelink)
  const discordUrl = $derived(clientMeta.discord)
  const versionLabel = $derived(clientMeta.latestversion ? `Build ${clientMeta.latestversion}` : 'Build 5.0')

  const roadmapFeatures = $derived(devRoadmap.features)
  const roadmapHeadline = $derived(devRoadmap.headline)
  const roadmapUpdatedLabel = $derived.by(() => {
    const date = new Date(devRoadmap.lastUpdated)
    if (Number.isNaN(date.getTime())) return ''
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date)
  })

  type FeatureHighlight = {
    title: string
    description: string
    icon: any
    points?: string[]
  }

  const featureHighlights: FeatureHighlight[] = [
    {
      title: 'Spotify Integration',
      description: 'Link Spotify straight into the client so sessions broadcast what you are listening to alongside your gameplay.',
      icon: Music,
      points: ['Native controls expose track, artist and playback state without leaving the HUD.']
    },
    {
      title: 'Profile System',
      description: 'Create and sync client profiles that bundle mods, cosmetics and keybinds for every playstyle.',
      icon: UserRoundPen,
      points: [
        'Swap between ranked, practice and creator presets in a single click.',
        'Automatic profile switching when entering favourite servers.'
      ]
    },
    {
      title: 'Network Tweaker',
      description: 'Optimize network performance with automatic socket tuning and adaptive packet scheduling.',
      icon: GlobeLock,
      points: ['Auto-adjusts buffers and TCP windows for better responsiveness.', 'Aggressive presets for competitive gameplay.']
    },
    {
      title: 'Security Shield',
      description: 'Hardening layer that patches legacy Minecraft vulnerabilities and guards against malicious packets.',
      icon: ShieldCheck,
      points: ['Runtime checks neutralise known crash exploits and remote code execution chains.']
    },
    {
      title: 'Multi-platform Support',
      description: 'Unified launcher experience across Windows, macOS and Linux with native rendering paths.',
      icon: MonitorSmartphone,
      points: ['Automatic updates deliver identical builds no matter where you login.']
    }
  ]

  const showcaseSlides = [
    {
      title: 'Home',
      description: 'The redesigned landing screen blends premium gradients with actionable CTAs, keeping download links and presence indicators one glance away.',
      image: '/screenshots/menu.webp',
      alt: 'ShindoClient home screen'
    },
    {
      title: 'Modular HUD Editor',
      description: 'Drag-and-drop widgets, precision grid snapping and animation presets let you tailor combat, scoreboards and utilities in seconds.',
      image: '/screenshots/huds.webp',
      alt: 'Modular HUD showcase'
    },
    {
      title: 'Module Browser',
      description: 'Filter, favourite and stage modules with instant search. Profiles keep competitive, casual and recording setups one click away.',
      image: '/screenshots/modmenu.webp',
      alt: 'Module browser interface'
    },
    {
      title: 'Dynamic Backgrounds',
      description: 'Adaptive gradients and cinematic renders that react to presence and account state for a premium launcher feel.',
      image: '/screenshots/backgrounds.webp',
      alt: 'Dynamic launcher backgrounds'
    }
  ] as const

  const faqs = [
    {
      question: 'is ShindoClient safe to use?',
      answer: 'Yes. ShindoClient is open source and the source code is available on GitHub. No malicious code is shipped and the client is built with security in mind.'
    },
    {
      question: 'Is ShindoClient legal on major networks?',
      answer: 'Yes. ShindoClient focuses on performance optimisations, QoL modules and visuals. No unfair combat advantages are shipped by default and key systems are hot-pluggable to comply with server rules.'
    },
    {
      question: 'Can server owners request certain mods be disabled?',
      answer: 'Yes. We cooperate with network staff and can remotely disable or blacklist specific modules to align with their policies. Reach out with the required restrictions and we will mirror them on the client.'
    },
    {
      question: 'Does the launcher auto-update?',
      answer: 'Manifest updates are pulled on launch and on-demand from GitHub. Manual refresh controls ensure you can stay on a specific build or jump forward as soon as a new release lands.'
    },
    {
      question: 'Where can I get support or report issues?',
      answer: 'Hop into the Discord to share logs, request features or escalate bugs directly with maintainers. GitHub issues stay open for reproducible defects and community contributions.'
    },
    {
      question: 'Is ShindoClient free?',
      answer: 'Yes! ShindoClient is free to use and open-source. We are committed to transparency and community support.'
    },
    {
      question: 'Can I Install mods?',
      answer: 'Currently no, but we will be happy to consider mods you suggest to us on github or discord.'
    },
    {
      question: 'Can I contribute to the project?',
      answer: "Absolutely! ShindoClient is an open-source project driven by community contributions. Whether you're a developer, designer, or tester, your help is invaluable in shaping the future of the client."
    }
  ]

  let openFaqs = $state<number[]>([])
  let activeSlide = $state(0)
  let carouselTimer: ReturnType<typeof setInterval> | null = null

  function toggleFaq(index: number) {
    openFaqs = openFaqs.includes(index) ? openFaqs.filter((item) => item !== index) : [...openFaqs, index]
  }

  function isFaqOpen(index: number) {
    return openFaqs.includes(index)
  }

  function scrollToSection(hash: string) {
    void scrollToHash(hash)
    history.replaceState({}, '', hash)
  }

  function setSlide(index: number) {
    const total = showcaseSlides.length
    activeSlide = ((index % total) + total) % total
  }

  function nextSlide() {
    setSlide(activeSlide + 1)
  }

  function prevSlide() {
    setSlide(activeSlide - 1)
  }

  function startCarousel() {
    if (carouselTimer || showcaseSlides.length <= 1) return
    carouselTimer = setInterval(() => {
      activeSlide = (activeSlide + 1) % showcaseSlides.length
    }, 7000)
  }

  function stopCarousel() {
    if (!carouselTimer) return
    clearInterval(carouselTimer)
    carouselTimer = null
  }

  function restartCarousel() {
    stopCarousel()
    startCarousel()
  }

  const softwareSchema = $derived.by(() => JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'ShindoClient',
        description: 'A modern, open-source Minecraft 1.8.9 PvP client with a modern design, security-focused architecture and cross-platform support.',
        url: canonicalUrl,
        downloadUrl,
        applicationCategory: ['GameApplication', 'EntertainmentApplication'],
        operatingSystem: ['Windows', 'macOS', 'Linux'],
        softwareVersion: clientMeta.latestversion ?? '5.0.0',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        screenshot: [
          `${canonicalUrl}/screenshots/menu.webp`,
          `${canonicalUrl}/screenshots/huds.webp`,
          `${canonicalUrl}/screenshots/modmenu.webp`
        ]
      },
      {
        '@type': 'Organization',
        name: 'ShindoClient',
        url: canonicalUrl,
        logo: `${canonicalUrl}/logo.png`
      }
    ]
  }))

  onMount(() => {
    startCarousel()
    return () => stopCarousel()
  })
</script>

<svelte:head>
  <title>ShindoClient - Modern Minecraft 1.8.9 Client</title>
  <meta content="Experience ShindoClient, a modern Minecraft 1.8.9 client with secure mods & customizations, modular HUD and performance upgrades." name="description" />
  <meta content="ShindoClient - Modern Minecraft 1.8.9 Client" property="og:title" />
  <meta content="Modular UI and modern visuals. Download ShindoClient for a premium 1.8.9 experience." property="og:description" />
  <meta content="/embed.png" property="og:image" />
  <meta content={canonicalUrl} property="og:url" />
  <meta content="summary_large_image" name="twitter:card" />
  <script type="application/ld+json">{softwareSchema}</script>
</svelte:head>

<main class="relative overflow-hidden px-4 pb-28 pt-16 text-white">
  <div class="pointer-events-none absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(127,95,255,0.16),transparent_45%),radial-gradient(circle_at_82%_8%,rgba(45,27,105,0.3),transparent_38%),linear-gradient(180deg,rgba(7,8,18,0.95),rgba(5,6,14,0.98))]"></div>
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
    <div class="absolute left-[6%] top-12 h-24 w-24 rounded-full bg-accent-500/25 blur-[90px]"></div>
    <div class="absolute right-[8%] top-24 h-28 w-28 rounded-full bg-accent-900/30 blur-[100px]"></div>
  </div>

  <div class="mx-auto flex max-w-[1180px] flex-col gap-16 lg:gap-20">
    <section class="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-surface-card/90 via-surface-panel-3/92 to-surface/92 p-8 shadow-[0_40px_120px_-70px_rgba(7,8,20,0.9)] backdrop-blur-3xl animate-on-scroll lg:p-12" id="hero" use:reveal>
      <div class="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_22%_22%,rgba(162,107,255,0.18),transparent_48%),radial-gradient(circle_at_78%_18%,rgba(95,74,255,0.16),transparent_48%),linear-gradient(135deg,rgba(45,27,105,0.35),rgba(5,6,18,0.85))]"></div>
      <div class="absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_32px)]"></div>

      <div class="relative grid gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
        <div class="space-y-6">
          <div class="flex flex-wrap items-center gap-3">
            <span class="section-label bg-white/5 text-white/70">
              <Sparkles class="h-4 w-4 text-accent-300" />
              {versionLabel}
            </span>
            <span class="rounded-full border border-accent-500/25 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-50">1.8.9</span>
            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Open-source</span>
          </div>

          <div class="space-y-3">
            <h1 class="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              <span class="block text-accent-100">Next-gen</span>
              Minecraft Client
              <span class="block text-white/80">Built for competitive PvP</span>
            </h1>
          </div>

          <p class="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            A compact, performance-tuned client inspired by Soar and Feather. Secure manifests, responsive modules and a polished HUD editor ship together for a premium experience.
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <a class="button-primary group bg-gradient-to-r from-accent-500 via-accent-600 to-accent-900 text-sm font-semibold shadow-[0_24px_80px_-40px_rgba(127,95,255,0.8)]" href={downloadUrl}>
              <Download class="h-4 w-4" />
              <span>Download</span>
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <button class="button-ghost group border-white/20 bg-white/5 text-sm font-semibold text-white" onclick={() => scrollToSection('#features')} type="button">
              <ArrowUpRight class="h-4 w-4 text-accent-200" />
              <span>Explore features</span>
            </button>
            <a class="button-ghost border-accent-500/25 bg-accent-500/10 text-sm font-semibold text-accent-100 transition-all duration-300 hover:border-accent-500/40 hover:bg-accent-500/20" href="/Discord">
              <RadioTower class="h-4 w-4" />
              <span>Join Discord</span>
            </a>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-6 shadow-[0_25px_90px_-45px_rgba(127,95,255,0.4)] backdrop-blur-2xl">
          <div class="absolute inset-0 bg-gradient-to-br from-accent-500/25 via-transparent to-accent-900/30 opacity-40 blur-3xl"></div>
          <div class="relative flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.2)]"></span>
                <p class="text-xs uppercase tracking-[0.22em] text-white/60">Stable release</p>
              </div>
              <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/70">Live</span>
            </div>
            <div class="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-glow/70 via-surface-subtle/80 to-surface-soft-3/90 p-8 shadow-lg shadow-black/30">
              <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(127,95,255,0.25),transparent_45%)] opacity-25"></div>
              <img alt="ShindoClient logo" class="relative h-28 w-auto transition-transform duration-700 hover:scale-110 sm:h-36" loading="lazy" src="/logo.png" />
            </div>
            <div class="grid gap-2 sm:grid-cols-2">
              <div class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
                <span class="font-semibold text-white">Auto updates</span>
                <p>Manifest refresh on launch</p>
              </div>
              <div class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
                <span class="font-semibold text-white">Low latency</span>
                <p>Adaptive packet scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative space-y-10" id="features">
      <div class="flex flex-col gap-4 text-center animate-on-scroll" use:reveal>
        <span class="section-label mx-auto bg-white/5 text-white/70">
          <Sparkles class="h-4 w-4 text-accent-300" />
          Feature Highlights
        </span>
        <h2 class="font-display text-3xl text-white sm:text-4xl">The Ultimate Experience</h2>
        <p class="mx-auto max-w-2xl text-base text-white/65">
          Systems tuned for stability, security and modularity. Every feature is designed to enhance your gameplay without compromise.
        </p>
      </div>

      <div class="grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each featureHighlights as feature, index}
          <div class="feature-card group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-panel-2/70 via-surface-muted/70 to-surface-muted-2/80 p-5 shadow-lg shadow-black/30 animate-on-scroll hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-[0_25px_80px_-50px_rgba(127,95,255,0.7)]" style={`transition-delay: ${index * 0.1}s`} use:reveal>
            <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(162,107,255,0.35),transparent_38%)] opacity-20"></div>
            <div class="relative flex items-center gap-3 border-b border-white/10 pb-2 transition-colors group-hover:border-white/20">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-600/20 text-accent-200 group-hover:scale-110 group-hover:border-accent-500/30 group-hover:from-accent-500/40 group-hover:to-accent-600/35 group-hover:shadow-lg group-hover:shadow-accent-500/30">
                <feature.icon aria-hidden="true" class="h-5 w-5 transition-transform group-hover:scale-110" size={18} strokeWidth={2} />
              </div>
              <h3 class="text-base leading-tight font-semibold text-white transition-colors group-hover:text-accent-200">
                {feature.title}
              </h3>
            </div>
            <p class="relative break-words text-sm leading-relaxed text-pretty text-white/60 group-hover:text-white/75">
              {feature.description}
            </p>
            {#if feature.points}
              <ul class="relative mt-2 space-y-1.5 text-[0.8rem] leading-relaxed text-white/55">
                {#each feature.points as point}
                  <li class="flex items-start gap-2 group-hover:text-white/70">
                    <Check class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-300 group-hover:scale-110 group-hover:text-accent-200" strokeWidth={2.5} />
                    <span class="break-words leading-snug">{point}</span>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <section class="relative space-y-8" id="showcase">
      <div class="flex flex-col gap-4 text-center animate-on-scroll" use:reveal>
        <span class="section-label mx-auto bg-white/5 text-white/70">Visual Showcase</span>
        <h2 class="font-display text-3xl text-white sm:text-4xl">Take a look at what ShindoClient has to offer</h2>
        <p class="mx-auto max-w-2xl text-base text-white/65">
          polished interfaces, customizable HUDs, and seamless performance enhancements all come together to elevate your Minecraft experience.
        </p>
      </div>

      <div aria-label="Visual showcase carousel" class="glass-panel glass-panel--static relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-surface-panel-4/85 via-surface-shadow/85 to-surface-deep/92 p-0 shadow-[0_45px_120px_-70px_rgba(10,18,46,0.9)] animate-on-scroll" onmouseenter={stopCarousel} onmouseleave={startCarousel} role="region" use:reveal>
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,95,255,0.2),transparent_45%)] opacity-30"></div>
        <div class="relative">
          <div class="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" style={`transform: translateX(-${activeSlide * 100}%);`}>
            {#each showcaseSlides as slide, index}
              <article aria-label={`${index + 1} of ${showcaseSlides.length}`} aria-roledescription="slide" class="flex w-full shrink-0 flex-col overflow-hidden md:flex-row" role="group">
                <div class="relative w-full md:w-2/3">
                  <img alt={slide.alt} class="h-full w-full object-cover" loading="lazy" src={slide.image} />
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div class="flex w-full flex-col justify-center gap-3 p-6 md:w-1/3 md:p-8">
                  <span class="text-xs uppercase tracking-[0.35em] text-white/40">Showcase {index + 1}</span>
                  <h3 class="text-xl font-semibold text-white md:text-2xl">{slide.title}</h3>
                  <p class="text-sm text-white/65">{slide.description}</p>
                </div>
              </article>
            {/each}
          </div>

          <button aria-label="Show previous slide" class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full border border-white/20 bg-surface-muted/80 p-3 text-white transition-all duration-300 hover:scale-110 hover:border-accent-500/40 hover:bg-surface-subtle-2/90 active:scale-95" onclick={() => { prevSlide(); restartCarousel() }} type="button">
            <svg class="h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <button aria-label="Show next slide" class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-white/20 bg-surface-muted/80 p-3 text-white transition-all duration-300 hover:scale-110 hover:border-accent-500/40 hover:bg-surface-subtle-2/90 active:scale-95" onclick={() => { nextSlide(); restartCarousel() }} type="button">
            <svg class="h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
        <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {#each showcaseSlides as _, index}
            <button aria-label={`Go to slide ${index + 1}`} class={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'scale-125 bg-white' : 'bg-white/25 hover:scale-110 hover:bg-white/40'}`} onclick={() => { setSlide(index); restartCarousel() }} type="button"></button>
          {/each}
        </div>
      </div>
    </section>

    <section class="relative animate-on-scroll" id="support" use:reveal>
      <div class="mx-auto flex max-w-[1180px] flex-col gap-6">
        <div class="flex flex-col gap-4 text-center">
          <span class="section-label mx-auto bg-white/5 text-white/70">Support the project</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">Help us keep the project alive</h2>
        </div>
        <div class="support-card glass-panel group mx-auto w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-surface-elevated/80 p-6 shadow-lg shadow-black/20 hover:border-accent-500/40 hover:shadow-[0_30px_90px_-60px_rgba(127,95,255,0.65)] lg:flex lg:flex-row lg:items-start lg:gap-8 lg:p-8">
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-600/20 text-accent-200">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white">Help us grow</h3>
              </div>
            </div>
            <ol class="mt-2 space-y-3 text-sm leading-relaxed text-white/70">
              {#each [
                'Donations help cover server costs, development time, and future feature expansions.',
                'Your support motivates continued improvements and helps maintain a high-quality experience for all users.',
                'Every contribution, big or small, makes a significant difference in sustaining the project.',
                "Join our community of supporters and be part of ShindoClient's journey towards excellence.",
                'Dont feel obligated to donate - your usage and feedback are already valuable contributions!',
                'Thank you for considering supporting ShindoClient and helping us create an exceptional Minecraft experience!'
              ] as step, index}
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              {/each}
            </ol>
          </div>
          <div class="flex flex-1 items-center justify-center p-2 lg:mt-auto lg:max-w-xs lg:self-end">
            <div class="relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-glow/70 via-surface-subtle/80 to-surface-soft-3/90 px-10 py-9 shadow-lg shadow-black/30">
              <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(127,95,255,0.2),transparent_55%)] opacity-25"></div>
              <div class="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-44 sm:w-44">
                <img alt="ShindoClient logo" class="relative h-28 w-auto sm:h-32" loading="lazy" src="/logo.png" />
              </div>
              <span class="relative rounded-full border border-white/15 bg-white/5 px-5 py-1.5 text-base font-semibold tracking-wide text-white sm:text-lg">Shindo Client</span>
              <a href="https://ko-fi.com/R6R81OOSZD" rel="noreferrer" target="_blank">
                <img alt="Buy Me a Coffee at ko-fi.com" class="h-9 w-auto border-0 sm:h-10" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative space-y-8 animate-on-scroll" id="roadmap" use:reveal>
      <div class="flex flex-col gap-3 text-center">
        <span class="section-label mx-auto bg-white/5 text-white/70">Upcoming Features</span>
        <h2 class="font-display text-3xl text-white sm:text-4xl">Next experiments shipping soon</h2>
        <p class="mx-auto max-w-3xl text-base text-white/65">{roadmapHeadline}</p>
        {#if roadmapUpdatedLabel}
          <p class="text-sm text-white/40">Last update - {roadmapUpdatedLabel}</p>
        {/if}
      </div>
      {#if roadmapFeatures.length}
        <div class="grid gap-4 md:grid-cols-2">
          {#each roadmapFeatures as feature, index}
            <article class="roadmap-card group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-panel-2/70 via-surface-muted/70 to-surface-muted-2/80 p-5 shadow-lg shadow-black/30 animate-on-scroll hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-[0_25px_80px_-50px_rgba(127,95,255,0.7)]" style={`transition-delay: ${index * 0.1}s`} use:reveal>
              <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(127,95,255,0.3),transparent_42%)] opacity-20"></div>
              <div class="relative flex items-start justify-between gap-2 border-b border-white/10 pb-2 transition-colors group-hover:border-white/20">
                <h3 class="flex-1 text-base leading-tight font-semibold text-white transition-colors group-hover:text-accent-200">
                  {feature.title}
                </h3>
                <span class="flex-shrink-0 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/70 group-hover:border-accent-500/30 group-hover:bg-accent-500/10 group-hover:text-accent-200">
                  {feature.status}
                </span>
              </div>
              <p class="relative flex-1 break-words text-sm leading-relaxed text-pretty text-white/60 transition-colors group-hover:text-white/75">
                {feature.description}
              </p>
              <div class="relative mt-auto space-y-1 pt-1.5">
                <div class="flex items-center justify-between text-[0.75rem] font-medium text-white/50 transition-colors group-hover:text-white/65">
                  <span>Progress</span>
                  <span class="font-semibold text-accent-300 transition-colors group-hover:text-accent-200">{feature.progress}%</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/10 group-hover:bg-white/15">
                  <div class="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400 group-hover:from-accent-400 group-hover:to-accent-300 group-hover:shadow-sm group-hover:shadow-accent-400/50" style={`width: ${feature.progress}%`}></div>
                </div>
              </div>
            </article>
          {/each}
        </div>
      {:else}
        <div class="glass-panel rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">
          Roadmap coming soon. Check back shortly!
        </div>
      {/if}
    </section>

    <section class="relative animate-on-scroll" id="faq" use:reveal>
      <div class="mx-auto flex max-w-[1180px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center">
          <span class="section-label mx-auto bg-white/5 text-white/70">FAQ</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">All the details before you drop into queue</h2>
        </div>
        <div class="grid items-start gap-4 md:grid-cols-2">
          {#each faqs as faq, index}
            <div class="glass-panel glass-panel--static glass-panel--loose rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-accent-500/30" style={`transition-delay: ${index * 0.1}s`}>
              <button aria-controls={`faq-panel-${index}`} aria-expanded={isFaqOpen(index)} class="flex w-full items-start justify-between gap-4 text-left" onclick={() => toggleFaq(index)} type="button">
                <span class="text-base font-semibold text-white">{faq.question}</span>
                <span class="mt-1 text-white/40">
                  {#if isFaqOpen(index)}
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  {:else}
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  {/if}
                </span>
              </button>
              {#if isFaqOpen(index)}
                <div
                  class="faq-answer-shell mt-4 overflow-hidden text-sm text-white/65"
                  id={`faq-panel-${index}`}
                  in:slide={{ axis: 'y', duration: 360, easing: cubicOut }}
                  out:slide={{ axis: 'y', duration: 260, easing: expoOut }}
                >
                  <div
                    class="faq-answer-inner"
                    in:fade={{ duration: 220 }}
                    out:fade={{ duration: 160 }}
                  >
                    {faq.answer}
                  </div>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>
</main>

<style>
  .feature-card,
  .roadmap-card,
  .support-card {
    transform-origin: center bottom;
  }

  .feature-card::after,
  .roadmap-card::after,
  .support-card::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 28%, transparent 72%, rgba(127, 95, 255, 0.12)),
      radial-gradient(circle at var(--pointer-x, 50%) var(--pointer-y, 0%), rgba(127, 95, 255, 0.18), transparent 42%);
    opacity: 0;
    transform: scale(0.985);
    transition:
      opacity 150ms ease-out,
      transform 150ms ease-out;
    pointer-events: none;
  }

  .feature-card:hover,
  .roadmap-card:hover {
    transform: translateY(-6px) !important;
    box-shadow:
      0 24px 70px -36px rgba(127, 95, 255, 0.5),
      0 16px 40px -24px rgba(5, 6, 17, 0.85) !important;
  }

  .support-card:hover {
    transform: translateY(-4px) !important;
    box-shadow:
      0 28px 80px -40px rgba(127, 95, 255, 0.42),
      0 18px 50px -28px rgba(5, 6, 17, 0.8) !important;
  }

  .feature-card:hover::after,
  .roadmap-card:hover::after,
  .support-card:hover::after {
    opacity: 1;
    transform: scale(1);
  }

  .feature-card :global(svg),
  .roadmap-card :global(svg) {
    transition:
      transform 150ms ease-out,
      filter 150ms ease-out;
  }

  .feature-card:hover :global(svg),
  .roadmap-card:hover :global(svg) {
    transform: scale(1.08);
    filter: drop-shadow(0 0 14px rgba(127, 95, 255, 0.28));
  }

  .faq-answer-shell {
    transform-origin: top;
  }

  .faq-answer-inner {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 1rem;
    line-height: 1.7;
  }
</style>
