<template>
  <div class="faq-item" :class="{ open: open }" ref="rootEl">
    <button
        class="faq-question"
        :aria-expanded="open.toString()"
        @click="toggle"
        @keydown.enter.prevent="toggle"
        @keydown.space.prevent="toggle"
    >
      <span class="q"><slot name="question" /></span>
      <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
    </button>

    <!-- 🔥 importante: adiciona .active e mantém animação por height -->
    <div
        ref="answerEl"
        class="faq-answer"
        :class="{ active: open }"
        :style="{ height: open ? height + 'px' : '0px' }"
    >
      <div class="inner" :class="{ show: open, hide: closing }">
        <slot name="answer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed, withDefaults } from 'vue'


// modelValue é OPCIONAL (funciona controlado ou não controlado)
const props = withDefaults(defineProps<{ modelValue?: boolean }>(), { modelValue: undefined })
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()

const localOpen = ref(false)
// se o pai passou v-model, usamos ele; senão usamos localOpen
const open = computed(() => (props.modelValue ?? localOpen.value))

const answerEl = ref<HTMLElement | null>(null)
const rootEl = ref<HTMLElement | null>(null)
const height = ref(0)


const closing = ref(false)

const measure = () => {
  if (answerEl.value) height.value = answerEl.value.scrollHeight
}

function setOpen(v: boolean) {
  if (props.modelValue === undefined) {
    localOpen.value = v
  } else {
    emit('update:modelValue', v)
  }
}

const FADE_MS = 260;   // duração do fade do texto (combine com CSS)
const HEIGHT_MS = 350; // duração da transição de height (combine com CSS)

function toggle() {
  if (open.value) {
    // —— FECHANDO ——
    // 1) travar altura atual pra evitar “pulo”
    if (answerEl.value) height.value = answerEl.value.scrollHeight;

    // 2) inicia fade-out do texto
    closing.value = true;

    // 3) dá um frame pro browser aplicar a altura e a classe
    requestAnimationFrame(() => {
      // 4) só após o fade, colapsa a altura e fecha
      setTimeout(() => {
        // mantém .active até agora (open ainda true), então fecha:
        setOpen(false);
        // agora anima height -> 0
        height.value = 0;

        // 5) limpa o estado de closing após a animação de height
        setTimeout(() => { closing.value = false }, HEIGHT_MS);
      }, FADE_MS);
    });
  } else {
    // —— ABRINDO ——
    setOpen(true);
    nextTick(measure);
  }
}

function onDocClick(e: MouseEvent) {
  if (!open.value) return;
  const el = rootEl.value;
  if (el && !el.contains(e.target as Node)) {
    if (answerEl.value) height.value = answerEl.value.scrollHeight;
    closing.value = true;
    requestAnimationFrame(() => {
      setTimeout(() => {
        setOpen(false);
        height.value = 0;
        setTimeout(() => { closing.value = false }, HEIGHT_MS);
      }, FADE_MS);
    });
  }
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure)
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', measure)
  document.removeEventListener('click', onDocClick)
})

watch(open, () => nextTick(measure))
</script>

<style scoped>
/* seu CSS, com dois ajustes:
   1) usa var(--secondary) como fallback de --primary-secondary
   2) .faq-answer.active existe agora e será aplicada
*/
.faq-item {
  background-color: var(--bg-card);
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
  border-radius: 20px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(133, 57, 255, 0.15);
  border-color: rgba(133, 57, 255, 0.3);
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  color: var(--secondary);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}
.faq-question:hover { color: var(--primary); background-color: rgba(133, 57, 255, 0.05); }
.faq-question::before {
  content: '';
  position: absolute; left: 0; top: 0; height: 100%; width: 4px;
  background: linear-gradient(45deg, var(--primary), var(--primary-secondary, var(--secondary)));
  transform: scaleY(0); transition: transform 0.3s ease; transform-origin: bottom;
}
.faq-question:hover::before { transform: scaleY(1); }

.faq-icon { transition: transform 0.3s ease; flex-shrink: 0; margin-left: 1rem; stroke: var(--text); }
.faq-question[aria-expanded="true"] .faq-icon { transform: rotate(180deg); stroke: var(--primary); }
.faq-question[aria-expanded="true"] { color: var(--primary); background-color: rgba(133, 57, 255, 0.08); }
.faq-question[aria-expanded="true"]::before { transform: scaleY(1); }

/* container da resposta continua animando height */
.faq-answer{
  height: 0;
  overflow: hidden;
  transition: height 350ms cubic-bezier(0.4, 0, 0.2, 1); /* HEIGHT_MS */
  background-color: rgba(0, 0, 0, 0.2);
}
.faq-answer.active{
  padding: 1rem 2rem 2rem 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}


.faq-answer p {
  color: var(--text);
  line-height: 1.7;
  margin: 1rem 0 0 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease 0.1s;
}
.faq-answer.active p { opacity: 1; transform: translateY(0); }


/* texto interno com fade/slide */
.faq-answer .inner{
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 260ms ease, transform 260ms ease; /* FADE_MS */
  will-change: opacity, transform;
}
.faq-answer .inner.show{  /* abrindo */
  opacity: 1;
  transform: none;
}
.faq-answer .inner.hide{  /* fechando */
  opacity: 0;
  transform: translateY(-8px);
}

/* (Opcional) leve stagger nos filhos do answer */
.faq-answer .inner.show > *:nth-child(1){ transition-delay: .02s }
.faq-answer .inner.show > *:nth-child(2){ transition-delay: .05s }
.faq-answer .inner.show > *:nth-child(3){ transition-delay: .08s }
.faq-answer .inner.show > *:nth-child(4){ transition-delay: .11s }

@media (max-width: 800px) {
  .faq { padding: 3rem 1.5rem; margin: 1rem 1rem 2rem 1rem; }
  .faq h2 { font-size: 2rem; margin-bottom: 2rem; }
  .faq-question { padding: 1.2rem 1.5rem; font-size: 1rem; }
  .faq-answer.active { padding: 0 1.5rem 1.2rem 1.5rem; }
  .faq-icon { margin-left: 0.5rem; }
}
</style>
