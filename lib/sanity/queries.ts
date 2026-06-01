/**
 * All GROQ queries for Sanity data fetching.
 * Kept in one file for easy auditing and caching.
 */

// ── Posts (Blog) ──────────────────────────────────────────────────────────────

/** All published posts, newest first — for /insights grid */
export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    excerpt,
    coverImage { asset, alt },
    "category": category->{ title, "slug": slug.current },
    "author": author->{ name, "slug": slug.current, image }
  }
`

/** Single post by slug — for /insights/[slug] */
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    excerpt,
    coverImage { asset, alt },
    "category": category->{ title, "slug": slug.current },
    "author": author->{ name, "slug": slug.current, image, bio, linkedin },
    body,
    seo
  }
`

/** All post slugs — for generateStaticParams */
export const POST_SLUGS_QUERY = `
  *[_type == "post"] { "slug": slug.current }
`

/** Posts by category slug */
export const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "post" && category->slug.current == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    excerpt,
    coverImage { asset, alt },
    "category": category->{ title, "slug": slug.current }
  }
`

// ── Projects (Case Studies) ───────────────────────────────────────────────────

/** All projects — for /work grid */
export const PROJECTS_QUERY = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    name,
    "slug": slug.current,
    featured,
    coverImage { asset, alt },
    "industry": client.industry,
    "location": client.location,
    services,
    results,
    challenge
  }
`

/** Featured projects — for homepage WorkPreview */
export const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(publishedAt desc) [0...2] {
    _id,
    name,
    "slug": slug.current,
    coverImage { asset, alt },
    "industry": client.industry,
    "location": client.location,
    services,
    results,
    challenge
  }
`

/** Single project by slug — for /work/[slug] */
export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    featured,
    coverImage { asset, alt },
    client,
    challenge,
    solution,
    services,
    results,
    phases,
    testimonial,
    publishedAt,
    seo
  }
`

/** All project slugs — for generateStaticParams */
export const PROJECT_SLUGS_QUERY = `
  *[_type == "project"] { "slug": slug.current }
`

// ── Testimonials ──────────────────────────────────────────────────────────────

/** All testimonials, ordered */
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    title,
    company,
    industry,
    location,
    flag,
    quote,
    photo { asset }
  }
`

// ── Categories ────────────────────────────────────────────────────────────────

export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`
