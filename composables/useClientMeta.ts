import { useAsyncData } from '#app'

type ClientMetaResponse = {
  updatelink?: string
  latestversionstring?: string
  latestversion?: number
  discord?: string
  discontinued?: boolean
  soar8released?: boolean
}

type ClientMeta = Required<Omit<ClientMetaResponse, 'latestversion'>> & {
  latestversion: number
}

export function useClientMeta() {
  const config = useRuntimeConfig()

  const createFallback = (): ClientMeta => ({
    updatelink: String(config.public.downloadUrl ?? ''),
    latestversionstring: '5.0.0',
    latestversion: 5000,
    discord: String(config.public.discordUrl ?? ''),
    discontinued: false,
    soar8released: false
  })

  const metaUrl =
    (config.public.clientMetaUrl as string | undefined) ??
    'https://cdn.shindoclient.com/data/meta/client.json'

  const asyncData = useAsyncData<ClientMeta>(
    'client-meta',
    async () => {
      const fallback = createFallback()
      try {
        const data = await $fetch<ClientMetaResponse>(metaUrl, {
          parseResponse: JSON.parse,
          timeout: 4000
        })

        if (!data) {
          return fallback
        }

        return {
          ...fallback,
          ...data,
          updatelink: typeof data.updatelink === 'string' && data.updatelink ? data.updatelink : fallback.updatelink,
          discord: typeof data.discord === 'string' && data.discord ? data.discord : fallback.discord,
          latestversionstring:
            typeof data.latestversionstring === 'string' && data.latestversionstring
              ? data.latestversionstring
              : fallback.latestversionstring,
          latestversion:
            typeof data.latestversion === 'number' && Number.isFinite(data.latestversion)
              ? data.latestversion
              : fallback.latestversion,
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
