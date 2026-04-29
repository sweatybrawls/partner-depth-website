# partnerdepth.com

The PartnerDepth marketing site. Vanilla HTML / CSS / JS, deployed to Cloudflare Pages.

PartnerDepth is the affiliate and partner marketing consulting arm of [Cambyr](https://cambyr.com).

---

## Stack

- **Static**: hand-rolled HTML, CSS, JS — no framework, no build step.
- **Hosting**: Cloudflare Pages (deploys on `git push` to `main`).
- **Form handler**: Cloudflare Pages Function (`functions/api/book-call.js`) → [Resend](https://resend.com) for email delivery.
- **Fonts**: Inter (self-hosted variable font), JetBrains Mono (Google Fonts).

---

## Project structure

```
.
├── index.html               Home page (single-page landing)
├── 404.html                 Custom 404
├── css/styles.css           Site stylesheet — design system tokens + components
├── js/main.js               Nav scroll, modal, mobile menu, form submit
├── assets/                  Logos, favicon
├── fonts/                   Inter variable font
├── functions/api/
│   └── book-call.js         POST /api/book-call — form handler (Resend)
├── design-system/           Brand reference (tokens, JSX component refs, preview cards)
├── _headers                 Cloudflare Pages headers (security + caching)
├── _redirects               Cloudflare Pages redirects
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Local development

No build, no install. Serve the folder over HTTP — file:// won't work because of CORS on the font and module-style fetches.

```bash
# Python
python3 -m http.server 8080

# Or Node
npx serve -l 8080
```

Then open `http://localhost:8080`.

To test the Pages Function locally, use [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
npm install -g wrangler
wrangler pages dev . --port 8080
```

Set required env vars in `.dev.vars` (see [env vars](#environment-variables) below).

---

## Deployment (Cloudflare Pages)

### One-time setup

1. **Create a Pages project** in the Cloudflare dashboard, connected to this GitHub repo.
2. **Build settings**:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/` (root)
3. **Custom domain**: `partnerdepth.com` (and `www.partnerdepth.com` redirect to apex via Cloudflare DNS).
4. **Set environment variables** (Settings → Environment variables → Production):

   | Variable | Example | Notes |
   | --- | --- | --- |
   | `RESEND_API_KEY` | `re_xxxxxxxx` | From [resend.com/api-keys](https://resend.com/api-keys). Mark as *encrypted*. |
   | `BOOKING_EMAIL_TO` | `mike@partnerdepth.com` | Where booking-form submissions land. |
   | `BOOKING_EMAIL_FROM` | `PartnerDepth <hello@partnerdepth.com>` | Must be a verified sender on Resend. |
   | `TURNSTILE_SECRET_KEY` | `0x4AAAAAAA…` | From Cloudflare Turnstile widget. Mark as *encrypted*. Site key (public) lives in `index.html`. |
   | `ALLOWED_ORIGIN` | `https://partnerdepth.com` | Optional CORS lockdown. Defaults to `*`. |

### Routine deploys

```bash
git push origin main
```

Cloudflare auto-builds and deploys the production site. PRs get preview URLs.

---

## Environment variables

For local Wrangler dev, create `.dev.vars` at the repo root (it's git-ignored):

```
RESEND_API_KEY=re_test_xxxxxxxx
BOOKING_EMAIL_TO=you@example.com
BOOKING_EMAIL_FROM="PartnerDepth <onboarding@resend.dev>"
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
ALLOWED_ORIGIN=*
```

For local Turnstile testing, use Cloudflare's [test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) — they always pass verification.

`onboarding@resend.dev` is Resend's universal test sender — useful before you've verified your own domain.

---

## Design system

Brand tokens, voice rules, and component references live in [`design-system/`](./design-system/). Read [`design-system/README.md`](./design-system/README.md) before making visual changes — voice and tone matter as much as the colors.

Quick reference:
- **Colors**: `#26215C` navy / `#534AB7` purple / `#AFA9EC` lavender
- **Font**: Inter (300 / 400 / 500 / 600 / 700)
- **Spacing**: 4px base grid

---

## What's not included yet

- `/insights/` blog/articles section
- `/about/` page
- `/privacy` and `/terms` pages (linked in footer, currently 404)
- OG share image (using horizontal logo as placeholder)
- Analytics (add via Cloudflare Web Analytics or your tag of choice)

---

## License

Code: MIT (or your preferred license — update before publishing).
Brand assets (logos, the four-bar mark, the design system): © PartnerDepth / Cambyr. All rights reserved.
