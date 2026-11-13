import { z } from 'astro/zod';
import aboutJson from '../content/about.json';
import siteJson from '../content/site.json';
import { accents } from '../styles/tokens';

// These files are edited through Pages CMS (see .pages.yml); parsing them here fails the build
// with a readable error if an edit leaves them in a bad state.

export const site = z
	.object({
		tagline: z.string(),
		projectsIntro: z.string(),
		email: z.string(),
		substackUrl: z.string(),
	})
	.parse(siteJson);

export const about = z
	.object({
		bio: z.array(z.string()),
		education: z.array(z.object({ title: z.string(), years: z.string() })),
		skillRows: z.array(z.object({ skills: z.array(z.object({ label: z.string(), color: z.enum(accents) })) })),
	})
	.parse(aboutJson);
