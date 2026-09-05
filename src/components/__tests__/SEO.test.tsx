import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SEO from '../SEO';

const mockUseTranslation = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => mockUseTranslation(),
}));

describe('SEO', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    mockUseTranslation.mockReturnValue({
      i18n: { language: 'en', resolvedLanguage: 'en' },
    });
  });

  it('renders head tags without any provider wrapper', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SEO />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        document
          .querySelector('meta[name="DC.language"]')
          ?.getAttribute('content')
      ).toBe('en');
    });
  });

  it('sets DC.language from the active i18n locale', async () => {
    mockUseTranslation.mockReturnValue({
      i18n: { language: 'fil', resolvedLanguage: 'fil' },
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <SEO />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        document
          .querySelector('meta[name="DC.language"]')
          ?.getAttribute('content')
      ).toBe('fil');
    });
  });

  it('updates DC.language when the active locale changes', async () => {
    const i18n = { language: 'en', resolvedLanguage: 'en' };
    mockUseTranslation.mockReturnValue({ i18n });

    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <SEO />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        document
          .querySelector('meta[name="DC.language"]')
          ?.getAttribute('content')
      ).toBe('en');
    });

    i18n.language = 'fil';
    i18n.resolvedLanguage = 'fil';
    rerender(
      <MemoryRouter initialEntries={['/']}>
        <SEO />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        document
          .querySelector('meta[name="DC.language"]')
          ?.getAttribute('content')
      ).toBe('fil');
    });
  });

  it('falls back to en when i18n language is unavailable', async () => {
    mockUseTranslation.mockReturnValue({
      i18n: { language: '', resolvedLanguage: '' },
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <SEO />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        document
          .querySelector('meta[name="DC.language"]')
          ?.getAttribute('content')
      ).toBe('en');
    });
  });
});
