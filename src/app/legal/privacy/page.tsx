// app/legal/page.tsx or app/privacy/page.tsx
export default function LegalPage() {
	return (
		<main className="max-w-4xl mx-auto px-6 py-12 text-zinc-800 bg-white">
			<h1 className="text-4xl font-bold mb-6">Privacy Policy & Terms and Conditions</h1>

			<section className="mb-10">
				<h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

				<p className="mb-4">
					<strong>Effective Date:</strong> 27 May 2025
				</p>

				<p className="mb-4">
					We are committed to safeguarding the privacy of our customers and website
					visitors. This policy outlines how we collect, use, and protect your personal
					information.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
				<ul className="list-disc list-inside space-y-1 mb-4">
					<li>Your name, email address, and contact details via forms</li>
					<li>Booking details like group size, date, and preferences</li>
					<li>Anonymous usage data through cookies and analytics</li>
					<li>Payment information handled securely through third-party processors</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
				<ul className="list-disc list-inside space-y-1 mb-4">
					<li>To confirm and manage your bookings</li>
					<li>To improve our website and services</li>
					<li>To respond to your inquiries and provide customer support</li>
					<li>To send updates or offers if you opt in</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-2">Data Protection</h3>
				<p className="mb-4">
					We store your data securely and never share your personal details with third
					parties except those necessary to provide our services (e.g., payment processors).
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">Your Rights</h3>
				<p className="mb-4">
					You may request access to your data, correct inaccuracies, or ask us to delete
					your information by contacting us at <strong>info@ballachulishtours.com</strong> 
				</p>
			</section>

			<hr className="my-10 border-zinc-300" />

			<section>
				<h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>

				<h3 className="text-xl font-semibold mt-6 mb-2">1. Booking and Payment</h3>
				<p className="mb-4">
					All bookings are subject to availability and must be confirmed via email or our
					booking system. Payment is due at the time of booking unless otherwise stated.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">2. Cancellation Policy</h3>
				<p className="mb-4">
					Cancellations made 48 hours or more in advance will receive a full refund.
					Cancellations within 48 hours of the tour are non-refundable.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">3. Weather Conditions</h3>
				<p className="mb-4">
					Our tours operate in most weather conditions. However, we reserve the right to
					cancel due to safety concerns. In such cases, you will receive a full refund or
					alternative date.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">4. Liability</h3>
				<p className="mb-4">
					We are not responsible for any personal items lost or damaged during tours.
					Participation in boat tours is at your own risk.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">5. Conduct</h3>
				<p className="mb-4">
					We expect all passengers to behave respectfully and responsibly. We reserve the
					right to refuse service or remove individuals who cause disruption or pose a
					safety risk.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">6. Changes to These Terms</h3>
				<p className="mb-4">
					We may update these policies from time to time. Please check this page regularly
					for changes.
				</p>
			</section>
		</main>
	);
}
