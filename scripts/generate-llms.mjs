import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const sitemapPath = path.join(dist, 'sitemap-0.xml');
const siteUrl = 'https://senopigeon.com';

const entityMap = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
};

function decode(value) {
  return value
    .replace(/&(amp|lt|gt|quot|#39|apos);/g, (match) => entityMap[match] || match)
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlPathFor(pathname) {
  const clean = pathname.split('?')[0].split('#')[0];
  if (clean === '/' || clean === '') return path.join(dist, 'index.html');
  const withoutSlash = clean.replace(/^\/+|\/+$/g, '');
  return path.join(dist, withoutSlash, 'index.html');
}

function markdownPathFor(pathname) {
  const clean = pathname.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '');
  if (!clean) return null;
  return path.join(dist, `${clean}.md`);
}

function sectionFor(pathname) {
  if (pathname === '/') return ['Chinese', 'Core pages'];
  if (pathname === '/en/') return ['English', 'Core pages'];
  if (pathname.startsWith('/en/kits/')) return ['English', 'Test kits'];
  if (pathname.startsWith('/en/genes/')) return ['English', 'Gene markers'];
  if (pathname.startsWith('/en/pathogens/')) return ['English', 'Pathogens'];
  if (pathname.startsWith('/en/blog/')) return ['English', 'Blog'];
  if (pathname.startsWith('/en/knowledge/')) return ['English', 'Knowledge centre'];
  if (pathname.startsWith('/en/')) return ['English', 'Services & company'];
  if (pathname.startsWith('/shijihe/')) return ['Chinese', 'Test kits'];
  if (pathname.startsWith('/jiyin-jiance/')) return ['Chinese', 'Gene markers'];
  if (pathname.startsWith('/bingdu-jiance/')) return ['Chinese', 'Pathogens'];
  if (pathname.startsWith('/blog/')) return ['Chinese', 'Blog'];
  if (pathname.startsWith('/zhishi/')) return ['Chinese', 'Knowledge centre'];
  return ['Chinese', 'Services & company'];
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

let urls;
try {
  const xml = await fs.readFile(sitemapPath, 'utf8');
  urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => decode(m[1]));
} catch {
  const pages = [];
  async function walk(dir) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name === 'index.html') {
        const rel = path.relative(dist, dir).replaceAll(path.sep, '/');
        pages.push(`${siteUrl}/${rel ? `${rel}/` : ''}`);
      }
    }
  }
  await walk(dist);
  urls = pages.filter((url) => !url.includes('/404/'));
}

const rows = [];
for (const url of [...new Set(urls)]) {
  const parsed = new URL(url);
  if (parsed.pathname.startsWith('/404')) continue;
  const htmlFile = htmlPathFor(parsed.pathname);
  if (!(await exists(htmlFile))) continue;
  const html = await fs.readFile(htmlFile, 'utf8');
  const titleMatch = html.match(/<title>(.*?)<\/title>/is);
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/is);
  const title = decode(titleMatch?.[1] || parsed.pathname);
  const description = decode(descMatch?.[1] || '');
  const mdFile = markdownPathFor(parsed.pathname);
  const md = mdFile && (await exists(mdFile));
  const [language, group] = sectionFor(parsed.pathname);
  rows.push({ url, title, description, md, language, group });
}

const order = [
  ['Chinese', 'Core pages'],
  ['Chinese', 'Gene markers'],
  ['Chinese', 'Pathogens'],
  ['Chinese', 'Test kits'],
  ['Chinese', 'Knowledge centre'],
  ['Chinese', 'Blog'],
  ['Chinese', 'Services & company'],
  ['English', 'Core pages'],
  ['English', 'Gene markers'],
  ['English', 'Pathogens'],
  ['English', 'Test kits'],
  ['English', 'Knowledge centre'],
  ['English', 'Blog'],
  ['English', 'Services & company'],
];

const lines = [
  '# SENO PigeonGene — Full Site Index',
  '',
  '> Racing-pigeon flight-gene testing, pathogen qPCR testing, DNA ID/kinship testing and avian molecular diagnostic kits from Zhangjiakou SENO Biotech Co., Ltd.',
  `> Site: ${siteUrl}`,
  `> Sitemap: ${siteUrl}/sitemap-index.xml`,
  `> Last generated: ${new Date().toISOString().slice(0, 10)}`,
  '> Language: Chinese (default) and English. Markdown variants are listed where available.',
  '',
];

for (const [language, group] of order) {
  const subset = rows.filter((r) => r.language === language && r.group === group);
  if (!subset.length) continue;
  lines.push(`## ${language} — ${group}`, '');
  for (const row of subset) {
    lines.push(`- [${row.title}](${row.url})${row.description ? ` — ${row.description}` : ''}`);
    if (row.md) lines.push(`  - Markdown: ${row.url.replace(/\/$/, '')}.md`);
  }
  lines.push('');
}

lines.push('## Notes', '');
lines.push(`- HTML pages in this index: ${rows.length}`);
lines.push(`- Markdown variants linked: ${rows.filter((r) => r.md).length}`);
lines.push('- This file is generated from the built sitemap after every production build.');
lines.push('- Prices and availability are subject to the current quotation; performance claims require the corresponding batch COA or validation report.');
lines.push('');

await fs.writeFile(path.join(dist, 'llms.txt'), lines.join('\n'), 'utf8');
console.log(`llms.txt: ${rows.length} HTML URLs, ${rows.filter((r) => r.md).length} Markdown variants`);
