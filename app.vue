<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'
</script>
<template>
  <SpeedInsights/>
  <Analytics/>
  <div class="min-h-screen">
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>
<style>
@import url('assets/css/tailwind.css');
</style>
