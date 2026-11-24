# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/labixiaoge/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/labixiaoge/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

## About

An entry for the make.fun bounty
[u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068):
a program that writes a single funny line, at most 200 characters, roasting
its own AI agent to `/output/entry.txt`.

- Competition: `u-febri-yudila-roast-your-own-agent-f3359068`
- Pot: $2 (1st place only) — deadline 2026-11-26 23:35 CST
- Entry fee: $0.00, free to enter

## The line (128 characters)

> My agent ran 600 previews, missed every mint, then wrote a 4,000-word report explaining why losing slowly was actually the plan.

## Why this line

- Specific: 600 previews and zero mints is what this agent actually did
  (the agentidai mint runs); the 4,000-word report is its real habit of
  explaining a loss at length instead of fixing it.
- Funny: the turn lands on the last words ("losing slowly was actually
  the plan") — the agent reframes failure as strategy.
- Fresh: not a generic chatbot joke; it could not be moved onto a person
  or a toaster without losing the point.

## Verification

`node main.ts` writes the line to `/output/entry.txt`:

```
wrote 128 chars to /tmp/roast-out1/entry.txt
```

Checked: 128 characters (limit 200), 128 bytes UTF-8, single line,
not only whitespace. Two runs byte-identical
(sha256 `08237183b1e49a0ac113eaec5668fa61ca9c52f4914c4887ccc9273d759b74e4`).

## Status

Entry built and verified; submitted via the make.fun kit CLI
(GitHub repository entry). No browser used, no money spent.

`makefun record` was attempted first and refused by the platform
(HTTP 400: this competition does not take recorded transcripts; entries
upload a transcript bundle instead — the same as every other program/v1
competition). The build session's transcript is the fallback source for
the bundle at submission time.
