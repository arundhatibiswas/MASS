import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name:  'testimonial',
  title: 'Testimonial',
  type:  'document',
  fields: [
    defineField({
      name:       'name',
      title:      'Client Name',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:       'title',
      title:      'Job Title',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:       'company',
      title:      'Company',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'industry',
      title: 'Industry',
      type:  'string',
    }),
    defineField({
      name:       'location',
      title:      'Location',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'flag',
      title: 'Country Flag Emoji',
      type:  'string',
    }),
    defineField({
      name:       'quote',
      title:      'Quote',
      type:       'text',
      rows:       5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'photo',
      title: 'Client Photo (optional)',
      type:  'image',
      options: { hotspot: true },
    }),
    defineField({
      name:  'order',
      title: 'Display Order',
      type:  'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name:  'orderAsc',
      by:    [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title:    'name',
      subtitle: 'company',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle }
    },
  },
})
