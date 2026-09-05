import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const localesDir = join(root, 'public', 'locales');
const locales = readdirSync(localesDir);

const commonJson = (locale: string) =>
  readFileSync(join(localesDir, locale, 'common.json'), 'utf8');

describe('brand tokens', () => {
  it('no locale common.json mentions BetterGov', () => {
    const offenders = locales.filter(locale =>
      commonJson(locale).includes('BetterGov')
    );
    expect(offenders).toEqual([]);
  });

  it('every locale carries the navbar.kananga label', () => {
    const missing = locales.filter(locale => {
      const parsed = JSON.parse(commonJson(locale)) as {
        navbar?: Record<string, string>;
      };
      return !parsed.navbar?.kananga;
    });
    expect(missing).toEqual([]);
  });

  it('seo-metadata.json mentions BetterGov nowhere', () => {
    const raw = readFileSync(
      join(root, 'src', 'data', 'seo-metadata.json'),
      'utf8'
    );
    expect(raw.includes('BetterGov')).toBe(false);
  });
});
