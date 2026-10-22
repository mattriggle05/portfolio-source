# Portfolio style comparison

This branch (`codex/style-switcher`) combines the four style concepts with one shared page and layout. Run `npm run dev` and use the **Style concept** selector above the page. Selection changes the theme and portrait without reloading; the URL records the choice (`?style=01` through `?style=04`) and restores it on reload. Invalid or missing choices default to Field Atlas.

| Style | Source branch | Theme file |
| --- | --- | --- |
| 01 · Field Atlas | `codex/style-concept-01` | `src/styles/themes/01.css` |
| 02 · Blue Hour | `codex/style-concept-02` | `src/styles/themes/02.css` |
| 03 · Signal Studio | `codex/style-concept-03` | `src/styles/themes/03.css` |
| 04 · Porcelain / Oxblood | `codex/style-concept-04` | `src/styles/themes/04.css` |

Themes and assets were copied from their source branches, with image paths namespaced under `public/images/themes/01`–`04` to preserve branch-specific artwork. These are snapshots; later edits on the source branches do not synchronize automatically. Only one theme stylesheet is active at a time. The selector lives outside the bento grid and does not change its geometry.

## Creating a style experiment

Create a branch from this baseline, for example:

```sh
git switch -c codex/style-experiment
npm install
npm run dev
```

Edit the corresponding file in `src/styles/themes/` for colors, padding, rounding, borders, shadows, typography, and decorative backgrounds.

`src/styles/global.css` imports structural defaults into a lower-priority CSS layer; `BaseLayout.astro` loads the four independently selectable theme stylesheets. Keep `src/styles/layout.css` intact during visual experiments: it defines the page dimensions, 12-column / 7-row grid, aspect ratio, gaps, component alignment, and reserved visual slots. The existing 640px minimum viewport width is retained.

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
