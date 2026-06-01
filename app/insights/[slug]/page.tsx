import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { client, isSanityConfigured } from '@/lib/sanity/client'
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from '@/lib/sanity/queries'
import { PortableText } from '@/components/sanity/PortableText'
import { CtaBanner } from '@/components/home/CtaBanner'
import type { PortableTextBlock } from '@portabletext/types'

export const revalidate = 60

interface Post {
  _id:         string
  title:       string
  slug:        string
  publishedAt: string
  readingTime: number
  excerpt:     string
  coverImage?: { asset: object; alt?: string }
  category?:  { title: string; slug: string }
  author?:    { name: string; bio?: string; linkedin?: string }
  body:        PortableTextBlock[]
  seo?:        { metaTitle?: string; metaDescription?: string }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

// Generate static params for all published posts
// Returns empty array at build time if Sanity is not configured
export async function generateStaticParams() {
  if (!isSanityConfigured) return []
  const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY)
  return slugs.map(({ slug }) => ({ slug }))
}

// Generate per-page metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug })
  if (!post) return {}
  return {
    title:       post.seo?.metaTitle ?? `${post.title} — MASS Insights`,
    description: post.seo?.metaDescription ?? post.excerpt,
  }
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug })

  if (!post) notFound()

  return (
    <>
      <article
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)', paddingBottom: 'var(--section-py, 96px)' }}
      >
        <div className="container-mass">

          {/* Back link */}
          <Link
            href="/insights"
            className="flex items-center gap-2 label mb-10"
            style={{ color: 'var(--color-muted)', textDecoration: 'none', width: 'fit-content' }}
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>

          {/* Article header */}
          <header style={{ maxWidth: '720px', marginBottom: '48px' }}>
            {post.category && (
              <Link
                href={`/insights?category=${post.category.slug}`}
                className="label mb-4 inline-block"
                style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
              >
                {post.category.title}
              </Link>
            )}

            <h1
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2rem, 4.5vw, 3rem)',
                fontWeight:    300,
                letterSpacing: '-0.06em',
                lineHeight:    1.15,
                color:         'var(--color-text)',
                marginBottom:  '20px',
              }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                {post.excerpt}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5">
              {post.author && (
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize:   '0.875rem',
                    color:      'var(--color-text)',
                  }}
                >
                  {post.author.name}
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-1 label">
                  <Calendar size={12} />
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {post.readingTime && (
                <span className="flex items-center gap-1 label">
                  <Clock size={12} />
                  {post.readingTime} min read
                </span>
              )}
            </div>
          </header>

          {/* Cover image area */}
          <div
            style={{
              height:       '360px',
              borderRadius: '16px',
              background:   'var(--color-elevated)',
              border:       '1px solid var(--color-border)',
              marginBottom: '56px',
              overflow:     'hidden',
              position:     'relative',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
            }}
          >
            <div
              aria-hidden
              style={{
                position:   'absolute',
                inset:      0,
                background: 'linear-gradient(135deg, var(--color-glow) 0%, transparent 60%)',
              }}
            />
            {post.category && (
              <span className="label" style={{ position: 'relative', zIndex: 1, color: 'var(--color-accent)' }}>
                {post.category.title}
              </span>
            )}
          </div>

          {/* Article body */}
          <div style={{ maxWidth: '720px' }}>
            {post.body && post.body.length > 0 ? (
              <PortableText value={post.body} />
            ) : (
              <p style={{ color: 'var(--color-muted)', fontStyle: 'italic' }}>
                Article content coming soon.
              </p>
            )}
          </div>

          {/* Author bio */}
          {post.author?.bio && (
            <div
              className="card"
              style={{
                maxWidth:   '720px',
                marginTop:  '56px',
                padding:    '28px',
                display:    'flex',
                gap:        '16px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width:          '48px',
                  height:         '48px',
                  borderRadius:   '50%',
                  background:     'var(--color-glow)',
                  border:         '1px solid var(--color-border)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontFamily:     'var(--font-display)',
                  fontWeight:     700,
                  fontSize:       '0.9rem',
                  color:          'var(--color-accent)',
                  flexShrink:     0,
                }}
              >
                {post.author.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px' }}>
                  {post.author.name}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {post.author.bio}
                </p>
                {post.author.linkedin && (
                  <a
                    href={post.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label mt-2 inline-block"
                    style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </article>

      <CtaBanner />
    </>
  )
}
