<template>
  <div id="app">
    <Loader />
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
</script>
