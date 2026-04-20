<script lang="ts">
  import { reveal } from '$lib/reveal'

  let { title, img, children }: { title: string; img?: string; children?: import('svelte').Snippet } = $props()

  let cardEl = $state<HTMLElement | null>(null)

  function onMove(event: MouseEvent) {
    if (!cardEl) return
    const rect = cardEl.getBoundingClientRect()
    cardEl.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    cardEl.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }

  function onEnter() {
    cardEl?.classList.add('hovering')
  }

  function onLeave() {
    if (!cardEl) return
    cardEl.classList.remove('hovering')
    cardEl.style.setProperty('--mouse-x', '50%')
    cardEl.style.setProperty('--mouse-y', '50%')
  }
</script>

<div bind:this={cardEl} class="card" onmousemove={onMove} onmouseenter={onEnter} onmouseleave={onLeave} role="presentation" use:reveal>
  {#if img}
    <div class="icon"><img alt={title} src={img} /></div>
  {/if}
  <h3 class="title">{title}</h3>
  <p class="desc">{@render children?.()}</p>
</div>

<style>
  .card {
    --mouse-x: 50%;
    --mouse-y: 50%;
    background: var(--bg-card);
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 1.5rem;
    border-radius: 25px;
    width: 300px;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    transition: transform 150ms ease-out, opacity 150ms ease-out, box-shadow 150ms ease-out;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(127, 95, 255, 0.3) 0%, rgba(127, 95, 255, 0.1) 40%, transparent 70%);
    border-radius: 50%;
    top: var(--mouse-y);
    left: var(--mouse-x);
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 150ms ease-out;
  }

  .card:hover {
    transform: translateY(-4px) scale(1.02) !important;
    box-shadow: 0 20px 30px rgba(127, 95, 255, 0.15);
  }

  .card:hover::before {
    opacity: 1;
  }

  .icon img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    transition: transform 150ms ease-out;
    filter: brightness(0) invert(1);
  }

  .card:hover .icon img {
    transform: scale(1.05);
  }

  .title {
    color: var(--secondary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    transition: color 150ms ease-out;
  }

  .card:hover .title {
    color: var(--primary);
  }

  .desc {
    color: var(--text);
    position: relative;
    z-index: 1;
  }
</style>
