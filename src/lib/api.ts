import { siteConfig } from '$lib/site-config'

export type ClientMetaResponse = {
  updatelink?: string
  launcherLink?: string
  latestversionstring?: string
  latestversion?: number
  discord?: string
  discontinued?: boolean
  soar8released?: boolean
}

type VersioningResponse = {
  links?: {
    clientRelease?: string
    launcherRelease?: string
    discord?: string
  }
  latest?: {
    build?: number
    semver?: string
  }
  channels?: {
    stable?: {
      build?: number
      semver?: string
    }
  }
  legacy?: ClientMetaResponse
}

export type ClientMeta = Required<Omit<ClientMetaResponse, 'latestversion'>> & {
  latestversion: number
}

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

function normalizeString(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim().length > 0 ? value : fallback
}

function normalizeNumber(value: unknown, fallback: number) {
  const numeric = Number(value)
  return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback
}

async function fetchJson<T>(fetcher: typeof fetch, url: string, fallback: T): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 4000)

  try {
    const response = await fetcher(url, {
      headers: {
        accept: 'application/json'
      },
      signal: controller.signal
    })

    if (!response.ok) {
      return fallback
    }

    return (await response.json()) as T
  } catch {
    return fallback
  } finally {
    clearTimeout(timeout)
  }
}

function createFallbackClientMeta(): ClientMeta {
  return {
    updatelink: siteConfig.downloadUrl,
    launcherLink: siteConfig.launcherUrl,
    latestversionstring: '5.0.0',
    latestversion: 5000,
    discord: siteConfig.discordUrl,
    discontinued: false,
    soar8released: false
  }
}

function createFallbackRoadmap(): DevRoadmap {
  return {
    headline: 'Prototyping cross-platform modules and backend services to keep ShindoClient future-proof.',
    lastUpdated: '2025-11-18T00:00:00.000Z',
    features: [
      { id: 'error-1', title: 'Error!', description: 'This is An Error', progress: 0, status: '???' },
      { id: 'error-2', title: 'Error!', description: 'This is An Error', progress: 0, status: '???' },
      { id: 'error-3', title: 'Error!', description: 'This is An Error', progress: 0, status: '???' }
    ]
  }
}

function clampProgress(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)))
}

function normalizeFeature(feature: RoadmapFeatureResponse, index: number): RoadmapFeature {
  return {
    id: feature.id?.trim() || `feature-${index}`,
    title: feature.title?.trim() || 'Upcoming feature',
    description: feature.description?.trim() || 'Details coming soon.',
    progress: clampProgress(Number(feature.progress ?? 0)),
    status: feature.status?.trim() || 'Planning'
  }
}

export async function getClientMeta(fetcher: typeof fetch) {
  const fallback = createFallbackClientMeta()
  const versioning = await fetchJson<VersioningResponse | null>(fetcher, siteConfig.versioningMetaUrl, null)

  if (versioning) {
    const stable = versioning.channels?.stable
    const latest = versioning.latest
    const legacy = versioning.legacy

    return {
      ...fallback,
      updatelink: normalizeString(versioning.links?.clientRelease ?? legacy?.updatelink, fallback.updatelink),
      launcherLink: normalizeString(versioning.links?.launcherRelease ?? legacy?.launcherLink, fallback.launcherLink),
      discord: normalizeString(versioning.links?.discord ?? legacy?.discord, fallback.discord),
      latestversionstring: normalizeString(stable?.semver ?? latest?.semver ?? legacy?.latestversionstring, fallback.latestversionstring),
      latestversion: normalizeNumber(stable?.build ?? latest?.build ?? legacy?.latestversion, fallback.latestversion),
      discontinued: Boolean(legacy?.discontinued ?? fallback.discontinued),
      soar8released: Boolean(legacy?.soar8released ?? fallback.soar8released)
    }
  }

  const legacy = await fetchJson<ClientMetaResponse | null>(fetcher, siteConfig.legacyClientMetaUrl, null)
  if (!legacy) {
    return fallback
  }

  return {
    ...fallback,
    ...legacy,
    updatelink: normalizeString(legacy.updatelink, fallback.updatelink),
    launcherLink: normalizeString(legacy.launcherLink, fallback.launcherLink),
    discord: normalizeString(legacy.discord, fallback.discord),
    latestversionstring: normalizeString(legacy.latestversionstring, fallback.latestversionstring),
    latestversion: normalizeNumber(legacy.latestversion, fallback.latestversion),
    discontinued: Boolean(legacy.discontinued),
    soar8released: Boolean(legacy.soar8released)
  }
}

export async function getDevRoadmap(fetcher: typeof fetch) {
  const fallback = createFallbackRoadmap()
  const data = await fetchJson<DevRoadmapResponse | null>(fetcher, siteConfig.devMetaUrl, null)

  if (!data) {
    return fallback
  }

  const features = Array.isArray(data.features) ? data.features : []

  return {
    headline: data.headline?.trim() || fallback.headline,
    lastUpdated: data.lastUpdated || fallback.lastUpdated,
    features: features.length ? features.map((feature, index) => normalizeFeature(feature, index)) : fallback.features
  }
}
