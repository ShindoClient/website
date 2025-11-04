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

  const fallback: ClientMeta = {
    updatelink: config.public.downloadUrl,
    latestversionstring: '5.0.0',
    latestversion: 5000,
    discord: config.public.discordUrl,
    discontinued: false,
    soar8released: false
  }

  const metaUrl =
    (config.public.clientMetaUrl as string | undefined) ??
    'https://shindoclient.github.io/data/meta/client.json'

  const asyncData = useAsyncData<ClientMeta>(
    'client-meta',
    async () => {
      try {
        const data = await $fetch<ClientMetaResponse>(metaUrl, {
          parseResponse: JSON.parse,
          timeout: 4000
        })

        if (!data) return fallback

        return {
          ...fallback,
          ...data,
          latestversion: typeof data.latestversion === 'number' ? data.latestversion : fallback.latestversion
        }
      } catch {
        return fallback
      }
    },
    {
      default: () => fallback,
      server: true,
      lazy: false,
      transform: (value) => value
    }
  )

  return asyncData
}
