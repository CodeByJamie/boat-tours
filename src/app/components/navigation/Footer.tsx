const Footer = () => {
	return (
		<footer className="bg-ocean-blue text-white py-6">
			<div className="max-w-6xl mx-auto text-center">
				<p>
					&copy; 2025 Ballachulish Boat Tours. All rights
					reserved.
				</p>
				<div className="mt-4 space-x-6">
					<a href="#" className="hover:text-coral">
						Facebook
					</a>
					<a href="#" className="hover:text-coral">
						Instagram
					</a>
					<a href="#" className="hover:text-coral">
						Contact
					</a>
                              {/* TODO: Add a link to the privacy policy */}
                              {/* TODO: Add a link to the terms and conditions */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
