/**
 * Locale routing helper for the zh-CN <-> en pair.
 *
 * The site uses path-prefix routing: Chinese pages live at the root
 * (e.g. /jiyin-jiance/) and English pages under /en/ (e.g. /en/flight-gene-test/).
 * This module is the single source of truth for the zh <-> en counterpart map,
 * used by the language switcher (Header) and by any component that needs to
 * point a visitor at the same page in the other language.
 */

export const DEFAULT_LOCALE = 'zh-CN' as const;
export const LOCALES = [
  { code: 'zh-CN', short: '中文', htmlLang: 'zh-CN' },
  { code: 'en', short: 'EN', htmlLang: 'en' },
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];

/** Static page pairs. Keys are WITHOUT the locale prefix for zh, values for en. */
const ZH_TO_EN: Record<string, string> = {
  '/': '/en/',
  '/jiyin-jiance/': '/en/flight-gene-test/',
  '/bingdu-jiance/': '/en/pathogen-testing/',
  '/dna-shenfenzheng/': '/en/dna-id-kinship/',
  '/shijihe/': '/en/kits/',
  '/caiyang/': '/en/sampling/',
  '/cankao/': '/en/references/',
  '/daili/': '/en/distributors/',
  '/shiyanshi/': '/en/laboratory/',
  '/zhishi/': '/en/knowledge/',
  '/zhishi/neirong-zhengce/': '/en/content-policy/',
  '/zhishi/jishu-yuanli/': '/en/knowledge/pcr-principles/',
  '/zhishi/baogao-jiedu/': '/en/knowledge/report-guide/',
  '/faq/': '/en/faq/',
  '/guanyu/': '/en/about/',
  '/lianxi/': '/en/contact/',
  '/blog/': '/en/blog/',
  '/yinsi/': '/en/privacy-policy/',
  '/tiaokuan/': '/en/terms/',
};

/** Dynamic detail-page prefixes: zh prefix -> en prefix (slug is shared). */
const DYNAMIC_PAIRS: [string, string][] = [
  ['/jiyin-jiance/', '/en/genes/'],
  ['/bingdu-jiance/', '/en/pathogens/'],
  ['/shijihe/', '/en/kits/'],
  ['/blog/', '/en/blog/'],
];

const EN_TO_ZH: Record<string, string> = Object.fromEntries(
  Object.entries(ZH_TO_EN).map(([zh, en]) => [en, zh])
);

function normalize(pathname: string): string {
  if (!pathname) return '/';
  let p = pathname.split('?')[0].split('#')[0];
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p += '/';
  return p;
}

function dynamicCounterpart(p: string, from: [string, string][], to: [string, string][]): string | null {
  for (let i = 0; i < from.length; i++) {
    const [fromPrefix] = from[i];
    const [toPrefix] = to[i];
    if (p.startsWith(fromPrefix) && p !== fromPrefix) {
      return toPrefix + p.slice(fromPrefix.length);
    }
  }
  return null;
}

/** True when the given URL path is an English page. */
export function isEnglishPath(pathname: string): boolean {
  return normalize(pathname).startsWith('/en/');
}

/**
 * Return the same page in the other language, or null when there is no
 * counterpart (caller then falls back to the other language home page).
 */
export function counterpartPath(pathname: string): string | null {
  const p = normalize(pathname);

  if (p.startsWith('/en/')) {
    // English page -> Chinese counterpart
    const dyn = dynamicCounterpart(p, DYNAMIC_PAIRS.map(([zh, en]) => [en, zh] as [string, string]), DYNAMIC_PAIRS);
    if (dyn) return dyn;
    return EN_TO_ZH[p] ?? null;
  }

  const dyn = dynamicCounterpart(p, DYNAMIC_PAIRS, DYNAMIC_PAIRS.map(([zh, en]) => [en, zh] as [string, string]));
  if (dyn) return dyn;
  return ZH_TO_EN[p] ?? null;
}

/** Locale home page for the other language. */
export function otherHome(pathname: string): string {
  return isEnglishPath(pathname) ? '/' : '/en/';
}
