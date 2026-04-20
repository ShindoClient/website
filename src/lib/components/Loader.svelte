<script lang="ts">
  import { onMount } from 'svelte'

  let show = $state(true)
  let fading = $state(false)

  onMount(() => {
    const done = () => {
      fading = true
      window.setTimeout(() => {
        show = false
      }, 400)
      window.removeEventListener('load', done)
    }

    window.addEventListener('load', done)

    return () => {
      window.removeEventListener('load', done)
    }
  })
</script>

{#if show}
  <div class:fade-out={fading} class="loader-wrapper">
    <div class="loader">
      <img alt="Loading..." src="/logo.png" />
    </div>
  </div>
{/if}

<style>
  .loader-wrapper {
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, var(--bg-dark) 0%, #151522 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s, visibility 0.5s;
  }

  .loader {
    position: relative;
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader img {
    width: 80px;
    height: 80px;
    animation: glide 2.5s ease-in-out infinite;
  }

  .fade-out {
    opacity: 0;
    visibility: hidden;
  }

  @keyframes glide {
    0% { transform: translateY(0) rotateY(0); }
    25% { transform: translateY(-20px) rotateY(15deg); }
    50% { transform: translateY(0) rotateY(0); }
    75% { transform: translateY(-20px) rotateY(-15deg); }
    100% { transform: translateY(0) rotateY(0); }
  }
</style>
