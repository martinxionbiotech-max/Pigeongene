import type { APIRoute } from 'astro';
import { dnaKits } from '../../data/kits';
import { KIT_PRICE_TEXT_ZH } from '../../data/pricing';
import { SITE_URL, yaml, cell, mdResponse } from '../../lib/md';

/**
 * /shijihe/[slug].md — clean Markdown variant of each test-kit product page.
 * Generated at build time from the same `src/data/kits.ts` the HTML page renders.
 * No navigation, footer, or JavaScript; every value is sourced verbatim.
 */

/** Last commit date of src/data/kits.ts (see `git log -1 --format=%cs`). */
const DATA_UPDATED = '2026-08-14';

export function getStaticPaths() {
  return dnaKits.map((kit) => ({ params: { slug: kit.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const kit = dnaKits.find((k) => k.slug === params.slug);
  if (!kit) return new Response('Not found', { status: 404 });

  const canonical = `${SITE_URL}/shijihe/${kit.slug}/`;

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
  out.push(`> ${kit.en}`);
  out.push('');
  out.push(kit.intro);
  out.push('');
  out.push('## 产品参数');
  out.push('');
  out.push('| 参数 | 值 |');
  out.push('| --- | --- |');
  out.push(`| 分类 | ${cell(kit.category)} |`);
  out.push(`| 检测目标 | ${cell(kit.target)} |`);
  out.push(`| 检测技术 | ${cell(kit.tech)} |`);
  out.push(`| 规格 | ${cell(kit.spec)} |`);
  out.push(`| 保存条件 | ${cell(kit.storage)} |`);
  out.push(`| 价格区间 | ${cell(KIT_PRICE_TEXT_ZH)} |`);
  out.push('');
  out.push(`查看完整 HTML 页面：${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
