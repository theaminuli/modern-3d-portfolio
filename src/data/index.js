export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

/**
 * An array of experience objects representing the professional experiences.
 * Each object contains details about a specific job role.
 *
 * @typedef {Object} Experience
 * @property {string} title - The job title.
 */


const projects = [
	{
		"id": crypto.randomUUID(),
		"title": "Blogy",
		"description": "Blogy is a modern, responsive blog application built with React and Vite. It leverages the power of Tailwind CSS for styling and Axios for data fetching. The application is designed to provide a seamless and engaging user experience, with features like dark mode, infinite scrolling, and more.",
		"image": "https://raw.githubusercontent.com/theaminuli/blogy/refs/heads/main/public/screenshot.png",
		"technologies": ["React", "Vite", "Tailwind CSS", "Axios"],
		"demo": "https://blogy-theaminuli.vercel.app/",
		"tags": ["React", "Vite", "Tailwind CSS", "Axios"],
		"source": "www.github.com/theaminuli/blogy",
		"status": "completed",
		"created": "2025-02-04",
		"category": "web",
	},
	{
		"id": crypto.randomUUID(),
		"title": "Restaurant",
		"description": "Restaurant: A stylish, clean, and creatively designed template for showcasing restaurants. Tailored for those who want an online portfolio, it presents your culinary achievements with an impressive design. All codes are meticulously handcrafted.",
		"image": "https://raw.githubusercontent.com/theaminuldev/restaurant/development/public/banner.png",
		"technologies": ["HTML", "CSS", "JavaScript"],
		"demo": "https://restaurant-theaminul.vercel.app/",
		"tags": ["HTML", "CSS", "JavaScript"],
		"source": "www.github.com/theaminuldev/restaurant",
		"status": "completed",
		"created": "2019-12-26",
		"category": "web",
	},
	{
		"id": crypto.randomUUID(),
		"title": "Apex Portfolio",
		"description": "Apex Personal Portfolio Theme: A modern, clean, and creatively designed template to showcase your portfolio. Tailored for creative individuals, it highlights your work and achievements with an impressive design. Perfect for crafting an online presence",
		"image": "https://theaminuli.github.io/apex/assets/image/page/portfolio-details-1.png",
		"technologies": ["HTML", "CSS", "JavaScript"],
		"demo": "https://theaminuli.github.io/apex/",
		"tags": ["HTML", "CSS", "JavaScript"],
		"source": "https://github.com/theaminuli/apex",
		"status": "completed",
		"created": "2019-12-26",
		"category": "web",
	}
];

/**
 * Exports various data modules used in the application.
 * 
 * @module data
 * @exports experiences - Array of experience objects.
 * @exports projects - Array of project objects.
 * @exports services - Array of service objects.
 * @exports technologies - Array of technology objects.
 * @exports testimonials - Array of testimonial objects.
 */
export {
	projects,
};

