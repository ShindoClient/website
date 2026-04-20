export function reveal(node: HTMLElement, options?: IntersectionObserverInit) {
  if (typeof window === 'undefined') {
    return {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }
  )

  observer.observe(node)

  return {
    destroy() {
      observer.unobserve(node)
      observer.disconnect()
    }
  }
}
