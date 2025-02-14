import { figma, framer, notion, review1, review2, review3, review4 } from "../assets";

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
		"tags": ["React", "Tailwind CSS", "Axios"],
		"source": "https://github.com/theaminuli/blogy/",
		"status": "completed",
		"created": "2025-02-04",
		"category": "web",
	},
	{
		"id": crypto.randomUUID(),
		"title": "Restaurant",
		"description": "Restaurant: A stylish, clean, and creatively designed template for showcasing restaurants. Tailored for those who want an online portfolio, it presents your culinary achievements with an impressive design. All codes are meticulously handcrafted.",
		"image": "https://raw.githubusercontent.com/theaminuli/restaurant/development/public/banner.png",
		"technologies": ["HTML", "CSS", "JavaScript"],
		"demo": "https://restaurant-theaminul.vercel.app/",
		"tags": ["HTML", "CSS", "JavaScript"],
		"source": "https://github.com/theaminuli/restaurant/",
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
		"source": "https://github.com/theaminuli/apex/",
		"status": "completed",
		"created": "2019-12-26",
		"category": "web",
	},
	{
		"id": crypto.randomUUID(),
		"title": "Modern 3d Portfolio",
		"description": "Portfolio: A modern, clean, and creatively designed template for showcasing your portfolio. Tailored for creative individuals, it highlights your work and achievements with an impressive design. Perfect for crafting an online presence.",
		"image": "https://raw.githubusercontent.com/theaminuli/modern-3d-portfolio/refs/heads/main/screenshot.png",
		"technologies": ["Motion", "Threejs", "React"],
		"demo": "https://modern-3d-portfoliox.vercel.app/",
		"tags": ["Motion", "Threejs", "React"],
		"source": "https://github.com/theaminuli/modern-3d-portfolio/",
		"status": "completed",
		"created": "2025-02-04",
		"category": "web",
	}

];
const clientReviews = [
	{
		id: crypto.randomUUID(),
		name: 'Emily Johnson',
		position: 'Marketing Director at GreenLeaf',
		img: review1,
		review:
			'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
	},
	{
		id: crypto.randomUUID(),
		name: 'Mark Rogers',
		position: 'Founder of TechGear Shop',
		img: review2,
		review:
			'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
	},
	{
		id: crypto.randomUUID(),
		name: 'John Dohsas',
		position: 'Project Manager at UrbanTech ',
		img: review3,
		review:
			'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
	},
	{
		id: crypto.randomUUID(),
		name: 'Ether Smith',
		position: 'CEO of BrightStar Enterprises',
		img: review4,
		review:
			'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
	},
];
const workExperiences = [
	{
		id: crypto.randomUUID(),
		name: 'Framer',
		pos: 'Lead Web Developer',
		duration: '2022 - Present',
		title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
		icon: framer,
		animation: 'victory',
	},
	{
		id: crypto.randomUUID(),
		name: 'Figma',
		pos: 'Web Developer',
		duration: '2020 - 2022',
		title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
		icon: figma,
		animation: 'clapping',
	},
	{
		id: crypto.randomUUID(),
		name: 'Notion',
		pos: 'Junior Web Developer',
		duration: '2019 - 2020',
		title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
		icon: notion,
		animation: 'salute',
	},
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
	clientReviews, projects, workExperiences
};

