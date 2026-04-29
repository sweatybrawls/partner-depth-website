# PartnerDepth Website UI Kit

A first-pass UI kit for **partnerdepth.com**. The repo (`sweatybrawls/partner-depth-website`) is currently a placeholder, so this is a design *proposal* rooted in the brand guidelines — not a port of an existing site.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Interactive demo: nav → hero → services → process → metrics → case study → CTA → footer. Click-through "Book a call" opens a modal. |
| `Nav.jsx` | Sticky top nav (white, blur on scroll). Horizontal lockup left, links center, CTA right. |
| `Hero.jsx` | Headline + subhead + dual CTA, with the four-bar mark as a low-opacity decorative motif. |
| `Services.jsx` | Three service cards. Light surface, eyebrow + title + body. |
| `Process.jsx` | Four-step process strip — numbered, monospace step counter. |
| `Metrics.jsx` | Dark navy band with three tabular metric callouts. |
| `CaseStudy.jsx` | Pull-quote-style block with attribution. |
| `Footer.jsx` | Navy full-bleed footer with vertical lockup + four columns. |
| `BookCallModal.jsx` | Modal w/ form. Closes on backdrop click or Esc. |

## Components are intentionally simple
This is mainly cosmetic React. State is local; nothing is wired to a backend; the form is a no-op. Use these as visual references when the production site is built.
