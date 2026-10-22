# Portfolio style baseline

This branch (`codex/style-baseline`) is a neutral starting point for visual experiments, derived from `visual-concept`.

## Creating a style experiment

Create a branch from this baseline, for example:

```sh
git switch -c codex/style-experiment
npm install
npm run dev
```

Edit `src/styles/theme.css` for colors, padding, rounding, borders, shadows, typography, and decorative backgrounds. The default theme uses white surfaces, gray outlines, square corners, and compact spacing. Font sizes are retained as fitting defaults and may be overridden in the theme.

`src/styles/global.css` imports the structural rules before the theme. Keep `src/styles/layout.css` intact during visual experiments: it defines the page dimensions, 12-column / 7-row grid, aspect ratio, gaps, component alignment, and reserved visual slots. The existing 640px minimum viewport width is retained.

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

The portrait placeholder and signature preview SVG are hidden by the baseline theme while their slots remain. Replace their decorative artwork or restore visibility in the theme for a new concept. Functional icons remain visible. Buttons retain their existing placeholder behavior.

Suggested model instruction:

> Develop a new visual style using theme.css and decorative assets. Preserve every component, its content and order, all eight grid areas, the outer grid dimensions, and the internal component arrangement. You may change padding, typography, colors, rounding, borders, shadows, and decorative SVGs/backgrounds. Do not add, remove, reorder, or resize tile spans.

Validate changes with `npm run build` and `npx astro check`, then inspect the rendered page.
