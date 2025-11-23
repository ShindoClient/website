<template>
  <main class="flex min-h-[60vh] items-center justify-center px-4">
    <div class="glass-panel flex max-w-md flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl shadow-lg shadow-black/20 animate-on-scroll md:p-10">
      <div class="flex flex-col items-center gap-4">
        <div class="relative">
          <div class="discord-loader h-16 w-16 rounded-full border-4 border-white/10"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="h-8 w-8 text-accent-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="section-label mx-auto bg-white/10 text-white/60">Discord</span>
          <h1 class="font-display text-2xl text-white sm:text-3xl">Redirecting to Discord</h1>
          <div class="flex items-center justify-center gap-2">
            <p class="text-sm text-white/60">Redirecting in</p>
            <span class="countdown text-base font-semibold text-accent-400">{{ countdown }}</span>
            <span class="text-sm text-white/60">seconds</span>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="loading-dot h-2 w-2 rounded-full bg-accent-400"></span>
          <span class="loading-dot h-2 w-2 rounded-full bg-accent-400" style="animation-delay: 0.2s"></span>
          <span class="loading-dot h-2 w-2 rounded-full bg-accent-400" style="animation-delay: 0.4s"></span>
        </div>
      </div>
      <p class="text-xs text-white/50">
        If the redirect does not happen automatically, use the button below.
      </p>
      <a :href="discordHref" class="button-primary group justify-center" target="_blank" rel="noopener">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
        <span>Open Discord</span>
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useClientMeta } from '@/composables/useClientMeta'
import { useScrollReveal } from '@/composables/useScrollReveal'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()
const DEFAULT_DISCORD_INVITE = 'https://discord.gg/uU56tvtXMU'

const rawDiscordHref = computed(() => clientMeta.value?.discord ?? (runtimeConfig.public.discordUrl as string))

const discordHref = computed(() => {
  const raw = (rawDiscordHref.value ?? '').trim()
  try {
    const url = new URL(raw)
    return url.href
  } catch {
    return DEFAULT_DISCORD_INVITE
  }
})

const countdown = ref(3)
const REDIRECT_DELAY = 3000 // 3 segundos

let redirectTimer: number | undefined
let countdownTimer: number | undefined

onMounted(() => {
  const { observeElements } = useScrollReveal()
  observeElements('.animate-on-scroll')

  // Contador regressivo
  countdownTimer = window.setInterval(() => {
    if (countdown.value > 1) {
      countdown.value--
    } else {
      if (countdownTimer !== undefined) {
        window.clearInterval(countdownTimer)
      }
    }
  }, 1000)

  // Redirecionamento após o delay
  redirectTimer = window.setTimeout(() => {
    window.location.replace(discordHref.value)
  }, REDIRECT_DELAY)
})

onBeforeUnmount(() => {
  if (redirectTimer !== undefined) {
    window.clearTimeout(redirectTimer)
    redirectTimer = undefined
  }
  if (countdownTimer !== undefined) {
    window.clearInterval(countdownTimer)
    countdownTimer = undefined
  }
})

useSeoMeta({
  title: 'Join Discord — ShindoClient Community',
  description: 'Join the ShindoClient Discord community. Get support, share feedback and connect with other players.',
  ogTitle: 'Join Discord — ShindoClient Community',
  ogDescription: 'Join the ShindoClient Discord community.',
  ogImage: '/embed.png',
  ogUrl: 'https://shindoclient.com/discord',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.discord-loader {
  border-top-color: rgba(127, 95, 255, 0.6);
  border-right-color: rgba(127, 95, 255, 0.6);
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-dot {
  animation: pulse 1.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.countdown {
  min-width: 1.5rem;
  text-align: center;
  animation: countdown-pulse 1s ease-in-out infinite;
}

@keyframes countdown-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
