---
name: rebrand-all-locale-strings-and-seo-metadata-to-betterkananga
title: Rebrand all locale strings and seo metadata to BetterKananga
created: 2026-09-04T23:23:32.065Z
updated: 2026-09-04T23:41:03.842Z
lastCycle: 20260904-d930dc
runs: 2
completed: 2
abandoned: 0
gateFailures: 1
tags: rebrand, locale, strings, seo, metadata, betterkananga, e2e, public, src
---
# Rebrand all locale strings and seo metadata to BetterKananga

## When to use
Requests like:
- "Rebrand all locale strings and seo metadata to BetterKananga"
- "Rebrand the remaining seo metadata routes to BetterKananga"

## Playbook
Files touched:
- src/data/__tests__/brandTokens.test.ts
- src/data/seo-metadata.json
- src/version.json

Acceptance criteria that passed:
- seo-metadata.json contains no BetterGov token (unit test)
- The accessibility route title reads Accessibility Statement | BetterKananga with a single brand suffix
- lint, build and test:unit exit 0

Gate runs: 8 (0 failed)

## Known failures
- code gate, diff size failed 1 time(s): 470 changed line(s) exceeds the limit of 400. split the work into another cycle or raise practices.maxDiffLines

## Notes
- The diff gate caught the locales plus seo-metadata at 470 lines; splitting per the gate remedy left this cycle at 117 and the seo-metadata rebrand in a git stash for its own cycle, with its test case moved along.
- Text level replacements on the JSON files kept the unicode escapes intact and the diff readable; JSON parse and stringify only where a key had to be added.
- The reviewer mutation tested the brand token guard by injecting a token and watching the test fail; worth repeating for guard style tests.
