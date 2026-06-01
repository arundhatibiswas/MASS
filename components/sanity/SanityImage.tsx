import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'
import type { SanityImageSource } from '@sanity/image-url'

interface SanityImageProps {
  source:      SanityImageSource
  alt:         string
  width?:      number
  height?:     number
  fill?:       boolean
  className?:  string
  priority?:   boolean
  sizes?:      string
  style?:      React.CSSProperties
}

/**
 * Wrapper around next/image that handles Sanity image URLs.
 * Uses @sanity/image-url builder with automatic CDN optimisation.
 */
export function SanityImage({
  source,
  alt,
  width  = 800,
  height = 600,
  fill   = false,
  className,
  priority,
  sizes = '(max-width: 768px) 100vw, 50vw',
  style,
}: SanityImageProps) {
  const url = fill
    ? urlFor(source).url()
    : urlFor(source).width(width).height(height).fit('crop').url()

  if (fill) {
    return (
      <Image
        src={url}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        style={{ objectFit: 'cover', ...style }}
      />
    )
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      style={style}
    />
  )
}
