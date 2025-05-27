import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-ocean-blue text-white py-6">
			<div className="max-w-6xl mx-auto text-center">
				<p>
					&copy; 2025 Ballachulish Boat Tours. All rights
					reserved.
				</p>
				<div className="mt-4 space-x-6">
                              {/* TODO: Add a link to the privacy policy */}
                              <Link href={'/legal/privacy'}>Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
