import type { APIRoute } from 'astro';
import { dnaKitsEn } from '../../../data/kitsEn';
import { KIT_PRICE_TEXT_EN } from '../../../data/pricing';
import { SITE_URL, yaml, cell, mdResponse } from '../../../lib/md';

/**
 * /en/kits/[slug].md — clean Markdown variant of each test-kit product page (en).
 * Generated at build time from `src/data/kitsEn.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/kitsEn.ts. */
const DATA_UPDATED = '2026-09-16';

export function getStaticPaths() {
  return dnaKitsEn.map((kit) => ({ params: { slug: kit.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const kit = dnaKitsEn.find((k) => k.slug === params.slug);
  if (!kit) return new Response('Not found', { status: 404 });

  const canonical = `${SITE_URL}/en/kits/${kit.slug}/`;

  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml(kit.name)}`);
  out.push(`description: ${yaml(kit.intro)}`);
  out.push(`category: ${yaml(kit.category)}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push(`# ${kit.name}`);
  out.push('');
  out.push(`> ${kit.shortName}`);
  out.push('');
  out.push(kit.intro);
  out.push('');
  out.push('## Specifications');
  out.push('');
  out.push('| Field | Value |');
  out.push('| --- | --- |');
  out.push(`| Category | ${cell(kit.category)} |`);
  out.push(`| Detection target | ${cell(kit.target)} |`);
  out.push(`| Technology | ${cell(kit.tech)} |`);
  out.push(`| Format | ${cell(kit.spec)} |`);
  out.push(`| Storage | ${cell(kit.storage)} |`);
  out.push(`| Price range | ${cell(KIT_PRICE_TEXT_EN)} |`);
  out.push('');
  out.push(`View the full HTML page: ${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
