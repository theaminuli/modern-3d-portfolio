import { github, instagram, twitter } from "../../assets";

/**
 * Footer component that renders the footer section of the website.
 * 
 * @component
 * @returns {JSX.Element} The rendered footer component.
 * 
 * @description
 * The Footer component includes:
 * - A container with terms and conditions, privacy policy links.
 * - Social media icons for GitHub, Twitter, and Instagram.
 * - Copyright information with a link to the author's website.
 */
const Footer = () => {
	return (
		<footer className="bg-[#010103] border-t border-gray-700">
			<div className="container c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5">
				<div className="text-white-500 flex gap-2 opacity-70">
					<p>Terms & Conditions</p>
					<p>|</p>
					<p>Privacy Policy</p>
				</div>

				<div className="flex gap-3">
					<a className="social-icon" href="#">
						<img src={github} alt="github" className="w-1/2 h-1/2" />
					</a>
					<a className="social-icon" href="#">
						<img src={twitter} alt="twitter" className="w-1/2 h-1/2" />
					</a>
					<a className="social-icon" href="#">
						<img src={instagram} alt="instagram" className="w-1/2 h-1/2" />
					</a>
				</div>

				<p className="text-white-500 opacity-70">
					© 2025 All Rights Reserved by 
					<a href="https://theaminul.com/" target="_blank">
						Aminul Islam
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
