export const useScrollReveal = () => {
  const observeElements = (selector: string = '.animate-on-scroll', options?: IntersectionObserverInit) => {
    if (typeof window === 'undefined') return

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Opcional: parar de observar após aparecer
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }

  const observeElement = (element: HTMLElement | null, options?: IntersectionObserverInit) => {
    if (!element || typeof window === 'undefined') return

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(element)

    return () => observer.unobserve(element)
  }

  return {
    observeElements,
    observeElement
  }
}

