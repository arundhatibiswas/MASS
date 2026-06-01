import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { client, isSanityConfigured } from '@/lib/sanity/client'
import { POSTS_QUERY, CATEGORIES_QUERY } from '@/lib/sanity/queries'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export const metadata = {
  title:       'Insights — MASS',
  description: 'AI automation, web development, and software industry insights from the MASS team.',
}

// Revalidate every 60 seconds — fresh enough for a blog
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
  author?:    { name: string }
}

interface Category {
  _id:   string
  title: string
  slug:  string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category: activeCategory } = await searchParams

  const [allPosts, categories] = isSanityConfigured
    ? await Promise.all([
        client.fetch<Post[]>(POSTS_QUERY),
        client.fetch<Category[]>(CATEGORIES_QUERY),
      ])
    : [[], []]

  // Client-side category filter (done in server for SEO)
  const posts = activeCategory
    ? allPosts.filter((p) => p.category?.slug === activeCategory)
    : allPosts

  return (
    <>
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Insights"
      >
        <div className="container-mass">

          {/* Header */}
          <div className="mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>
              Insights
            </p>
            <SplitHeading
              as="h1"
              scrollTrigger
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight:    300,
                letterSpacing: '-0.06em',
                lineHeight:    1.1,
                color:         'var(--color-text)',
                marginBottom:  '16px',
              }}
            >
              Ideas worth building on.
            </SplitHeading>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', maxWidth: '480px', lineHeight: 1.75 }}>
              Practical guides on AI automation, software development, and building
              businesses that scale.
            </p>
          </div>

          {/* Category filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              <Link
                href="/insights"
                className="label"
                style={{
                  padding:      '6px 14px',
                  borderRadius: '8px',
                  background:   !activeCategory ? 'var(--color-accent)' : 'var(--color-elevated)',
                  color:        !activeCategory ? '#fff' : 'var(--color-muted)',
                  border:       '1px solid var(--color-border)',
                  textDecoration: 'none',
                  transition:   'all 0.2s',
                }}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/insights?category=${cat.slug}`}
                  className="label"
                  style={{
                    padding:      '6px 14px',
                    borderRadius: '8px',
                    background:   activeCategory === cat.slug ? 'var(--color-accent)' : 'var(--color-elevated)',
                    color:        activeCategory === cat.slug ? '#fff' : 'var(--color-muted)',
                    border:       '1px solid var(--color-border)',
                    textDecoration: 'none',
                    transition:   'all 0.2s',
                  }}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}

          {/* Posts grid */}
          {posts.length === 0 ? (
            <div
              className="card text-center"
              style={{ padding: '80px 40px' }}
            >
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                {activeCategory
                  ? 'No articles in this category yet.'
                  : 'No articles published yet. Check back soon.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, pIdx) => (
                <AnimatedCard key={post._id} delay={pIdx * 0.06}>
                <article className="card group flex flex-col gap-4">
                  {/* Cover image placeholder */}
                  <div
                    style={{
                      height:        '180px',
                      borderRadius:  '10px',
                      background:    'var(--color-elevated)',
                      border:        '1px solid var(--color-border)',
                      display:       'flex',
                      alignItems:    'center',
                      justifyContent: 'center',
                      overflow:      'hidden',
                      position:      'relative',
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

                  {/* Meta */}
                  <div style={{ flex: 1 }}>
                    <div className="flex items-center gap-3 mb-3">
                      {post.readingTime && (
                        <span className="label">{post.readingTime} min read</span>
                      )}
                      {post.publishedAt && (
                        <span className="label">{formatDate(post.publishedAt)}</span>
                      )}
                    </div>

                    <h2
                      style={{
                        fontFamily:   'var(--font-display)',
                        fontSize:     '1.05rem',
                        fontWeight:   700,
                        color:        'var(--color-text)',
                        marginBottom: '8px',
                        lineHeight:   1.4,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <Link
                    href={`/insights/${post.slug}`}
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize:   '0.875rem',
                      color:      'var(--color-accent)',
                      marginTop:  'auto',
                    }}
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </article>
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
