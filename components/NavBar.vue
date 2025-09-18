<template>
  <header class="header">
    <nav class="navbar">
      <a class="logo" href="/">
        <img :src="logo" alt="ShindoClient Logo" />
      </a>

      <button class="hamburger" :class="{active: menu}" @click="menu = !menu" aria-label="Menu">
        <span/><span/><span/>
      </button>

      <ul class="nav-links" :class="{ active: menu }">
        <li><RouterLink :to="{ path: '/', hash: '#hero' }"     @click="close">Home</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#features' }" @click="close">Features</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#about' }"    @click="close">About</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#gallery' }"  @click="close">Gallery</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#faq' }"      @click="close">FAQ</RouterLink></li>
        <li><RouterLink to="/download" @click="close">Download</RouterLink></li>
        <li><RouterLink to="/discord"  @click="close">Discord</RouterLink></li>
      </ul>

    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logo from 'public/logo.png'
import {scrollToHash} from "@/scripts/scrollTo";

const router = useRouter()
const route  = useRoute()
const menu = ref(false)
const close = () => (menu.value = false)

async function go(hash: string) {
  const onHome = route.path === '/'
  close()
  if (!onHome) {
    await router.push({ path: '/', hash })
    await scrollToHash(hash)
  } else {
    await scrollToHash(hash)
    router.replace({ hash })
  }
}
</script>

<style scoped>
.header{
  position:fixed; inset-inline:0; top:16px; z-index:1000;
  display:flex; justify-content:center;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: auto;
  background-color: rgba(41, 41, 56, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  overflow: visible;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 1rem 1.5rem;
}
.navbar:hover {
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
}

.logo {
  color: var(--secondary);
  font-size: 1.5rem;
  font-weight: 700;
  height: 40px;
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.nav-links li a,
.nav-links li .nav-btn{
  color: rgba(255,255,255,.7);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease;
  display: flex; align-items: center; justify-content: center;
  background: none; border: 0; cursor: pointer; font: inherit;
}

.nav-links li a:hover,
.nav-links li .nav-btn:hover{
  color: #fff;
  transform: translateY(-1px);
}

/* no @media (max-width: 700px), onde você estiliza '.nav-links li a', duplique para '.nav-btn' também: */

.hamburger {
  display: none;
  cursor: pointer;
  padding: 10px;
  background: transparent;
  border: none;
  z-index: 2000;
}

.hamburger span {
  display: block;
  width: 30px;
  height: 2px;
  margin: 6px 0;
  background: var(--secondary);
  transition: transform 0.4s ease, opacity 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 700px) {

  .hamburger {
    display: block;
  }

  .navbar {
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding-bottom: 1rem;
  }

  .navbar {
    position: relative;
  }

  .navbar::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
  }

  .logo {
    position: relative;
    z-index: 10;
  }

  .hamburger {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    z-index: 10;
    margin: 0;
    padding: 5px;
  }

  .nav-links li a,
  .nav-links li .nav-btn{
    padding: 0.8rem 1rem;
    font-size: 1.1rem;
    border-radius: 25px;
    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0.25rem 0;
  }
  .nav-links li a:hover,
  .nav-links li .nav-btn:hover{
    background-color: rgba(255, 255, 255, 0.166);
    border-color: rgba(255, 255, 255, 0.253);
    transform: translateY(-2px);
  }

  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-top: 0rem;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /* Active state - expand the nav links */
  .nav-links.active {
    max-height: 400px;
    opacity: 1;
    margin-top: 1.5rem;
    padding-bottom: 1rem;
  }

  /* Navigation Items Animation */
  .nav-links li {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.4s ease;
  }

  /* Active State Styles */
  .nav-links.active li {
    opacity: 1;
    transform: translateY(0);
  }

  /* Staggered Animation Delays */
  .nav-links.active li:nth-child(1) { transition-delay: 0.1s; }
  .nav-links.active li:nth-child(2) { transition-delay: 0.2s; }
  .nav-links.active li:nth-child(3) { transition-delay: 0.3s; }
  .nav-links.active li:nth-child(4) { transition-delay: 0.25s; }
  .nav-links.active li:nth-child(5) { transition-delay: 0.3s; }
  .nav-links.active li:nth-child(6) { transition-delay: 0.35s; }

  /* Mobile Menu Items */
  .nav-links li {
    width: 100%;
  }
}
</style>


