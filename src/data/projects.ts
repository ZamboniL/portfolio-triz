/** How the image is cropped inside the square thumbnail (percentages from the Figma design). */
export interface Crop {
	width: string;
	height: string;
	left: string;
	top: string;
}

export interface ProjectPage {
	/** Title colour on the project page. Defaults to purple. */
	accent?: string;
	intro: string;
	body: string;
	/** Phone screenshots shown over the white panel, left to right. */
	screens?: [string, string, string];
}

const placeholderPage: ProjectPage = {
	intro:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices tempus maximus. Sed non urna imperdiet, tempus mauris sed, semper augue. Vestibulum quis libero eros.',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices tempus maximus. Sed non urna imperdiet, tempus mauris sed, semper augue. Vestibulum quis libero eros. Nulla eros felis, faucibus id mauris nec, molestie tristique sapien. Sed gravida, lorem et tempus molestie, ante erat suscipit ipsum, et sodales massa massa et diam. Vestibulum porta nunc et urna eleifend pharetra in luctus nulla. Duis vulputate finibus mollis. Donec a nunc vitae lacus efficitur pulvinar.',
};

export interface Project {
	slug: string;
	title: string;
	year: number;
	page?: ProjectPage;
	image?: {
		src: string;
		/** 292×292 thumbnail on desktop */
		desktop: Crop;
		/** 350×350 thumbnail on mobile */
		mobile: Crop;
	};
}

// Order matches the Projects grid in Figma; the home page shows the first six (three on mobile).
export const projects: Project[] = [
	{
		slug: 'plotline',
		title: 'Plotline',
		year: 2026,
		page: {
			...placeholderPage,
			screens: ['/images/plotline-screen-1.png', '/images/plotline-screen-2.png', '/images/plotline-screen-3.png'],
		},
		image: {
			src: '/images/plotline.png',
			desktop: { width: '179.45%', height: '197.74%', left: '-39.59%', top: '-29.2%' },
			mobile: { width: '153.34%', height: '168.97%', left: '-26.77%', top: '-24.98%' },
		},
	},
	{
		slug: 'mazg',
		title: 'Mazg',
		year: 2026,
		image: {
			src: '/images/mazg.png',
			desktop: { width: '195.2%', height: '178.77%', left: '-47.59%', top: '-14.25%' },
			mobile: { width: '172.89%', height: '158.34%', left: '-36.36%', top: '-13.59%' },
		},
	},
	{
		slug: 'musea',
		title: 'Musea',
		year: 2025,
		image: {
			src: '/images/musea.png',
			desktop: { width: '186.97%', height: '172.79%', left: '-43.36%', top: '-13.99%' },
			mobile: { width: '167.72%', height: '155%', left: '-33.87%', top: '-13.07%' },
		},
	},
	{ slug: 'search-engine', title: 'Search Engine', year: 2026 },
	{ slug: 'payment-method', title: 'Payment method', year: 2026 },
	{ slug: 'search-engine-2', title: 'Search Engine', year: 2026 },
	{ slug: 'x-log', title: 'X-Log', year: 2025 },
	{ slug: 'leaderboard', title: 'Leaderboard', year: 2026 },
	{ slug: 'book-cover-redesign', title: 'Book cover redesign', year: 2024 },
	{ slug: 'poster-design', title: 'Poster design', year: 2024 },
	{ slug: 'social-media-design', title: 'Social media design', year: 2023 },
	{ slug: 'social-media-design-2', title: 'Social media design', year: 2023 },
];

/** Page content for a project, falling back to placeholder text until it's written. */
export function getProjectPage(project: Project): ProjectPage {
	return project.page ?? placeholderPage;
}
