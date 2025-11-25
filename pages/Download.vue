<template>
  <main class="relative px-4 pb-24 pt-16 text-white">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(127,95,255,0.14),transparent_42%),radial-gradient(circle_at_88%_8%,rgba(45,27,105,0.24),transparent_36%),linear-gradient(180deg,rgba(7,9,20,0.92),rgba(5,7,15,0.96))]"></div>
      <div class="absolute left-6 top-10 h-24 w-24 rounded-full bg-accent-500/25 blur-3xl"></div>
      <div class="absolute right-0 top-24 h-28 w-28 rounded-full bg-[#2D1B69]/35 blur-[90px]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>

    <div class="mx-auto max-w-[1120px] space-y-10">
      <section
        class="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1128]/90 via-[#0a0d1f]/90 to-[#050611]/90 p-8 shadow-[0_40px_120px_-70px_rgba(7,8,20,0.9)] backdrop-blur-3xl animate-on-scroll md:p-12"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(162,107,255,0.18),transparent_50%),radial-gradient(circle_at_82%_15%,rgba(95,74,255,0.16),transparent_45%),linear-gradient(135deg,rgba(45,27,105,0.35),rgba(5,6,18,0.8))]"
        ></div>
        <div
          class="absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_32px)]"
        ></div>

        <div class="relative flex flex-col gap-8">
          <div class="flex flex-col gap-4 text-center md:gap-5 md:text-left">
            <div class="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <span class="section-label bg-white/5 text-white/70">
                Downloads
              </span>
            </div>
            <h1 class="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Ready to launch the latest ShindoClient build?
            </h1>
            <p class="mx-auto max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg md:mx-0">
              Download the latest version manifest and launcher to get started with ShindoClient on your preferred
              platform. Follow the integration steps below to set up the client in your existing Minecraft launcher.
            </p>
          </div>

          <div class="grid gap-5 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                :href="downloadHref"
                target="_blank"
                class="button-primary group w-full justify-center bg-gradient-to-r from-accent-500 via-accent-600 to-[#2D1B69] text-sm font-semibold shadow-[0_24px_80px_-40px_rgba(127,95,255,0.8)] sm:w-auto"
              >
                <Download class="h-4 w-4" />
                <span>Download Manifest</span>
                <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                :href="launcherHref"
                target="_blank"
                class="button-ghost group w-full justify-center border-white/20 bg-white/5 text-sm font-semibold text-white sm:w-auto"
              >
                <HardDriveDownload class="h-4 w-4 text-accent-200" />
                <span>Download Launcher</span>
                <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div class="text-center text-sm text-white/60 lg:text-right">
              <span v-if="latestVersion" class="section-label bg-white/5 text-white/70">
                Latest version:
                <span class="ml-2 font-mono font-medium text-white">{{ latestVersion }}</span>
              </span>
              <span v-else class="section-label bg-white/5 text-white/70">
                Latest version:
                <span class="ml-2 font-mono font-medium text-white">Unavailable</span>
              </span>
              
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-5 md:grid-cols-2">
        <div
          class="info-card glass-panel group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-[#0b0f24]/70 p-6 shadow-lg shadow-black/25 transition-all duration-500 animate-on-scroll hover:border-accent-500/40 hover:shadow-[0_30px_90px_-60px_rgba(127,95,255,0.65)]"
        >
          <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_20%,rgba(162,107,255,0.4),transparent_40%)]"></div>
          <div class="relative flex flex-col gap-4">
            <div class="flex items-center justify-between gap-3 pb-3 border-b border-white/10 transition-colors duration-300 group-hover:border-white/20">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-700/20 text-accent-200"
                >
                  <Cpu class="h-5 w-5" />
                </div>
                <h2 class="text-base font-semibold text-white">Integration steps</h2>
              </div>
              
              <NuxtLink
                :to="launcherHref"
                target="_blank"
                class="button-ghost group flex items-center border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-accent-500/30 hover:bg-accent-500/10"
              >
                <HardDriveDownload class="h-4 w-4 text-accent-200" />
                <span>Or download launcher</span>
                <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </NuxtLink>
            </div>

            <ol class="mt-2 space-y-3 text-sm leading-relaxed text-white/70">
              <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                <span
                  class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100"
                >
                  1
                </span>
                <span>Place the downloaded manifest inside your launcher versions directory.</span>
              </li>
              <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                <span
                  class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100"
                >
                  2
                </span>
                <span>Restart or refresh the launcher to pull the newest assets and metadata.</span>
              </li>
              <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                <span
                  class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100"
                >
                  3
                </span>
                <span>Select the latest release entry and launch ShindoClient.</span>
              </li>
            </ol>
          </div>
        </div>

        <div
          class="info-card glass-panel group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-[#0b0f24]/70 p-6 shadow-lg shadow-black/25 transition-all duration-500 animate-on-scroll hover:border-accent-500/40 hover:shadow-[0_30px_90px_-60px_rgba(127,95,255,0.65)]"
        >
          <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_85%_20%,rgba(127,95,255,0.4),transparent_42%)]"></div>
          <div class="relative flex flex-col gap-4">
            <div class="flex items-center gap-3 pb-3 border-b border-white/10 transition-colors duration-300 group-hover:border-white/20">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-700/20 text-accent-200"
              >
                <GitBranch class="h-5 w-5" />
              </div>
              <h2 class="text-base font-semibold text-white">Contribute to the project</h2>
            </div>
            <p class="text-sm leading-relaxed text-white/70">
              ShindoClient is an open-source project driven by community contributions. Whether you're a developer,
              designer, or tester, your help is invaluable in shaping the future of the client.
            </p>
            <div class="grid gap-2 sm:grid-cols-2">
              <NuxtLink
                to="https://github.com/ShindoClient/shindo-client/pulls"
                class="button-ghost group w-full justify-center border-white/20 bg-white/5 text-sm font-semibold text-white transition hover:border-accent-500/30 hover:bg-accent-500/10"
              >
                <CheckCircle2 class="h-4 w-4 text-accent-200" />
                <span>Create a pull request</span>
                <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </NuxtLink>
              <NuxtLink
                to="https://github.com/ShindoClient/shindo-client/issues"
                class="button-ghost group w-full justify-center border-white/20 bg-white/5 text-sm font-semibold text-white transition hover:border-accent-500/30 hover:bg-accent-500/10"
              >
                <Bug class="h-4 w-4 text-accent-200" />
                <span>Report an issue</span>
                <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import {
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Cpu,
  Download,
  GitBranch,
  HardDriveDownload,
} from 'lucide-vue-next'
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
  title: 'Download ShindoClient - Latest Build',
  description: 'Download the latest ShindoClient build. Get the version manifest and launcher for Windows, macOS and Linux.',
  ogTitle: 'Download ShindoClient - Latest Build',
  ogDescription: 'Download the latest ShindoClient build. Get the version manifest and launcher.',
  ogImage: '/embed.png',
  ogUrl: 'https://shindoclient.com/download',
  twitterCard: 'summary_large_image',
})
</script>
