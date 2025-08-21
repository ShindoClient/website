<template>
  <main>
    <!-- HERO -->
    <section id="hero" class="hero" role="region" aria-labelledby="hero-heading">
      <h1>ShindoClient</h1>
      <p class="subtitle">An updated version of Soar Client</p>
      <div class="button-group">
        <button class="cta-button" @click="scrollFeatures">Learn More</button>
        <RouterLink to="/download" class="cta-button download-button">
          <!-- Inline the SVG icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Now
        </RouterLink>
      </div>
      <a href="#features" aria-label="Scroll down to features section">
        <div class="ico animated">
          <div class="circle circle-top"></div>
          <div class="circle circle-main"></div>
          <div class="circle circle-bottom"></div>
          <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612"
               style="enable-background:new 0 0 612 612;" xml:space="preserve">
                        <defs>
                            <clipPath id="cut-off-arrow">
                                <circle cx="306" cy="306" r="287" />
                            </clipPath>
                          <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix"
                                           values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
            <path class="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z" />
                    </svg>
        </div>
      </a>
    </section>

    <!-- FEATURES -->
    <section id="features" class="features" role="region" aria-labelledby="features-heading">
      <h2>Why choose Shindo?</h2>
      <div class="feature-cards">
        <Card :img="ico.desktop" title="Cross platform">
          We support Linux, Windows and macOS and we will work hard to continue that fact!
        </Card>
        <Card :img="ico.increase" title="Quality of Life">
          ShindoClient offers numerous quality of life enhancements and bug fixes compared to Soar Client.
          We are committed to continue adding more as time passes!
        </Card>
        <Card :img="ico.branch" title="FOSS">
          At ShindoClient, we're committed to openness and collaboration. Whether you make a pull request,
          report an issue, or fork our code, we welcome it all!
        </Card>
        <Card :img="ico.discord" title="Community">
          Join our community on Discord to connect with other users, get support, and stay up to date with the latest news.
        </Card>
        <Card :img="ico.rocket" title="Performance">
          Lightweight and fast, ensuring smooth gameplay even on lower-end systems.
        </Card>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="about" role="region" aria-labelledby="about-heading">
      <h2 id="about-heading">What is ShindoClient?</h2>

      <p>We are a free Minecraft 1.8.9 PVP client with a unique modern design that is easy to use.</p>
      <p>ShindoClient is an enchanced fork of SoarClient with various improvements including fixing bugs,
        more mods, better performance and more!</p>
      <p>We have unique mods you won't find elsewhere and customisability that is unrivaled.</p>
      <p>We hope you will join our community and experience the client of the future!</p>
    </section>

    <!-- GALLERY -->
    <section id="gallery" class="gallery" role="region" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">Still not convinced?</h2>
      <p>See what sets ShindoClient apart from the rest.</p>

      <div class="image-grid">
        <GridItem :src="shots.menu" alt="Main menu">
          <template #title>UI & News</template>
          <template #subtitle>Modern layout with news & quick access.</template>
        </GridItem>
        <GridItem :src="shots.huds" alt="HUD customization">
          <template #title>HUD Customization</template>
          <template #subtitle>Clean widgets with fine-tuned controls.</template>
        </GridItem>
        <GridItem :src="shots.backgrounds" alt="Backgrounds">
          <template #title>Backgrounds</template>
          <template #subtitle>Beautiful gradients and wallpapers.</template>
        </GridItem>
        <GridItem :src="shots.modmenu" alt="Mod menu">
          <template #title>Mod Menu</template>
          <template #subtitle>Plenty of QoL mods ready to toggle.</template>
        </GridItem>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq" role="region" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>

      <div class="faq-list">
        <FaqItem>
          <template #question>Is ShindoClient safe to use?</template>
          <template #answer>
            Yes, ShindoClient is completely safe. We're open-source, meaning our code is publicly
            available for review. We don't include any malicious features and focus purely on enhancing
            your Minecraft PvP experience.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>Will I get banned for using ShindoClient?</template>
          <template #answer>
            ShindoClient only includes cosmetic and quality-of-life improvements that don't provide unfair
            advantages. However, always check the specific rules of servers you play on, as rules can
            vary between different Minecraft servers.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>What's the difference between ShindoClient and SoarClient?</template>
          <template #answer>
            ShindoClient is a replacement for SoarClient 7 that fixes alot of bugs, improves the design,
            adds more customisation and works on more platforms.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>Does ShindoClient support the latest Minecraft versions?</template>
          <template #answer>
            ShindoClient only supports 1.8.9 at the moment. Support for other versions may come via separate builds or integrations.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>Can I install mods?</template>
          <template #answer>
            Currently no, but we will be happy to consider mods you suggest to us on github or discord.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>Is ShindoClient free?</template>
          <template #answer>
            Yes, ShindoClient is completely free and open-source. We develop for the commmunity rather than the money.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>Is ShindoClient a cheat?</template>
          <template #answer>
            No. We are against cheating and will never add unfair advantages to ShindoClient. We even
            offer the ability for servers to disable some ShindoClient mods on their server.
          </template>
        </FaqItem>

        <FaqItem>
          <template #question>Can I contribute to ShindoClient's development?</template>
          <template #answer>
            Absolutely! We welcome contributions from the community. You can submit pull requests,
            translate the client, report bugs, suggest features, or help with documentation on our
            GitHub repository. Every contribution helps make ShindoClient better.
          </template>
        </FaqItem>
      </div>
    </section>

    <!-- JOIN US -->
    <section class="join-us" role="region" aria-labelledby="join-us-heading">
      <h2 id="join-us-heading">Ready to join us?</h2>
      <p class="subtitle">Experience the future today.</p>
      <div class="join-buttons">
        <RouterLink to="/download" class="join-button download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download
        </RouterLink>
        <RouterLink to="/discord"  class="join-button discord-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          Join Our Discord Server
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Card from '@/components/Card.vue'
import GridItem from '@/components/GridItem.vue'
import FaqItem from '@/components/FaqItem.vue'

import { scrollToHash } from '@/scripts/scrollTo'
const scrollFeatures = () => scrollToHash('#features')

// 👇 importa TUDO por módulo – o Vite faz hash/cache-busting e funciona no GitHub Pages
import icoDesktop from '@/assets/desktop.svg'
import icoIncrease from '@/assets/increase.svg'
import icoBranch  from '@/assets/branch.svg'
import icoDiscord from '@/assets/discord.svg'
import icoRocket  from '@/assets/rocket.svg'

import shotMenu        from '@/assets/screenshots/menu.webp'
import shotHuds        from '@/assets/screenshots/huds.webp'
import shotBackgrounds from '@/assets/screenshots/backgrounds.webp'
import shotModmenu     from '@/assets/screenshots/modmenu.webp'

const ico = { desktop: icoDesktop, increase: icoIncrease, branch: icoBranch, discord: icoDiscord, rocket: icoRocket }
const shots = { menu: shotMenu, huds: shotHuds, backgrounds: shotBackgrounds, modmenu: shotModmenu }

onMounted(() => {
  // Reveal dos grid-items com leve stagger (índice em cada entrada)
  const items = document.querySelectorAll<HTMLElement>('.image-grid .grid-item')
  items.forEach(el => el.classList.add('reveal'))
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        const index = Array.from(el.parentElement?.children || []).indexOf(el)
        el.style.transitionDelay = `${Math.max(0, index) * 100}ms`
        el.classList.add('visible')
        gridObserver.unobserve(el)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
  items.forEach(el => gridObserver.observe(el))
})

const openFaq = ref<number | null>(null)
function toggleFaq(i: number, el?: HTMLElement){
  openFaq.value = (openFaq.value === i) ? null : i
  if (openFaq.value === i && el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 200)
  }
}
</script>
