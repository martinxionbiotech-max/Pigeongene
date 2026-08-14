import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('张家口森诺生物科技有限公司'),
    authorRole: z.string().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
