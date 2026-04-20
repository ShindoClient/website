export function headerOffset() {
  const header = document.querySelector<HTMLElement>('.site-header')
  return header ? header.getBoundingClientRect().height + 16 : 96
}

export async function scrollToHash(hash: string, attempts = 10, delayMs = 50) {
  if (!hash || hash === '#') {
    return false
  }

  for (let index = 0; index < attempts; index += 1) {
    const element = document.querySelector<HTMLElement>(hash)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset()
      window.scrollTo({ top, behavior: 'smooth' })
      return true
    }

    await new Promise((resolve) => window.setTimeout(resolve, delayMs))
  }

  return false
}
