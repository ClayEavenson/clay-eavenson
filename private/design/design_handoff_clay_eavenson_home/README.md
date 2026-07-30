# Handoff: Clay Eavenson — Home Page ("Sit Down, Shut Up, Hold On")

## Overview

The author home page for Clay Eavenson, built around his book *Sit Down, Shut Up, Hold On:
Lessons From a Life of Big Dreams, Insanely Bad Circumstances, and Starting Over*.

The page's job, in order: state the book exists and is available, sell it in one gold-field
statement, explain what it is, introduce Clay, land the pull-quote, and take a message.
Global nav carries **Home / About / The Book / Contact** plus a highlighted **Buy The Book**
button. About / The Book / Contact are separate pages, not yet designed — nav links point at
`/about.html`, `/the-book.html`, `/contact.html`.

## About the design files

The files in this bundle are **design references created in HTML** — a prototype of the
intended look and behavior, not production code to lift wholesale. The task is to **recreate
this design in the target codebase's environment** (Next.js, Astro, WordPress theme, whatever
is being used) with its established patterns, component library, and build tooling. If no
environment exists yet, pick the most appropriate stack for a small marketing site and
implement there.

`index.html` + `styles.css` are a faithful, self-contained static build of the final design —
open `index.html` in a browser to see exactly what to match. Use them as the source of truth
for structure, spacing, and color; port them into components rather than shipping them as-is.

## Fidelity

**High fidelity.** Colors, type, spacing, rules, and hover states are final. Recreate the UI
pixel-accurately at the 1440px design width. Copy is final except where flagged as placeholder
below.

---

## Design tokens

Declared as CSS custom properties at the top of `styles.css`.

### Color

| Token | Hex | Use |
| --- | --- | --- |
| `--ink` | `#0b0c0d` | Page background |
| `--ink-2` | `#141312` | Raised band (About), form inputs |
| `--rule` | `#2b2a28` | Every 2px divider and border |
| `--rule-strong` | `#3a3835` | Outline-button border |
| `--bone` | `#eeeae4` | Default text |
| `--bone-bright` | `#f3f0ec` | Headings |
| `--body` | `#bdb7ae` | Paragraph copy |
| `--subtle` | `#cfc9c1` | Nav links, hero subtitle |
| `--muted` | `#8e8a85` | Field labels, contact list |
| `--dim` | `#6f6a63` | Footer, meta, input placeholders |
| `--gold` | `#d99a2b` | **Sole accent** — CTAs, eyebrows, poster field |
| `--gold-hi` | `#f0b95c` | Hover / focus tint |
| gold pressed | `#c98a1f` | `:active` on primary buttons |

Gold is used sparingly — primary actions, small emphasis, and exactly one full field (the
poster band). Everything else is bone on ink.

### Typography

**Archivo** (Google Fonts), variable, both width and weight axes:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..900;1,62..125,400..900&display=swap">
```

Display headings use the **width axis** via `font-stretch` — this is what gives the condensed,
poster-like caps that match the book cover. It must be the variable font; a static Archivo will
render wide and wrong.

| Role | Size / line-height | Weight | `font-stretch` | Transform | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | 92px / 0.86 | 900 | 62% | uppercase | -0.01em |
| Hero H1 "Hold On" | same | 900 | 70% | uppercase + **italic**, gold | -0.01em |
| Section H2 | 56px / 0.94 | 900 | 64% | uppercase | normal |
| Poster lead | 44px / 1.02 | 900 | 66% | uppercase | normal |
| Poster tag | 30px / 1.05 | 900 | 70% | uppercase + italic | normal |
| Book lede | 30px / 1.26 | 600 | normal | none | normal |
| Statement pair | 26px | 800 | 76% | none | normal |
| Hero subtitle | 20px / 1.4 | 400 | normal | none | normal |
| Body copy | 17px / 1.62 | 400 | normal | none | normal |
| Cell copy | 16px / 1.62 | 400 | normal | none | normal |
| Brand mark | 19px | 800 | 72% | uppercase | 0.2em |
| Nav link | 13px | 700 | normal | uppercase | 0.15em |
| Button label | 14px | 800 | normal | uppercase | 0.1em |
| Eyebrow | 12px | 800 | normal | uppercase | 0.24em |
| Field label / cell label | 11px | 800 | normal | uppercase | 0.2em |
| Footer | 12px | 800 | normal | uppercase | 0.2em |

Body copy gets `text-wrap: pretty`.

### Spacing & structure

- Design width **1440px**, centered, `max-width` capped there.
- Page gutter `--pad: 56px` (40px ≤1200, 24px ≤720).
- **Border radius is 0 everywhere. Do not round anything.**
- Every divider is **2px solid `--rule`** — section tops/bottoms, grid gaps, input borders.
  Do not soften these to 1px hairlines.
- Grid gaps that read as rules are `gap: 2px` over a `--rule` background.
- Everything is flush left, including labels inside full-width buttons.
- No shadows. Nothing floats.

---

## Screens / views

One screen: the home page. Sections in DOM order.

### 1. Header — `.site-header`

Flex row, `space-between`, height **88px**, padding `0 56px`, `border-bottom: 2px solid --rule`.

- **Brand** (left): "CLAY EAVENSON", 19px/800, `font-stretch: 72%`, `letter-spacing: 0.2em`,
  uppercase, `--bone`. Links to `/`.
- **Nav** (right): flex, `gap: 36px` — Home / About / The Book / Contact, then the CTA.
  - Links 13px/700, `letter-spacing: 0.15em`, uppercase, `--subtle`; hover `--gold-hi`.
  - Current page link is `--gold` (`.is-current`, plus `aria-current="page"`).
  - **Buy The Book**: solid `--gold` fill, `--ink` label, padding `16px 26px`, 13px/800,
    `letter-spacing: 0.12em`. Hover `--gold-hi`. Links to the Amazon listing.
- Header does **not** stick on scroll in this design. If the codebase prefers a sticky header,
  keep the 2px bottom rule and the solid `--ink` background — no blur, no shadow.
- **Mobile**: the CSS collapses the row into a wrapping stack ≤720px as a stub. Replace it with
  the codebase's real menu pattern (hamburger + drawer), keeping Buy The Book always visible.

### 2. Hero — `.hero`

Grid `1fr 620px`, `border-bottom: 2px solid --rule`.

**Left cell** `.hero-copy` — padding `64px 48px 56px 56px`, flex column, `space-between`.
- Kicker: 9×9px gold square rotated 45° + "AVAILABLE NOW" (eyebrow style). `margin-bottom: 30px`.
- H1: "Sit Down," / "Shut Up," / "*Hold On*" on three lines. First two lines `--bone-bright`;
  "Hold On" is italic + `--gold` at `font-stretch: 70%`. `margin-bottom: 26px`.
- Gold underline bar: 180 × 6px, `--gold`, `margin-bottom: 28px`.
- Subtitle: the book's subtitle, 20px/1.4, `--subtle`, `max-width: 520px`.
- Actions (bottom-aligned, `margin-top: 48px`, `gap: 14px`, each `flex: 1`):
  - **Buy the book** — primary gold, label flush left, `→` pushed right.
  - **About Clay** — outline, 2px `--rule-strong`, same layout.

**Right cell** `.hero-art` — `border-left: 2px solid --rule`, black background,
`assets/book-cover.png` at `object-fit: cover`, full height, with a radial vignette overlay
(`radial-gradient(100% 70% at 50% 45%, transparent 50%, rgba(0,0,0,0.45) 100%)`, pointer-events
none). The cover art stays **full color** — it is artwork, not photography.

### 3. Poster statement — `.poster`

The one place gold runs as a field. Background `--gold`, text `--ink`, padding
`52px 56px 56px`, grid `1fr auto`, `gap: 64px`, `align-items: end`.

- Left: "Life is unpredictable. Life is painful. Life is hilarious. Life is amazing." — 44px/1.02,
  900, `font-stretch: 66%`, uppercase.
- Right: "So sit down. / Shut up. / Hold on." — 30px/1.05, 900, `font-stretch: 70%`, italic,
  uppercase, `white-space: nowrap`, three lines.

### 4. The Book — `.book`

Padding `78px 56px 0`.

- Section head: "THE BOOK" eyebrow, 2px rule filling the middle, "PAPERBACK & KINDLE" meta right.
  `margin-bottom: 44px`.
- Lede: 30px/1.26, weight 600, `--bone-bright`, `max-width: 1040px`; the closing sentence
  "They are all part of Clay Eavenson's story." is `--gold`. `margin-bottom: 56px`.
- Three equal cells, `gap: 2px` on a `--rule` background, 2px rules top and bottom.
  Each cell: `--ink` background, padding `34px 30px 38px`; **first cell has no left padding,
  last cell no right padding** so the copy stays flush with the page gutters.
  Labels: HONEST / FUNNY / USEFUL — 11px/800, `letter-spacing: 0.2em`, `--gold`, 14px below.
- Closing row: grid `1fr auto`, `gap: 56px`, `align-items: center`, padding `46px 0 78px`.
  Two statement lines (26px/800, `font-stretch: 76%`) — first `--bone-bright`, second `--gold` —
  and a primary **Buy on Amazon** button on the right (`gap: 44px`, padding `21px 26px`).

### 5. About — `.about`

Background `--ink-2`, `border-top: 2px solid --rule`, padding `74px 56px 78px`,
grid `1fr 1fr`, `gap: 72px`, `align-items: start`.

- Left: "ABOUT CLAY" section head; H2 "Chased the dream. / Lost the plot. / Started over."
  (three lines); two paragraphs of body copy; a `.link-underline` "Read the full story →"
  (13px/800, `letter-spacing: 0.16em`, gold, 2px gold bottom border, 8px padding-bottom).
- Right: 2×2 photo grid, `gap: 2px` on `--rule`, 2px border. Each image 250px tall,
  `object-fit: cover`. Photos 1 and 2 use `object-position: center 30%` / `center 25%`.
- **All personal photography is black & white**: `filter: grayscale(1) contrast(1.06)`.
  This is deliberate — the archive snapshots and the warm book artwork only coexist if the
  photos are desaturated. Book artwork is never filtered.

### 6. Quote band — `.quote-band`

Full-width supplied artwork `assets/quote-card.png` (the movie-theater pull quote), 2px rules
top and bottom, no padding. It carries its own typography; nothing overlays it. Alt text
transcribes the quote (see `index.html`).

### 7. Contact — `.contact`

Padding `78px 56px 80px`. Section head "CONTACT", then grid `380px 1fr`, `gap: 72px`.

- Left: H2 "Get in / touch" (48px in the prototype), one paragraph, then a list —
  email + social — at 13px/700, `letter-spacing: 0.16em`, uppercase, `--muted`.
- Right: form, grid `1fr 1fr`, `gap: 20px`. Name and Email side by side, Message and the
  submit button span both columns.
  - Labels above inputs: 11px/800, `letter-spacing: 0.2em`, `--muted`, 9px gap.
  - Inputs: `--ink-2` background, 2px `--rule` border, 0 radius, `--bone` text, 15px,
    padding `15px 14px`. Focus → border `--gold`. Textarea `rows="5"`, `resize: vertical`.
    Placeholders `--dim`.
  - Submit: full-width primary gold, label "SEND IT" flush left, `→` right, padding `20px 24px`.

### 8. Footer — `.site-footer`

Three equal cells, `border-top: 2px solid --rule`, 2px rules between cells, padding `32px 24px`
each. 12px/800, `letter-spacing: 0.2em`, uppercase, `--dim`: "© 2026 Clay Eavenson",
"Sit Down, Shut Up, Hold On", and a gold "Buy the book →" link.

---

## Interactions & behavior

- **Hover** (150ms ease on `background-color`, `border-color`, `color`):
  primary button `--gold` → `--gold-hi`; outline button border → `--gold`, label → `--gold-hi`;
  nav link → `--gold-hi`.
- **Pressed**: primary button `#c98a1f`.
- **Focus**: `outline: 2px solid var(--gold); outline-offset: 2px` on every interactive
  element. Never leave the browser default ring.
- **Selection**: `::selection` is gold field / ink text.
- No scroll animations, parallax, or reveal transitions. The page is static and flat by design.
  If motion is wanted later, keep it to opacity and small translations.
- **Contact form**: not wired. Point it at the project's form handler (Formspree, Netlify
  Forms, an API route — whatever the stack uses). Required: name, email, message. Needs an
  inline success state and an inline error state in the same visual language (2px rules, gold
  for success, no rounded alert boxes). Add spam protection (honeypot or Turnstile).
- **Buy The Book** links: currently `https://www.amazon.com/` placeholders in three places —
  header CTA, hero primary, book-section button, plus the footer link. Swap in the real Amazon
  product URL; consider `rel="noopener"` and opening in a new tab.

## State management

None beyond form state. If built in React: local state for the four form fields plus
`idle | submitting | success | error`, and a `menuOpen` boolean once the mobile nav is real.
No data fetching.

## Responsive behavior

Breakpoints in `styles.css`:

- **≤1200px** — gutter 40px; hero right column 480px; display sizes step down
  (H1 76px, H2 46px, poster 36px, lede 26px).
- **≤960px** — hero stacks (art below copy, `border-top` replaces `border-left`, art capped at
  620px tall); book cells stack to one column with gutter-flush padding; closing row stacks;
  About stacks; contact stacks; footer becomes one column with bottom rules.
- **≤720px** — gutter 24px; header becomes a stacked stub (replace with a real menu);
  H1 56px, H2 36px; hero buttons stack full width; photo grid images 180px; form single column.

Verify the poster band and the hero H1 at 375px — the condensed width axis is what keeps
"SIT DOWN," on one line; if it wraps badly, reduce `font-stretch` before reducing size.

## Assets

All in `assets/`, supplied by the client. Copy them into the project's public/static folder;
paths in the reference are relative (`assets/…`).

| File | What it is | Where used |
| --- | --- | --- |
| `book-cover.png` | 3D book cover on storm-lit shoreline (1129×1417) | Hero right cell |
| `quote-card.png` | Pull-quote artwork, movie-theater quote (1713×904) | Quote band |
| `hero-banner.png` | Wide title lockup / social header (2033×774) | **Not used** in this layout — keep for the About or The Book page, or as the OG image |
| `clay-portrait.png` | Current headshot (1249×1249) | Not used here — for the About page |
| `clay-yankees.jpg` | Yankees spring training | About grid, cell 1 |
| `clay-dekalb.jpg` | On the field after a game | About grid, cell 2 |
| `clay-paige.jpg` | Clay and Paige, portrait | About grid, cell 3 |
| `clay-paige-boat.jpg` | Clay and Paige on the water | About grid, cell 4 |
| `clay-pitching.jpg` | Pitching from the mound | Spare |
| `clay-greensboro.jpg` | In uniform, dugout | Spare |

Notes for implementation:
- Personal photos are **low-resolution scans of snapshots**. The B&W filter plus the small
  cells hides most of that, but serve them at 2× the rendered box where possible and don't
  upscale. If higher-res originals surface, swap them in.
- Serve `book-cover.png` and `quote-card.png` as WebP/AVIF with PNG fallback; they are large.
- Add `width`/`height` attributes (or `aspect-ratio`) to every `<img>` to prevent layout shift.
- The quote-card artwork is text-in-an-image — the transcribed `alt` text in `index.html` is
  required for accessibility and SEO. Long term, consider re-typesetting it in HTML.

## Copy status

Final, taken from the author, **except**:
- `hello@clayeavenson.com` — placeholder, needs the real address.
- "Facebook · Instagram" — placeholder, needs real profile URLs and icons (Lucide icon set).
- The three HONEST / FUNNY / USEFUL cells are condensed from the author's back-cover blurb —
  approved wording, but worth a final read by Clay.
- Amazon URLs are placeholders.

## Files in this bundle

```
design_handoff_clay_eavenson_home/
├── README.md      ← this document
├── index.html     ← the final design, static and self-contained
├── styles.css     ← all styling, tokens at the top
└── assets/        ← the artwork and photography
```

The live editable source of this design also exists as `Clay Eavenson Home.dc.html` in the
originating design project (option **1B** with the option 1A header bar), if the design needs
to keep evolving alongside development.
