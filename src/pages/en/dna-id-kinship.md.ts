import type { APIRoute } from 'astro';
import { dnaIdApplicationsEn, dnaIdMarkersEn, dnaIdProcessEn } from '../../data/dnaIdEn';
import { SITE_URL, yaml, cell, mdResponse } from '../../lib/md';

/**
 * /en/dna-id-kinship.md — clean Markdown variant of the DNA ID & kinship page (en).
 * Generated at build time from `src/data/dnaIdEn.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/dnaIdEn.ts. */
const DATA_UPDATED = '2026-09-09';

const canonical = `${SITE_URL}/en/dna-id-kinship/`;

export const GET: APIRoute = () => {
  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml('Racing Pigeon DNA ID & Kinship')}`);
  out.push(`description: ${yaml('STR microsatellite markers build a unique DNA fingerprint for each pigeon, with SNP and sex determination, to scientifically confirm parentage.')}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push('# Racing Pigeon DNA ID & Kinship');
  out.push('');
  out.push('STR microsatellite markers build a unique DNA fingerprint for each pigeon, with SNP loci and sex determination, for breeder identity certification, parentage verification and anti-fraud.');
  out.push('');
  out.push('## Applications');
  out.push('');
  out.push('| Scenario | Description |');
  out.push('| --- | --- |');
  for (const a of dnaIdApplicationsEn) out.push(`| ${cell(a.title)} | ${cell(a.desc)} |`);
  out.push('');
  out.push('## Detection markers');
  out.push('');
  out.push('| Marker | Name | Description |');
  out.push('| --- | --- | --- |');
  for (const m of dnaIdMarkersEn) out.push(`| ${cell(m.code)} | ${cell(m.name)} | ${cell(m.desc)} |`);
  out.push('');
  out.push('## Workflow');
  out.push('');
  out.push('| Step | Stage | Description |');
  out.push('| --- | --- | --- |');
  for (const s of dnaIdProcessEn) out.push(`| ${cell(s.n)} | ${cell(s.t)} | ${cell(s.d)} |`);
  out.push('');
  out.push(`View the full HTML page: ${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
