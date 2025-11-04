<template>
  <footer class="px-4 pb-10 pt-20">
    <div
      class="glass-panel mx-auto flex w-full max-w-[1120px] flex-col gap-8 overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/90 px-6 py-8 text-sm text-white/70 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-2xl md:flex-row md:items-center md:justify-between md:px-10"
    >
      <div>
        <p class="font-display text-lg font-semibold text-white">ShindoClient</p>
        <p class="mt-1 text-sm text-white/60">
          Crafted by competitive players. Inspired by AAA launchers. Open source and community-first.
        </p>
      </div>
      <div class="flex flex-col items-start gap-4 text-sm text-white/60 md:flex-row md:items-center">
        <div class="flex items-center gap-3">
          <span class="uppercase tracking-[0.35em] text-xs text-white/40">Connect</span>
          <div class="h-px w-10 bg-white/10 md:hidden"></div>
        </div>
        <div class="flex items-center gap-4 text-white/70">
          <NuxtLink to="/download" class="transition hover:text-white">Download</NuxtLink>
          <a href="https://github.com/ShindoClient" target="_blank" rel="noopener" class="transition hover:text-white">
            GitHub
          </a>
          <NuxtLink to="/discord" class="transition hover:text-white">Discord</NuxtLink>
        </div>
      </div>
    </div>
    <p class="mx-auto mt-8 max-w-[1120px] text-center text-xs text-white/30">
      © {{ new Date().getFullYear() }} ShindoClient. All rights reserved.
    </p>
  </footer>
</template>
