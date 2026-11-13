import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { accents } from './styles/tokens';

/** Images are uploaded through Pages CMS into public/images and referenced by their public path. */
const publicImage = z.string().startsWith('/images/');

/** The CMS may save a cleared field as "" or null; treat both as "not set" so defaults apply. */
const blankable = <T extends z.ZodType>(schema: T) =>
	z.preprocess((value) => (value === '' || value === null ? undefined : value), schema);

const projects = defineCollection({
	// Each file in src/content/projects is one project; the file name becomes the URL slug.
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		year: z.number().int(),
		/** Position in the projects grid (lowest first). The home page shows the first six. */
		order: blankable(z.number().default(999)),
		/** Square thumbnail; non-square images are cropped to fill it. */
		thumbnail: blankable(publicImage.optional()),
		thumbnailFocus: blankable(z.enum(['center', 'top', 'bottom', 'left', 'right']).default('center')),
		/** Title colour on the project page. */
		accent: blankable(z.enum(accents).default('purple')),
		intro: z.string(),
		/** Up to three phone screenshots shown over the white panel, left to right. */
		screens: blankable(z.array(publicImage).max(3).optional()),
	}),
});

export const collections = { projects };
