import bathysphere from '../styles/themes/bathysphere.css?url';
import azure from '../styles/themes/azure.css?url';
import atlas from '../styles/themes/01.css?url';
import blue from '../styles/themes/02.css?url';
import signal from '../styles/themes/03.css?url';
import vector from '../styles/themes/vector.css?url';
import nocturne from '../styles/themes/nocturne.css?url';
import porcelain from '../styles/themes/04.css?url';

import risograph from '../styles/themes/risograph.css?url';

export interface Theme {
  /** Stable URL key; keep existing IDs when renaming a theme. */
  id: string;
  label: string;
  stylesheet: string;
  portrait: string;
  portraitAlt: string;
}

/** The first entry is the default. Add themes here; UI and URL validation derive from this list. */
export const themes: readonly Theme[] = [
  { id: '01', label: '01 · Field Atlas', stylesheet: atlas, portrait: '/images/themes/01/portrait-placeholder.svg', portraitAlt: 'Illustrated landscape in evergreen and warm paper tones' },
  { id: '02', label: '02 · Blue Hour', stylesheet: blue, portrait: '/images/themes/02/portrait-placeholder.svg', portraitAlt: 'Illustrated moonlit mountain landscape in blue tones' },
  { id: '03', label: '03 · Signal Studio', stylesheet: signal, portrait: '/images/themes/03/portrait-placeholder.svg', portraitAlt: 'Illustrated mountain landscape in violet and acid yellow' },
  { id: '04', label: '04 · Porcelain / Oxblood', stylesheet: porcelain, portrait: '/images/themes/04/portrait-placeholder.svg', portraitAlt: 'Illustrated placeholder landscape; decorative porcelain artwork is supplied by the theme' },
  { id: 'nocturne', label: 'Nocturne', stylesheet: nocturne, portrait: '/images/themes/nocturne/portrait.svg', portraitAlt: 'Illustrated copper crescent moon above layered desert dunes in a charcoal night sky' },
  { id: 'vector', label: 'Vector', stylesheet: vector, portrait: '/images/themes/vector/portrait.svg', portraitAlt: 'Green wireframe towers on a black coordinate grid with surveying marks' },
  { id: 'risograph', label: 'Risograph', stylesheet: risograph, portrait: '/images/themes/risograph/portrait.svg', portraitAlt: 'Two-color geometric print of vermilion sun discs and cobalt architectural arches on warm cream paper' },
  { id: 'azure', label: 'Azure Soft', stylesheet: azure, portrait: '/images/themes/azure/portrait.svg', portraitAlt: 'Sculptural blue ribbon looping through a pale blue sky beneath a white sun' },
  { id: 'bathysphere', label: 'Bathysphere', stylesheet: bathysphere, portrait: '/images/themes/bathysphere/portrait.svg', portraitAlt: 'Blue glass sphere with a luminous orbit inside a metallic deep-sea porthole' },
];

if (!themes.length || new Set(themes.map(theme => theme.id)).size !== themes.length ||
    themes.some(theme => !/^[a-z0-9][a-z0-9-]*$/.test(theme.id) || !theme.label || !theme.stylesheet || !theme.portrait || !theme.portraitAlt)) {
  throw new Error('Theme registry requires unique URL-safe IDs and complete theme metadata.');
}
export const defaultTheme = themes[0]!;
