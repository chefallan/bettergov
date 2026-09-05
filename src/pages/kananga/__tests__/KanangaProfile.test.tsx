import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import KanangaProfile from '..';
import barangayData from '../../../data/kananga/barangays.json';
import officials from '../../../data/kananga/officials.json';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'en', resolvedLanguage: 'en' },
  }),
}));

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={['/kananga']}>
      <KanangaProfile />
    </MemoryRouter>
  );

describe('KanangaProfile', () => {
  it('names the municipality in the page heading', () => {
    renderPage();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /municipality of kananga/i,
      })
    ).toBeInTheDocument();
  });

  it('shows the elected mayor', () => {
    renderPage();
    expect(screen.getByText(officials.mayor.name)).toBeInTheDocument();
  });

  it('renders a row for every barangay', () => {
    renderPage();
    for (const barangay of barangayData.barangays) {
      expect(
        screen.getByRole('row', { name: new RegExp(barangay.name) }),
        barangay.name
      ).toBeInTheDocument();
    }
  });
});
