<template>
  <div v-if="show" class="loader-wrapper" :class="{ 'fade-out': fading }">
    <div class="loader">
      <img src="@/public/logo.png" alt="Loading..." />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const show = ref(true)
const fading = ref(false)

onMounted(() => {
  const done = () => {
    // inicia fade
    fading.value = true
    // remove do DOM após a transição
    setTimeout(() => (show.value = false), 400)
    window.removeEventListener('load', done)
  }
  window.addEventListener('load', done)
})
</script>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-dark) 0%, #151522 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s, visibility 0.5s;
  flex-direction: column;
  gap: 20px;
}

.loader {
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
}

.loader::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 20px;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  bottom: -20px;
  filter: blur(10px);
  opacity: 0.3;
  animation: shadow 2.5s ease-in-out infinite;
  transform-origin: center;
}

.loader img {
  width: 80px;
  height: 80px;
  position: relative;
  animation: glide 2.5s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(133, 57, 255, 0.4));
}

@keyframes glide {
  0% {
    transform: translateY(0) rotateY(0);
  }
  25% {
    transform: translateY(-20px) rotateY(15deg);
  }
  50% {
    transform: translateY(0) rotateY(0);
  }
  75% {
    transform: translateY(-20px) rotateY(-15deg);
  }
  100% {
    transform: translateY(0) rotateY(0);
  }
}

@keyframes shadow {
  0%, 100% {
    transform: scaleX(1);
    opacity: 0.3;
  }
  50% {
    transform: scaleX(0.7);
    opacity: 0.15;
  }
}

.loader-wrapper.fade-out {
  opacity: 0;
  visibility: hidden;
}
</style>