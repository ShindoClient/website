<script lang="ts">
  import type { ClientMeta } from '$lib/api'
  import { canonicalUrl, siteConfig } from '$lib/site-config'
  import { reveal } from '$lib/reveal'
  import { ArrowUpRight, Bug, CheckCircle2, Cpu, Download, GitBranch, HardDriveDownload } from 'lucide-svelte'

  let { data }: import('./$types').PageProps = $props()

  const clientMeta = $derived(data.clientMeta as ClientMeta)
  const downloadHref = $derived(clientMeta?.updatelink || siteConfig.downloadUrl)
  const launcherHref = $derived(clientMeta?.launcherLink || siteConfig.launcherUrl)
  const latestVersion = $derived(clientMeta?.latestversion || null)
</script>

<svelte:head>
  <title>Download ShindoClient - Latest Build</title>
  <meta content="Download the latest ShindoClient build. Get the version manifest and launcher for Windows, macOS and Linux." name="description" />
  <meta content="Download ShindoClient - Latest Build" property="og:title" />
  <meta content="Download the latest ShindoClient build. Get the version manifest and launcher." property="og:description" />
  <meta content="/embed.png" property="og:image" />
  <meta content={`${canonicalUrl}/download`} property="og:url" />
  <meta content="summary_large_image" name="twitter:card" />
</svelte:head>

<main class="relative px-4 pb-24 pt-16 text-white">
  <div class="pointer-events-none absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(127,95,255,0.14),transparent_42%),radial-gradient(circle_at_88%_8%,rgba(45,27,105,0.24),transparent_36%),linear-gradient(180deg,rgba(7,9,20,0.92),rgba(5,7,15,0.96))]"></div>
    <div class="absolute left-6 top-10 h-24 w-24 rounded-full bg-accent-500/25 blur-3xl"></div>
    <div class="absolute right-0 top-24 h-28 w-28 rounded-full bg-accent-900/35 blur-[90px]"></div>
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
  </div>

  <div class="mx-auto max-w-[1120px] space-y-10">
    <section class="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-soft/90 via-surface-soft-2/90 to-surface/90 p-8 shadow-[0_40px_120px_-70px_rgba(7,8,20,0.9)] backdrop-blur-3xl animate-on-scroll md:p-12" use:reveal>
      <div class="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(162,107,255,0.18),transparent_50%),radial-gradient(circle_at_82%_15%,rgba(95,74,255,0.16),transparent_45%),linear-gradient(135deg,rgba(45,27,105,0.35),rgba(5,6,18,0.8))]"></div>
      <div class="absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_32px)]"></div>

      <div class="relative flex flex-col gap-8">
        <div class="flex flex-col gap-4 text-center md:gap-5 md:text-left">
          <div class="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span class="section-label bg-white/5 text-white/70">Downloads</span>
          </div>
          <h1 class="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Ready to launch the latest ShindoClient build?
          </h1>
          <p class="mx-auto max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg md:mx-0">
            Download the latest version manifest and launcher to get started with ShindoClient on your preferred platform. Follow the integration steps below to set up the client in your existing Minecraft launcher.
          </p>
        </div>

        <div class="grid gap-5 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a class="button-primary group w-full justify-center bg-gradient-to-r from-accent-500 via-accent-600 to-accent-900 text-sm font-semibold shadow-[0_24px_80px_-40px_rgba(127,95,255,0.8)] sm:w-auto" href={downloadHref} rel="noreferrer" target="_blank">
              <Download class="h-4 w-4" />
              <span>Download Manifest</span>
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a class="button-ghost group w-full justify-center border-white/20 bg-white/5 text-sm font-semibold text-white sm:w-auto" href={launcherHref} rel="noreferrer" target="_blank">
              <HardDriveDownload class="h-4 w-4 text-accent-200" />
              <span>Download Launcher</span>
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div class="text-center text-sm text-white/60 lg:text-right">
            <span class="section-label bg-white/5 text-white/70">
              Latest version:
              <span class="ml-2 font-mono font-medium text-white">{latestVersion ?? 'Unavailable'}</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-5 md:grid-cols-2">
      <div class="info-card glass-panel group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-surface-elevated/70 p-6 shadow-lg shadow-black/25 animate-on-scroll hover:border-accent-500/40 hover:shadow-[0_30px_90px_-60px_rgba(127,95,255,0.65)]" use:reveal>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(162,107,255,0.4),transparent_40%)] opacity-20"></div>
        <div class="relative flex flex-col gap-4">
          <div class="flex items-center justify-between gap-3 border-b border-white/10 pb-3 transition-colors group-hover:border-white/20">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-700/20 text-accent-200">
                <Cpu class="h-5 w-5" />
              </div>
              <h2 class="text-base font-semibold text-white">Integration steps</h2>
            </div>
            <a class="button-ghost group flex items-center border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:border-accent-500/30 hover:bg-accent-500/10" href={launcherHref} rel="noreferrer" target="_blank">
              <HardDriveDownload class="h-4 w-4 text-accent-200" />
              <span>Or download launcher</span>
              <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5" />
            </a>
          </div>

          <ol class="mt-2 space-y-3 text-sm leading-relaxed text-white/70">
            {#each [
              'Place the downloaded manifest inside your launcher versions directory.',
              'Restart or refresh the launcher to pull the newest assets and metadata.',
              'Select the latest release entry and launch ShindoClient.'
            ] as step, index}
              <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">{index + 1}</span>
                <span>{step}</span>
              </li>
            {/each}
          </ol>
        </div>
      </div>

      <div class="info-card glass-panel group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-surface-elevated/70 p-6 shadow-lg shadow-black/25 animate-on-scroll hover:border-accent-500/40 hover:shadow-[0_30px_90px_-60px_rgba(127,95,255,0.65)]" use:reveal>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(127,95,255,0.4),transparent_42%)] opacity-20"></div>
        <div class="relative flex flex-col gap-4">
          <div class="flex items-center gap-3 border-b border-white/10 pb-3 transition-colors group-hover:border-white/20">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-700/20 text-accent-200">
              <GitBranch class="h-5 w-5" />
            </div>
            <h2 class="text-base font-semibold text-white">Contribute to the project</h2>
          </div>
          <p class="text-sm leading-relaxed text-white/70">
            ShindoClient is an open-source project driven by community contributions. Whether you're a developer, designer, or tester, your help is invaluable in shaping the future of the client.
          </p>
          <div class="grid gap-2 sm:grid-cols-2">
            <a class="button-ghost group w-full justify-center border-white/20 bg-white/5 text-sm font-semibold text-white transition hover:border-accent-500/30 hover:bg-accent-500/10" href="https://github.com/ShindoClient/shindo-client/pulls" rel="noreferrer" target="_blank">
              <CheckCircle2 class="h-4 w-4 text-accent-200" />
              <span>Create a pull request</span>
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a class="button-ghost group w-full justify-center border-white/20 bg-white/5 text-sm font-semibold text-white transition hover:border-accent-500/30 hover:bg-accent-500/10" href="https://github.com/ShindoClient/shindo-client/issues" rel="noreferrer" target="_blank">
              <Bug class="h-4 w-4 text-accent-200" />
              <span>Report an issue</span>
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<style>
  .info-card {
    transform-origin: center bottom;
  }

  .info-card::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.09), transparent 30%, transparent 70%, rgba(127, 95, 255, 0.14)),
      radial-gradient(circle at 18% 14%, rgba(127, 95, 255, 0.16), transparent 34%);
    opacity: 0;
    transition:
      opacity 0.35s ease,
      transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    transform: scale(0.985);
    pointer-events: none;
  }

  .info-card:hover {
    transform: translateY(-8px) scale(1.012) !important;
    box-shadow:
      0 24px 70px -36px rgba(127, 95, 255, 0.45),
      0 16px 40px -24px rgba(5, 6, 17, 0.82) !important;
  }

  .info-card:hover::after {
    opacity: 1;
    transform: scale(1);
  }
</style>
