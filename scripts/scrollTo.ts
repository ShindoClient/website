// src/scripts/scrollTo.ts
import { nextTick } from 'vue'

function headerOffset() {
    const header = document.querySelector<HTMLElement>('.header')
    return header ? header.getBoundingClientRect().height + 10 : 80
}

export async function scrollToHash(hash: string, attempts = 10, delayMs = 50) {
    if (!hash || hash === '#') return
    await nextTick()

    for (let i = 0; i < attempts; i++) {
        const el = document.querySelector(hash) as HTMLElement | null
        if (el) {
            const offset = headerOffset()
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
            return true
        }
        // espera o próximo tick / montagem de DOM
        await new Promise((r) => setTimeout(r, delayMs))
    }
    return false
}