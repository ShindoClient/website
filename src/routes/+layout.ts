import type { LayoutLoad } from './$types'
import { getClientMeta, getDevRoadmap } from '$lib/api'

export const load: LayoutLoad = async ({ fetch }) => {
  const [clientMeta, devRoadmap] = await Promise.all([getClientMeta(fetch), getDevRoadmap(fetch)])

  return {
    clientMeta,
    devRoadmap
  }
}
