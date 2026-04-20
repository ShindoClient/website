import { useAsyncData } from '#app'

type RoadmapFeatureResponse = {
  id?: string
  title?: string
  description?: string
  progress?: number
  status?: string
}

export type RoadmapFeature = {
  id: string
  title: string
  description: string
  progress: number
  status: string
}

type DevRoadmapResponse = {
  headline?: string
  lastUpdated?: string
  features?: RoadmapFeatureResponse[]
}

export type DevRoadmap = {
  headline: string
  lastUpdated: string
  features: RoadmapFeature[]
}

const clampProgress = (value: number) => Math.max(0, Math.min(100, Math.round(value)))

const createFallbackRoadmap = (): DevRoadmap => ({
  headline: 'Prototyping cross-platform modules and backend services to keep ShindoClient future-proof.',
  lastUpdated: '2025-11-18T00:00:00.000Z',
  features: [
    {
      id: 'error-1',
      title: 'Error!',
      description: 'This is An Error',
      progress: 0,
      status: '???'
    },
    {
      id: 'error-2',
      title: 'Error!',
      description: 'This is An Error',
      progress: 0,
      status: '???'
    },
    {
      id: 'error-3',
      title: 'Error!',
      description: 'This is An Error',
      progress: 0,
      status: '???'
    }
  ]
})

const normalizeFeature = (feature: RoadmapFeatureResponse, index: number): RoadmapFeature => ({
  id: feature.id && feature.id.trim().length ? feature.id : `feature-${index}`,
  title: feature.title?.trim() || 'Upcoming feature',
  description: feature.description?.trim() || 'Details coming soon.',
  progress: clampProgress(Number(feature.progress ?? 0)),
  status: feature.status?.trim() || 'Planning'
})

export function useDevRoadmap() {
  const config = useRuntimeConfig()

  const roadmapUrl =
    (config.public.devMetaUrl as string | undefined) ?? 'https://cdn.shindoclient.com/data/meta/dev.json'

  return useAsyncData<DevRoadmap>(
    'dev-roadmap',
    async () => {
      const fallback = createFallbackRoadmap()
      try {
        const data = await $fetch<DevRoadmapResponse>(roadmapUrl, {
          parseResponse: JSON.parse,
          timeout: 4000
        })

        if (!data) {
          return fallback
        }

        const features = Array.isArray(data.features) ? data.features : []

        return {
          headline: data.headline?.trim() || fallback.headline,
          lastUpdated: data.lastUpdated || fallback.lastUpdated,
          features: features.length ? features.map((feature, index) => normalizeFeature(feature, index)) : fallback.features
        }
      } catch {
        return fallback
      }
    },
    {
      default: () => createFallbackRoadmap(),
      server: true,
      lazy: false
    }
  )
}


