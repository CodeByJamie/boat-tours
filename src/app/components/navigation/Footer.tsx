import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-ocean-blue text-white py-6 max-lg:py-10'>
			<div className='max-w-6xl mx-auto text-center'>
				<p>&copy; 2025 Ballachulish Boat Tours. All rights reserved.</p>
				<div className='mt-4 space-x-6'>
					<Link href={'/legal/privacy'} className='font-bold hover:opacity-80 duration-300'>Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;