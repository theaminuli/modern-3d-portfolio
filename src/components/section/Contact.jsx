/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import useAlert from "../../hooks";
import { StarsCanvas } from "../canvas";
import Alert from "../common/Alert.jsx";
import { arrow, terminal } from "../../assets";

/**
 * Contact component renders a contact form section with fields for name, email, and message.
 * It includes form validation, loading state, and alert messages.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered contact form section.
 */
const Contact = () => {
	const formRef = useRef();

	const { alert, showAlert, hideAlert } = useAlert();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		//Do Some things do here

		// hideAlert(false);
		// showAlert({
		// 	show: true,
		// 	text: "I didn't receive your message 😢",
		// 	type: "danger",
		// });
	};

	return (
		<section className="c-space my-20 relative z-0" id="contact">
			<StarsCanvas />
			{alert.show && <Alert {...alert} />}
			<div className="container">
				<div className="relative min-h-screen flex items-center justify-center flex-col">
					<img
						src={terminal}
						alt="terminal-bg"
						className="absolute inset-0 min-h-screen"
					/>

					<div className="contact-container">
						<h3 className="head-text">Let's talk</h3>
						<p className="text-lg text-white-600 mt-3">
							Whether you’re looking to build a new website, improve your
							existing platform, or bring a unique project to life, I’m here to
							help.
						</p>

						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="mt-12 flex flex-col space-y-7"
						>
							<label className="space-y-3">
								<span className="field-label">Full Name</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									required
									className="field-input"
									placeholder="ex., John Doe"
								/>
							</label>

							<label className="space-y-3">
								<span className="field-label">Email address</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									required
									className="field-input"
									placeholder="ex., johndoe@gmail.com"
								/>
							</label>

							<label className="space-y-3">
								<span className="field-label">Your message</span>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									rows={5}
									className="field-input"
									placeholder="Share your thoughts or inquiries..."
								/>
							</label>

							<button className="field-btn" type="submit" disabled={loading}>
								{loading ? "Sending..." : "Send Message"}

								<img
									src={arrow}
									alt="arrow-up"
									className="field-btn_arrow"
								/>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
