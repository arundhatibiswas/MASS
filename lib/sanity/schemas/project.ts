import { defineField, defineType } from 'sanity'

export const project = defineType({
  name:  'project',
  title: 'Case Study',
  type:  'document',
  fields: [
    defineField({
      name:       'name',
      title:      'Project Name',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:       'slug',
      title:      'Slug',
      type:       'slug',
      options:    { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'client',
      title: 'Client',
      type:  'object',
      fields: [
        defineField({ name: 'name',     title: 'Client Name',     type: 'string' }),
        defineField({ name: 'title',    title: 'Client Title',    type: 'string' }),
        defineField({ name: 'company',  title: 'Company',         type: 'string' }),
        defineField({ name: 'industry', title: 'Industry',        type: 'string' }),
        defineField({ name: 'location', title: 'Location',        type: 'string' }),
        defineField({ name: 'liveUrl',  title: 'Live URL',        type: 'url'    }),
      ],
    }),
    defineField({
      name:  'featured',
      title: 'Featured on Homepage',
      type:  'boolean',
    }),
    defineField({
      name:  'coverImage',
      title: 'Cover Image',
      type:  'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name:       'challenge',
      title:      'The Challenge',
      type:       'text',
      rows:       4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'solution',
      title: 'The Solution',
      type:  'array',
      of:    [{ type: 'block' }],
    }),
    defineField({
      name:  'services',
      title: 'Services Delivered',
      type:  'array',
      of:    [{ type: 'string' }],
    }),
    defineField({
      name:  'results',
      title: 'Results',
      type:  'array',
      of: [
        {
          type:   'object',
          name:   'result',
          fields: [
            defineField({ name: 'metric', title: 'Metric Label', type: 'string' }),
            defineField({ name: 'value',  title: 'Value',        type: 'string' }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'metric' },
          },
        },
      ],
    }),
    defineField({
      name:  'phases',
      title: 'Project Phases',
      type:  'array',
      of: [
        {
          type:   'object',
          name:   'phase',
          fields: [
            defineField({ name: 'number',      title: 'Phase Number',   type: 'number' }),
            defineField({ name: 'title',       title: 'Phase Title',    type: 'string' }),
            defineField({ name: 'duration',    title: 'Duration',       type: 'string' }),
            defineField({ name: 'description', title: 'Description',    type: 'text', rows: 3 }),
            defineField({
              name:  'techChoices',
              title: 'Tech Stack Decisions',
              type:  'text',
              rows:  3,
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'duration' },
          },
        },
      ],
    }),
    defineField({
      name:  'testimonial',
      title: 'Client Testimonial',
      type:  'text',
      rows:  4,
    }),
    defineField({
      name:  'publishedAt',
      title: 'Published At',
      type:  'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'object',
      fields: [
        defineField({ name: 'metaTitle',       title: 'Meta Title',       type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
      ],
    }),
  ],
  preview: {
    select: {
      title:    'name',
      subtitle: 'client.company',
      media:    'coverImage',
    },
  },
})
