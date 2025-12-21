<script setup lang="ts">
import '@fuzzycanary/core/auto'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'

import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

onMounted(() => {
  const { observeElements } = useScrollReveal()
  // Observar elementos com animação de scroll
  observeElements('.animate-on-scroll')
})
</script>
<template>
  <SpeedInsights/>
  <Analytics/>
  <div class="relative flex min-h-screen flex-col overflow-hidden">
    <div class="pointer-events-none absolute inset-0 opacity-70 grid-overlay"></div>
    <NavBar />
    <main class="flex-1 pt-24 sm:pt-28">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
