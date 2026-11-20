import { defineCollection, z } from 'astro:content';

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    category: z.enum(['learning', 'translation']).default('learning'),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(100),
    category: z.enum(['learning', 'translation', 'both']).default('learning'),
    lang: z.enum(['ru', 'fi', 'en']).default('ru'),
  }),
});

export const collections = {
  faq: faqCollection,
  articles: articlesCollection,
};
