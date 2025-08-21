<template>
  <main class="main">
    <section class="hero">
      <h1>Discord</h1>
      <div class="redirect-text">
        <p>Redirecting to Discord<span class="dots"></span></p>
        <noscript>
          <p>
            If not redirected automatically,
            <a href="https://discord.gg/uU56tvtXMU" style="color: var(--primary-color)">click here</a>
          </p>
        </noscript>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    window.location.href = 'https://discord.gg/uU56tvtXMU'
  }, 500)
})
</script>

<style scoped>
.redirect-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.dots::after {
  content: '';
  animation: dots 2s steps(4, end) infinite;
}
@keyframes dots {
  0%, 20% { content: ''; }
  40% { content: '.'; }
  60% { content: '..'; }
  80% { content: '...'; }
}
</style>
