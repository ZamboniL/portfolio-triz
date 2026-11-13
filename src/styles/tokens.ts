/** Accent colours from the theme, for components that take a colour prop. */
export const accents = ['blue', 'red', 'lime', 'purple'] as const;
export type Accent = (typeof accents)[number];

export const accentColor = (accent: Accent) => `var(--color-accent-${accent})`;
