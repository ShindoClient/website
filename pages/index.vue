<template>
  <main class="space-y-24 pb-24 lg:space-y-28 lg:pb-32">
    <section id="hero" class="relative px-4">
      <div class="mx-auto grid max-w-[1120px] gap-12 rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:grid-cols-[minmax(0,1fr)_420px] md:p-12">
        <div class="flex flex-col gap-8">
          <div class="flex flex-wrap items-center gap-3">
            <span class="section-label bg-white/10 text-white/60">{{ versionLabel }}</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              1.8.9
            </span>
          </div>
          <div>
            <h1 class="font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Modern & Open-source Minecraft Client. Built for competitivity.
            </h1>
            <p class="mt-5 max-w-xl text-lg text-white/70">
              ShindoClient delivers a modern launcher experience inspired by Lunar, Feather and LabyMod, without sacrificing
              the openness of the community. Locked-down security, lightning-fast tech, and visuals that make every login feel premium.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <NuxtLink :to="downloadUrl" class="button-primary">
              <span>Download</span>
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <button type="button" class="button-ghost" @click="scrollToSection('#features')">
              Explore Features
            </button>
            <NuxtLink :to="discordUrl" target="_blank" class="button-ghost border-white/20 bg-white/10 hover:border-white/30">
              Join Discord
            </NuxtLink>
          </div>
        </div>
        <div class="relative">
          <div class="pointer-events-none absolute inset-0 -translate-y-6 rounded-[36px] bg-panel-glow blur-3xl"></div>
          <div class="relative flex items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/10 py-12 shadow-glow sm:py-16">
            <img
              src="/logo.png"
              alt="ShindoClient logo"
              class="h-32 w-auto sm:h-40"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center">
          <span class="section-label mx-auto bg-white/10 text-white/60">Feature Highlights</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">
            Built like a pro launcher. Tuned for open-source experimentation.
          </h2>
          <p class="mx-auto max-w-2xl text-base text-white/65">
            Every subsystem was rebuilt for stability, security, and scalability, to a modular client-side architecture tuned for minimal input latency.
          </p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="feature in featureHighlights"
            :key="feature.title"
            class="glass-panel relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-accent-200">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path :d="feature.icon" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
            </div>
            <p class="text-sm text-white/65">
              {{ feature.description }}
            </p>
            <ul v-if="feature.points" class="mt-1 space-y-2 text-sm text-white/50">
              <li v-for="point in feature.points" :key="point" class="flex items-start gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-white/40"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="showcase" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center">
          <span class="section-label mx-auto bg-white/10 text-white/60">Visual Showcase</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">Polished UI inspired by premium clients</h2>
          <p class="mx-auto max-w-2xl text-base text-white/65">
            From the animated launcher dashboard to modular HUD editing, every element is engineered to match modern Minecraft clients—while remaining fully customizable.
          </p>
        </div>
        <div
          class="glass-panel glass-panel--static relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-0 shadow-[0_45px_120px_-70px_rgba(10,18,46,0.9)]"
          @mouseenter="stopCarousel"
          @mouseleave="startCarousel"
          role="region"
          aria-label="Visual showcase carousel"
        >
          <div class="relative">
            <div
              class="flex transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <article
                v-for="(slide, index) in showcaseSlides"
                :key="slide.title"
                class="flex w-full shrink-0 flex-col overflow-hidden md:flex-row"
                role="group"
                :aria-roledescription="'slide'"
                :aria-label="`${index + 1} of ${showcaseSlides.length}`"
              >
                <div class="relative w-full md:w-2/3">
                  <img
                    :src="slide.image"
                    :alt="slide.alt"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="flex w-full flex-col justify-center gap-3 p-6 md:w-1/3 md:p-8">
                  <span class="text-xs uppercase tracking-[0.35em] text-white/35">Showcase {{ index + 1 }}</span>
                  <h3 class="text-xl font-semibold text-white md:text-2xl">{{ slide.title }}</h3>
                  <p class="text-sm text-white/65">
                    {{ slide.description }}
                  </p>
                </div>
              </article>
            </div>

            <button
              type="button"
              class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white transition hover:border-white/40 hover:bg-black/50"
              aria-label="Show previous slide"
              @click="prevSlide(); restartCarousel()"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white transition hover:border-white/40 hover:bg-black/50"
              aria-label="Show next slide"
              @click="nextSlide(); restartCarousel()"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              v-for="(_, index) in showcaseSlides"
              :key="`dot-${index}`"
              type="button"
              class="h-2.5 w-2.5 rounded-full transition"
              :class="activeSlide === index ? 'bg-white' : 'bg-white/25 hover:bg-white/40'"
              :aria-label="`Go to slide ${index + 1}`"
              @click="setSlide(index); restartCarousel()"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="upgrade" class="px-4">
      <div class="mx-auto max-w-[1120px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent-700/60 via-accent-500/40 to-surface-elevated/80 p-10 shadow-[0_40px_100px_-40px_rgba(90,62,247,0.6)]">
        <div class="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
          <div class="space-y-4">
            <span class="section-label bg-white/10 text-white/70">Upgrade Today</span>
            <h2 class="font-display text-3xl text-white sm:text-4xl">Ready for the next ranked queue?</h2>
            <p class="text-sm text-white/70">
              Deploy the new ShindoClient build by downloading the version manifest and syncing your modules..
            </p>
            <ul class="space-y-3 text-sm text-white/70">
              <li v-for="step in upgradeSteps" :key="step" class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/80">
                  {{ step.split('.')[0] }}
                </span>
                <span>{{ step.slice(step.indexOf('.') + 1).trim() }}</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-3">
            <NuxtLink :to="downloadUrl" class="button-primary w-full justify-center">
              Download Manifest
            </NuxtLink>
            <NuxtLink to="/discord" class="button-ghost w-full justify-center border-white/20 bg-white/10 hover:border-white/30">
              Join Release Announcements
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center">
          <span class="section-label mx-auto bg-white/10 text-white/60">FAQ</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">All the details before you drop into queue</h2>
        </div>
          <div class="grid items-start gap-4 md:grid-cols-2">
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="glass-panel glass-panel--static glass-panel--loose rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20"
            >
              <button
                type="button"
                class="flex w-full items-start justify-between gap-4 text-left"
              :aria-expanded="isFaqOpen(index)"
              :aria-controls="`faq-panel-${index}`"
              @click="toggleFaq(index)"
              @keydown.enter.prevent="toggleFaq(index)"
              @keydown.space.prevent="toggleFaq(index)"
            >
              <span class="text-base font-semibold text-white">{{ faq.question }}</span>
              <span class="mt-1 text-white/40">
                <svg v-if="isFaqOpen(index)" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
              <Transition
                enter-active-class="duration-[1200ms] transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[320px] opacity-100"
                leave-active-class="duration-450 transition-all ease-[cubic-bezier(0.4,0,0.2,1)]"
                leave-from-class="max-h-[320px] opacity-100"
                leave-to-class="max-h-0 opacity-0"
            >
              <div
                v-if="isFaqOpen(index)"
                :id="`faq-panel-${index}`"
                class="mt-4 max-h-[320px] overflow-hidden text-sm text-white/60"
              >
                {{ faq.answer }}
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import heroMenu from 'public/screenshots/menu.webp'
import heroHud from 'public/screenshots/huds.webp'
import heroMods from 'public/screenshots/modmenu.webp'
import heroBackgrounds from 'public/screenshots/backgrounds.webp'
import { scrollToHash } from '@/scripts/scrollTo'
import { useClientMeta } from '@/composables/useClientMeta'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()

const downloadUrl = computed(() => clientMeta.value?.updatelink ?? (runtimeConfig.public.downloadUrl as string))
const discordUrl = computed(() => clientMeta.value?.discord ?? (runtimeConfig.public.discordUrl as string))
const versionLabel = computed(() =>
  clientMeta.value?.latestversionstring ? `Version ${clientMeta.value.latestversionstring}` : 'Version 5.0'
)

type FeatureHighlight = {
  title: string
  description: string
  icon: string
  points?: string[]
}

const featureHighlights = [
  {
    title: 'Spotify Integration',
    description:
      'Link Spotify straight into the client so sessions broadcast what you are listening to alongside your gameplay.',
    icon: 'M4 12c4-2.5 8-2.5 12 0v6c-4-2.5-8-2.5-12 0v-6zm0-6c4-2.5 8-2.5 12 0v4c-4-2.5-8-2.5-12 0V6z',
    points: [
      'Native controls expose track, artist and playback state without leaving the HUD.',
      'Discord Rich Presence mirrors music status automatically without external plugins.'
    ]
  },
  {
    title: 'Profile System',
    description:
      'Create, sync and share client profiles that bundle mods, cosmetics and keybinds for every playstyle.',
    icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-8 2-8 6h16c0-4-4-6-8-6z',
    points: [
      'Swap between ranked, practice and creator presets in a single click.',
      'Cloud syncing keeps layouts identical whether you log in on desktop or laptop.'
    ]
  },
  {
    title: 'Warp Tweaker',
    description:
      'A built-in network tweaker that pairs optimised sockets with Cloudflare WARP routing for lower jitter.',
    icon: 'M4 7h16M4 12h10M4 17h14m-3-10l3-3m-3 8l3-3m-3 8l3-3',
    points: [
      'Auto-detects latency spikes and seamlessly enables the WARP proxy when needed.',
      'Fine-grained toggles let you prioritise stability, throughput or raw ping per server.'
    ]
  },
  {
    title: 'Addon Ecosystem',
    description:
      'Discover and manage community-built addons with signed manifests and sandboxed execution.',
    icon: 'M4 5h16v4H4zm0 6h10v8H4zm12 3h4v5h-4z',
    points: [
      'One-click installs with dependency resolution and automatic updates.',
      'Scoped permissions keep experimental modules from touching sensitive APIs.'
    ]
  },
  {
    title: 'Security Shield',
    description:
      'Hardening layer that patches legacy Minecraft vulnerabilities and guards against malicious packets.',
    icon: 'M12 2l7 4v6c0 5-3.5 10-7 10s-7-5-7-10V6l7-4z',
    points: [
      'Runtime checks neutralise known crash exploits and remote code execution chains.',
      'Integrity monitor flags modified jars before they can inject into the client.'
    ]
  },
  {
    title: 'Multi-platform Support',
    description:
      'Unified launcher experience across Windows, macOS and Linux with native rendering paths.',
    icon: 'M8 4h8v2H8zM4 6h16v12H4zM8 18h8v2H8z',
    points: [
      'Metal, DirectX and OpenGL pipelines are tuned per OS for consistent FPS.',
      'Automatic updates deliver identical builds no matter where you login.'
    ]
  }
] satisfies FeatureHighlight[]

const showcaseSlides = [
  {
    title: 'Launcher Home',
    description:
      'The redesigned landing screen blends premium gradients with actionable CTAs, keeping download links and presence indicators one glance away.',
    image: heroMenu,
    alt: 'ShindoClient launcher home screen'
  },
  {
    title: 'Modular HUD Editor',
    description:
      'Drag-and-drop widgets, precision grid snapping and animation presets let you tailor combat, scoreboards and utilities in seconds.',
    image: heroHud,
    alt: 'Modular HUD showcase'
  },
  {
    title: 'Module Browser',
    description:
      'Filter, favourite and stage modules with instant search. Profiles keep competitive, casual and recording setups one click away.',
    image: heroMods,
    alt: 'Module browser interface'
  },
  {
    title: 'Dynamic Backgrounds',
    description:
      'Adaptive gradients and cinematic renders that react to presence and account state for a premium launcher feel.',
    image: heroBackgrounds,
    alt: 'Dynamic launcher backgrounds'
  }
] as const


const upgradeSteps = [
  '1. Download the latest manifest.',
  '2. Import into your launcher or custom bootstrap.',
  '3. Sign in and let the gateway sync your roles.'
]

const faqs = [
  {
    question: 'Is ShindoClient legal on major networks?',
    answer:
      'Yes. ShindoClient focuses on performance optimisations, QoL modules and visuals. No unfair combat advantages are shipped by default and key systems are hot-pluggable to comply with server rules.'
  },
  {
    question: 'Can server owners request certain mods be disabled?',
    answer:
      'Yes. We cooperate with network staff and can remotely disable or blacklist specific modules to align with their policies. Reach out with the required restrictions and we will mirror them on the client.'
  },
  {
    question: 'Does the launcher auto-update?',
    answer:
      'Manifest updates are pulled on launch and on-demand from GitHub. Manual refresh controls ensure you can stay on a specific build or jump forward as soon as a new release lands.'
  },
  {
    question: 'Where can I get support or report issues?',
    answer:
      'Hop into the Discord to share logs, request features or escalate bugs directly with maintainers. GitHub issues stay open for reproducible defects and community contributions.'
  }
]

const openFaqs = ref<number[]>([])

const toggleFaq = (index: number) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter((item) => item !== index)
    return
  }
  openFaqs.value = [...openFaqs.value, index]
}

const isFaqOpen = (index: number) => openFaqs.value.includes(index)

const scrollToSection = (hash: string) => scrollToHash(hash)

const activeSlide = ref(0)
const totalSlides = computed(() => showcaseSlides.length)
const AUTOPLAY_INTERVAL = 7000
let carouselTimer: ReturnType<typeof setInterval> | null = null

const setSlide = (index: number) => {
  if (!totalSlides.value) return
  const bounded = ((index % totalSlides.value) + totalSlides.value) % totalSlides.value
  activeSlide.value = bounded
}

const nextSlide = () => setSlide(activeSlide.value + 1)
const prevSlide = () => setSlide(activeSlide.value - 1)

const startCarousel = () => {
  if (carouselTimer || totalSlides.value <= 1) return
  carouselTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % totalSlides.value
  }, AUTOPLAY_INTERVAL)
}

const stopCarousel = () => {
  if (!carouselTimer) return
  clearInterval(carouselTimer)
  carouselTimer = null
}

const restartCarousel = () => {
  stopCarousel()
  startCarousel()
}

onMounted(startCarousel)
onBeforeUnmount(stopCarousel)

useSeoMeta({
  title: 'ShindoClient — Modern Minecraft 1.8.9 Client',
  description:
    'Experience ShindoClient, a Modern Minecraft 1.8.9 client with secure Tons of mods & customizations, modular HUD and performance upgrades.',
  ogTitle: 'ShindoClient — Modern Minecraft 1.8.9 Client',
  ogDescription:
    'Modular UI and Modern visuals. Download ShindoClient for a premium 1.8.9 experience.',
  ogImage: '/embed.png',
  ogUrl: 'https://shindoclient.com',
  twitterCard: 'summary_large_image'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'ShindoClient',
            description:
              'A modern, open-source Minecraft 1.8.9 PvP client with an modern design, security-focused architecture and cross-platform support.',
            url: 'https://shindoclient.com',
            downloadUrl: downloadUrl.value,
            applicationCategory: ['GameApplication', 'EntertainmentApplication'],
            operatingSystem: ['Windows', 'macOS', 'Linux'],
            softwareVersion: clientMeta.value?.latestversionstring ?? '5.0.0',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            screenshot: [
              'https://shindoclient.com/screenshots/menu.webp',
              'https://shindoclient.com/screenshots/huds.webp',
              'https://shindoclient.com/screenshots/modmenu.webp'
            ]
          },
          {
            '@type': 'Organization',
            name: 'ShindoClient',
            url: 'https://shindoclient.com',
            logo: 'https://shindoclient.com/logo.png'
          }
        ]
      })
    }
  ]
})
</script>
