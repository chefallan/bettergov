---
name: rebrand-all-locale-strings-and-seo-metadata-to-betterkananga
title: Rebrand all locale strings and seo metadata to BetterKananga
created: 2026-09-04T23:23:32.065Z
updated: 2026-09-04T23:23:32.065Z
runs: 1
completed: 1
abandoned: 0
gateFailures: 1
lastCycle: 20260904-b848b4
tags: rebrand, locale, strings, seo, metadata, betterkananga, e2e, public, src
---
# Rebrand all locale strings and seo metadata to BetterKananga

## When to use
Requests like:
- "Rebrand all locale strings and seo metadata to BetterKananga"

## Playbook
Files touched:
- e2e/critical-flows.spec.ts
- public/locales/bcl/common.json
- public/locales/ceb/common.json
- public/locales/fil/common.json
- public/locales/hil/common.json
- public/locales/ilo/common.json
- public/locales/krj/common.json
- public/locales/mag/common.json
- public/locales/mdh/common.json
- public/locales/pag/common.json
- public/locales/pam/common.json
- public/locales/tsg/common.json
- public/locales/war/common.json
- src/data/__tests__/brandTokens.test.ts
- src/version.json

Acceptance criteria that passed:
- No common.json in any of the 13 locales contains a BetterGov token (unit test)
- Every locale carries a navbar.kananga label (unit test)
- Filipino, Cebuano and Waray hero subtitles name the Municipality of Kananga
- lint, build and test:unit exit 0

Gate runs: 9 (1 failed)

## Known failures
- code gate, diff size failed 1 time(s): 470 changed line(s) exceeds the limit of 400. split the work into another cycle or raise practices.maxDiffLines

## Notes
- The diff gate caught the locales plus seo-metadata at 470 lines; splitting per the gate remedy left this cycle at 117 and the seo-metadata rebrand in a git stash for its own cycle, with its test case moved along.
- Text level replacements on the JSON files kept the unicode escapes intact and the diff readable; JSON parse and stringify only where a key had to be added.
- The reviewer mutation tested the brand token guard by injecting a token and watching the test fail; worth repeating for guard style tests.
