<template>
  <div
      class="card"
      ref="cardEl"
      @mousemove="onMove"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
  >
    <div class="icon" v-if="img"><img :src="img" :alt="title" /></div>
    <h3 class="title">{{ title }}</h3>
    <p class="desc"><slot /></p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{ title: string; img?: string }>()
const cardEl = ref<HTMLElement | null>(null)

const onMove = (e: MouseEvent) => {
  const el = cardEl.value; if (!el) return
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
  el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
}
const onEnter = () => cardEl.value?.classList.add('hovering')
const onLeave = () => {
  const el = cardEl.value; if (!el) return
  el.classList.remove('hovering')
  el.style.setProperty('--mouse-x', '50%')
  el.style.setProperty('--mouse-y', '50%')
}

onMounted(() => {
  const el = cardEl.value; if (!el) return
  el.classList.add('reveal') // estado inicial
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // usa índice do elemento no pai p/ stagger
        const index = Array.from(el.parentElement?.children || []).indexOf(el)
        el.style.transitionDelay = `${Math.max(0, index) * 10}ms`
        el.classList.add('visible')
        io.unobserve(el)
      }
    })
  }, { threshold: 0.1 })
  io.observe(el)
})
</script>

<style scoped>
.card{
  --mouse-x: 50%;
  --mouse-y: 50%;
  background: var(--bg-card);
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  padding:1.5rem;
  border-radius:25px;
  width:300px; /* ajuste se quiser */
  text-align:center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position:relative;
  overflow:hidden;
  transition: transform 0.6s ease, opacity 0.6s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}

.card:nth-child(1) {
  transition-delay: 0.2s;
}

.card:nth-child(2) {
  transition-delay: 0.4s;
}

.card:nth-child(3) {
  transition-delay: 0.6s;
}

/* Glow que segue o mouse */
.card::before{
  content:'';
  position:absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle,
    rgba(102, 3, 252, 0.30) 0%,
    rgba(102, 3, 252, 0.10) 40%,
    transparent 70%
  );
  border-radius: 50%;
  top: var(--mouse-y);
  left: var(--mouse-x);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Levanta e dá leve zoom no hover */
.card:hover {
  transform: translateY(-5px) scale(1.05) !important;
  box-shadow: 0 20px 30px rgba(102, 3, 252, 0.15);
}

.card:hover::before {
  opacity: 1;
}
/* Ícones sempre brancos */
.icon img {
  color : white;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  transition: transform 0.4s ease;
  filter: brightness(0) invert(1); /* Add this line to make SVGs white */
}

.card:hover .icon img {
  transform: scale(1.05);
  filter: brightness(0) invert(1); /* Add this line to keep SVGs white on hover */
}
.title{
  color: var(--secondary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}
.card:hover .title{ color: var(--primary); }

.desc{
  color: var(--text);
  position: relative;
  z-index: 1;
}

@media (prefers-reduced-motion: reduce){
  .card, .card::before, .icon img, .title{ transition:none }
}

.card.reveal{
  opacity:0;
  transform: translateY(12px) scale(.99);
}
.card.visible{
  opacity:1;
  transform: none;
  transition: opacity .25s ease, transform .25s cubic-bezier(.22,.61,.36,1);
}

</style>
