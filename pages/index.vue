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
              AAA polish. Open-source DNA. Built for competitive Minecraft.
            </h1>
            <p class="mt-5 max-w-xl text-lg text-white/70">
              ShindoClient delivers a modern launcher experience inspired by Lunar, Feather and LabyMod—without sacrificing
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
          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div
              v-for="metric in metrics"
              :key="metric.label"
              class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <p class="text-xs uppercase tracking-[0.35em] text-white/40">{{ metric.label }}</p>
              <p :class="['mt-2 text-2xl font-semibold', metric.accent]">{{ metric.value }}</p>
              <button
                v-if="metric.label === 'Gateway'"
                type="button"
                class="mt-4 inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-white/80"
                @click="refreshStatus"
              >
                <svg
                  v-if="!statusPending"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                >
                  <path d="M3 12a9 9 0 0 1 9-9c2.4 0 4.6.97 6.19 2.54L21 9" />
                  <path d="M3 3v6h6" />
                  <path d="M21 12a9 9 0 0 1-9 9c-2.4 0-4.6-.97-6.19-2.54L3 15" />
                  <path d="M21 21v-6h-6" />
                </svg>
                <svg v-else class="h-3.5 w-3.5 animate-spin text-white/60" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.375 0 0 5.375 0 12h4z" />
                </svg>
                <span>{{ statusPending ? 'Updating' : 'Refresh' }}</span>
              </button>
            </div>
          </div>
          <p v-if="statusError" class="text-xs text-amber-300/80">
            Unable to reach status endpoint. Using cached data.
          </p>
        </div>
        <div class="relative">
          <div class="pointer-events-none absolute inset-0 -translate-y-6 rounded-[36px] bg-panel-glow blur-3xl"></div>
          <div class="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-glow">
            <img :src="heroMenu" alt="ShindoClient launcher preview" class="h-full w-full object-cover" loading="lazy" />
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
            Every subsystem was rebuilt for stability, security, and scalability—from secure Supabase presence syncing to a modular client-side architecture tuned for minimal input latency.
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

    <section id="status" class="px-4">
      <div class="mx-auto max-w-[1120px] rounded-[32px] border border-white/10 bg-surface-elevated/90 p-8 shadow-[0_32px_80px_-45px_rgba(12,18,46,0.9)] backdrop-blur-2xl md:p-12">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span class="section-label bg-white/10 text-white/60">Live Status</span>
            <h2 class="mt-4 font-display text-3xl text-white sm:text-4xl">Gateway availability in real time</h2>
            <p class="mt-3 max-w-2xl text-sm text-white/60">
              Tokenised WebSocket auth backed by Supabase ensures every session is secured. Role sync, presence and broadcast updates are streamed with automatic re-authentication on account swaps.
            </p>
          </div>
          <div class="flex items-center gap-3 text-xs text-white/50">
            <span class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span :class="['h-2 w-2 rounded-full', gatewayHealthy ? 'bg-success animate-pulse' : 'bg-warning']"></span>
              {{ gatewayHealthy ? 'Operational' : 'Investigating' }}
            </span>
            <span v-if="lastUpdated" class="text-white/40">
              Updated {{ formatRelative(lastUpdated) }}
            </span>
          </div>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_340px]">
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="glass-panel flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p class="text-xs uppercase tracking-[0.35em] text-white/40">Online Presence</p>
              <p class="text-4xl font-semibold text-white">{{ playersOnline.toString().padStart(2, '0') }}</p>
              <p class="text-sm text-white/50">Players currently authenticated through the gateway.</p>
            </div>
            <div class="glass-panel flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p class="text-xs uppercase tracking-[0.35em] text-white/40">Latency</p>
              <p class="text-4xl font-semibold text-white">
                {{ latencyMs ? `${Math.round(latencyMs)} ms` : '—' }}
              </p>
              <p class="text-sm text-white/50">Round-trip measured from Render edge to Minecraft services.</p>
            </div>
            <div class="glass-panel sm:col-span-2 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p class="text-xs uppercase tracking-[0.35em] text-white/40">Authentication Stack</p>
              <ul class="space-y-2 text-sm text-white/55">
                <li v-for="item in statusHighlights" :key="item" class="flex items-start gap-2">
                  <span class="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400/70"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div class="pointer-events-none absolute inset-x-6 top-0 h-32 bg-panel-glow"></div>
            <h3 class="text-base font-semibold text-white">Deployment Targets</h3>
            <p class="mt-2 text-sm text-white/55">
              Built for Render + Vercel with Docker hardening, scoped environment groups and automated key rotation.
            </p>
            <ul class="mt-6 space-y-4 text-sm text-white/60">
              <li v-for="target in deploymentTargets" :key="target.title" class="flex items-start gap-3">
                <div class="mt-0.5 h-2 w-2 rounded-full bg-white/30"></div>
                <div>
                  <p class="font-medium text-white/80">{{ target.title }}</p>
                  <p class="text-white/50">{{ target.subtitle }}</p>
                </div>
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
            From the animated launcher dashboard to modular HUD editing, every element is engineered to match modern AAA Minecraft clients—while remaining fully customizable.
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

    <section class="px-4">
      <div class="mx-auto max-w-[1120px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent-700/60 via-accent-500/40 to-surface-elevated/80 p-10 shadow-[0_40px_100px_-40px_rgba(90,62,247,0.6)]">
        <div class="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
          <div class="space-y-4">
            <span class="section-label bg-white/10 text-white/70">Upgrade Today</span>
            <h2 class="font-display text-3xl text-white sm:text-4xl">Ready for the next ranked queue?</h2>
            <p class="text-sm text-white/70">
              Deploy the new ShindoClient build by downloading the version manifest and syncing your modules. The new secure WebSocket handshake will seamlessly sync your permissions after every account swap.
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
        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="glass-panel rounded-[28px] border border-white/10 bg-white/5 p-6"
          >
            <button
              type="button"
              class="flex w-full items-start justify-between gap-4 text-left"
              @click="toggleFaq(index)"
            >
              <span class="text-base font-semibold text-white">{{ faq.question }}</span>
              <span class="mt-1 text-white/40">
                <svg v-if="openFaq === index" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <p v-if="openFaq === index" class="mt-4 text-sm text-white/60">
                {{ faq.answer }}
              </p>
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
const statusEndpoint = runtimeConfig.public.statusEndpoint as string | undefined
const { data: clientMeta } = useClientMeta()

const downloadUrl = computed(() => clientMeta.value?.updatelink ?? (runtimeConfig.public.downloadUrl as string))
const discordUrl = computed(() => clientMeta.value?.discord ?? (runtimeConfig.public.discordUrl as string))
const versionLabel = computed(() =>
  clientMeta.value?.latestversionstring ? `Version ${clientMeta.value.latestversionstring}` : 'Version 5.0'
)

const defaultStatus = {
  health: { ok: false },
  players: { count: 0 },
  latencyMs: null,
  updatedAt: null,
  timestamp: null
}

const {
  data: statusData,
  pending: statusPending,
  refresh: refreshStatus,
  error: statusError
} = useLazyAsyncData('gateway-status', async () => {
  if (!statusEndpoint) return defaultStatus
  try {
    const result = await $fetch(statusEndpoint, {
      headers: { accept: 'application/json' },
      timeout: 4000
    })
    return (result as typeof defaultStatus) ?? defaultStatus
  } catch {
    return defaultStatus
  }
}, {
  default: () => defaultStatus,
  server: false
})

const gatewayHealthy = computed(() => statusData.value?.health?.ok ?? false)
const playersOnline = computed(() => statusData.value?.players?.count ?? 0)
const latencyMs = computed(() => statusData.value?.latencyMs ?? null)
const lastUpdated = computed(() => statusData.value?.updatedAt || statusData.value?.timestamp || null)

const metrics = computed(() => [
  {
    label: 'Gateway',
    value: gatewayHealthy.value ? 'Operational' : 'Degraded',
    accent: gatewayHealthy.value ? 'text-success' : 'text-warning'
  },
  {
    label: 'Latency',
    value: latencyMs.value ? `${Math.round(latencyMs.value)} ms` : '—',
    accent: 'text-white'
  },
  {
    label: 'Players',
    value: playersOnline.value.toString().padStart(2, '0'),
    accent: 'text-white'
  }
])

type FeatureHighlight = {
  title: string
  description: string
  icon: string
  points?: string[]
}

const featureHighlights = [
  {
    title: 'Secure Auth Pipeline',
    description: 'Supabase-backed JWT sessions, token refresh on account swap and instant invalidation on ban events.',
    icon: 'M12 2l7 4v6c0 5-3.5 10-7 11-3.5-1-7-6-7-11V6l7-4z',
    points: [
      'JWT sessions backed by Supabase with instant revocation on flag events.',
      'Automatic refresh when players switch Microsoft or Mojang accounts.'
    ]
  },
  {
    title: 'Modular HUD System',
    description: 'Drag-and-drop layout editor with profile presets, nano animations and shader-safe rendering.',
    icon: 'M4 7l8-4 8 4-8 4-8-4zm0 6l8 4 8-4m-8 4v5',
    points: [
      'Profile-based layouts with per-scene persistence.',
      'Shader-friendly rendering path to avoid ghosting on custom packs.'
    ]
  },
  {
    title: 'Presence Intelligence',
    description: 'Realtime WebSocket presence with role sync, last-seen tracking and admin dashboards on Render.',
    icon: 'M16 17a4 4 0 10-8 0 4 4 0 008 0z M3 20a6 6 0 0112 0v1H3v-1z M12 3a4 4 0 110 8 4 4 0 010-8z',
    points: [
      'Live Gateway dashboards stream status and presence to staff.',
      'Last-seen tracking feeds moderation insights in real time.'
    ]
  },
  {
    title: 'Performance Toolkit',
    description: 'Async chunk streaming, particle throttling and auto mod priority to keep FPS spikes under control.',
    icon: 'M3 12h18M12 3v18m-7-7 14-14M5 19l14-14',
    points: [
      'Adaptive FPS profile automatically tunes chunk streaming and particles.',
      'Module priority system keeps critical combat mods responsive.'
    ]
  },
  {
    title: 'Plugin-ready Gateway',
    description: 'Future-proof architecture to drop in punishment feeds, tournament modules or voice relay without rewrites.',
    icon: 'M12 6v6l4 2m6-2a10 10 0 11-4.05-7.94',
    points: [
      'Context-aware plugin sandbox for punishment, tournaments and telemetry.',
      'Schema-first APIs keep third-party integrations version safe.'
    ]
  },
  {
    title: 'Open-source Transparency',
    description: 'Auditable code, documented RFCs and a CDN pipeline for ultra-lightweight resource distribution.',
    icon: 'M21 21l-6-6m2-3a7 7 0 11-14 0 7 7 0 0114 0z',
    points: [
      'Active RFC process maps upcoming features before they ship.',
      'Global CDN delivery keeps manifest downloads under 200 ms worldwide.'
    ]
  }
] satisfies FeatureHighlight[]

const showcaseSlides = [
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

const statusHighlights = [
  'Token chaining ensures Microsoft, Mojang and Offline accounts refresh without client restarts.',
  'Supabase presence events trigger automatic role syncs into the Java client.',
  'Render-ready Docker image with non-root user, capability drop and health probes.'
]

const deploymentTargets = [
  { title: 'Render (Gateway)', subtitle: 'Docker build + zero-downtime deploys with health checks.' },
  { title: 'Vercel (Website / Status)', subtitle: 'Nuxt 3 edge rendering, instant invalidation on release.' },
  { title: 'GitHub Pages (CDN)', subtitle: 'Static assets & manifests delivered from shindoclient.github.io.' }
]

const upgradeSteps = [
  '1. Download the latest manifest.',
  '2. Import into your launcher or custom bootstrap.',
  '3. Sign in and let the gateway sync your roles.'
]

const faqs = [
  {
    question: 'How does the new authentication system work?',
    answer:
      'The Java client requests a signed JWT from the REST session endpoint, then authenticates via secure WebSocket. Tokens are short-lived, revoked on demand and refreshed automatically when you swap accounts.'
  },
  {
    question: 'Is ShindoClient legal on major networks?',
    answer:
      'Yes. ShindoClient focuses on performance optimisations, QoL modules and visuals. No unfair combat advantages are shipped by default and key systems are hot-pluggable to comply with server rules.'
  },
  {
    question: 'Can I build my own modules on top?',
    answer:
      'Absolutely. The client is open-source under a permissive license. The new plugin scaffolding makes it straightforward to inject tools, overlays or integrations without forking the core.'
  },
  {
    question: 'What is the roadmap for 2025?',
    answer:
      'Upcoming releases include deeper Supabase analytics, profile cloud sync and an optional companion mobile app that sends push alerts when tournaments go live or friends hop in-game.'
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

const openFaq = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const formatRelative = (timestamp: string | number | null) => {
  if (!timestamp) return ''
  try {
    const date = new Date(timestamp)
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.round((date.getTime() - Date.now()) / (1000 * 60)),
      'minute'
    )
  } catch {
    return ''
  }
}

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
    'Experience ShindoClient, a AAA-inspired Minecraft 1.8.9 client with secure Supabase auth, modular HUD, performance upgrades and real-time status monitoring.',
  ogTitle: 'ShindoClient — Modern Minecraft 1.8.9 Client',
  ogDescription:
    'Secure Supabase auth, modular UI and AAA-grade visuals. Download ShindoClient for a premium 1.8.9 experience.',
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
              'A modern, open-source Minecraft 1.8.9 PvP client with AAA-inspired design, security-focused architecture and cross-platform support.',
            url: 'https://shindoclient.com',
            downloadUrl: downloadUrl,
            applicationCategory: ['GameApplication', 'EntertainmentApplication'],
            operatingSystem: ['Windows', 'macOS', 'Linux'],
            softwareVersion: '5.0.0',
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
