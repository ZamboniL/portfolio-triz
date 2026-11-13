/** Accent colours from the theme, for components that take a colour prop. */
export type Accent = 'blue' | 'red' | 'lime' | 'purple';

export const accentColor = (accent: Accent) => `var(--color-accent-${accent})`;
