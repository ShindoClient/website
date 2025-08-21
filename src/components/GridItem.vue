<template>
  <div class="grid-item">
    <img :src="src" :alt="alt" loading="lazy" />
    <div class="grid-overlay">
      <h3 class="o-title"><slot name="title" /></h3>
      <p class="o-sub"><slot name="subtitle" /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt?: string }>()
</script>

<style scoped>
.grid-item{
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  background: #0c0d16;
  aspect-ratio: 16 / 9;
}

.grid-item img{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover; display:block;
  transition: transform .35s ease;
}

/* overlay some + slide-up no hover */
.grid-overlay{
  position:absolute; left:0; right:0; bottom:0;
  padding:16px;
  color:#fff;
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,.62) 100%);
  transform: translateY(100%);
  opacity:0;
  transition: transform .28s ease, opacity .28s ease;
}

.grid-item:hover img{ transform: scale(1.04) }
.grid-item:hover .grid-overlay{
  transform: translateY(0%);
  opacity:1;
}

.o-title{ margin:0 0 4px; font-weight:800 }
.o-sub{ margin:0; opacity:.92 }

@media (prefers-reduced-motion: reduce){
  .grid-item img, .grid-overlay{ transition:none }
}

.grid-item.reveal{
  opacity:0;
  transform: translateY(12px) scale(.99);
}
.grid-item.visible{
  opacity:1;
  transform:none;
  transition: opacity .25s ease, transform .25s cubic-bezier(.22,.61,.36,1);
}
</style>
