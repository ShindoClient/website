<script lang="ts">
  let { src, alt = '', title, subtitle }: { src: string; alt?: string; title?: string; subtitle?: string } = $props()
</script>

<div class="grid-item">
  <img {alt} {src} loading="lazy" />
  <div class="grid-overlay">
    <h3 class="o-title">{title}</h3>
    <p class="o-sub">{subtitle}</p>
  </div>
</div>

<style>
  .grid-item {
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    background: #0c0d16;
    aspect-ratio: 16 / 9;
  }

  .grid-item img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }

  .grid-overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    color: #fff;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.62) 100%);
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.28s ease, opacity 0.28s ease;
  }

  .grid-item:hover img {
    transform: scale(1.04);
  }

  .grid-item:hover .grid-overlay {
    transform: translateY(0%);
    opacity: 1;
  }
</style>
