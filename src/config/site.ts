// Population: PSA 2020 census via PhilAtlas. Officials: Halalan 2025 results
// (ABS-CBN, 100% of election returns) matched to full names in the LGU directory.
export const SITE = {
  name: 'BetterKananga',
  domain: 'betterkananga.ph',
  baseUrl: 'https://betterkananga.ph',
  tagline: 'A community-run portal for Kananga, Leyte',
  description:
    'Community-powered portal of the Municipality of Kananga, Leyte. Access municipal services, reach local offices, and stay informed about the town.',
  defaultTitle: 'BetterKananga | Community Powered Portal of Kananga, Leyte',
  repoUrl: 'https://github.com/chefallan/bettergov',
} as const;

export const MUNICIPALITY = {
  name: 'Kananga',
  fullName: 'Municipality of Kananga',
  province: 'Leyte',
  region: 'Eastern Visayas',
  incomeClass: '1st class municipality',
  population2020: 59696,
  barangayCount: 23,
  postalCode: '6531',
  coordinates: { lat: 11.1856, lng: 124.5597 },
  mayor: 'Manuel Vicente M. Torres',
  viceMayor: 'Miguel Jorge P. Tan',
} as const;
