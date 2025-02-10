import { github, instagram, twitter } from "../../assets";

const Footer = () => {
	return (
		<footer className="bg-[#010103]">
			<div className="container c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
				<div className="text-white-500 flex gap-2">
					<p>Terms & Conditions</p>
					<p>|</p>
					<p>Privacy Policy</p>
				</div>

				<div className="flex gap-3">
					<div className="social-icon">
						<img src={github} alt="github" className="w-1/2 h-1/2" />
					</div>
					<div className="social-icon">
						<img src={twitter} alt="twitter" className="w-1/2 h-1/2" />
					</div>
					<div className="social-icon">
						<img src={instagram} alt="instagram" className="w-1/2 h-1/2" />
					</div>
				</div>

				<p className="text-white-500">
					© 2025 All Rights Reserved by{" "}
					<a href="https://theaminul.com/" target="_blank">
						Aminul Islam
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
