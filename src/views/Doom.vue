<!-- Doom.vue -->
<template>
  <div class="ratio">
    <iframe
        src="https://archive.org/embed/doom-shareware-v1.666"
        frameborder="0"
        allowfullscreen
        scrolling="no"
        referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<script setup lang="ts">
// nada necessário aqui :)
</script>

<style scoped>
/* Mantém o iframe responsivo (4:3) */
.ratio {
  position: relative;
  width: 100%;
  padding-top: 75%;
}
.ratio > iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
