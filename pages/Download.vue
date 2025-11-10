<template>
  <main class="px-4 pb-24 pt-12">
    <div class="mx-auto max-w-[900px] space-y-12">
      <div class="glass-panel overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.9)]">
        <div class="flex flex-col gap-6 text-center">
          <span class="section-label mx-auto bg-white/10 text-white/60">Downloads</span>
          <h1 class="font-display text-3xl text-white sm:text-4xl">
            Get the latest ShindoClient build
          </h1>
          <p class="mx-auto max-w-2xl text-sm text-white/65">
            Download the version manifest to integrate ShindoClient with your launcher of choice. Manifest updates are
            published alongside each GitHub release.
          </p>
          <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a :href="downloadHref" target="_blank" class="button-primary w-full justify-center sm:w-auto">
              Download Manifest
            </a>
            <a :href="launcherHref" target="_blank" class="button-primary w-full justify-center sm:w-auto">
              Download Launcher
            </a>
            <NuxtLink to="/discord" class="button-ghost w-full justify-center border-white/20 bg-white/10 hover:border-white/30 sm:w-auto">
              Release Announcements
            </NuxtLink>
          </div>
          <p v-if="latestVersion" class="text-xs uppercase tracking-[0.35em] text-white/35">
            Current Version · {{ latestVersion }}
          </p>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <div class="glass-panel h-full rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 class="text-lg font-semibold text-white">Integration Steps</h2>
          <ol class="mt-4 space-y-3 text-sm text-white/65">
            <li>1. Download the latest version manifest and place it inside your launcher profiles directory.</li>
            <li>2. Reboot the launcher or trigger a manifest refresh to pull the newest assets.</li>
            <li>3. Launch ShindoClient and sign in—roles and presence will sync automatically.</li>
          </ol>
        </div>
        <div class="glass-panel h-full rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 class="text-lg font-semibold text-white">Checksums & Source</h2>
          <p class="mt-3 text-sm text-white/65">
            All releases are published on GitHub with SHA-256 checksums. Verify your download, inspect the code and open pull
            requests directly from the repository.
          </p>
          <a
            href="https://github.com/ShindoClient/Shindo-Client/releases"
            target="_blank"
            class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-200 transition hover:text-white"
          >
            View releases on GitHub
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
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
import { computed } from 'vue'
import { useClientMeta } from '@/composables/useClientMeta'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()

const downloadHref = computed(() => clientMeta.value?.updatelink ?? (runtimeConfig.public.downloadUrl as string))
const launcherHref = computed(() => clientMeta.value?.launcherlink ?? (runtimeConfig.public.launcherUrl as string))
const latestVersion = computed(() => clientMeta.value?.latestversion ?? null)
</script>
