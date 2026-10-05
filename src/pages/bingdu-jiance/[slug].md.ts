import type { APIRoute } from 'astro';
import { virusTests } from '../../data/viruses';
import { SITE_URL, yaml, cell, mdResponse } from '../../lib/md';

/**
 * /bingdu-jiance/[slug].md — clean Markdown variant of each pathogen-test page.
 * Generated at build time from `src/data/viruses.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/viruses.ts. */
const DATA_UPDATED = '2026-08-14';

export function getStaticPaths() {
  return virusTests.map((v) => ({ params: { slug: v.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const virus = virusTests.find((v) => v.slug === params.slug);
  if (!virus) return new Response('Not found', { status: 404 });

  const canonical = `${SITE_URL}/bingdu-jiance/${virus.slug}/`;

  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml(`${virus.name}检测`)}`);
  out.push(`description: ${yaml(virus.desc)}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push(`# ${virus.name}检测`);
  out.push('');
  out.push(`> ${virus.en}`);
  out.push('');
  out.push('## 病原概述');
  out.push('');
  out.push(virus.desc);
  out.push('');
  out.push('## 检测信息');
  out.push('');
  out.push('| 参数 | 值 |');
  out.push('| --- | --- |');
  out.push(`| 病原类型 | ${cell(virus.type)} |`);
  out.push(`| 样本类型 | ${cell(virus.sample)} |`);
  out.push(`| 检测方法 | ${cell(virus.method)} |`);
  out.push(`| 报告周期 | ${cell(virus.turnaround)} |`);
  out.push('');
  out.push('## 传播途径');
  out.push('');
  out.push(virus.transmission);
  out.push('');
  out.push('## 主要危害');
  out.push('');
  out.push(virus.harm);
  out.push('');
  out.push('## 检测意义');
  out.push('');
  out.push(virus.detectValue);
  out.push('');
  out.push('## 常见症状');
  out.push('');
  for (const s of virus.symptoms) out.push(`- ${s}`);
  out.push('');
  out.push('## 鉴别诊断');
  out.push('');
  out.push(virus.differential);
  out.push('');
  out.push('## 潜伏期');
  out.push('');
  out.push(virus.incubation);
  out.push('');
  out.push('## 诊断方法');
  out.push('');
  out.push(virus.diagnosis);
  out.push('');
  out.push('## 处理与治疗');
  out.push('');
  out.push(virus.treatment);
  out.push('');
  out.push('## 预防建议');
  out.push('');
  out.push(virus.prevention);
  out.push('');
  out.push(`查看完整 HTML 页面：${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
