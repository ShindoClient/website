import { env } from '$env/dynamic/public'

export const siteConfig = {
  clientMetaUrl: env.PUBLIC_CLIENT_META_URL || env.PUBLIC_VERSIONING_META_URL || 'https://cdn.shindoclient.com/data/meta/versioning.json',
  versioningMetaUrl: env.PUBLIC_VERSIONING_META_URL || env.PUBLIC_CLIENT_META_URL || 'https://cdn.shindoclient.com/data/meta/versioning.json',
  legacyClientMetaUrl: env.PUBLIC_LEGACY_CLIENT_META_URL || 'https://cdn.shindoclient.com/data/meta/client.json',
  devMetaUrl: env.PUBLIC_DEV_META_URL || 'https://cdn.shindoclient.com/data/meta/dev.json',
  downloadUrl: env.PUBLIC_DOWNLOAD_URL || 'https://github.com/ShindoClient/shindo-client/releases/latest',
  launcherUrl: env.PUBLIC_LAUNCHER_URL || 'https://github.com/ShindoClient/shindo-launcher/releases/latest',
  discordUrl: env.PUBLIC_DISCORD_URL || 'https://shindoclient.com/discord'
} as const

export const canonicalUrl = 'https://shindoclient.com'
