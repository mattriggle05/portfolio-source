# Portfolio style comparison

This branch (`codex/style-switcher`) contains all six registered themes with one shared page and layout. Run `npm run dev` and use the **Style concept** selector above the page. Selection changes the theme and portrait without reloading; the URL records the choice (for example, `?style=01`, `?style=nocturne`, or `?style=vector`) and restores it on reload. Invalid or missing choices default to Field Atlas.

| Style | Theme file |
| --- | --- |
| 01 · Field Atlas | `src/styles/themes/01.css` |
| 02 · Blue Hour | `src/styles/themes/02.css` |
| 03 · Signal Studio | `src/styles/themes/03.css` |
| 04 · Porcelain / Oxblood | `src/styles/themes/04.css` |
| Nocturne | `src/styles/themes/nocturne.css` |
| Vector | `src/styles/themes/vector.css` |

All themes live together on `codex/style-switcher`. Work directly on that branch when adding or editing themes: **stay on the same branch; do not create another branch, worktree, or separate checkout.** Commit each addition to `codex/style-switcher`.

Artwork is namespaced under `public/images/themes/<id>/`. Only one theme stylesheet is active at a time. The selector lives outside the bento grid and does not change its geometry.

## Adding a theme

`src/themes/registry.ts` is the single source for theme IDs, labels, stylesheet URLs, portrait URLs, and alternative text. The first entry is the default. IDs are stable bookmark keys, independent of file names or numeric ordering. Invalid URL keys fall back to the first entry. Duplicate IDs and incomplete metadata fail the build.

1. Create an independent stylesheet in `src/styles/themes/<id>.css`. It runs over the shared layout defaults, without any other theme active.
2. Add artwork to `public/images/themes/<id>/` and reference it with absolute `/images/themes/<id>/...` URLs. Provide a portrait file even if the theme hides it.
3. Import the stylesheet using `?url` in `src/themes/registry.ts` and append a `{ id, label, stylesheet, portrait, portraitAlt }` entry. Keep existing IDs stable. No switcher, layout, or image-component edits are required.
4. Build, run Astro checks, and inspect the new theme in the browser. Verify selection, switching back, bookmarked URLs, invalid URL fallback, and responsive fit.

An entry looks like this (with a matching stylesheet import):

```ts
import example from '../styles/themes/example.css?url';
// Append inside themes:
{ id: 'example', label: 'Example', stylesheet: example,
  portrait: '/images/themes/example/portrait.svg',
  portraitAlt: 'An accurate description of the new portrait artwork' },
```

Use [the ready-to-send agent prompt](docs/add-theme-prompt.md) to commission another theme.

`src/styles/global.css` imports structural defaults into a lower-priority CSS layer; `BaseLayout.astro` renders the registered theme stylesheet links. Keep `src/styles/layout.css` intact: it defines page dimensions, the 12-column / 7-row grid, aspect ratio, gaps, component alignment, and reserved visual slots. The existing 640px minimum viewport width is retained. The selector derives its options from the registry and stays outside the grid.

Preserve the component tree, content, order, and these grid areas in `src/components/BentoGrid.astro`:

| Component | Grid area (row start / column start / row end / column end) |
| --- | --- |
| TextBoxTile | 1 / 1 / 4 / 7 |
| ImageTile | 1 / 7 / 5 / 10 |
| ProjectsTile | 1 / 10 / 5 / 13 |
| LocationTile | 5 / 10 / 8 / 13 |
| ContactTile | 4 / 5 / 6 / 7 |
| TechnologyTile | 6 / 5 / 8 / 10 |
| ResumeTile | 5 / 7 / 6 / 10 |
| SignatureProjectTile | 4 / 1 / 8 / 5 |

Each theme controls its decorative artwork and preview visibility while preserving the reserved slots. Buttons retain their existing placeholder behavior.

Suggested model instruction:

> Develop a new visual style using the selected theme file and its decorative assets. Preserve every component, its content and order, all eight grid areas, the outer grid dimensions, and the internal component arrangement. You may change padding, typography, colors, rounding, borders, shadows, and decorative SVGs/backgrounds. Do not add, remove, reorder, or resize tile spans.

Validate changes with `npm run build` and `npx astro check`, then inspect the rendered page.
