<template>
  <main class="space-y-24 pb-24 lg:space-y-28 lg:pb-32">
    <section id="hero" class="relative px-4 pt-8">
      <div class="hero-container glass-panel mx-auto max-w-[1120px] rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:grid md:grid-cols-[minmax(0,1fr)_400px] md:gap-12 md:p-10 animate-on-scroll">
        <div class="flex flex-col gap-6">
          <div class="flex flex-wrap items-center gap-2.5 animate-on-scroll" style="transition-delay: 0.1s">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              {{ versionLabel }}
            </span>
            <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
              1.8.9
            </span>
          </div>
          <div class="animate-on-scroll" style="transition-delay: 0.2s">
            <h1 class="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Modern & Open-source
              <span class="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Minecraft Client
              </span>
              <span class="block text-white/90">Built for competitivity.</span>
            </h1>
            <p class="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              ShindoClient delivers a modern launcher experience inspired by Lunar, Feather and LabyMod, without sacrificing
              the openness of the community.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 animate-on-scroll" style="transition-delay: 0.3s">
            <NuxtLink :to="downloadUrl" class="button-primary group">
              <span>Download</span>
              <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
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
        <div class="relative animate-on-scroll md:flex md:items-center md:justify-center" style="transition-delay: 0.4s">
          <div class="pointer-events-none absolute inset-0 -translate-y-4 -translate-x-4 rounded-3xl bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-transparent blur-3xl opacity-60"></div>
          <div class="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 shadow-[0_20px_60px_-30px_rgba(90,62,247,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_25px_70px_-30px_rgba(90,62,247,0.4)] hover:scale-[1.02]">
            <img
              src="/logo.png"
              alt="ShindoClient logo"
              class="h-28 w-auto sm:h-36 transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center animate-on-scroll">
          <span class="section-label mx-auto bg-white/10 text-white/60">Feature Highlights</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">
            Built like a pro launcher. Tuned for open-source experimentation.
          </h2>
          <p class="mx-auto max-w-2xl text-base text-white/65">
            Every subsystem was rebuilt for stability, security, and scalability, to a modular client-side architecture tuned for minimal input latency.
          </p>
        </div>
        <div class="grid auto-rows-[minmax(0,1fr)] gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(feature, index) in featureHighlights"
            :key="feature.title"
            class="feature-card glass-panel group relative flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20 transition-all duration-500 ease-out animate-on-scroll hover:border-white/25 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-accent-500/10"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="flex items-center gap-3 pb-2 border-b border-white/10 group-hover:border-white/20 transition-colors duration-500">
              <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-300 transition-all duration-500 group-hover:from-accent-500/40 group-hover:to-accent-600/30 group-hover:scale-110 group-hover:border-accent-500/30 group-hover:shadow-lg group-hover:shadow-accent-500/20">
                <component
                  :is="feature.icon"
                  class="h-4 w-4 transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                  :size="16"
                  :stroke-width="2"
                />
              </div>
              <h3 class="text-sm font-semibold text-white leading-tight transition-colors duration-500 group-hover:text-accent-300">{{ feature.title }}</h3>
            </div>
            <p class="text-xs leading-relaxed text-white/60 text-pretty break-words transition-colors duration-500 group-hover:text-white/70">
              {{ feature.description }}
            </p>
            <ul
              v-if="feature.points"
              class="mt-2 space-y-1 text-[0.75rem] text-white/55 leading-relaxed"
            >
              <li v-for="point in feature.points" :key="point" class="flex items-start gap-2 transition-all duration-500 group-hover:text-white/70">
                <Check class="mt-0.5 h-3 w-3 flex-shrink-0 text-accent-400 transition-all duration-500 group-hover:text-accent-300 group-hover:scale-110" :stroke-width="2.5" />
                <span class="break-words leading-snug">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="showcase" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center animate-on-scroll">
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
              class="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
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
              class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white transition-all duration-300 hover:border-white/40 hover:bg-black/50 hover:scale-110 active:scale-95"
              aria-label="Show previous slide"
              @click="prevSlide(); restartCarousel()"
            >
              <svg class="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white transition-all duration-300 hover:border-white/40 hover:bg-black/50 hover:scale-110 active:scale-95"
              aria-label="Show next slide"
              @click="nextSlide(); restartCarousel()"
            >
              <svg class="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              v-for="(_, index) in showcaseSlides"
              :key="`dot-${index}`"
              type="button"
              class="h-2.5 w-2.5 rounded-full transition-all duration-300"
              :class="activeSlide === index ? 'bg-white scale-125' : 'bg-white/25 hover:bg-white/40 hover:scale-110'"
              :aria-label="`Go to slide ${index + 1}`"
              @click="setSlide(index); restartCarousel()"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="upgrade" class="px-4">
      <div class="mx-auto max-w-[1120px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent-700/60 via-accent-500/40 to-surface-elevated/80 p-10 shadow-[0_40px_100px_-40px_rgba(90,62,247,0.6)] animate-on-scroll transition-transform duration-500 hover:scale-[1.02]">
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
            <NuxtLink to="/download" class="button-primary w-full justify-center">
              Download Now
            </NuxtLink>
            <NuxtLink to="/discord" class="button-ghost w-full justify-center border-white/20 bg-white/10 hover:border-white/30">
              Join Release Announcements
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section id="support" class="px-4">
      <div class="mx-auto max-w-[1120px] flex flex-col gap-6">
        <div class="flex flex-col gap-4 text-center animate-on-scroll">
          <span class="section-label mx-auto bg-white/10 text-white/60">Support the project</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">Fuel the ShindoClient roadmap</h2>
        </div>
        <div class="support-card glass-panel group mx-auto w-full rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 backdrop-blur-2xl lg:flex lg:flex-row lg:gap-8 lg:p-8 animate-on-scroll hover:border-white/20 hover:bg-white/[0.08]">
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-300">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white">Help us grow</h3>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-white/65">
              Donations help pay recurring domain renewals and fund a dedicated server for the API and websocket layer, ensuring reliable infrastructure as the community grows.
            </p>
            <p class="text-xs text-white/50 leading-relaxed">
              There's zero obligation to donate—any amount makes a difference and motivates continued development.
            </p>
          </div>
          <div class="flex-1 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-2 shadow-inner shadow-black/30 lg:max-w-md">
            <div class="overflow-hidden rounded-lg border border-white/10 bg-surface-elevated/40">
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/mikidevahm/?hidefeed=true&widget=true&embed=true&preview=true"
                style="border:0;width:100%;padding:0;background:transparent;"
                height="400"
                title="mikidevahm"
                loading="lazy"
                class="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="roadmap" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-3 text-center animate-on-scroll">
          <span class="section-label mx-auto bg-white/10 text-white/60">Upcoming Features</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">Next experiments shipping soon</h2>
          <p class="mx-auto max-w-3xl text-base text-white/65">
            {{ roadmapHeadline }}
          </p>
          <p v-if="roadmapUpdatedLabel" class="text-sm text-white/40">
            Last update · {{ roadmapUpdatedLabel }}
          </p>
        </div>
        <div
          v-if="roadmapFeatures.length"
          class="grid gap-3 md:grid-cols-2"
        >
          <article
            v-for="(feature, index) in roadmapFeatures"
            :key="feature.id"
            class="roadmap-card glass-panel group flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20 transition-all duration-500 ease-out animate-on-scroll hover:border-white/25 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-accent-500/10"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="flex items-start justify-between gap-2 pb-2 border-b border-white/10 group-hover:border-white/20 transition-colors duration-500">
              <h3 class="text-sm font-semibold text-white leading-tight flex-1 transition-colors duration-500 group-hover:text-accent-300">{{ feature.title }}</h3>
              <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70 whitespace-nowrap flex-shrink-0 transition-all duration-500 group-hover:border-accent-500/30 group-hover:bg-accent-500/10 group-hover:text-accent-300">
                {{ feature.status }}
              </span>
            </div>
            <p class="text-xs leading-relaxed text-white/60 text-pretty break-words flex-1 transition-colors duration-500 group-hover:text-white/70">
              {{ feature.description }}
            </p>
            <div class="space-y-1 mt-auto pt-1.5">
              <div class="flex items-center justify-between text-[0.7rem] font-medium text-white/50 transition-colors duration-500 group-hover:text-white/65">
                <span>Progress</span>
                <span class="text-accent-400 font-semibold transition-colors duration-500 group-hover:text-accent-300">{{ feature.progress }}%</span>
              </div>
              <div class="h-1 rounded-full bg-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/15">
                <div class="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-700 ease-out group-hover:from-accent-400 group-hover:to-accent-300 group-hover:shadow-sm group-hover:shadow-accent-400/50" :style="{ width: `${feature.progress}%` }"></div>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="glass-panel rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">
          Roadmap coming soon. Check back shortly!
        </div>
      </div>
    </section>

    <section id="faq" class="px-4">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div class="flex flex-col gap-4 text-center animate-on-scroll">
          <span class="section-label mx-auto bg-white/10 text-white/60">FAQ</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">All the details before you drop into queue</h2>
        </div>
          <div class="grid items-start gap-4 md:grid-cols-2">
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="glass-panel glass-panel--static glass-panel--loose rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.02] animate-on-scroll"
              :style="`transition-delay: ${index * 0.1}s`"
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
import type { Component } from 'vue'
import heroMenu from 'public/screenshots/menu.webp'
import heroHud from 'public/screenshots/huds.webp'
import heroMods from 'public/screenshots/modmenu.webp'
import heroBackgrounds from 'public/screenshots/backgrounds.webp'
import { scrollToHash } from '@/scripts/scrollTo'
import { useClientMeta } from '@/composables/useClientMeta'
import { useDevRoadmap } from '@/composables/useDevRoadmap'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { Check, MonitorSmartphone, Music, GlobeLock, ShieldCheck, UserRoundPen } from 'lucide-vue-next'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()
const { data: devRoadmap } = useDevRoadmap()

const downloadUrl = computed(() => clientMeta.value?.updatelink ?? (runtimeConfig.public.downloadUrl as string))
const discordUrl = computed(() => clientMeta.value?.discord ?? (runtimeConfig.public.discordUrl as string))
const versionLabel = computed(() => clientMeta.value?.latestversion ? `Version ${clientMeta.value.latestversion}` : 'Version 5.0'
)

const roadmapFeatures = computed(() => devRoadmap.value?.features ?? [])
const roadmapHeadline = computed(() => devRoadmap.value?.headline ?? '')
const roadmapUpdatedLabel = computed(() => {
  const isoDate = devRoadmap.value?.lastUpdated
  if (!isoDate) return ''
  const date = new Date(isoDate)
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
  icon: Component
  points?: string[]
}

const featureHighlights = [
  {
    title: 'Spotify Integration',
    description:
      'Link Spotify straight into the client so sessions broadcast what you are listening to alongside your gameplay.',
    icon: Music,
    points: [
      'Native controls expose track, artist and playback state without leaving the HUD.'
    ]
  },
  {
    title: 'Profile System',
    description:
      'Create and sync client profiles that bundle mods, cosmetics and keybinds for every playstyle.',
    icon: UserRoundPen,
    points: [
      'Swap between ranked, practice and creator presets in a single click.',
      'Automatic profile switching when entering favourite servers.'
    ]
  },
  {
    title: 'Network Tweaker',
    description:
      'Optimize network performance with automatic socket tuning and adaptive packet scheduling.',
    icon: GlobeLock,
    points: [
      'Auto-adjusts buffers and TCP windows for better responsiveness.',
      'Aggressive presets for competitive gameplay.'
    ]
  },
  {
    title: 'Security Shield',
    description:
      'Hardening layer that patches legacy Minecraft vulnerabilities and guards against malicious packets.',
    icon: ShieldCheck,
    points: [
      'Runtime checks neutralise known crash exploits and remote code execution chains.'
    ]
  },
  {
    title: 'Multi-platform Support',
    description:
      'Unified launcher experience across Windows, macOS and Linux with native rendering paths.',
    icon: MonitorSmartphone,
    points: [
      'Automatic updates deliver identical builds no matter where you login.'
    ]
  }
] satisfies FeatureHighlight[]

const showcaseSlides = [
  {
    title: 'Home',
    description:
      'The redesigned landing screen blends premium gradients with actionable CTAs, keeping download links and presence indicators one glance away.',
    image: heroMenu,
    alt: 'ShindoClient home screen'
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

onMounted(() => {
  startCarousel()
  const { observeElements } = useScrollReveal()
  observeElements('.animate-on-scroll')
})
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
            softwareVersion: clientMeta.value?.latestversion ?? '5.0.0',
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
