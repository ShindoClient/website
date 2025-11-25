<template>
  <main class="relative overflow-hidden px-4 pb-28 pt-16 text-white">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(127,95,255,0.16),transparent_45%),radial-gradient(circle_at_82%_8%,rgba(45,27,105,0.3),transparent_38%),linear-gradient(180deg,rgba(7,8,18,0.95),rgba(5,6,14,0.98))]"
      ></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      <div class="absolute left-[6%] top-12 h-24 w-24 rounded-full bg-accent-500/25 blur-[90px]"></div>
      <div class="absolute right-[8%] top-24 h-28 w-28 rounded-full bg-[#2D1B69]/30 blur-[100px]"></div>
    </div>

    <div class="mx-auto flex max-w-[1180px] flex-col gap-16 lg:gap-20">
      <section
        id="hero"
        class="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#11142f]/90 via-[#0c0f26]/92 to-[#050611]/92 p-8 shadow-[0_40px_120px_-70px_rgba(7,8,20,0.9)] backdrop-blur-3xl animate-on-scroll lg:p-12"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_22%_22%,rgba(162,107,255,0.18),transparent_48%),radial-gradient(circle_at_78%_18%,rgba(95,74,255,0.16),transparent_48%),linear-gradient(135deg,rgba(45,27,105,0.35),rgba(5,6,18,0.85))]"
        ></div>
        <div
          class="absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_32px)]"
        ></div>

        <div class="relative grid gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="section-label bg-white/5 text-white/70">
                <Sparkles class="h-4 w-4 text-accent-300" />
                {{ versionLabel }}
              </span>
              <span
                class="rounded-full border border-accent-500/25 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-50"
              >
                1.8.9
              </span>
              <span
                class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
              >
                Open-source
              </span>
            </div>

            <div class="space-y-3">
              <h1 class="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                <span class="block text-accent-100">Next-gen</span>
                Minecraft Client
                <span class="block text-white/80">Built for competitive PvP</span>
              </h1>
            </div>

            <p class="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              A compact, performance-tuned client inspired by Soar and Feather. Secure manifests, responsive modules
              and a polished HUD editor ship together for a premium experience.
            </p>

            <div class="flex flex-wrap items-center gap-3">
              <NuxtLink
                :to="downloadUrl"
                class="button-primary group bg-gradient-to-r from-accent-500 via-accent-600 to-[#2D1B69] text-sm font-semibold shadow-[0_24px_80px_-40px_rgba(127,95,255,0.8)]"
              >
                <Download class="h-4 w-4" />
                <span>Download</span>
                <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </NuxtLink>
              <button
                type="button"
                class="button-ghost group border-white/20 bg-white/5 text-sm font-semibold text-white"
                @click="scrollToSection('#features')"
              >
                <ArrowUpRight class="h-4 w-4 text-accent-200" />
                <span>Explore features</span>
              </button>
              <NuxtLink
                to="/discord"
                class="button-ghost border-accent-500/25 bg-accent-500/10 text-sm font-semibold text-accent-100 transition-all duration-300 hover:border-accent-500/40 hover:bg-accent-500/20"
              >
                <RadioTower class="h-4 w-4" />
                <span>Join Discord</span>
              </NuxtLink>
            </div>
          </div>

          <div
            class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-6 shadow-[0_25px_90px_-45px_rgba(127,95,255,0.4)] backdrop-blur-2xl"
          >
            <div class="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-br from-accent-500/25 via-transparent to-[#2D1B69]/30"></div>
            <div class="relative flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.2)]"></span>
                  <p class="text-xs uppercase tracking-[0.22em] text-white/60">Stable release</p>
                </div>
                <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/70">
                  Live
                </span>
              </div>
              <div
                class="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1f3d]/70 via-[#0f142c]/80 to-[#0a0e24]/90 p-8 shadow-lg shadow-black/30"
              >
                <div class="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,rgba(127,95,255,0.25),transparent_45%)]"></div>
                <img
                  src="/logo.png"
                  alt="ShindoClient logo"
                  class="relative h-28 w-auto sm:h-36 transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div class="grid gap-2 sm:grid-cols-2">
                <div class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
                  <span class="font-semibold text-white">Auto updates</span>
                  <p>Manifest refresh on launch</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
                  <span class="font-semibold text-white">Low latency</span>
                  <p>Adaptive packet scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="relative space-y-10">
        <div class="flex flex-col gap-4 text-center animate-on-scroll">
          <span class="section-label mx-auto bg-white/5 text-white/70">
            <Sparkles class="h-4 w-4 text-accent-300" />
            Feature Highlights
          </span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">The Ultimate Experience</h2>
          <p class="mx-auto max-w-2xl text-base text-white/65">
            Systems tuned for stability, security and modularity. Every feature is designed to enhance your gameplay without compromise.
          </p>
        </div>

        <div class="grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(feature, index) in featureHighlights"
            :key="feature.title"
            class="feature-card group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c1024]/70 via-[#0b0f20]/70 to-[#090c1a]/80 p-5 shadow-lg shadow-black/30 transition-all duration-500 ease-out animate-on-scroll hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-[0_25px_80px_-50px_rgba(127,95,255,0.7)]"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(162,107,255,0.35),transparent_38%)]"></div>
            <div class="relative flex items-center gap-3 pb-2 border-b border-white/10 transition-colors duration-500 group-hover:border-white/20">
              <div
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-600/20 text-accent-200 transition-all duration-500 group-hover:from-accent-500/40 group-hover:to-accent-600/35 group-hover:scale-110 group-hover:border-accent-500/30 group-hover:shadow-lg group-hover:shadow-accent-500/30"
              >
                <component
                  :is="feature.icon"
                  class="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                  :size="18"
                  :stroke-width="2"
                />
              </div>
              <h3 class="text-base font-semibold text-white leading-tight transition-colors duration-500 group-hover:text-accent-200">
                {{ feature.title }}
              </h3>
            </div>
            <p class="relative text-sm leading-relaxed text-white/60 text-pretty break-words transition-colors duration-500 group-hover:text-white/75">
              {{ feature.description }}
            </p>
            <ul v-if="feature.points" class="relative mt-2 space-y-1.5 text-[0.8rem] text-white/55 leading-relaxed">
              <li
                v-for="point in feature.points"
                :key="point"
                class="flex items-start gap-2 transition-all duration-500 group-hover:text-white/70"
              >
                <Check
                  class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-300 transition-all duration-500 group-hover:text-accent-200 group-hover:scale-110"
                  :stroke-width="2.5"
                />
                <span class="break-words leading-snug">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="showcase" class="relative space-y-8">
        <div class="flex flex-col gap-4 text-center animate-on-scroll">
          <span class="section-label mx-auto bg-white/5 text-white/70">Visual Showcase</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">Take a look at what ShindoClient has to offer</h2>
          <p class="mx-auto max-w-2xl text-base text-white/65">
            polished interfaces, customizable HUDs, and seamless performance enhancements all come together to elevate your Minecraft experience.
          </p>
        </div>

        <div
          class="glass-panel glass-panel--static relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0c1026]/85 via-[#090c1e]/85 to-[#060711]/92 p-0 shadow-[0_45px_120px_-70px_rgba(10,18,46,0.9)] animate-on-scroll"
          @mouseenter="stopCarousel"
          @mouseleave="startCarousel"
          role="region"
          aria-label="Visual showcase carousel"
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(127,95,255,0.2),transparent_45%)]"
          ></div>
          <div class="relative">
            <div
              class="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <article
                v-for="(slide, index) in showcaseSlides"
                :key="slide.title"
                class="flex w-full shrink-0 flex-col overflow-hidden md:flex-row"
                role="group"
                :aria-roledescription="'slide'"
                :aria-label="`${index + 1} of ${showcaseSlides.length}`"
              >
                <div class="relative w-full md:w-2/3">
                  <img
                    :src="slide.image"
                    :alt="slide.alt"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div class="flex w-full flex-col justify-center gap-3 p-6 md:w-1/3 md:p-8">
                  <span class="text-xs uppercase tracking-[0.35em] text-white/40">Showcase {{ index + 1 }}</span>
                  <h3 class="text-xl font-semibold text-white md:text-2xl">{{ slide.title }}</h3>
                  <p class="text-sm text-white/65">
                    {{ slide.description }}
                  </p>
                </div>
              </article>
            </div>

            <button
              type="button"
              class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#0b0f20]/80 p-3 text-white transition-all duration-300 hover:border-accent-500/40 hover:bg-[#0f1530]/90 hover:scale-110 active:scale-95"
              aria-label="Show previous slide"
              @click="prevSlide(); restartCarousel()"
            >
              <svg class="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#0b0f20]/80 p-3 text-white transition-all duration-300 hover:border-accent-500/40 hover:bg-[#0f1530]/90 hover:scale-110 active:scale-95"
              aria-label="Show next slide"
              @click="nextSlide(); restartCarousel()"
            >
              <svg class="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              v-for="(_, index) in showcaseSlides"
              :key="`dot-${index}`"
              type="button"
              class="h-2.5 w-2.5 rounded-full transition-all duration-300"
              :class="activeSlide === index ? 'bg-white scale-125' : 'bg-white/25 hover:bg-white/40 hover:scale-110'"
              :aria-label="`Go to slide ${index + 1}`"
              @click="setSlide(index); restartCarousel()"
            />
          </div>
        </div>
      </section>

      <section id="support" class="relative animate-on-scroll">
        <div class="mx-auto max-w-[1180px] flex flex-col gap-6">
          <div class="flex flex-col gap-4 text-center">
            <span class="section-label mx-auto bg-white/5 text-white/70">Support the project</span>
            <h2 class="font-display text-3xl text-white sm:text-4xl">Help us keep the project alive</h2>
          </div>
          <div
            class="support-card glass-panel group mx-auto w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-[#0b0f24]/80 p-6 shadow-lg shadow-black/20 transition-all duration-300 backdrop-blur-2xl lg:flex lg:flex-row lg:gap-8 lg:p-8 hover:border-accent-500/40 hover:shadow-[0_30px_90px_-60px_rgba(127,95,255,0.65)]"
          >
            <div class="flex flex-1 flex-col gap-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/25 to-accent-600/20 text-accent-200"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-white">Help us grow</h3>
                </div>
              </div>
              

              <ol class="mt-2 space-y-3 text-sm leading-relaxed text-white/70">
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    1
                  </span>
                  <span>
                    Donations help cover server costs, development time, and future feature expansions.
                  </span>
                </li>
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    2
                  </span>
                  <span>
                    Your support motivates continued improvements and helps maintain a high-quality experience for all users.
                  </span>
                </li>
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    3
                  </span>
                  <span>
                    Every contribution, big or small, makes a significant difference in sustaining the project.
                  </span>
                </li>
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    4
                  </span>
                  <span>
                    Join our community of supporters and be part of ShindoClient's journey towards excellence.
                  </span>
                </li>
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    5
                  </span>
                  <span>
                    Dont feel obligated to donate - your usage and feedback are already valuable contributions!
                  </span>
                </li>
                <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent-500/20 text-xs font-semibold text-accent-100">
                    6
                  </span>
                  <span>
                    Thank you for considering supporting ShindoClient and helping us create an exceptional Minecraft experience!
                  </span>
                </li>
              </ol>
            </div>
            <div class="flex-1 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-2 shadow-inner shadow-black/30 lg:max-w-md">
              <div class="overflow-hidden rounded-lg border border-white/10 bg-surface-elevated/40">
                <iframe
                  id="kofiframe"
                  src="https://ko-fi.com/mikidevahm/?hidefeed=true&widget=true&embed=true&preview=true"
                  style="border:0;width:100%;padding:0;background:transparent;"
                  height="500"
                  title="mikidevahm"
                  loading="lazy"
                  class="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap" class="relative space-y-8 animate-on-scroll">
        <div class="flex flex-col gap-3 text-center">
          <span class="section-label mx-auto bg-white/5 text-white/70">Upcoming Features</span>
          <h2 class="font-display text-3xl text-white sm:text-4xl">Next experiments shipping soon</h2>
          <p class="mx-auto max-w-3xl text-base text-white/65">
            {{ roadmapHeadline }}
          </p>
          <p v-if="roadmapUpdatedLabel" class="text-sm text-white/40">
            Last update - {{ roadmapUpdatedLabel }}
          </p>
        </div>
        <div
          v-if="roadmapFeatures.length"
          class="grid gap-4 md:grid-cols-2"
        >
          <article
            v-for="(feature, index) in roadmapFeatures"
            :key="feature.id"
            class="roadmap-card group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c1024]/70 via-[#0b0f20]/70 to-[#090c1a]/80 p-5 shadow-lg shadow-black/30 transition-all duration-500 ease-out animate-on-scroll hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-[0_25px_80px_-50px_rgba(127,95,255,0.7)]"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,rgba(127,95,255,0.3),transparent_42%)]"></div>
            <div class="relative flex items-start justify-between gap-2 pb-2 border-b border-white/10 transition-colors duration-500 group-hover:border-white/20">
              <h3 class="text-base font-semibold text-white leading-tight flex-1 transition-colors duration-500 group-hover:text-accent-200">
                {{ feature.title }}
              </h3>
              <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/70 whitespace-nowrap flex-shrink-0 transition-all duration-500 group-hover:border-accent-500/30 group-hover:bg-accent-500/10 group-hover:text-accent-200">
                {{ feature.status }}
              </span>
            </div>
            <p class="relative text-sm leading-relaxed text-white/60 text-pretty break-words flex-1 transition-colors duration-500 group-hover:text-white/75">
              {{ feature.description }}
            </p>
            <div class="relative space-y-1 mt-auto pt-1.5">
              <div class="flex items-center justify-between text-[0.75rem] font-medium text-white/50 transition-colors duration-500 group-hover:text-white/65">
                <span>Progress</span>
                <span class="text-accent-300 font-semibold transition-colors duration-500 group-hover:text-accent-200">{{ feature.progress }}%</span>
              </div>
              <div class="h-1 rounded-full bg-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/15">
                <div class="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-700 ease-out group-hover:from-accent-400 group-hover:to-accent-300 group-hover:shadow-sm group-hover:shadow-accent-400/50" :style="{ width: `${feature.progress}%` }"></div>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="glass-panel rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">
          Roadmap coming soon. Check back shortly!
        </div>
      </section>

      <section id="faq" class="relative animate-on-scroll">
        <div class="mx-auto flex max-w-[1180px] flex-col gap-10">
          <div class="flex flex-col gap-4 text-center">
            <span class="section-label mx-auto bg-white/5 text-white/70">FAQ</span>
            <h2 class="font-display text-3xl text-white sm:text-4xl">All the details before you drop into queue</h2>
          </div>
          <div class="grid items-start gap-4 md:grid-cols-2">
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="glass-panel glass-panel--static glass-panel--loose rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 transition-all duration-300 hover:border-accent-500/30 hover:scale-[1.02]"
              :style="`transition-delay: ${index * 0.1}s`"
            >
              <button
                type="button"
                class="flex w-full items-start justify-between gap-4 text-left"
                :aria-expanded="isFaqOpen(index)"
                :aria-controls="`faq-panel-${index}`"
                @click="toggleFaq(index)"
                @keydown.enter.prevent="toggleFaq(index)"
                @keydown.space.prevent="toggleFaq(index)"
              >
                <span class="text-base font-semibold text-white">{{ faq.question }}</span>
                <span class="mt-1 text-white/40">
                  <svg v-if="isFaqOpen(index)" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
              <Transition
                enter-active-class="duration-[1200ms] transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[320px] opacity-100"
                leave-active-class="duration-450 transition-all ease-[cubic-bezier(0.4,0,0.2,1)]"
                leave-from-class="max-h-[320px] opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div
                  v-if="isFaqOpen(index)"
                  :id="`faq-panel-${index}`"
                  class="mt-4 max-h-[320px] overflow-hidden text-sm text-white/65"
                >
                  {{ faq.answer }}
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Component } from 'vue'
import heroMenu from 'public/screenshots/menu.webp'
import heroHud from 'public/screenshots/huds.webp'
import heroMods from 'public/screenshots/modmenu.webp'
import heroBackgrounds from 'public/screenshots/backgrounds.webp'
import { scrollToHash } from '@/scripts/scrollTo'
import { useClientMeta } from '@/composables/useClientMeta'
import { useDevRoadmap } from '@/composables/useDevRoadmap'
import { useScrollReveal } from '@/composables/useScrollReveal'
import {
  ArrowUpRight,
  Check,
  Download,
  GlobeLock,
  MonitorSmartphone,
  Music,
  RadioTower,
  ShieldCheck,
  Sparkles,
  UserRoundPen
} from 'lucide-vue-next'

const runtimeConfig = useRuntimeConfig()
const { data: clientMeta } = useClientMeta()
const { data: devRoadmap } = useDevRoadmap()

const downloadUrl = computed(() => clientMeta.value?.updatelink ?? (runtimeConfig.public.downloadUrl as string))
const discordUrl = computed(() => clientMeta.value?.discord ?? (runtimeConfig.public.discordUrl as string))
const versionLabel = computed(() =>
  clientMeta.value?.latestversion ? `Build ${clientMeta.value.latestversion}` : 'Build 5.0'
)

const roadmapFeatures = computed(() => devRoadmap.value?.features ?? [])
const roadmapHeadline = computed(() => devRoadmap.value?.headline ?? '')
const roadmapUpdatedLabel = computed(() => {
  const isoDate = devRoadmap.value?.lastUpdated
  if (!isoDate) return ''
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
})

type FeatureHighlight = {
  title: string
  description: string
  icon: Component
  points?: string[]
}

const featureHighlights = [
  {
    title: 'Spotify Integration',
    description:
      'Link Spotify straight into the client so sessions broadcast what you are listening to alongside your gameplay.',
    icon: Music,
    points: ['Native controls expose track, artist and playback state without leaving the HUD.']
  },
  {
    title: 'Profile System',
    description:
      'Create and sync client profiles that bundle mods, cosmetics and keybinds for every playstyle.',
    icon: UserRoundPen,
    points: [
      'Swap between ranked, practice and creator presets in a single click.',
      'Automatic profile switching when entering favourite servers.'
    ]
  },
  {
    title: 'Network Tweaker',
    description:
      'Optimize network performance with automatic socket tuning and adaptive packet scheduling.',
    icon: GlobeLock,
    points: ['Auto-adjusts buffers and TCP windows for better responsiveness.', 'Aggressive presets for competitive gameplay.']
  },
  {
    title: 'Security Shield',
    description:
      'Hardening layer that patches legacy Minecraft vulnerabilities and guards against malicious packets.',
    icon: ShieldCheck,
    points: ['Runtime checks neutralise known crash exploits and remote code execution chains.']
  },
  {
    title: 'Multi-platform Support',
    description:
      'Unified launcher experience across Windows, macOS and Linux with native rendering paths.',
    icon: MonitorSmartphone,
    points: ['Automatic updates deliver identical builds no matter where you login.']
  }
] satisfies FeatureHighlight[]

const showcaseSlides = [
  {
    title: 'Home',
    description:
      'The redesigned landing screen blends premium gradients with actionable CTAs, keeping download links and presence indicators one glance away.',
    image: heroMenu,
    alt: 'ShindoClient home screen'
  },
  {
    title: 'Modular HUD Editor',
    description:
      'Drag-and-drop widgets, precision grid snapping and animation presets let you tailor combat, scoreboards and utilities in seconds.',
    image: heroHud,
    alt: 'Modular HUD showcase'
  },
  {
    title: 'Module Browser',
    description:
      'Filter, favourite and stage modules with instant search. Profiles keep competitive, casual and recording setups one click away.',
    image: heroMods,
    alt: 'Module browser interface'
  },
  {
    title: 'Dynamic Backgrounds',
    description:
      'Adaptive gradients and cinematic renders that react to presence and account state for a premium launcher feel.',
    image: heroBackgrounds,
    alt: 'Dynamic launcher backgrounds'
  }
] as const

const upgradeSteps = [
  '1. Download the latest manifest.',
  '2. Import into your launcher or custom bootstrap.',
  '3. Sign in and let the gateway sync your roles.'
]

const faqs = [
  {
    question: 'Is ShindoClient legal on major networks?',
    answer:
      'Yes. ShindoClient focuses on performance optimisations, QoL modules and visuals. No unfair combat advantages are shipped by default and key systems are hot-pluggable to comply with server rules.'
  },
  {
    question: 'Can server owners request certain mods be disabled?',
    answer:
      'Yes. We cooperate with network staff and can remotely disable or blacklist specific modules to align with their policies. Reach out with the required restrictions and we will mirror them on the client.'
  },
  {
    question: 'Does the launcher auto-update?',
    answer:
      'Manifest updates are pulled on launch and on-demand from GitHub. Manual refresh controls ensure you can stay on a specific build or jump forward as soon as a new release lands.'
  },
  {
    question: 'Where can I get support or report issues?',
    answer:
      'Hop into the Discord to share logs, request features or escalate bugs directly with maintainers. GitHub issues stay open for reproducible defects and community contributions.'
  }
]

const openFaqs = ref<number[]>([])

const toggleFaq = (index: number) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter((item) => item !== index)
    return
  }
  openFaqs.value = [...openFaqs.value, index]
}

const isFaqOpen = (index: number) => openFaqs.value.includes(index)

const scrollToSection = (hash: string) => scrollToHash(hash)

const activeSlide = ref(0)
const totalSlides = computed(() => showcaseSlides.length)
const AUTOPLAY_INTERVAL = 7000
let carouselTimer: ReturnType<typeof setInterval> | null = null

const setSlide = (index: number) => {
  if (!totalSlides.value) return
  const bounded = ((index % totalSlides.value) + totalSlides.value) % totalSlides.value
  activeSlide.value = bounded
}

const nextSlide = () => setSlide(activeSlide.value + 1)
const prevSlide = () => setSlide(activeSlide.value - 1)

const startCarousel = () => {
  if (carouselTimer || totalSlides.value <= 1) return
  carouselTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % totalSlides.value
  }, AUTOPLAY_INTERVAL)
}

const stopCarousel = () => {
  if (!carouselTimer) return
  clearInterval(carouselTimer)
  carouselTimer = null
}

const restartCarousel = () => {
  stopCarousel()
  startCarousel()
}

onMounted(() => {
  startCarousel()
  const { observeElements } = useScrollReveal()
  observeElements('.animate-on-scroll')
})
onBeforeUnmount(stopCarousel)

useSeoMeta({
  title: 'ShindoClient - Modern Minecraft 1.8.9 Client',
  description:
    'Experience ShindoClient, a modern Minecraft 1.8.9 client with secure mods & customizations, modular HUD and performance upgrades.',
  ogTitle: 'ShindoClient - Modern Minecraft 1.8.9 Client',
  ogDescription:
    'Modular UI and modern visuals. Download ShindoClient for a premium 1.8.9 experience.',
  ogImage: '/embed.png',
  ogUrl: 'https://shindoclient.com',
  twitterCard: 'summary_large_image'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'ShindoClient',
            description:
              'A modern, open-source Minecraft 1.8.9 PvP client with a modern design, security-focused architecture and cross-platform support.',
            url: 'https://shindoclient.com',
            downloadUrl: downloadUrl.value,
            applicationCategory: ['GameApplication', 'EntertainmentApplication'],
            operatingSystem: ['Windows', 'macOS', 'Linux'],
            softwareVersion: clientMeta.value?.latestversion ?? '5.0.0',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            screenshot: [
              'https://shindoclient.com/screenshots/menu.webp',
              'https://shindoclient.com/screenshots/huds.webp',
              'https://shindoclient.com/screenshots/modmenu.webp'
            ]
          },
          {
            '@type': 'Organization',
            name: 'ShindoClient',
            url: 'https://shindoclient.com',
            logo: 'https://shindoclient.com/logo.png'
          }
        ]
      })
    }
  ]
})
</script>
