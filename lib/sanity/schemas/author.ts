import { defineField, defineType } from 'sanity'

export const author = defineType({
  name:  'author',
  title: 'Author',
  type:  'document',
  fields: [
    defineField({
      name:       'name',
      title:      'Name',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:  'slug',
      title: 'Slug',
      type:  'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name:  'image',
      title: 'Photo',
      type:  'image',
      options: { hotspot: true },
    }),
    defineField({
      name:  'title',
      title: 'Job Title',
      type:  'string',
    }),
    defineField({
      name:  'bio',
      title: 'Bio',
      type:  'text',
      rows:  3,
    }),
    defineField({
      name:  'linkedin',
      title: 'LinkedIn URL',
      type:  'url',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
