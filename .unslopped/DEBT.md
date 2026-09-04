# Debt log

Known deviations we are deliberately not fixing in the change where they were found.
One line each, logged on the spot instead of opening a work item. Sweep the cleanup
items in one batch at a quiet moment; accepted items stay, with the reason, so nobody
re-litigates them.

Categories: cleanup (mechanical, safe to batch), pattern (a wrong shape new code would
copy; fix it before it spreads), soon (costs someone time while it exists), accepted
(evaluated and staying as is).
- [soon] Logo, favicon and OG image assets still show the BetterGov emblem; needs a Kananga seal or BetterKananga mark (public/logos) :: logged 2026-09-03, cycle 20260903-64e743
- [soon] 12 non English locale files still say BetterGov.ph in hero and footer strings (public/locales) :: logged 2026-09-03, cycle 20260903-64e743
- [soon] generate-sitemap.js and generate-llms-txt.js hardcode bettergov.ph domains (scripts) :: logged 2026-09-03, cycle 20260903-64e743
- [pattern] National content to prune or replace for a municipal site: travel and visa pages, flood control projects, PhilSys banner, national directory, forex widgets, websites.json (src/pages) :: logged 2026-09-03, cycle 20260903-64e743
- [soon] Weather and forex widgets call api.bettergov.ph; weather default city is not Kananga (src/lib) :: logged 2026-09-03, cycle 20260903-64e743
- [soon] seo-metadata.json still carries BetterGov titles and descriptions on 99 routes; only the home entry is rebranded (src/data/seo-metadata.json) :: logged 2026-09-04, cycle 20260903-48acf0
- [soon] react-helmet-async 2.0.5 renders no head tags in production builds with React 19; live bettergov.ph has the same empty document.title; consider React 19 native title and meta rendering (src/components/SEO.tsx) :: logged 2026-09-04, cycle 20260903-48acf0
- [soon] Kananga profile page body is English only and navbar.kananga exists only in the en locale; localize both when the locale files are rebranded (src/pages/kananga) :: logged 2026-09-04, cycle 20260904-a03baa
