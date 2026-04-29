---
name: partnerdepth-design
description: Use this skill to generate well-branded interfaces and assets for PartnerDepth, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Voice and content rules**: README.md → *Content Fundamentals*. Read this before writing any copy. The voice (direct, analytical, no agency-speak) is the brand more than the visuals are.
- **Visual tokens**: `colors_and_type.css`. Import this at the top of any HTML artifact. Provides colors, type scale, spacing, radii, shadows, motion variables, and semantic typography classes (`t-display`, `t-eyebrow`, `t-body`, etc).
- **Logos**: `assets/pd_primary_mark.png`, `partnerdepth_horizontal.png`, `partnerdepth_vertical.png`. Do not redraw the mark.
- **Components**: `ui_kits/website/` — Nav, Hero, Services, Process, Metrics, CaseStudy, Footer, BookCallModal. Use as references for color/type/component patterns.
- **Preview cards**: `preview/` — small token specimens; useful for confirming exact values.

## Brand quick reference

- **Colors**: `#26215C` navy (primary) / `#534AB7` purple (accent) / `#AFA9EC` lavender (light)
- **Font**: Inter (300/400/500/600/700/800) + JetBrains Mono for tabular numerics
- **Wordmark treatment**: PARTNER (Inter 700, navy) above/beside DEPTH (Inter 300, purple, wide tracking)
- **Mark concept**: four horizontal lines fading low→high opacity on a navy rounded square — depth gauge

## Don'ts

- No emoji, no unicode dingbats, no generic agency words ("synergy", "leverage", "best-in-class", "game-changing").
- No bluish-purple gradient backgrounds. No cards with rounded corners + colored left-border accent. No hand-drawn SVG illustrations.
- No drop shadows in marketing surfaces beyond `--shadow-md`.
- No bounces, springs, or parallax. Restrained motion only.
