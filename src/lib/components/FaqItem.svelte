<script lang="ts">
  import { cubicOut, expoOut } from 'svelte/easing'
  import { fade, slide } from 'svelte/transition'

  let {
    question,
    answer,
    open = false,
    onToggle
  }: {
    question: string
    answer: string
    open?: boolean
    onToggle?: () => void
  } = $props()
</script>

<div class:open class="faq-item">
  <button aria-expanded={open} class="faq-question" onclick={onToggle} type="button">
    <span class="q">{question}</span>
    <svg aria-hidden="true" class="faq-icon" height="20" viewBox="0 0 24 24" width="20">
      <polyline fill="none" points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2"></polyline>
    </svg>
  </button>

  {#if open}
    <div
      class="faq-answer active"
      in:slide={{ axis: 'y', duration: 340, easing: cubicOut }}
      out:slide={{ axis: 'y', duration: 240, easing: expoOut }}
    >
      <div
        class="inner show"
        in:fade={{ duration: 220 }}
        out:fade={{ duration: 140 }}
      >
        <p>{answer}</p>
      </div>
    </div>
  {/if}
</div>

<style>
  .faq-item {
    background-color: var(--bg-card);
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition:
      border-color 0.28s ease,
      box-shadow 0.32s ease,
      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .faq-item:hover,
  .faq-item.open {
    transform: translateY(-2px);
    border-color: rgba(127, 95, 255, 0.22);
    box-shadow: 0 18px 44px -30px rgba(127, 95, 255, 0.32);
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
    transition:
      color 0.25s ease,
      background-color 0.25s ease;
  }

  .faq-question:hover,
  .open .faq-question {
    color: rgb(var(--accent-200));
  }

  .faq-answer.active {
    padding: 0 2rem 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.2);
  }

  .faq-icon {
    transition:
      transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
      color 0.25s ease;
  }

  .open .faq-icon {
    transform: rotate(180deg) scale(1.06);
    color: rgb(var(--accent-300));
  }

  .inner {
    padding-top: 1rem;
  }

  .inner p {
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }
</style>
