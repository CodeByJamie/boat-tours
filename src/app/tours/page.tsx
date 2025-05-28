import Image from 'next/image';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import { FaCompass } from 'react-icons/fa6';
import { IoLeaf } from 'react-icons/io5';
import OnScreenHelp from '../components/helpButton';

export default function Tours() {
	return (
		<div className='relative bg-zinc-900'>
			{/* Background Overlay */}
			<div className='absolute left-0 top-0 bg-gradient-to-r from-blue-800 to-blue-900 w-full h-[500px] z-0' />

			<Header />

			{/* Hero Section */}
			<div className='relative w-full h-[400px] z-10'>
				<Image src={'/banner.jpg'} fill alt='Banner of yachts' className='object-cover opacity-80' priority />
				<h2 className='absolute flex items-center gap-4 text-5xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white font-bold'>
					<FaCompass className='size-10' /> Tours
				</h2>
				<div className='absolute -bottom-10 left-0 w-full h-[120px] overflow-hidden'>
					<Image
						src='/bottom_wave_divider.svg'
						alt='Wave divider'
						fill
						className='object-cover'
						priority
					/>
				</div>
			</div>

			{/* Tours Section */}
			<section className='relative bg-white py-20'>
				<div className='relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10  items-center'>
					{/* Left Image */}
					<div className='w-full h-full flex justify-center items-center'>
						<Image
							src='/sea-eagle.png'
							alt='Sea Eagle'
							className='rounded-3xl shadow-lg max-h-[400px] object-cover'
						/>
					</div>

					{/* Text Content */}
					<div>
						<h2 className='text-3xl font-bold text-navy mb-4 flex items-center gap-2'>
							<FaCompass className='text-navy' />
							Our Tour
						</h2>
						<hr className='border border-zinc-300 mb-6' />

						<h3 className='text-navy text-xl font-bold mb-2'>
							Our Tour Offers Something for Everyone...
						</h3>
						<p className='mb-6 text-gray-700'>
							Our tour offers wildlife, scenery and historical landmarks.
							Throughout the tour our well-informed guides will provide
							commentary about the local wildlife, history of the area, castles
							and other landmarks.
						</p>

						<h3 className='text-navy text-xl font-bold mb-2'>
							Home to Great Views Across The Highland
						</h3>
						<p className='text-gray-700'>
							Just minutes away is Glen Coe, one of Scotland’s most famous and
							dramatic glens, known for its volcanic origins and towering peaks.
						</p>
					</div>
				</div>

				{/* Bottom Wave */}
				<div className='absolute -bottom-10 max-md:-bottom-5 left-0 w-full z-50 rotate-180'>
					<Image src='/bottom_wave_divider.svg' alt='wave bottom' fill />
				</div>
			</section>

			<section className='relative w-full aspect-[16/9]'>
				<Image src='/dolphins.jpeg' alt='School of dolphins' fill className='object-cover' priority />
				<div className='absolute -bottom-5 left-0 w-full z-50'>
					<Image src='/bottom_wave_divider.svg' alt='wave bottom' fill />
				</div>
			</section>

			<section className='relative h-1/2 w-screen bg-white'>
				<div className='relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-28'>
					{/* Left Image */}
					<div className='w-full h-full flex justify-center items-center'>
						<Image
							src='/seal.jpg'
							alt='Sea Eagle'
							className='rounded-3xl shadow-lg max-h-[400px] object-cover'
						/>
					</div>

					{/* Text Content */}
					<div>
						<h2 className='text-3xl font-bold text-navy mb-4 flex items-center gap-2'>
							<IoLeaf className='text-navy' />
							Wildlife You May See...
						</h2>
						<hr className='border border-zinc-300 mb-6' />

						<h3 className='text-navy text-xl font-bold mb-2'>Marine WildLife</h3>
						<p className='mb-6 text-gray-700'>
							The waters around Ballachulish are rich in wildlife. You may spot
							seals, otters, and seabirds like guillemots and shearwaters.
							Dolphins and porpoises often follow the boat, and on rare
							occasions, even minke whales make an appearance. Look out too for
							white-tailed eagles soaring above the loch.
						</p>

						<h3 className='text-navy text-xl font-bold mb-2'>Terrestrial Wildlife</h3>
						<p className='mb-6 text-gray-700'>
							The hills and woodlands near Ballachulish are home to red deer,
							pine martens, and red squirrels. Golden eagles can be seen soaring
							overhead, while the surrounding heather moorlands support a
							variety of birds and butterflies throughout the seasons.
						</p>
					</div>
				</div>
			</section>
			<Footer />
			<OnScreenHelp />
		</div>
	);
}
