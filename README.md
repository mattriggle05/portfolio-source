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
- `src/styles/layout.css`: shared dimensions, alignment, and reserved image slots.
- `src/styles/portfolio.css`: the primary portfolio appearance.

The layout retains its 640px minimum viewport width. Repository lists scroll within their tile at compact widths. Image areas are empty pending actual images. The portfolio-source repository arrow links to GitHub; the other project entries, contact actions, technology choices, and résumé download remain placeholders.

## Design history

The `style-switcher` branch preserves the theme comparison work. This branch contains the single primary design without a theme selector, registry, or alternate theme assets.
