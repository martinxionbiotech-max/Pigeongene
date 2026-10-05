import type { APIRoute } from 'astro';
import { geneMarkersEn } from '../../../data/genesEn';
import { SITE_URL, yaml, cell, mdResponse } from '../../../lib/md';

/**
 * /en/genes/[slug].md — clean Markdown variant of each gene-marker page (en).
 * Generated at build time from `src/data/genesEn.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/genesEn.ts. */
const DATA_UPDATED = '2026-09-16';

export function getStaticPaths() {
  return geneMarkersEn.map((g) => ({ params: { slug: g.code.toLowerCase() } }));
}

export const GET: APIRoute = ({ params }) => {
  const gene = geneMarkersEn.find((g) => g.code.toLowerCase() === params.slug);
  if (!gene) return new Response('Not found', { status: 404 });

  const canonical = `${SITE_URL}/en/genes/${gene.code.toLowerCase()}/`;

  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml(`${gene.name} (${gene.code}) gene marker`)}`);
  out.push(`description: ${yaml(gene.function)}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push(`# ${gene.name} (${gene.code})`);
  out.push('');
  out.push('## Biological function');
  out.push('');
  out.push(gene.function);
  out.push('');
  out.push('## Breeding value');
  out.push('');
  out.push(gene.benefit);
  out.push('');
  out.push('## Scientific association');
  out.push('');
  out.push(gene.association);
  out.push('');
  out.push('## Marker information');
  out.push('');
  out.push('| Field | Value |');
  out.push('| --- | --- |');
  out.push(`| Gene code | ${cell(gene.code)} |`);
  out.push(`| Marker type | ${cell(gene.markerType)} |`);
  out.push(`| Literature source | ${cell(gene.reference)} |`);
  out.push('');
  out.push(`View the full HTML page: ${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
