import { describe, expect, it } from 'vitest';
import {
  formatStandardDescription,
  formatStandardTitle,
} from '../seoTemplates';

describe('formatStandardTitle', () => {
  it('suffixes the BetterKananga brand', () => {
    expect(formatStandardTitle('Business Permits')).toBe(
      'Business Permits | BetterKananga'
    );
  });
});

describe('formatStandardDescription', () => {
  it('names Kananga', () => {
    expect(formatStandardDescription('Business Permits')).toContain('Kananga');
  });
});
