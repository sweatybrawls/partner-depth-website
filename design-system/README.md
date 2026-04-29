# PartnerDepth Design System

**PartnerDepth** is an affiliate and partner marketing consulting firm specializing in strategy for affiliate programs in the web hosting, WordPress plugin, and SaaS verticals. It is the affiliate-specific consulting arm of **Cambyr** (the founder's broader personal brand).

The brand promise is **strategy depth + analytical rigor** — going deeper than program-management consultants typically do. The visual identity reflects that: deep navy (depth), purple (analytical edge), and a mark of four horizontal lines fading from quiet to bright — a literal depth gauge.

This design system is the source of truth for every PartnerDepth artifact: site, decks, proposals, reports, social.

---

## Sources used to build this system

- **Brand guidelines**: pasted into the project as a Claude system prompt — colors, voice, audience, industry context. The full text lives in this README's *Content Fundamentals* and *Visual Foundations* sections.
- **Logos** (provided as PNG):
  - `assets/pd_primary_mark.png` — icon-only mark (the four-bar depth glyph on a navy rounded square)
  - `assets/partnerdepth_horizontal.png` — mark left, wordmark right
  - `assets/partnerdepth_vertical.png` — mark above wordmark
- **GitHub repo**: `sweatybrawls/partner-depth-website` — contains only a placeholder README (24 bytes). No production code yet, so the website UI kit in this project is a *first-pass design proposal* rooted in the brand guidelines, not a recreation of an existing site.
- **Parent brand**: Cambyr (cambyr.com). No Cambyr assets were provided; this system covers PartnerDepth only.

---

## Index

| File / folder | What's in it |
| --- | --- |
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | Single source of truth for color tokens, type scale, spacing, radii, shadows, motion. Import this into every artifact. |
| `assets/` | Logos and any brand imagery. |
| `preview/` | Small HTML cards used to populate the Design System tab. Each one previews a single token group or component. |
| `ui_kits/website/` | First-pass UI kit for partnerdepth.com — components + an interactive index.html. |
| `SKILL.md` | Agent Skill manifest; lets this system be loaded as a Claude skill. |

---

## Brand quick reference

| | |
| --- | --- |
| **Name** | PartnerDepth |
| **Domain** | partnerdepth.com |
| **Parent** | Cambyr (cambyr.com) |
| **Primary color** | `#26215C` — deep navy |
| **Accent** | `#534AB7` — medium purple |
| **Light** | `#AFA9EC` — soft lavender |
| **Font** | Inter (300 / 400 / 500 / 600 / 700 / 800), JetBrains Mono for code/numerics |
| **Mark concept** | Four horizontal lines fading from low opacity to full white — depth |

---

## Content Fundamentals

PartnerDepth copy reads like a sharp operator wrote it. Not a consultant trying to look busy.

### Voice

- **Direct and business casual.** No fluff, no filler, no corporate speak.
- **Analytical.** Lead with data, back claims with numbers, think in frameworks.
- **Confident without arrogance.** We know our space. We don't oversell.
- **Grounded and approachable.** Not agency-speak. Not overly formal.

### Person and address

- **"We"** for PartnerDepth as a firm. **"You"** when speaking to the reader / prospect.
- First-person singular ("I") is appropriate in founder-voice content (LinkedIn posts, intro emails).
- Avoid third-person ("PartnerDepth helps clients…") in marketing copy — it reads like an agency boilerplate.

### Casing and structure

- **Sentence case** for headers, buttons, and nav. Title Case is reserved for proper nouns and the wordmark.
- **UPPERCASE with wide tracking** for eyebrows (small section labels above an H1/H2). This matches the wordmark's "DEPTH" treatment and is a signature.
- Headers and short sections over walls of text. **Bullets for lists, prose for narrative.**
- **Bold only for key terms or labels** — never for emphasis mid-sentence.

### Vocabulary

| Use | Avoid |
| --- | --- |
| Affiliate program, partner program, channel | "ecosystem", "leverage" (as a verb) |
| Strategy, framework, audit, scorecard | "synergy", "best-in-class" |
| Incrementality, EPC, AOV, reversal rate | "game-changing", "revolutionary" |
| Web hosting, WordPress plugin, SaaS | "thought leadership" (as a self-descriptor) |
| Publisher, partner, advertiser | "rockstar", "ninja", "guru" |

### Tone examples

**Good (PartnerDepth):**

> Most affiliate programs report on clicks and conversions. Few measure incrementality. Without it, you can't tell which partners are driving new revenue and which are picking up customers you would have closed anyway.

**Wrong (generic agency):**

> In today's dynamic digital landscape, our team leverages cutting-edge analytics to drive synergy across your entire affiliate ecosystem and unlock game-changing growth.

### Numbers and specifics

Use specific numbers wherever possible: percentages, dollar ranges, EPC figures, time-to-launch estimates. Round honestly (e.g. "~12% lift", not "12.34% lift") unless reporting actual measured results.

### Emoji and decorative chars

**No emoji** in proposals, reports, the website, or marketing email. Acceptable in informal LinkedIn posts but used sparingly. **No unicode decorations** (✨, 🚀, ✅) as bullet replacements. Use real bullets, real checkmarks-as-glyphs (`✓`) only inside intentional UI components, never as decoration.

---

## Visual Foundations

### Colors

**Brand core (always in this order):**

| Token | Hex | Use |
| --- | --- | --- |
| `--pd-navy` | `#26215C` | Primary text, dark surfaces, the mark, primary buttons |
| `--pd-purple` | `#534AB7` | Accents, links, secondary CTAs, the "DEPTH" wordmark |
| `--pd-lavender` | `#AFA9EC` | Subtle tints, hover states, decorative shapes |

A **navy scale** (50 → 950) and a **neutral ink scale** (50 → 950, slightly tinted toward navy to feel cohesive) are defined in `colors_and_type.css`. The neutrals are warm-cool — pure greys read cold against the navy.

**Status colors** are deliberately muted (no neon greens, no electric reds). The brand is analytical and trustworthy; neon undermines that.

### Typography

- **One typeface: Inter.** Weights used: 300 (light, for "DEPTH"-style accents), 400 (body), 500 (UI labels), 600 (subheads), 700 (headlines), 800 (rarely — display only).
- **JetBrains Mono** for inline code, table numerics that need to align, and SQL/formula snippets in reports.
- **Tabular numerals** (`font-variant-numeric: tabular-nums`) on every metric, table cell, and dashboard figure.
- **Tight letter-spacing on display** (`-0.02em`), **wide tracking on eyebrows** (`0.16em` — matches the wordmark's "DEPTH").
- **Sentence case** everywhere except eyebrows (uppercase) and the wordmark itself.

### Spacing & layout

- **4px base grid.** All spacing is a multiple of 4 (8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128).
- **Generous vertical rhythm.** Marketing sections use 96–128px of vertical padding; data-dense surfaces (proposals, reports) tighten to 24–48px.
- **12-column grid** at 1200px max content width for the website. Proposals/reports are single-column at ~720px max.

### Backgrounds

- **Mostly white.** The brand reads as a quiet, analytical document — not a maximalist marketing site.
- **Navy hero / footer** as the contrast moment. The navy is `#26215C`, not a gradient.
- **Subtle lavender washes** (`--bg-tint: #F4F3FC`) for alternating sections — never large purple gradients, which feel SaaS-tropey.
- **No hand-drawn illustrations, no photography** in the core system. Imagery is reserved for case studies and is always desaturated/cool-toned to harmonize.
- **No repeating patterns.** The mark itself (four horizontal lines) can be enlarged as a decorative motif at low contrast in the hero or footer.

### Borders, radii, shadows

- **Borders** are 1px, `--border-1` (`#E5E4E9`). Use sparingly — prefer whitespace + type weight to separate sections.
- **Radii**: `4 / 8 / 12 / 16 / 20` px. The **mark itself uses `~20px` corner radius** at its native ~80px size; cards on the site mirror this proportionally (`12px` for small cards, `16–20px` for large).
- **Shadows** are restrained and **navy-tinted** (`rgba(38,33,92, 0.06–0.12)`), never grey or black. Three levels: `xs` for input depth, `sm` for resting cards, `md` for hover/active. **No `lg` drop shadows in marketing** — they feel hyped.

### Motion

- **Ease-out** for entrances (`cubic-bezier(0.2, 0.7, 0.2, 1)`), **ease-in-out** for state changes.
- Durations: **120ms** (hover/press), **200ms** (default), **320ms** (panel/modal).
- **No bounces, no springs, no parallax.** The brand is restrained.
- Fades and small (4–8px) translations are the only allowed entrance animations.
- Numbers in metric callouts may count up on first scroll-into-view (fast — under 600ms).

### Hover & press states

- **Buttons (primary)**: hover darkens `--pd-navy` by ~6%, press by ~10%. No scale.
- **Buttons (secondary)**: hover fills with `--bg-tint`, border deepens to `--pd-purple`.
- **Links**: underline on hover, 3px offset.
- **Cards**: hover raises shadow from `xs` → `sm`, no movement. Optional 1px lift only on portfolio/case-study cards.
- **Inputs**: focus ring is `--shadow-focus` (3px purple at 32% alpha). Never a 2px solid border on focus — too harsh.

### Transparency & blur

- **Sparingly.** The header may use a 90%-white backdrop with a 6px blur when scrolled. Modal overlays use navy at 40% alpha.
- The mark's signature gradient (the four bars fading from low to full opacity) is brand-only — do not replicate that effect on arbitrary UI elements.

### Cards

- White background, 1px `--border-1`, **no shadow at rest**, `--shadow-sm` on hover, `12–16px` radius. That's the default.
- Dark cards (navy bg) for testimonials and stat callouts: white text, no border, optional `--pd-purple` accent line.

### Layout rules

- **Sticky header** on the website (white, blurred when scrolled). 64px tall.
- **No floating CTAs**, no popups, no exit-intent modals. Out of brand.
- **Footer is navy**, full-bleed, with the vertical lockup top-left and four columns of links.

---

## Iconography

**No icon set was shipped with the brand.** This system uses **[Lucide](https://lucide.dev)** — single-line, 1.5px stroke, rounded caps — loaded from CDN. Lucide harmonizes with Inter (geometric, even weight) and reads as analytical rather than playful.

**Substitution flag:** Lucide is a substitution. If the founder selects a different icon system later (e.g. Phosphor, Tabler), swap the CDN reference in `colors_and_type.css` consumers and re-render. Stroke weight should remain `1.5px` for visual consistency with Inter at body sizes.

**Rules:**

- Stroke `1.5px`, rounded caps and joins.
- Color follows text color by default (`currentColor`); accent purple (`--pd-purple`) reserved for active/selected states.
- **Sized in 16 / 20 / 24 px.** Never scale below 14 — strokes break.
- **No emoji.** No unicode dingbats. The brand's analytical voice is undermined by 📊 and 🚀.
- **No drawn illustrations** in this system. If a section calls for visual texture, use **the four-bar mark as a motif** at low opacity, or a desaturated stock photo (case studies only).

**The mark itself** is the system's strongest visual asset. Use it generously — at hero scale as a decorative motif, in proposal headers, on social cards. Never recolor the four-bar gradient; the fade from low-opacity-on-navy to full-white is the brand.

---

## How to use this system

1. Import `colors_and_type.css` at the top of any HTML artifact.
2. Use semantic classes (`t-display`, `t-eyebrow`, `t-body`) over hand-styling.
3. Pull logos from `assets/`. Do not redraw the mark.
4. Reference the UI kit in `ui_kits/website/` for navigation, hero, button, and card patterns.
5. Read the *Content Fundamentals* section before writing any copy. The voice is the brand more than the visuals are.

---

## Caveats

- The website UI kit is a **first-pass proposal**, not a recreation — the codebase repo is currently empty.
- **Inter is now self-hosted** from `fonts/Inter-VariableFont_opsz_wght.ttf` (variable font, opsz + wght axes). JetBrains Mono is still loaded from Google Fonts — supply a local file if self-hosting is required there too.
- **No Cambyr (parent brand) assets** were provided. This system covers PartnerDepth only.
