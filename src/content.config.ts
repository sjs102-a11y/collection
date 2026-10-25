import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.string(),
      status: z.enum(['Ongoing', 'Completed', 'Paused']),
      date: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100), // lower numbers come first
      cover: image(),
      coverAlt: z.string().default(''),
      specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      gallery: z
        .array(z.object({ src: image(), caption: z.string().default(''), alt: z.string().default('') }))
        .default([]),
      instagram: z.string().url().optional(),
    }),
});

export const collections = { projects };
