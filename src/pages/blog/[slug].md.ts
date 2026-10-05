import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL, yaml, isoDate } from '../../lib/md';

/**
 * /blog/[slug].md — clean Markdown variant of each blog post.
 * Generated at build time from the `blog` content collection body — the same
 * source Markdown the HTML page renders. Mirrors src/pages/blog/[slug].astro.
 */

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const posts = await getCollection('blog');
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return new Response('Not found', { status: 404 });

  const { data } = post;
  const canonical = `${SITE_URL}/blog/${post.slug}/`;
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
  out.push(`查看完整 HTML 页面：${canonical}`);
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
