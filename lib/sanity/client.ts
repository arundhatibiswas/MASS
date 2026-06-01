import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
export const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production'
export const apiVersion = '2024-01-01'

/**
 * Whether Sanity is configured — false at build time if env vars are not set.
 * Pages check this before fetching to avoid build-time errors.
 */
export const isSanityConfigured = Boolean(projectId)

/**
 * Read-only client — used for all data fetching in Server Components.
 * No token needed for public published data.
 *
 * NOTE: When projectId is empty (no .env.local), the client is created with
 * a placeholder value so the module loads without throwing. All fetch calls
 * return empty results via the isSanityConfigured guard.
 */
export const client = createClient({
  projectId:  projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true,
})

/**
 * Write client — used only in server-side seed scripts.
 * Requires SANITY_API_TOKEN environment variable with write permissions.
 */
// Write client — only used in seed scripts, not at runtime
// Also uses placeholder when unconfigured so module loads cleanly
export const writeClient = createClient({
  projectId:  projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: false,
  token:  process.env.SANITY_API_TOKEN,
})

// Image URL builder helper
const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
