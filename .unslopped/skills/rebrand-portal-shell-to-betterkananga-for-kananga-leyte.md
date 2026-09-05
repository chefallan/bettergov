---
name: rebrand-portal-shell-to-betterkananga-for-kananga-leyte
title: Rebrand portal shell to BetterKananga for Kananga, Leyte
created: 2026-09-04T01:16:45.172Z
updated: 2026-09-04T01:16:45.172Z
runs: 1
completed: 1
abandoned: 0
gateFailures: 5
lastCycle: 20260903-48acf0
tags: rebrand, portal, shell, betterkananga, kananga, leyte, e2e, public, src
---
# Rebrand portal shell to BetterKananga for Kananga, Leyte

## When to use
Requests like:
- "Rebrand portal shell to BetterKananga for Kananga, Leyte"

## Playbook
Files touched:
- e2e/critical-flows.spec.ts
- e2e/homepage.spec.ts
- e2e/performance.spec.ts
- package-lock.json
- package.json
- public/llms.txt
- public/locales/en/common.json
- public/sitemap.xml
- src/components/SEO.tsx
- src/components/layout/Footer.tsx
- src/components/layout/Navbar.tsx
- src/config/__tests__/site.test.ts
- src/config/site.ts
- src/data/seo-metadata.json
- src/lib/__tests__/seoTemplates.test.ts
- src/lib/seoTemplates.ts
- src/lib/utils.ts
- src/version.json

Acceptance criteria that passed:
- formatStandardTitle('X') returns 'X | BetterKananga' and formatStandardDescription names Kananga (unit test)
- SITE exposes name, domain, tagline; MUNICIPALITY exposes province Leyte, region Eastern Visayas, 23 barangays, 2020 population 59696, mayor Manuel Vicente M. Torres, vice mayor Miguel Jorge P. Tan (unit test)
- No literal BetterGov.ph string remains in SEO.tsx, seoTemplates.ts, Navbar.tsx, Footer.tsx
- English hero reads Welcome to BetterKananga with a municipal subtitle
- formatDate output no longer depends on the machine timezone (existing unit test passes here)
- lint, build and test:unit exit 0

Gate runs: 13 (5 failed)

## Known failures
- code gate, scope failed 1 time(s): 9 changed file(s) are not in the plan's "## Files to touch":
- build gate, audit failed 3 time(s): Severity: moderate
- release gate, clean tree failed 1 time(s): uncommitted changes:

## Notes
- The scope gate parses Files to touch as bare paths, one per line; path plus colon plus reason does not match and fails the gate. Reasons belong in Approach.
- Start a cycle only after stray files are committed; the first cycle counted the tooling chore commit in its diff and had to be reset.
- The audit gate needed real dependency work: the ws override moved to ^8.21.0 and npm update patched the tar, fast-uri, sharp, pacote, sigstore, vite and undici chains. One gate failure was the npm audit endpoint erroring, not the code; a retry passed.
- formatDate depended on the machine timezone and failed on machines behind UTC; it now pins Asia/Manila, which also matches what Philippine visitors expect.
- react-helmet-async 2.0.5 renders no head tags in production builds with React 19; the live bettergov.ph upstream site has the same empty title, so this predates the fork. Logged as debt; React 19 native title and meta rendering is the likely fix.
- The Vite dev server can lose Helmet head tags after a JSON hot reload; a server restart restores them. Verify titles on a fresh server before treating them as broken.
