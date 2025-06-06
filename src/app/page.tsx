import Header from './components/navigation/Header';
import TourCard from './components/TourCard';
import Footer from './components/navigation/Footer';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import OnScreenHelp from './components/helpButton';
import Image from 'next/image';

const tours = [
	{
		title: 'Loch Leven Scenic Cruise',
		description: 'A relaxing boat tour on the stunning Loch Leven, perfect for nature lovers.',
		image: '/Loch-Leven.jpg',
	},
	{
		title: 'Ballachulish Boat Charter',
		description: 'Private boat charters for events, corporate trips, or family gatherings.',
		image: '/charter.jpg',
	},
	{
		title: 'Isle of Skye Day Trip',
		description: 'A day trip from Ballachulish to the Isle of Skye, with stunning landscapes and wildlife.',
		image: '/skye.jpg',
	},
];

export default function Home() {
	return (
		<div className='relative bg-zinc-900'>
			<div className='absolute left-0 top-0 bg-gradient-to-r from-blue-800 to-blue-900 w-full h-screen' />
			<Header />
			<video className='absolute top-0 left-0 w-full h-screen object-cover z-10 opacity-70' autoPlay muted loop>
				<source src='/glenDrone.mp4' type='video/mp4' />
			</video>

			{/* Hero Section */}
			<section className='relative text-white h-screen flex justify-center items-center text-center fade-in z-10'>
				<div className='px-6 py-8 md:px-12 md:py-16 flex flex-col'>
					<h1 className='text-4xl font-bold drop-shadow-2xl shadow-black'>
						Experience Scotland&apos;s Beauty by Boat
					</h1>
					<p className='mt-4 text-xl'>
						Join us for daily boat trips from Ballachulish and explore stunning lochs,
						islands, and wildlife.
					</p>
					<div className='flex flex-col gap-6'>
						<Link
							href={'/book'}
							className='mt-6 px-8 py-3 bg-[#003480] text-white rounded-full shadow-lg hover:bg-transparent transition duration-300 border-2 border-transparent hover:border-navy w-fit mx-auto'
						>
							Book Your Tour
						</Link>

						<Link href={'#tours'} className='w-fit mx-auto'>
							<ChevronDownIcon className='size-8 bounce' />
						</Link>
					</div>
				</div>
				<div className='absolute -bottom-5 left-0 w-full z-50'>
					<Image src='/bottom_wave_divider.svg' alt='wave bottom' fill />
				</div>
			</section>

			{/* Tours Overview */}
			<main className='bg-white py-12' id='tours'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-3xl font-semibold mb-8'>Our Popular Tours</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{tours.map((tour, index) => (
							<TourCard key={index} {...tour} />
						))}
					</div>
				</div>
			</main>

			{/* Booking Section */}
			<section className='py-16 bg-zinc-100 black text-center fade-in'>
				<h2 className='text-3xl font-semibold'>Ready for an Adventure?</h2>
				<p className='mt-4 text-xl'>
					Book your boat trip now and explore the wonders of Ballachulish and beyond!
				</p>
				<button className='mt-6 px-8 py-3 bg-[#003480] text-white rounded-full shadow-lg hover:bg-transparent hover:text-[#003480] border-2 border-transparent hover:border-navy duration-300'>
					Book Now
				</button>
			</section>

			<Footer />
			<OnScreenHelp />
		</div>
	);
}
