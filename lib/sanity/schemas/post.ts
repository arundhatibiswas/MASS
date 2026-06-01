import { defineField, defineType } from 'sanity'

export const post = defineType({
  name:  'post',
  title: 'Blog Post',
  type:  'document',
  fields: [
    defineField({
      name:       'title',
      title:      'Title',
      type:       'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name:  'slug',
      title: 'Slug',
      type:  'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'author',
      title: 'Author',
      type:  'reference',
      to:    [{ type: 'author' }],
    }),
    defineField({
      name:   'coverImage',
      title:  'Cover Image',
      type:   'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name:  'alt',
          title: 'Alt Text',
          type:  'string',
        }),
      ],
    }),
    defineField({
      name:  'category',
      title: 'Category',
      type:  'reference',
      to:    [{ type: 'category' }],
    }),
    defineField({
      name:        'publishedAt',
      title:       'Published At',
      type:        'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name:  'readingTime',
      title: 'Reading Time (minutes)',
      type:  'number',
    }),
    defineField({
      name:       'excerpt',
      title:      'Excerpt',
      type:       'text',
      rows:       3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name:  'body',
      title: 'Body',
      type:  'array',
      of: [
        { type: 'block' },
        {
          type:    'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        },
        {
          // Code blocks
          type:   'object',
          name:   'codeBlock',
          title:  'Code Block',
          fields: [
            defineField({ name: 'language', title: 'Language', type: 'string' }),
            defineField({ name: 'code', title: 'Code', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'object',
      fields: [
        defineField({ name: 'metaTitle',       title: 'Meta Title',       type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
        defineField({ name: 'ogImage',         title: 'OG Image',         type: 'image' }),
      ],
    }),
  ],
  preview: {
    select: {
      title:    'title',
      author:   'author.name',
      media:    'coverImage',
      subtitle: 'publishedAt',
    },
    prepare({ title, author, media, subtitle }) {
      return {
        title,
        subtitle: `${author ?? 'No author'} · ${subtitle ? new Date(subtitle).toLocaleDateString() : 'Draft'}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, Newest',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
