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
    author: z.string().default('张家口赛诺生物科技有限公司'),
    authorRole: z.string().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    lang: z.string().default('zh-CN'),
  }),
});

// English translations of the Chinese blog posts. Kept in their own collection so
// each translated post keeps the SAME slug as its Chinese original, which makes the
// zh <-> en hreflang pair trivially derivable. Hand-written English posts that have
// no Chinese original live in `blog` with `lang: 'en'` (upstream convention).
const blogEn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zhangjiakou SENO Biotech Co., Ltd'),
    authorRole: z.string().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    lang: z.string().default('en'),
  }),
});

export const collections = { blog, 'blog-en': blogEn };
