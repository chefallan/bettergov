---
name: render-seo-head-tags-natively-so-production-builds-get-title
title: Render SEO head tags natively so production builds get titles
created: 2026-09-05T07:44:45.911Z
updated: 2026-09-05T07:44:45.911Z
runs: 1
completed: 1
abandoned: 0
gateFailures: 2
lastCycle: 20260904-beac4f
tags: render, seo, head, tags, natively, production, builds, get, src
---
# Render SEO head tags natively so production builds get titles

## When to use
Requests like:
- "Render SEO head tags natively so production builds get titles"

## Playbook
Files touched:
- package-lock.json
- package.json
- src/components/SEO.tsx
- src/components/__tests__/SEO.test.tsx
- src/main.tsx
- src/pages/ContactUs.tsx
- src/pages/Ideas.tsx
- src/pages/JoinUs.tsx
- src/pages/NotFound.tsx
- src/pages/Search.tsx
- src/pages/TermsOfService.tsx
- src/pages/about/index.tsx
- src/pages/accessibility/index.tsx
- src/pages/contribute/__tests__/Contribute.test.tsx
- src/pages/flood-control-projects/contractors.tsx
- src/pages/flood-control-projects/contractors/[contractor-name].tsx
- src/pages/flood-control-projects/index.tsx
- src/pages/flood-control-projects/map.tsx
- src/pages/flood-control-projects/table.tsx
- src/pages/kananga/__tests__/KanangaProfile.test.tsx
- src/pages/services/index.tsx
- src/version.json

Acceptance criteria that passed:
- SEO renders the DC.language meta into the document head with no provider wrapper (unit test)
- The existing SEO locale tests pass without HelmetProvider
- A production build served locally shows the BetterKananga title on / and the Municipality of Kananga title on /kananga (verified in the browser)
- react-helmet-async is out of package.json including its override pins
- lint, build and test:unit exit 0

Gate runs: 10 (2 failed)

## Known failures
- release gate, style failed 2 time(s): 3 style problem(s) in the diff. write precisely and directly:

## Notes
- Removing Helmet resurfaced hardcoded BetterGov.ph titles in 13 pages that never rendered in production before; a rebrand that relies on a broken layer stays hidden until the layer is fixed.
- The style gate scans changed lines only, so pre-existing em and en dashes fail the gate the moment a brand swap touches their line; sweep touched lines for dashes before the release gate.
- The npm peer conflict between wrangler 4.129 and @cloudflare/workers-types 4 cleared by moving the types to ^5; functions tsc was already failing before the bump with the identical error set.
- React 19 hoists title, meta and link from anywhere; inline ld+json scripts stay in the body, which crawlers accept. Duplicate metas from the global SEO plus page level tags are logged as pattern debt.
