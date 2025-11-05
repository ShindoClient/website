<template>
  <main class="flex min-h-[60vh] items-center justify-center px-4">
    <div class="glass-panel flex max-w-md flex-col items-center gap-4 rounded-[28px] border border-white/10 bg-white/5 px-8 py-10 text-center">
      <span class="section-label bg-white/10 text-white/60">Discord</span>
      <h1 class="font-display text-3xl text-white">Jumping to the community</h1>
      <p class="text-sm text-white/60">
        You are being redirected to our Discord server. If the redirect does not happen automatically, use the button below.
      </p>
      <a :href="discordHref" class="button-primary justify-center" target="_blank" rel="noopener">
        Open Discord
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useClientMeta } from '@/composables/useClientMeta'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()
const DEFAULT_DISCORD_INVITE = 'https://discord.gg/uU56tvtXMU'

const rawDiscordHref = computed(() => clientMeta.value?.discord ?? (runtimeConfig.public.discordUrl as string))

const discordHref = computed(() => {
  const raw = (rawDiscordHref.value ?? '').trim()
  if (!raw) return DEFAULT_DISCORD_INVITE

  const absolute = /^https?:\/\//i.test(raw) ? raw : `https://${raw.replace(/^\/+/, '')}`

  try {
    const url = new URL(absolute)
    const normalizedPath = url.pathname.replace(/\/+$/, '').toLowerCase()
    const isInternalDiscordPath =
      normalizedPath === '/discord' && ['shindoclient.com', 'www.shindoclient.com'].includes(url.hostname)

    return isInternalDiscordPath ? DEFAULT_DISCORD_INVITE : url.href
  } catch {
    return DEFAULT_DISCORD_INVITE
  }
})

let redirectTimer: number | undefined

onMounted(() => {
  redirectTimer = window.setTimeout(() => {
    window.location.replace(discordHref.value)
  }, 600)
})

onBeforeUnmount(() => {
  if (redirectTimer !== undefined) {
    window.clearTimeout(redirectTimer)
    redirectTimer = undefined
  }
})
</script>
