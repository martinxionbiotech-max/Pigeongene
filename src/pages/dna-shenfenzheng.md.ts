import type { APIRoute } from 'astro';
import { dnaIdApplications, dnaIdMarkers, dnaIdProcess } from '../data/dnaId';
import { SITE_URL, yaml, cell, mdResponse } from '../lib/md';

/**
 * /dna-shenfenzheng.md — clean Markdown variant of the DNA ID & kinship page.
 * Generated at build time from `src/data/dnaId.ts`; no navigation/footer/JS.
 */

/** Last commit date of src/data/dnaId.ts. */
const DATA_UPDATED = '2026-09-09';

const canonical = `${SITE_URL}/dna-shenfenzheng/`;

export const GET: APIRoute = () => {
  const out: string[] = [];
  out.push('---');
  out.push(`title: ${yaml('赛鸽 DNA 身份证 | 亲缘鉴定')}`);
  out.push(`description: ${yaml('采用 STR 微卫星标记构建每只赛鸽独一无二的 DNA 指纹图谱，辅以 SNP 与性别鉴定，科学确认亲缘关系。')}`);
  out.push(`canonical: ${yaml(canonical)}`);
  out.push(`updated: ${yaml(DATA_UPDATED)}`);
  out.push('---');
  out.push('');
  out.push('# 赛鸽 DNA 身份证 | 亲缘鉴定');
  out.push('');
  out.push('采用 STR 微卫星标记构建每只赛鸽独一无二的 DNA 指纹图谱，辅以 SNP 位点与性别鉴定，用于种鸽身份认证、亲缘关系确认与交易防伪。');
  out.push('');
  out.push('## 应用场景');
  out.push('');
  out.push('| 场景 | 说明 |');
  out.push('| --- | --- |');
  for (const a of dnaIdApplications) out.push(`| ${cell(a.title)} | ${cell(a.desc)} |`);
  out.push('');
  out.push('## 检测技术标记');
  out.push('');
  out.push('| 标记 | 名称 | 说明 |');
  out.push('| --- | --- | --- |');
  for (const m of dnaIdMarkers) out.push(`| ${cell(m.code)} | ${cell(m.name)} | ${cell(m.desc)} |`);
  out.push('');
  out.push('## 检测流程');
  out.push('');
  out.push('| 步骤 | 环节 | 说明 |');
  out.push('| --- | --- | --- |');
  for (const s of dnaIdProcess) out.push(`| ${cell(s.n)} | ${cell(s.t)} | ${cell(s.d)} |`);
  out.push('');
  out.push(`查看完整 HTML 页面：${canonical}`);
  out.push('');

  return mdResponse(out.join('\n'));
};
