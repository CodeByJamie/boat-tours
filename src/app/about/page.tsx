// app/about/page.tsx

import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Image from 'next/image';
import OnScreenHelp from '../components/helpButton';

export default function About() {
	return (
		<div className='relative bg-zinc-100 min-h-screen flex flex-col'>
			<Header />

			{/* Hero Section */}
			<section className='relative w-full h-[60vh] bg-zinc-900'>
				<Image src='/glen-bg.jpg' alt='Boat on Loch Leven' fill className='opacity-80' priority />

				<div className='absolute bottom-0 left-0 w-full z-50'>
					<img src='/bottom_wave_divider.svg' alt='wave bottom' className='w-full' />
				</div>
				<div className='absolute inset-0 flex items-center justify-center text-center text-white'>
					<h1 className='text-4xl md:text-5xl font-bold drop-shadow-xl'>About Us</h1>
				</div>
			</section>

			{/* Content Section */}
			<main className='flex-1 bg-white py-16 px-6 md:px-12'>
				<div className='max-w-5xl mx-auto text-center'>
					<h2 className='text-3xl font-semibold text-navy mb-6'>Our Story</h2>
					<p className='text-lg text-gray-700 mb-8'>
						Founded in the heart of the Highlands, our tour company was born from a love
						of Ballachulish’s rugged landscape, rich history, and incredible wildlife.
						With years of local knowledge and a passion for sustainable tourism, we’re
						proud to offer unforgettable boat adventures that showcase the very best of
						Scotland’s west coast.
					</p>

					<h2 className='text-3xl font-semibold text-navy mb-6'>Why Choose Us?</h2>
					<p className='text-lg text-gray-700 mb-8'>
						From family-friendly trips to wildlife watching and scenic cruises, we tailor
						each experience to delight our guests. Our friendly guides share fascinating
						stories of the area’s slate industry, Gaelic culture, and natural wonders –
						all from the comfort of our modern vessels.
					</p>

					<Image
						src='/team.png'
						alt='Our Tour Team'
						width={1000}
						height={600}
						className='rounded-xl shadow-lg mx-auto mb-8'
					/>

					<h2 className='text-3xl font-semibold text-navy mb-6'>Meet the Team</h2>
					<p className='text-lg text-gray-700'>
						Our team is made up of locals who love sharing their backyard with the world.
						With extensive boating experience and a deep respect for the environment, we
						ensure every trip is safe, informative, and truly memorable.
					</p>
				</div>
			</main>

			<Footer />
                  <OnScreenHelp />
		</div>
	);
}
