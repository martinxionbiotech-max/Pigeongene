import type { APIRoute } from 'astro';
import { geneMarkers } from '../../data/genes';
import { SITE_URL, yaml, cell, mdResponse } from '../../lib/md';

/**
 * /jiyin-jiance/[slug].md — clean Markdown variant of each gene-marker page.
 * Generated at build time from `src/data/genes.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/genes.ts. */
const DATA_UPDATED = '2026-09-16';

export function getStaticPaths() {
  return geneMarkers.map((g) => ({ params: { slug: g.code.toLowerCase() } }));
}

export const GET: APIRoute = ({ params }) => {
  const gene = geneMarkers.find((g) => g.code.toLowerCase() === params.slug);
  if (!gene) return new Response('Not found', { status: 404 });

  const canonical = `${SITE_URL}/jiyin-jiance/${gene.code.toLowerCase()}/`;

  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml(`${gene.name}（${gene.code}）基因位点`)}`);
  out.push(`description: ${yaml(gene.function)}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push(`# ${gene.name}（${gene.code}）`);
  out.push('');
  out.push(`> ${gene.en}`);
  out.push('');
  out.push('## 生物学功能');
  out.push('');
  out.push(gene.function);
  out.push('');
  out.push('## 育种价值');
  out.push('');
  out.push(gene.benefit);
  out.push('');
  out.push('## 科学关联证据');
  out.push('');
  out.push(gene.association);
  out.push('');
  out.push('## 位点信息');
  out.push('');
  out.push('| 参数 | 值 |');
  out.push('| --- | --- |');
  out.push(`| 基因编码 | ${cell(gene.code)} |`);
  out.push(`| 标记类型 | ${cell(gene.markerType)} |`);
  out.push(`| 文献来源 | ${cell(gene.reference)} |`);
  out.push('');
  out.push(`查看完整 HTML 页面：${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
