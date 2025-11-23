<template>
  <header 
    ref="headerRef"
    class="site-header fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6 transition-all duration-500"
    :class="{ 'scrolled': isScrolled }"
  >
    <nav
      class="glass-panel glass-panel--static flex w-full max-w-[1120px] items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-500 hover:border-white/20 md:px-7"
      :class="{ 'nav-scrolled': isScrolled }"
    >
      <NuxtLink to="/" class="flex items-center gap-3 text-sm font-semibold tracking-wide text-white/80 transition-all duration-300 hover:text-white hover:scale-105">
        <img :src="logo" alt="ShindoClient logo" class="h-9 w-9 rounded-xl border border-white/10 bg-white/10 p-1.5 transition-transform duration-300 hover:rotate-6" />
        <div class="flex flex-col leading-tight">
          <span class="font-display text-base uppercase tracking-[0.3em] text-white/70 transition-colors duration-300">ShindoClient</span>
          <span v-if="versionLabel" class="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
            {{ versionLabel }}
          </span>
        </div>
      </NuxtLink>

      <div class="hidden items-center gap-1 text-sm font-medium text-white/70 md:flex">
        <button
          v-for="item in primaryLinks"
          :key="item.label"
          type="button"
          class="nav-link rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white"
          @click="navigate(item.hash)"
        >
          {{ item.label }}
        </button>
        <NuxtLink
          to="/download"
          class="button-ghost ml-1 text-xs uppercase tracking-widest"
        >
          Download
        </NuxtLink>
        <NuxtLink
          :to="discordHref"
          target="_blank"
          class="button-primary text-xs uppercase tracking-widest"
        >
          Discord
        </NuxtLink>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white/80 transition hover:border-white/30 hover:text-white md:hidden"
        @click="toggle"
        aria-label="Toggle navigation"
      >
        <svg
          v-if="!menu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <path d="M6 6l12 12" />
          <path d="M6 18L18 6" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menu"
        class="absolute top-[88px] w-full max-w-[1120px] rounded-3xl border border-white/10 bg-surface/95 p-4 shadow-xl shadow-black/40 backdrop-blur-xl md:hidden"
      >
        <div class="flex flex-col gap-2 text-sm font-medium text-white/70">
          <button
            v-for="item in primaryLinks"
            :key="`mobile-${item.label}`"
            type="button"
            class="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-white/10 hover:text-white"
            @click="navigate(item.hash)"
          >
            {{ item.label }}
          </button>
        </div>
        <div class="mt-4 grid gap-2">
          <NuxtLink to="/download" class="button-ghost w-full justify-center text-xs uppercase tracking-[0.25em]" @click="close">
            Download
          </NuxtLink>
          <NuxtLink
            :to="discordHref"
            target="_blank"
            class="button-primary w-full justify-center text-xs uppercase tracking-[0.25em]"
            @click="close"
          >
            Discord
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onBeforeUnmount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logo from 'public/logo.png'
import { scrollToHash } from '@/scripts/scrollTo'
import { useClientMeta } from '@/composables/useClientMeta'

const menu = ref(false)
const isScrolled = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()

const discordHref = computed(() => clientMeta.value?.discord ?? config.public.discordUrl)
const versionLabel = computed(() => (clientMeta.value?.latestversion ? `Version ${clientMeta.value.latestversion}` : null))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const primaryLinks = [
  { label: 'Overview', hash: '#hero' },
  { label: 'Features', hash: '#features' },
  { label: 'Showcase', hash: '#showcase' },
  { label: 'Support', hash: '#support' },
  { label: 'Roadmap', hash: '#roadmap' },
  { label: 'FAQ', hash: '#faq' }
] as const

const close = () => {
  menu.value = false
}

const toggle = () => {
  menu.value = !menu.value
}

async function navigate(hash: string) {
  close()
  const onHome = route.path === '/'
  if (!onHome) {
    await router.push({ path: '/', hash })
    await nextTick()
    await scrollToHash(hash)
  } else {
    await scrollToHash(hash)
    router.replace({ hash }).catch(() => {})
  }
}
</script>

<style scoped>
.site-header {
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
              padding-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header.scrolled {
  padding-top: 0.75rem;
}

.nav-scrolled {
  box-shadow: 0 8px 32px -8px rgba(10, 18, 46, 0.6) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  background: rgba(255, 255, 255, 0.08) !important;
}

/* Animações suaves nos botões de navegação */
button[type="button"] {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

button[type="button"]::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(127, 95, 255, 0.8), transparent);
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button[type="button"]:hover::after {
  width: 60%;
}

/* Animação do menu mobile */
.site-header nav button[aria-label="Toggle navigation"] {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header nav button[aria-label="Toggle navigation"]:hover {
  transform: scale(1.05);
}

/* Transição suave do menu mobile */
.site-header nav button[aria-label="Toggle navigation"] svg {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
