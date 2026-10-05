import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL, yaml, isoDate } from '../../../lib/md';

/**
 * /en/blog/[slug].md — clean Markdown variant of each English blog post.
 * Mirrors src/pages/en/blog/[slug].astro: English articles come from two sources —
 * `blog` with lang === 'en' (written in English, no Chinese original) and
 * `blog-en` (translations of Chinese posts, same slug).
 */

export async function getStaticPaths() {
  const blog = await getCollection('blog');
  const translations = await getCollection('blog-en');

  const writtenInEnglish = blog.filter((p) => p.data.lang === 'en');
  return [
    ...writtenInEnglish.map((post) => ({ params: { slug: post.slug } })),
    ...translations.map((post) => ({ params: { slug: post.slug } })),
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const blog = await getCollection('blog');
  const translations = await getCollection('blog-en');
  const post =
    blog.find((p) => p.data.lang === 'en' && p.slug === params.slug) ??
    translations.find((p) => p.slug === params.slug);

  if (!post) return new Response('Not found', { status: 404 });

  const { data } = post;
  const canonical = `${SITE_URL}/en/blog/${post.slug}/`;
  const updated = data.updatedDate ?? data.pubDate;

  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml(data.title)}`);
  out.push(`description: ${yaml(data.description)}`);
  out.push(`author: ${yaml(data.author)}`);
  out.push(`category: ${yaml(data.category)}`);
  out.push(`published: ${yaml(isoDate(data.pubDate))}`);
  out.push(`updated: ${yaml(isoDate(updated))}`);
  if (data.tags.length > 0) out.push(`tags: [${data.tags.map((t) => yaml(t)).join(', ')}]`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push('---');
  out.push('');
  out.push(`# ${data.title}`);
  out.push('');
  out.push(post.body || '');
  out.push('');
  out.push(`View the full HTML page: ${canonical}`);
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
