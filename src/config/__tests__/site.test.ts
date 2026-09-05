import { describe, expect, it } from 'vitest';
import { MUNICIPALITY, SITE } from '../site';

describe('SITE', () => {
  it('names the site BetterKananga', () => {
    expect(SITE.name).toBe('BetterKananga');
  });

  it('serves from the betterkananga.ph base URL', () => {
    expect(SITE.baseUrl).toBe('https://betterkananga.ph');
  });

  it('carries a tagline', () => {
    expect(SITE.tagline.length).toBeGreaterThan(0);
  });

  it('carries a default description', () => {
    expect(SITE.description).toContain('Kananga');
  });
});

describe('MUNICIPALITY', () => {
  it('sits in Leyte province', () => {
    expect(MUNICIPALITY.province).toBe('Leyte');
  });

  it('sits in the Eastern Visayas region', () => {
    expect(MUNICIPALITY.region).toBe('Eastern Visayas');
  });

  it('counts 23 barangays', () => {
    expect(MUNICIPALITY.barangayCount).toBe(23);
  });

  it('records the 2020 census population', () => {
    expect(MUNICIPALITY.population2020).toBe(59696);
  });

  it('names the mayor elected in 2025', () => {
    expect(MUNICIPALITY.mayor).toBe('Manuel Vicente M. Torres');
  });

  it('names the vice mayor elected in 2025', () => {
    expect(MUNICIPALITY.viceMayor).toBe('Miguel Jorge P. Tan');
  });
});
