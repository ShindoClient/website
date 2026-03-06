import { useAsyncData } from '#app'

type ClientMetaResponse = {
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

type ClientMeta = Required<Omit<ClientMetaResponse, 'latestversion'>> & {
  latestversion: number
}

function normalizeString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : fallback
}

function normalizeNumber(value: unknown, fallback: number): number {
  const numeric = Number(value)
  return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback
}

export function useClientMeta() {
  const config = useRuntimeConfig()

  const createFallback = (): ClientMeta => ({
    updatelink: String(config.public.downloadUrl ?? ''),
    launcherLink: String(config.public.launcherUrl ?? ''),
    latestversionstring: '5.0.0',
    latestversion: 5000,
    discord: String(config.public.discordUrl ?? ''),
    discontinued: false,
    soar8released: false
  })

  const versioningUrl =
    (config.public.clientMetaUrl as string | undefined) ??
    (config.public.versioningMetaUrl as string | undefined) ??
    'https://cdn.shindoclient.com/data/meta/versioning.json'

  const legacyMetaUrl =
    (config.public.legacyClientMetaUrl as string | undefined) ??
    'https://cdn.shindoclient.com/data/meta/client.json'

  const asyncData = useAsyncData<ClientMeta>(
    'client-meta',
    async () => {
      const fallback = createFallback()

      try {
        const data = await $fetch<VersioningResponse>(versioningUrl, {
          parseResponse: JSON.parse,
          timeout: 4000
        })

        if (data) {
          const stable = data.channels?.stable
          const latest = data.latest
          const legacy = data.legacy

          return {
            ...fallback,
            updatelink: normalizeString(data.links?.clientRelease ?? legacy?.updatelink, fallback.updatelink),
            launcherLink: normalizeString(data.links?.launcherRelease ?? legacy?.launcherLink, fallback.launcherLink),
            discord: normalizeString(data.links?.discord ?? legacy?.discord, fallback.discord),
            latestversionstring: normalizeString(stable?.semver ?? latest?.semver ?? legacy?.latestversionstring, fallback.latestversionstring),
            latestversion: normalizeNumber(stable?.build ?? latest?.build ?? legacy?.latestversion, fallback.latestversion),
            discontinued: Boolean(legacy?.discontinued ?? fallback.discontinued),
            soar8released: Boolean(legacy?.soar8released ?? fallback.soar8released)
          }
        }
      } catch {
        // fallback below
      }

      try {
        const data = await $fetch<ClientMetaResponse>(legacyMetaUrl, {
          parseResponse: JSON.parse,
          timeout: 4000
        })

        if (!data) {
          return fallback
        }

        return {
          ...fallback,
          ...data,
          updatelink: normalizeString(data.updatelink, fallback.updatelink),
          launcherLink: normalizeString(data.launcherLink, fallback.launcherLink),
          discord: normalizeString(data.discord, fallback.discord),
          latestversionstring: normalizeString(data.latestversionstring, fallback.latestversionstring),
          latestversion: normalizeNumber(data.latestversion, fallback.latestversion),
          discontinued: Boolean(data.discontinued),
          soar8released: Boolean(data.soar8released)
        }
      } catch {
        return fallback
      }
    },
    {
      default: () => createFallback(),
      server: true,
      lazy: false
    }
  )

  return asyncData
}
