/**
 * Shared helpers for the machine-readable Markdown variants (`.md.ts` endpoints).
 *
 * These endpoints generate clean `text/markdown` documents from the SAME data
 * layer the HTML pages render, with no navigation, footer, or JavaScript. Every
 * value is sourced verbatim from the record — nothing is fabricated.
 */

export const SITE_URL = 'https://senopigeon.com';

/** YAML-safe scalar — JSON strings are valid YAML scalars (avoids quote/colon injection). */
export const yaml = (v: unknown): string => JSON.stringify(v ?? '');

/** Escape a value for use inside a Markdown table cell. */
export const cell = (v: unknown): string =>
  String(v ?? '').replace(/\r?\n/g, ' ').replace(/\|/g, '\\|').trim();

/** Build a Response with the canonical text/markdown content type. */
export const mdResponse = (body: string): Response =>
  new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });

/** Serialize a Date to an ISO `YYYY-MM-DD` string. */
export const isoDate = (d: Date): string => d.toISOString().slice(0, 10);
