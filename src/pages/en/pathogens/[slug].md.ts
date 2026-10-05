import type { APIRoute } from 'astro';
import { virusTestsEn } from '../../../data/virusesEn';
import { SITE_URL, yaml, cell, mdResponse } from '../../../lib/md';

/**
 * /en/pathogens/[slug].md — clean Markdown variant of each pathogen-test page (en).
 * Generated at build time from `src/data/virusesEn.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/virusesEn.ts. */
const DATA_UPDATED = '2026-09-16';

export function getStaticPaths() {
  return virusTestsEn.map((v) => ({ params: { slug: v.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const virus = virusTestsEn.find((v) => v.slug === params.slug);
  if (!virus) return new Response('Not found', { status: 404 });

  const canonical = `${SITE_URL}/en/pathogens/${virus.slug}/`;

  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml(`${virus.name} testing`)}`);
  out.push(`description: ${yaml(virus.desc)}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push(`# ${virus.name} testing`);
  out.push('');
  out.push('## Pathogen overview');
  out.push('');
  out.push(virus.desc);
  out.push('');
  out.push('## Testing information');
  out.push('');
  out.push('| Field | Value |');
  out.push('| --- | --- |');
  out.push(`| Pathogen type | ${cell(virus.type)} |`);
  out.push(`| Sample type | ${cell(virus.sample)} |`);
  out.push(`| Method | ${cell(virus.method)} |`);
  out.push(`| Reporting | ${cell(virus.turnaround)} |`);
  out.push('');
  out.push('## Transmission');
  out.push('');
  out.push(virus.transmission);
  out.push('');
  out.push('## Main impact');
  out.push('');
  out.push(virus.harm);
  out.push('');
  out.push('## Why testing matters');
  out.push('');
  out.push(virus.detectValue);
  out.push('');
  out.push('## Common symptoms');
  out.push('');
  for (const s of virus.symptoms) out.push(`- ${s}`);
  out.push('');
  out.push('## Differential diagnosis');
  out.push('');
  out.push(virus.differential);
  out.push('');
  out.push('## Incubation period');
  out.push('');
  out.push(virus.incubation);
  out.push('');
  out.push('## Diagnostic methods');
  out.push('');
  out.push(virus.diagnosis);
  out.push('');
  out.push('## Management and treatment');
  out.push('');
  out.push(virus.treatment);
  out.push('');
  out.push('## Prevention');
  out.push('');
  out.push(virus.prevention);
  out.push('');
  out.push(`View the full HTML page: ${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
