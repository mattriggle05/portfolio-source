# mriggle.dev

Personal portfolio built with Astro, TypeScript, and Tailwind CSS. The primary design uses Stillwater’s muted blue surfaces, editorial headings, and a fixed bento layout.

## Development

Requires Node.js 22.23.4 or later.

```sh
npm install
npm run dev
```

```sh
npm run build
npx astro check
npm run preview
```

## Structure

- `src/pages/index.astro`: portfolio entry point.
- `src/layouts/BaseLayout.astro`: document metadata and global stylesheet.
- `src/components/BentoGrid.astro`: eight portfolio tiles on a 12-column, 7-row grid.
- `src/components/tiles/`: introduction, portrait slot, repositories, location, contacts, technology table, résumé, and featured project.
- `src/components/Tile.astro`: shared tile surface and grid placement.
- `src/components/Action.astro`: native links/buttons with shared interaction states and reduced-motion support.
- `src/components/Icon.astro` and `Eyebrow.astro`: shared SVG and label presentation.
- `src/styles/global.css`: document defaults, four base colors, derived color tokens, and fonts.

Component-specific styles live in each component’s scoped `<style>` block. Use the shared color tokens and `color-mix()` for new shades or transparency rather than introducing literal colors. Keep grid geometry in `BentoGrid.astro` and shared control behavior in `Action.astro`.

The layout retains its 640px minimum viewport width. Repository lists scroll within their tile at compact widths. Portrait, location, and featured-project images live in `public/images/`. Repository, contact, technology, and featured-project controls use native links; copying the email address uses the Clipboard API with an accessible status message. The résumé control opens `public/Matthew Riggle - Resume.pdf` in a new browser tab; its relative update label uses the source PDF’s modification date recorded in `ResumeTile.astro`. Update that date when replacing the PDF.