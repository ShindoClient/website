<template>
  <main class="px-4 pb-24 pt-12">
    <div class="mx-auto max-w-[1120px] space-y-8">
      <!-- Hero Section -->
      <div class="glass-panel overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-lg shadow-black/20 animate-on-scroll md:p-10">
        <div class="flex flex-col gap-6 text-center">
          <span class="section-label mx-auto bg-white/10 text-white/60">Downloads</span>
          <h1 class="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Get the latest ShindoClient build
          </h1>
          <p class="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Download the version manifest to integrate ShindoClient with your launcher of choice. Manifest updates are
            published alongside each GitHub release.
          </p>
          <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a :href="downloadHref" target="_blank" class="button-primary group w-full justify-center sm:w-auto">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Manifest</span>
            </a>
            <a :href="launcherHref" target="_blank" class="button-primary group w-full justify-center sm:w-auto">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Launcher</span>
            </a>
            <NuxtLink to="/discord" class="button-ghost w-full justify-center border-white/20 bg-white/10 hover:border-white/30 sm:w-auto">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Release Announcements</span>
            </NuxtLink>
          </div>
          <p v-if="latestVersion" class="text-xs uppercase tracking-[0.35em] text-white/40 mt-2">
            Current Version · <span class="text-accent-400">{{ latestVersion }}</span>
          </p>
        </div>
      </div>

      <!-- Info Cards -->
      <div class="grid gap-4 md:grid-cols-2">
        <div class="info-card glass-panel group h-full rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 animate-on-scroll hover:border-white/20 hover:bg-white/[0.08]">
          <div class="flex items-center gap-3 pb-3 border-b border-white/10 group-hover:border-white/20 transition-colors duration-300">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-300">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 class="text-base font-semibold text-white">Integration Steps</h2>
          </div>
          <ol class="mt-4 space-y-2.5 text-sm leading-relaxed text-white/65">
            <li class="flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent-400">1</span>
              <span>Download the latest version manifest and place it inside your launcher versions directory.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent-400">2</span>
              <span>Reboot the launcher or trigger a manifest refresh to pull the newest assets.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent-400">3</span>
              <span>Select the latest version in your launcher and launch ShindoClient.</span>
            </li>
          </ol>
        </div>
        <div class="info-card glass-panel group h-full rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 animate-on-scroll hover:border-white/20 hover:bg-white/[0.08]">
          <div class="flex items-center gap-3 pb-3 border-b border-white/10 group-hover:border-white/20 transition-colors duration-300">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-300">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                <path d="M3 12c0 5 4 8 9 8s9-3 9-8" />
              </svg>
            </div>
            <h2 class="text-base font-semibold text-white">Checksums & Source</h2>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-white/65">
            All releases are published on GitHub with SHA-256 checksums. Verify your download, inspect the code and open pull
            requests directly from the repository.
          </p>
          <a
            href="https://github.com/ShindoClient/Shindo-Client/releases"
            target="_blank"
            class="group/link mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-300 transition-all duration-300 hover:text-accent-200"
          >
            View releases on GitHub
            <svg class="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useClientMeta } from '@/composables/useClientMeta'
import { useScrollReveal } from '@/composables/useScrollReveal'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()

const downloadHref = computed(() => clientMeta.value?.updatelink ?? (runtimeConfig.public.downloadUrl as string))
const launcherHref = computed(() => clientMeta.value?.launcherLink ?? (runtimeConfig.public.launcherUrl as string))
const latestVersion = computed(() => clientMeta.value?.latestversion ?? null)

onMounted(() => {
  const { observeElements } = useScrollReveal()
  observeElements('.animate-on-scroll')
})

useSeoMeta({
  title: 'Download ShindoClient — Latest Build',
  description: 'Download the latest ShindoClient build. Get the version manifest and launcher for Windows, macOS and Linux.',
  ogTitle: 'Download ShindoClient — Latest Build',
  ogDescription: 'Download the latest ShindoClient build. Get the version manifest and launcher.',
  ogImage: '/embed.png',
  ogUrl: 'https://shindoclient.com/download',
  twitterCard: 'summary_large_image'
})
</script>
