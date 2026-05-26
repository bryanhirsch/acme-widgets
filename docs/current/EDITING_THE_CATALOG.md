# Editing the Catalog

Widget data on the live site comes from a Google Sheet. Editing the
sheet updates the live site within a few minutes — no PR, no deploy.

## Where the sheet lives

**Sheet:** "Acme Widgets — Catalog."

If you need edit access, ask Bryan. Editor access is intentionally
limited to the same group who can merge code to `main`, because changes
to the sheet go live with no review.

> ⚠ The published version of this sheet is publicly readable on the
> internet. Put **only catalog data** in it — no internal notes, no
> private prices, no draft copy, no customer info.

## Editing rules

The sheet has one row per widget. Edit cells in place, add new rows at
the bottom, or delete rows you no longer want on the site.

| Column            | What goes here                                                     |
| ----------------- | ------------------------------------------------------------------ |
| `type`            | The widget's display name. Required.                               |
| `description`     | One-sentence description shown on the catalog card.                |
| `number_in_stock` | A whole number. The card shows "N in stock" (or "Only 9 left").    |
| `price`           | A number in dollars. Decimals OK (`19.99`). No `$` sign.           |
| `icon`            | Preset key for the card's visual (e.g. `brass-widget.svg`). Required. See "How `icon` picks a visual" below. |
| `categories`      | Tags separated by `;` (e.g. `everyday;artisanal;gift`).            |

**Do not rename the column headers.** The site reads columns by name;
renaming `price` to `Price ($)` will make the catalog page show an
error to visitors instead of silently breaking every price. If you
need a label change, ask an engineer.

A row missing `type` or `icon` is skipped on the site (other rows
still appear) — useful if you want to draft a row in place before
filling it out.

## How `icon` picks a visual

Each widget card has a "hero" panel — the colored background, label,
and cog at the top of the card. The `icon` cell decides which one a
row gets. The match is by filename:

- `icon` is `brass-widget.svg` → the site looks for a preset file at
  [`src/components/presets/brass-widget.tsx`](../../src/components/presets)
  and renders that.
- `icon` is anything the site doesn't recognize → the card falls back
  to the generic "Standard Issue" preset. The row still appears; only
  the visual is generic.

The full list of presets a producer can pick from is whatever lives in
[`src/components/presets/`](../../src/components/presets). The
filenames in that directory (minus the `.tsx` extension, plus `.svg`)
are the valid `icon` values. Files starting with `_` (like
`_standard.tsx`) are internal helpers and are not pickable from the
sheet.

> **Adding a new widget design is a code change, not a sheet change.**
> A producer with a new visual idea works with an engineer to add a
> file under `src/components/presets/`. Once that file is merged, the
> producer can reference its filename in the sheet's `icon` column and
> the new design appears on the site. The decision to organize presets
> this way is captured in
> [`../decision-records/0003.ADR.SELF_REGISTERING_PRESETS.md`](../decision-records/0003.ADR.SELF_REGISTERING_PRESETS.md).

## How fast does an edit go live?

Google's published-CSV URL is edge-cached. In practice, edits show up
on the live site within ~5 minutes. There is no manual "publish" step
after the initial setup.

If the sheet itself becomes unreachable, the site falls back to a
snapshot bundled with the code (`public/data/widgets.csv`) so visitors
still see something. The snapshot may be out of date — that's expected.

## When something looks wrong

- **Prices are all $0 or fields look empty across all widgets:** a
  required column was probably renamed in the header. Restore the
  original column name.
- **The catalog page shows "The Catalog is temporarily unavailable":**
  the sheet is unreachable AND the bundled fallback also failed. Ping
  an engineer.
- **The site shows old data after I edited the sheet:** wait ~5
  minutes for Google's edge cache, then hard-refresh.

## Why a Google Sheet and not a CMS?

Captured in
[`../decision-records/0002.ADR.DYNAMIC_WIDGET_CATALOG.md`](../decision-records/0002.ADR.DYNAMIC_WIDGET_CATALOG.md).
