import { type CollectionEntry, getCollection } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All projects in grid order. */
export async function getProjects(): Promise<Project[]> {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
