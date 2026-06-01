import type { MetadataRoute } from 'next'
import { client, isSanityConfigured } from '@/lib/sanity/client'

const BASE_URL = 'https://mass.llc'

// Static routes with their priority and change frequency
const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL,                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
  { url: `${BASE_URL}/services`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/ai-automation`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/ai-automation/social-media`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/ai-automation/teacher-tools`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/ai-automation/ecommerce`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/services/ai-automation/recruiting`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/services/web-development`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/mobile-apps`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/work`,                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/work/dr-vijay-plastic-surgery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/work/inventrics-technologies`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/about`,                         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/approach`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/insights`,                      lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
  { url: `${BASE_URL}/pricing`,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/contact`,                       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  { url: `${BASE_URL}/book-a-call`,                   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
  { url: `${BASE_URL}/privacy-policy`,                lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch published blog post slugs from Sanity (if configured)
  let postRoutes: MetadataRoute.Sitemap = []

  if (isSanityConfigured) {
    try {
      const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(
        `*[_type == "post" && defined(slug.current)]{
          "slug": slug.current,
          _updatedAt
        }`
      )
      postRoutes = posts.map((post) => ({
        url:             `${BASE_URL}/insights/${post.slug}`,
        lastModified:    new Date(post._updatedAt),
        changeFrequency: 'weekly' as const,
        priority:        0.7,
      }))
    } catch {
      // Sanity unavailable at build time — skip dynamic routes
    }
  }

  return [...staticRoutes, ...postRoutes]
}
